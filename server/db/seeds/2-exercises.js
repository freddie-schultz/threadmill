/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('exercises').del()
  await knex('exercises').insert([
    { id: 1, name: 'Leg Extension', timed: false },
    { id: 2, name: 'Leg Curl' },
    { id: 3, name: 'Machine Chest Press', timed: false },
    { id: 4, name: 'Arm Curl', timed: false },
    { id: 5, name: 'Pulldown', timed: false },
    { id: 6, name: 'Seated Row', timed: false },
    { id: 7, name: 'Hammer Leg Press', timed: false },
    { id: 8, name: 'Single Arm Row', timed: false },
    { id: 9, name: 'Fly', timed: false },
    { id: 10, name: 'Machine Shoulder Press', timed: false },
    { id: 11, name: 'Crunches', timed: false },
    { id: 12, name: 'Plank', timed: true },
    { id: 13, name: 'Spider Plank', timed: false },
    { id: 14, name: 'Side Bend With Dumbbell', timed: false },
    { id: 15, name: 'Cross Trainer', timed: true },
    { id: 16, name: 'Chest Press - Dumbbells', timed: false },
    { id: 17, name: 'French Press - Supine', timed: false },
    { id: 18, name: 'Tricep Dips', timed: false },
    { id: 19, name: 'Lateral Raise', timed: false },
    { id: 20, name: 'Front Raise', timed: false },
    { id: 21, name: 'Push-ups', timed: false },
  ])
}
