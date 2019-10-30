import 'dotenv/config';

const config = {
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME as string,
  username: process.env.DB_USER as string,
  password: process.env.DB_PASSWORD as string,
  dialect: 'postgres',
  define: {
    freezeTableName: true,
    timestamps: false
  },
  logging: console.log
};

export default config;
