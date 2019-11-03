import { Router, Request, Response } from 'express';

import { knex, Transaction, TABLES } from './db';
import { NextFunction } from 'connect';

import {
  Item,
  Order,
  OrderPayload,
  OrderResponse
} from './interfaces';

const router = Router();

router.get('/orders', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const orders: OrderResponse[] = await knex<Order>(TABLES.ORDER)
      .select(
        'orders.*',
        knex.raw(`json_agg(items.*) AS items`)
      )
      .leftJoin('orders_items', 'orders.id', 'orders_items.order_id')
      .leftJoin('items', 'orders_items.item_id', 'items.id')
      .groupBy('orders.id');
    return res.status(200).send({ orders });
  } catch (error) {
    return next(Promise.reject('Error processing values'));
  }
});

router.post('/orders', async (req: Request, res: Response, next: NextFunction) => {
  const ordersPayload: OrderPayload[] = req.body;
  const trx: Transaction = await knex.transaction();
  try {
    const promises = ordersPayload.map(async payload => {
      const [order] = await trx<Order>(TABLES.ORDER)
        .insert({ user: payload.user })
        .returning('*');
      const items = await trx<Item>(TABLES.ITEM)
        .insert(payload.items)
        .returning('*');
      await trx(TABLES.ORDER_ITEM)
        .insert(items.map(item => ({
          itemId: item.id,
          orderId: order.id
        })))
        .returning('*');
      return { ...order, items };
    });

    const orders: OrderResponse[] = await Promise.all(promises);
    await trx.commit();
    return res.status(201).send({ orders });
  } catch (error) {
    await trx.rollback();
    return next(Promise.reject('Error processing values'));
  }
});

export default router;
