Table workouts {
id increments [primary key]
name string

}

Table exercises {
id increments [primary key]
name string
description string
}

Table exercise_in_workout {
exercise_id integer
workout_id integer
reps integer
sets integer
weight integer
}

Ref: workouts.id < exercise_in_workout.workout_id
Ref: exercises.id < exercise_in_workout.exercise_id

<!-- Table workouts {
  id increments [primary key]
name string

}

Table exercises {
  id increments [primary key]
  name string
  workout_id integer
  reps integer
  sets integer
  weight integer
}

Ref: workouts.id < exercises.workout_id -->
