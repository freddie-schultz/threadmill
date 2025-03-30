import { useState } from 'react'
import { ExerciseInWorkout, NewExercise } from '../../models/exercises'
import { WorkoutWithExercises } from '../../models/workouts'
import WorkoutDetailLine from './WorkoutDetailLine'
import { useDeleteExercise, useDeleteExerciseInWorkout, useEditExerciseInWorkout } from '../apis/api'

export default function ViewWorkoutList(props: WorkoutWithExercises) {
  const [showDetails, setShowDetails] = useState(false)
  const [selectedWorkout, setSelectedWorkout] = useState('')
  const deleteExercise = useDeleteExerciseInWorkout(props.id)
  const editExercise = useEditExerciseInWorkout()

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

  const handleEdit = (data: NewExercise) => {
    editExercise.mutate(data)
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
                <WorkoutDetailLine {...{ ...e, handleDelete, handleEdit }} key={`details${e.id}`} />
              )}
            </div>
          )
        })}
      </ul>
    </>
  )
}
