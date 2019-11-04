import { Router, Request, Response, NextFunction } from 'express';

import { initRepositories } from './db';
import config from './config';

const router = Router();

export async function initializeTypeOrm(): Promise<Router> {
  const { OrderRepository } = await initRepositories(config);

  router.get(
    '/orders',
    async (req: Request, res: Response, next: NextFunction) => {
      const { simple } = req.query;

      const options = simple
        ? {}
        : { relations: ['items'] };
      try {
        const orders = await OrderRepository.find(options);
        return res.status(200).send({ orders });
      } catch (error) {
        return next('Error processing values');
      }
    }
  );

  router.post(
    '/orders',
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const orders = OrderRepository.create(req.body);
        await OrderRepository.save(orders);
        return res.status(200).send({ orders });
      } catch (error) {
        return next('Error processing values');
      }
    }
  );

  return router;
}
