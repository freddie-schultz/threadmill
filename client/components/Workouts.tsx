import { Link } from 'react-router-dom'
import { Workout, WorkoutData } from '../../models/workouts.ts'
import { useCreateWorkout, useWorkoutData, useWorkouts } from '../apis/api.ts'
import { useState } from 'react'
import AddWorkoutForm from './AddWorkoutForm.tsx'

export default function Workouts() {
  const { data: workouts, isPending, error } = useWorkouts()
  const [showAddWorkoutForm, setShowAddWorkoutForm] = useState(false)
  const addWorkout = useCreateWorkout()

  if (isPending) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>{error.message}</p>
  }

  if (!workouts) {
    return <p>No data</p>
  }

  const toggleShowAddWorkoutForm = () => {
    setShowAddWorkoutForm(!showAddWorkoutForm)
  }

  const handleAddWorkout = (data: WorkoutData) => {
    addWorkout.mutate(data)
    setShowAddWorkoutForm(false)
  }

  return (
    <>
      <h2>Your Workouts</h2>
      <ul>
        {workouts.map((workout: Workout, i: number) => {
          return (
            <li key={`workoutIndex${i}`}>
              <Link to={`/workouts/${workout.id}`}>{workout.name}</Link>
            </li>
          )
        })}
      </ul>
      <button onClick={toggleShowAddWorkoutForm}>{showAddWorkoutForm ? 'Cancel' : 'Add workout'}</button>
      {showAddWorkoutForm && <AddWorkoutForm handleAddWorkout={handleAddWorkout} />}
    </>
  )
}
