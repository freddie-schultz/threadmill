/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('workouts').del()
  await knex('workouts').insert([{ id: 1, name: 'Machines Monday' }])
}
