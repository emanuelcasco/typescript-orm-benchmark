import 'dotenv/config';

import path from 'path';

const configuration = {
  type: 'postgres',
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [path.resolve(__dirname, './entities/*')],
  logging: true
} as import('typeorm').ConnectionOptions;

export default configuration;
