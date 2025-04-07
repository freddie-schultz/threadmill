export interface ExerciseData {
  name: string
}

export interface Exercise extends ExerciseData {
  id: number
}

// export interface ExerciseInWorkout {
//   id: number
// }

// export interface ExerciseInWorkoutData extends Exercise {
//   exerciseId: number
//   workoutId: number
//   sets: number
//   reps: number
//   weight: number
//   breakTime: number
//   timed: boolean
// }

export interface ExerciseInWorkout extends Exercise {
  exerciseId: number
  workoutId: number
  sets: number
  reps: number
  weight: number
  breakTime: number
  timed: boolean
}

export interface NewExerciseData {
  sets: number
  reps: number
  weight: number
  breakTime: number
}
export interface NewExercise extends NewExerciseData {
  workoutId: number
  exerciseId: number
}
