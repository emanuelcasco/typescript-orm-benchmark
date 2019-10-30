import {
  ConnectionOptions,
  createConnection,
  getManager,
  Repository
} from 'typeorm';

import { Order as OrderEntity } from './entities/Order';
import { Item as ItemEntity } from './entities/Item';

export type Repositories = {
  ItemRepository: Repository<ItemEntity>;
  OrderRepository: Repository<OrderEntity>;
};

export async function initRepositories(
  typeOrmConfig: ConnectionOptions
): Promise<Repositories> {
  await createConnection(typeOrmConfig);
  return {
    ItemRepository: getManager().getRepository(ItemEntity),
    OrderRepository: getManager().getRepository(OrderEntity)
  };
}
