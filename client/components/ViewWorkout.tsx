import { useNavigate, useParams } from 'react-router-dom'
import { useWorkoutData } from '../apis/api'
import { Exercise, ExerciseInWorkout } from '../../models/exercises'
import React, { useState } from 'react'
import WorkoutDetailLine from './WorkoutDetailLine'

export default function ViewWorkout() {
  const { id } = useParams()
  const { data: workout, isPending, error } = useWorkoutData(Number(id))
  const [showDetails, setShowDetails] = useState(false)
  const [selectedWorkout, setSelectedWorkout] = useState('')
  const navigate = useNavigate()

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
    setSelectedWorkout('')
    setShowDetails(!showDetails)
  }

  const handleClickWorkout = (event: { target: Element }) => {
    const targetId = (event.target as Element).id

    if (showDetails) {
      return
    }

    selectedWorkout === targetId ? setSelectedWorkout('') : setSelectedWorkout(targetId)
  }

  return (
    <>
      <table>
        <tbody>
          <tr>
            <td style={{ width: 400 }}>
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
            <div key={`div${e.id}`}>
              <li id={e.name} className="workoutListButton" role="button" onClick={handleClickWorkout} key={`exercise${e.id}`}>
                {e.name}
              </li>
              {(showDetails || selectedWorkout === e.name) && <WorkoutDetailLine {...e} key={`details${e.id}`} />}
            </div>
          )
        })}
      </ul>
    </>
  )
}
