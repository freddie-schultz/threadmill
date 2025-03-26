import { useParams } from 'react-router-dom'
import { useWorkoutData } from '../apis/api'
import { Exercise, ExerciseInWorkout } from '../../models/exercises'
import { useState } from 'react'
import WorkoutDetailLine from './WorkoutDetailLine'

export default function ViewWorkout() {
  const { id } = useParams()
  const { data: workout, isPending, error } = useWorkoutData(Number(id))
  const [showDetails, setShowDetails] = useState(false)
  const [selectedWorkout, setSelectedWorkout] = useState(null)

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
    setSelectedWorkout(null)
    setShowDetails(!showDetails)
  }

  const handleClickWorkout = (event) => {
    console.log(event)

    if (showDetails) {
      return
    }

    if (selectedWorkout === event.target.id) {
      setSelectedWorkout(null)
    } else {
      setSelectedWorkout(event.target.id)
    }
  }

  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>
              <h1>{workout.name}</h1>
            </td>
            <td>
              <button>Start working out!</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="detailsButton" role="button" onClick={toggleDetails}>
        {showDetails ? 'Hide All Details' : 'Show All Details'}
      </div>
      <ul>
        {workout.exercises.map((e: ExerciseInWorkout, i: number) => {
          return (
            <>
              <li key={`exercise${e.id}`} role="button" id={e.name} onClick={handleClickWorkout}>
                {e.name}
              </li>
              {(showDetails || selectedWorkout === e.name) && <WorkoutDetailLine {...e} key={`details${e.id}`} />}
            </>
          )
        })}
      </ul>
    </>
  )
}
