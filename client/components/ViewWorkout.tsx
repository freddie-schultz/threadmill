import { useParams } from 'react-router-dom'
import { useWorkoutData } from '../apis/api'
import { Exercise } from '../../models/exercises'

export default function ViewWorkout() {
  const { id } = useParams()
  const { data: workout, isPending, error } = useWorkoutData(Number(id))

  if (isPending) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>{error.message}</p>
  }

  if (!workout) {
    return <p>No data</p>
  }

  return (
    <>
      <h1>{workout.name}</h1>
      <ul>
        {workout.exercises.map((e: Exercise, i: number) => {
          return <li key={`exerciseIndex${i}`}>{e.name}</li>
        })}
      </ul>
    </>
  )
}
