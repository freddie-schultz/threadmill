/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('exercises', (table) => {
    table.integer('id').primary()
    table.string('name')
    table.integer('workout_id').references('workouts.id')
    table.integer('reps')
    table.integer('sets')
    table.integer('weight')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('exercises')
}
