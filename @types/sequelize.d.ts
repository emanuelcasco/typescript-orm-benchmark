/* eslint-disable */
import * as sequelize from 'sequelize';

declare module 'sequelize' {
  interface BulkCreateOptions {
    include?: Includeable | Includeable[];
  }
};