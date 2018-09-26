const config = require('./config');

module.exports = {

  development: {
    client: 'pg',
    connection: config.db,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};