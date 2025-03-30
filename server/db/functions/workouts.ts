import database from '../connection.ts'
import { Workout, WorkoutData, WorkoutWithExercises } from '../../../models/workouts.ts'

const exerciseInWorkoutKeys = [
  'exercises.name as name',
  'exercise_in_workout.exercise_id as id',
  'exercise_in_workout.workout_id as workoutId',
  'exercise_in_workout.reps as reps',
  'exercise_in_workout.sets as sets',
  'exercise_in_workout.weight as weight',
  'exercise_in_workout.break_time as breakTime',
  'exercises.timed as timed',
]

export async function getAllWorkouts(): Promise<Workout[]> {
  const results = await database('workouts').select()

  return results as Workout[]
}

export async function getWorkoutWithExercises(id: number): Promise<WorkoutWithExercises> {
  const workout = await database('workouts').where('id', id).select().first()

  // const exercises = await database('exercises').where('exercises.workout_id', id).select()
  const exercises = await database('exercise_in_workout')
    .join('exercises', 'exercise_in_workout.exercise_id', '=', 'exercises.id')
    .where('exercise_in_workout.workout_id', id)
    .select(exerciseInWorkoutKeys)

  const results = {
    ...workout,
    exercises,
  }

  return results as WorkoutWithExercises
}

export async function addWorkout(newWorkout: WorkoutData): Promise<number> {
  const results = await database('workouts').insert(newWorkout)

  return results[0] as number
}

export async function updateWorkout(id: number, updatedWorkout: WorkoutData): Promise<number> {
  const results = await database('workouts').where('id', id).update(updatedWorkout)

  return results as number
}

export async function deleteWorkout(id: number): Promise<number> {
  await database('exercise_in_workout').where('workout_id', id).delete()
  const results = await database('workouts').where('id', id).delete()

  return results as number
}

export async function deleteExerciseInWorkout(workoutId: number, exerciseId: number): Promise<number> {
  const results = await database('exercise_in_workout')
    .where('exercise_in_workout.workout_id', workoutId)
    .andWhere('exercise_in_workout.exercise_id', exerciseId)
    .delete()

  return results
}
