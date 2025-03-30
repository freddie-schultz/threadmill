import { useState } from 'react'
import { ExerciseInWorkout } from '../../models/exercises'
import { WorkoutWithExercises } from '../../models/workouts'
import WorkoutDetailLine from './WorkoutDetailLine'
import { useDeleteExercise, useDeleteExerciseInWorkout } from '../apis/api'

export default function ViewWorkoutList(props: WorkoutWithExercises) {
  const [showDetails, setShowDetails] = useState(false)
  const [selectedWorkout, setSelectedWorkout] = useState('')
  const deleteExercise = useDeleteExerciseInWorkout(props.id)

  const toggleDetails = () => {
    setSelectedWorkout('')
    setShowDetails(!showDetails)
  }

  const handleClickWorkout = (event: React.MouseEvent<HTMLLIElement>) => {
    const targetId = (event.target as Element).id

    if (showDetails) {
      return
    }

    selectedWorkout === targetId ? setSelectedWorkout('') : setSelectedWorkout(targetId)
  }

  const handleDelete = async (id: number) => {
    deleteExercise.mutateAsync(id)
  }

  return (
    <>
      <div className="detailsButton" role="button" onClick={toggleDetails}>
        {showDetails ? 'Hide All Details' : 'Show All Details'}
      </div>
      <ul>
        {props.exercises.map((e: ExerciseInWorkout, i: number) => {
          return (
            <div key={`div${e.id}`}>
              <li
                id={e.name}
                className="workoutListButton"
                role="button"
                onClick={handleClickWorkout}
                key={`exercise${e.id}`}
              >
                {e.name}
              </li>
              {(showDetails || selectedWorkout === e.name) && (
                <WorkoutDetailLine {...{ ...e, handleDelete }} key={`details${e.id}`} />
              )}
            </div>
          )
        })}
      </ul>
    </>
  )
}
