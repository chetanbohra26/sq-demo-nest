const {
  ON_UPDATE_TIMESTAMP_FUNCTION,
  timestamps,
  onUpdateTrigger,
} = require('../helpers');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.raw(ON_UPDATE_TIMESTAMP_FUNCTION);
  const migration = await knex.schema.createTable('users', (table) => {
    table.bigIncrements('id').index();
    table.string('username');
    table.string('email');
    table.string('password');
    table.string('hash');
    table.string('role');
    timestamps(knex, table);
  });

  await knex.raw(onUpdateTrigger('users'));
  return migration;
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('users');
};
