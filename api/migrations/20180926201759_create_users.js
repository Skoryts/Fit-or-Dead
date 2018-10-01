const { onUpdateTrigger } = require('../pg_triggers');

exports.up = knex => {
  return knex.schema.createTable('users', t => {
    t.uuid('id').unique().primary();
    t.dateTime('created_at').notNull().defaultTo(knex.fn.now());
    t.dateTime('updated_at').nullable()
    t.string('email').notNull();
    t.enum('sex', ['male', 'female', 'other']).notNull();
  }).then(() => knex.raw(onUpdateTrigger('users')))
};

exports.down = knex => {
  return knex.schema.dropTable('users');
};
