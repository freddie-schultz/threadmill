import { Workout } from '../../models/workouts.ts'
import { useWorkouts } from '../apis/api.ts'

export default function Workouts() {
  const { data: workouts, isPending, error } = useWorkouts()

  if (isPending) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>{error.message}</p>
  }

  if (!workouts) {
    return <p>No data</p>
  }

  return (
    <>
      <h2>Your Workouts</h2>
      <ul>
        {workouts.map((workout: Workout, i: number) => {
          return <li key={`workoutIndex${i}`}>{workout.name}</li>
        })}
      </ul>
    </>
  )
}
