import Sequelize from 'sequelize';

import config from '../config';
import * as Order from './Order';
import * as Item from './Item';

export interface ModelsInterface {
  Order: Order.OrderModel;
  Item: Item.ItemModel;
}

export interface DbInterface extends ModelsInterface {
  sequelize: Sequelize.Sequelize;
  Sequelize: Sequelize.SequelizeStatic;
}

const { database, username, password, ...params } = config;
const sequelize = new Sequelize(database, username, password, params);

const models: ModelsInterface = {
  Order: Order.OrderFactory(sequelize, Sequelize),
  Item: Item.ItemFactory(sequelize, Sequelize)
}

Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

const db: DbInterface = {
  sequelize,
  Sequelize,
  ...models
};

export default db;