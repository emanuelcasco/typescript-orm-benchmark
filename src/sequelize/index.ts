import { Router, Request, Response, NextFunction } from 'express';

import db from './models';

const { Order, Item, sequelize } = db;

const router = Router();

router.get(
  '/orders',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const orders = await Order.findAll({
        include: [{ model: Item, as: 'items' }]
      });
      return res.status(200).send({ orders });
    } catch (error) {
      return next('Error processing values');
    }
  }
);

router.post(
  '/orders',
  async (req: Request, res: Response, next: NextFunction) => {
    const ordersPayload = req.body;

    const trx = await sequelize.transaction();
    try {
      const orders = await Order.bulkCreate(ordersPayload, {
        include: [{ model: Item, as: 'items' }],
        validate: true,
        transaction: trx
      });
      await trx.commit();
      return res.status(200).send({ orders });
    } catch (error) {
      if (trx) await trx.rollback();
      return next('Error processing values');
    }
  }
);

export default router;
