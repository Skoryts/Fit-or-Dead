
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', t => {
    t.increments('id').unsigned().primary();
    t.dateTime('createdAt').notNull();
    t.dateTime('updatedAt').nullable();
    t.dateTime('deletedAt').nullable();
    t.string('email').notNull();
    t.enum('sex', ['male', 'female', 'other']).notNull();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
