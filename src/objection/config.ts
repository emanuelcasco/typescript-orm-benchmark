import 'dotenv/config';

import path from 'path';

const configuration = {
  client: 'pg',
  pool: { min: 0, max: 10 },
  debug: true,
  acquireConnectionTimeout: 50000,
  migrations: {
    tableName: 'knex_migrations',
    directory: path.resolve(__dirname, './migrations')
  },
  connection: {
    host: process.env.DB_HOST as string,
    user: process.env.DB_USER as string,
    password: process.env.DB_PASSWORD as string,
    database: process.env.DB_NAME as string,
    port: process.env.DB_PORT as string,
    connectionTimeout: 10000
  },
  timezone: 'UTC',
} as import('knex').Config;

export = configuration;
