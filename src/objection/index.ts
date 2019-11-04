import { Router, Request, Response, NextFunction } from 'express';

import { Order, Transaction } from './db';

const router = Router();

router.get('/orders', async (req: Request, res: Response, next: NextFunction) => {
  const { simple } = req.query;
  try {
    const query = simple ? Order.query() : Order.query().joinEager('items');
    
    const orders = await query;
    return res.status(200).send({ orders });
  } catch (error) {
    return next(Promise.reject('Error processing values'));
  }
});

router.post('/orders', async (req: Request, res: Response, next: NextFunction) => {
  const ordersPayload: Order[] = req.body; 
  const trx = await Transaction.start(Order.knex());
  try {
    const orders = await Order.query(trx).insertGraph(ordersPayload);
    await trx.commit();
    return res.status(200).send({ orders });
  } catch (error) {
    await trx.rollback();
    return next(Promise.reject('Error processing values'));
  }
});

export default router;
