import { Link } from 'react-router-dom'
import { Workout } from '../../models/workouts.ts'
import { useWorkouts } from '../apis/api.ts'

export default function NavBarWorkouts() {
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
    <ul>
      {workouts.map((workout: Workout, i: number) => {
        return (
          <li key={`workoutIndex${i}`}>
            <Link to={`/workouts/${workout.id}`}>{workout.name}</Link>
          </li>
        )
      })}
    </ul>
  )
}
