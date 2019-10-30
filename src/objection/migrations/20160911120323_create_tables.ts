import * as Knex from 'knex';

exports.up = async (knex: Knex): Promise<void> => {
  await knex.schema.createTable("orders", (table: Knex.TableBuilder) => {
    table.increments("id").primary();
    table.string("user");
    table.timestamp("date").defaultTo(knex.fn.now());
  });
  await knex.schema.createTable("items", (table: Knex.TableBuilder) => {
    table.increments("id").primary();
    table.string("name");
    table.float("value");
  });
  await knex.schema.createTable("orders_items", (table: Knex.TableBuilder) => {
    table.increments("id").primary();
    table.integer("order_id").references("orders.id");
    table.integer("item_id").references("items.id");
  });
};

exports.down = async (knex: Knex): Promise<void> => {
  await knex.schema.dropTable("orders_items");
  await knex.schema.dropTable("orders");
  await knex.schema.dropTable("items");
};
