module.exports = {

  development: {
    client: 'postgres',
    connection: {
      database: 'dfocldlmhfo197',
      user:     'wqhrrievdwrbco',
      password: '4bc4d6ecd015e4a72356e19e9ddaebc8c0c343188716a94914489fd2af1be00c'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
