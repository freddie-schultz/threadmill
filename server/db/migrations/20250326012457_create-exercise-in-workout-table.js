/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable('exercise_in_workout', (table) => {
    table.integer('id').primary()
    table.integer('exercise_id').references('exercises.id')
    table.integer('workout_id').references('workouts.id')
    table.integer('reps')
    table.integer('sets')
    table.integer('weight')
    table.integer('break_time')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.dropTable('exercise_in_workout')
}
