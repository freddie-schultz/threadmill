import database from '../connection.ts'
import { Workout, WorkoutData } from '../../../models/workouts.ts'

export async function getAllWorkouts(): Promise<Workout[]> {
  const results = await database('workouts').select()

  return results as Workout[]
}

export async function getWorkoutById(id: number): Promise<Workout> {
  const workout = await database('workouts').where('id', id).select().first()

  const exercises = await database('exercises').where('exercises.workout_id', id).select()

  const results = {
    ...workout,
    exercises,
  }

  return results as Workout
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
  const results = await database('workouts').where('id', id).delete()

  return results as number
}
