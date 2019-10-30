import Knex from 'knex';
import { Model, RelationMapping, transaction } from 'objection';

import * as knexConfig from './config';

// Give the knex instance to objection.
Model.knex(Knex(knexConfig));

export const Transaction = transaction;

export class Item extends Model {
  static get tableName(): string {
    return "items";
  }
}

export class Order extends Model {
  static get tableName(): string {
    return "orders";
  }

  static get relationMappings(): { items: RelationMapping } {
    return {
      items: {
        relation: Model.ManyToManyRelation,
        modelClass: Item,
        join: {
          from: "orders.id",
          through: {
            from: "orders_items.order_id",
            to: "orders_items.item_id"
          },
          to: "items.id"
        }
      }
    };
  }
}
