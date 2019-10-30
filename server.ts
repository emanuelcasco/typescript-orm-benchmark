import express from 'express';
import bodyParser from 'body-parser';

import knex from './src/knex';
import objection from './src/objection';
import sequelize from './src/sequelize';

const DEFAULT_BODY_SIZE_LIMIT = 1024 * 1024 * 10;
const DEFAULT_PARAMETER_LIMIT = 10000;
const PORT = 8080;

const app = express();

// Client must send "Content-Type: application/json" header
app.use(bodyParser.json({
  limit: DEFAULT_BODY_SIZE_LIMIT
}));

app.use(bodyParser.urlencoded({
  extended: true,
  parameterLimit: DEFAULT_PARAMETER_LIMIT
}));

app.use('/sequelize', sequelize);
app.use('/objection', objection);
app.use('/knex', knex);

Promise.resolve()
  .then(() => {
    app.listen(PORT);
    console.log(`Listening on port: ${PORT}`);
  })
  .catch(console.error);
