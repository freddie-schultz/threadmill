import database from '../connection.ts'
import { Exercise, ExerciseData } from '../../../models/exercises.ts'

export async function getAllExercises(): Promise<Exercise[]> {
  const results = await database('exercises').select()

  return results as Exercise[]
}

export async function getExerciseById(id: number): Promise<Exercise> {
  const results = await database('exercises').where('id', id).select().first()

  return results as Exercise
}

export async function addExercise(newExercise: ExerciseData): Promise<number> {
  const results = await database('exercises').insert(newExercise)

  return results[0] as number
}

export async function updateExercise(id: number, updatedExercise: ExerciseData): Promise<number> {
  const results = await database('exercises').where('id', id).update(updatedExercise)

  return results as number
}

export async function deleteExercise(id: number): Promise<number> {
  const results = await database('exercises').where('id', id).delete()

  return results as number
}
