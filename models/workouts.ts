import { Exercise } from './exercises.ts'

export interface WorkoutData {
  name: string
}

export interface Workout extends WorkoutData {
  id: number
  exercises: Exercise[]
}
