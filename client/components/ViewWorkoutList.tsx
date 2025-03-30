import { useState } from 'react'
import { ExerciseInWorkout, NewExercise } from '../../models/exercises'
import { WorkoutWithExercises } from '../../models/workouts'
import WorkoutDetailLine from './WorkoutDetailLine'
import {
  useCreateExerciseInWorkout,
  useDeleteExercise,
  useDeleteExerciseInWorkout,
  useEditExerciseInWorkout,
  useExercises,
} from '../apis/api'
import AddExerciseToWorkout from './AddExerciseToWorkout'

export default function ViewWorkoutList(props: WorkoutWithExercises) {
  const [showDetails, setShowDetails] = useState(false)
  const [selectedWorkout, setSelectedWorkout] = useState('')
  const [showAddExerciseForm, setShowAddExerciseForm] = useState(false)
  const deleteExercise = useDeleteExerciseInWorkout(props.id)
  const editExercise = useEditExerciseInWorkout()
  const addExercise = useCreateExerciseInWorkout()

  const toggleDetails = () => {
    setSelectedWorkout('')
    setShowDetails(!showDetails)
  }

  const toggleAddExerciseForm = () => {
    setShowAddExerciseForm(!showAddExerciseForm)
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

  const handleAddExercise = (data: NewExercise) => {
    addExercise.mutate(data)
    setShowAddExerciseForm(false)
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
      <button onClick={toggleAddExerciseForm}>{showAddExerciseForm ? 'Cancel' : 'Add New Exercise'}</button>

      {showAddExerciseForm && <AddExerciseToWorkout workoutId={props.id} handleAddExercise={handleAddExercise} />}
    </>
  )
}
