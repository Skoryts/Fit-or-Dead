
exports.up = (knex, Promise) => {
  return knex.schema.createTable('users', t => {
    t.uuid('id').unique().primary();
    t.dateTime('createdAt').notNull().defaultTo(knex.fn.now());
    t.dateTime('updatedAt').nullable();
    t.dateTime('deletedAt').nullable();
    t.string('email').notNull();
    t.enum('sex', ['male', 'female', 'other']).notNull();
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('users');
};
