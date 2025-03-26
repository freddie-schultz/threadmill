import { useParams } from 'react-router-dom'
import { useWorkoutData } from '../apis/api'
import { Exercise, ExerciseInWorkout } from '../../models/exercises'
import { useState } from 'react'
import WorkoutDetailLine from './WorkoutDetailLine'

export default function ViewWorkout() {
  const { id } = useParams()
  const { data: workout, isPending, error } = useWorkoutData(Number(id))
  const [showDetails, setShowDetails] = useState(false)

  if (isPending) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>{error.message}</p>
  }

  if (!workout) {
    return <p>No data</p>
  }

  const toggleDetails = () => {
    setShowDetails(!showDetails)
  }

  return (
    <>
      <h1>{workout.name}</h1>
      <div className="divButton" role="button" onClick={toggleDetails}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </div>
      <ul>
        {workout.exercises.map((e: ExerciseInWorkout, i: number) => {
          return (
            <>
              <li key={`exerciseIndex${i}`}>{e.name}</li>
              {showDetails && <WorkoutDetailLine {...e} />}
            </>
          )
        })}
      </ul>
    </>
  )
}
