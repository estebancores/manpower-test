'use strict';
const Knex = require('knex')
const config = require('../config')
let postgres = null

const DEFAULTS = {
  connection: config.dbConnection,
  attach: 'onPreHandler',
  detach: 'tail',
  searchPath: 'public',
  pool: { destroy: client => client.end(), max: 10, min: 2, idleTimeoutMillis: 30000, log: true },
  debug: false,
  acquireConnectionTimeout: 10000
}

const createPostgresInstanceDb = () => {
  this.postgres = Knex({ client: 'pg', ...DEFAULTS })
};

const getDbInstance = () => {
  if (!this.postgres) createPostgresInstanceDb()
  return this.postgres
}

module.exports = {
  getDbInstance
};
