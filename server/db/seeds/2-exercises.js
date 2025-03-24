/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('exercises').del()
  await knex('exercises').insert([
    { id: 1, name: 'Leg Extension', workout_id: 1, reps: 12, sets: 4, weight: 40 },
    { id: 2, name: 'Leg Curl', workout_id: 1, reps: 10, sets: 4, weight: 35 },
    { id: 3, name: 'Machine Chest Press', workout_id: 1, reps: 12, sets: 4, weight: 20 },
    { id: 4, name: 'Arm Curl', workout_id: 1, reps: 12, sets: 4, weight: 25 },
    { id: 5, name: 'Pulldown', workout_id: 1, reps: 12, sets: 4, weight: 30 },
    { id: 6, name: 'Seated Row', workout_id: 1, reps: 12, sets: 4, weight: 30 },
    { id: 7, name: 'Hammer Leg Press', workout_id: 1, reps: 15, sets: 4, weight: 45 },
    { id: 8, name: 'Single Arm Row', workout_id: 1, reps: 12, sets: 4, weight: 25 },
    { id: 9, name: 'Fly', workout_id: 1, reps: 12, sets: 4, weight: 25 },
    { id: 10, name: 'Machine Shoulder Press', workout_id: 1, reps: 12, sets: 4, weight: 15 },
  ])
}
