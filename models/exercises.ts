export interface ExerciseData {
  name: string
  workoutId: number
  reps: number
  sets: number
  weight: number
}

export interface Exercise extends ExerciseData {
  id: number
}
