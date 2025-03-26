/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const workout1 = [
  { exercise_id: 1, workout_id: 1, reps: 12, sets: 4, weight: 40, break_time: 60 },
  { exercise_id: 2, workout_id: 1, reps: 10, sets: 4, weight: 35, break_time: 60 },
  { exercise_id: 3, workout_id: 1, reps: 12, sets: 4, weight: 20, break_time: 60 },
  { exercise_id: 4, workout_id: 1, reps: 12, sets: 4, weight: 25, break_time: 60 },
  { exercise_id: 5, workout_id: 1, reps: 12, sets: 4, weight: 30, break_time: 60 },
  { exercise_id: 6, workout_id: 1, reps: 12, sets: 4, weight: 30, break_time: 60 },
  { exercise_id: 7, workout_id: 1, reps: 15, sets: 4, weight: 45, break_time: 60 },
  { exercise_id: 8, workout_id: 1, reps: 12, sets: 4, weight: 25, break_time: 60 },
  { exercise_id: 9, workout_id: 1, reps: 12, sets: 4, weight: 25, break_time: 60 },
  { exercise_id: 10, workout_id: 1, reps: 12, sets: 4, weight: 15, break_time: 60 },
]

const workout2 = [
  { exercise_id: 15, workout_id: 2, reps: 300, sets: 1, weight: 0, break_time: 60 },
  { exercise_id: 11, workout_id: 2, reps: 15, sets: 4, weight: 0, break_time: 60 },
  { exercise_id: 13, workout_id: 2, reps: 16, sets: 4, weight: 0, break_time: 60 },
  { exercise_id: 12, workout_id: 2, reps: 30, sets: 4, weight: 0, break_time: 60 },
  { exercise_id: 14, workout_id: 2, reps: 10, sets: 4, weight: 10, break_time: 60 },
]

const workout3 = [
  { exercise_id: 18, workout_id: 3, reps: 10, sets: 4, weight: 0, break_time: 60 },
  { exercise_id: 16, workout_id: 3, reps: 10, sets: 4, weight: 10, break_time: 60 },
  { exercise_id: 17, workout_id: 3, reps: 10, sets: 4, weight: 3, break_time: 60 },
  { exercise_id: 19, workout_id: 3, reps: 10, sets: 4, weight: 3, break_time: 60 },
  { exercise_id: 20, workout_id: 3, reps: 10, sets: 4, weight: 3, break_time: 60 },
  { exercise_id: 21, workout_id: 3, reps: 10, sets: 4, weight: 0, break_time: 60 },
  { exercise_id: 10, workout_id: 3, reps: 10, sets: 4, weight: 15, break_time: 60 },
]

export const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('exercise_in_workout').del()
  await knex('exercise_in_workout').insert(workout1)
}

//   await knex('exercises').insert([
//     { id: 1, name: 'Leg Extension', workout_id: 1, reps: 12, sets: 4, weight: 40 },
//     { id: 2, name: 'Leg Curl', workout_id: 1, reps: 10, sets: 4, weight: 35 },
//     { id: 3, name: 'Machine Chest Press', workout_id: 1, reps: 12, sets: 4, weight: 20 },
//     { id: 4, name: 'Arm Curl', workout_id: 1, reps: 12, sets: 4, weight: 25 },
//     { id: 5, name: 'Pulldown', workout_id: 1, reps: 12, sets: 4, weight: 30 },
//     { id: 6, name: 'Seated Row', workout_id: 1, reps: 12, sets: 4, weight: 30 },
//     { id: 7, name: 'Hammer Leg Press', workout_id: 1, reps: 15, sets: 4, weight: 45 },
//     { id: 8, name: 'Single Arm Row', workout_id: 1, reps: 12, sets: 4, weight: 25 },
//     { id: 9, name: 'Fly', workout_id: 1, reps: 12, sets: 4, weight: 25 },
//     { id: 10, name: 'Machine Shoulder Press', workout_id: 1, reps: 12, sets: 4, weight: 15 },
//   ])
