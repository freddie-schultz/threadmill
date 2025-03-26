import { ExerciseInWorkout } from './exercises.ts'

export interface WorkoutData {
  name: string
}

export interface Workout extends WorkoutData {
  id: number
}

export interface WorkoutWithExercises extends Workout {
  exercises: ExerciseInWorkout[]
}
