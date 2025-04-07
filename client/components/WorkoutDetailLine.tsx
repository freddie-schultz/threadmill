import { E } from 'vitest/dist/chunks/reporters.d.CqBhtcTq.js'
import { ExerciseInWorkout, NewExercise } from '../../models/exercises'
import { useDeleteExercise } from '../apis/api'
import React, { useState } from 'react'

interface Props extends ExerciseInWorkout {
  handleDelete: (id: number) => void
  handleEdit: (data: NewExercise) => void
}

export default function WorkoutDetailLine(props: Props) {
  const [editing, setEditing] = useState(false)
  const [formState, setFormState] = useState({ ...props })

  const handleClickDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setEditing(false)
    props.handleDelete(props.id)
  }

  const handleClickSave = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    const updatedExercise = {
      workoutId: props.workoutId,
      exerciseId: props.id,
      sets: formState.sets,
      reps: formState.reps,
      weight: formState.weight,
      breakTime: formState.breakTime,
    }

    props.handleEdit(updatedExercise)
    setEditing(false)
  }

  const handleClickEdit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setEditing(true)
  }

  const handleClickCancel = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setEditing(false)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  return (
    <form name="editExercise">
      <table className="workoutDetailText" style={{ marginTop: 5, marginBottom: 15 }}>
        <tbody>
          <tr>
            <td style={{ width: '5vw' }}>
              <label htmlFor="sets">Sets: </label>
              {editing ? (
                <input id="sets" type="text" value={formState.sets} onChange={handleChange} style={{ width: '2vw' }} />
              ) : (
                props.sets
              )}
            </td>
            <td style={{ width: '6vw' }}>
              <label htmlFor="reps">{props.timed ? 'Time: ' : 'Reps: '}</label>
              {editing ? (
                <input id="reps" type="text" value={formState.reps} onChange={handleChange} style={{ width: '2vw' }} />
              ) : (
                props.reps
              )}
              {props.timed ? 's' : ''}
            </td>
            <td style={{ width: '8vw' }}>
              {!props.timed && <label htmlFor="weight">Weight: </label>}
              {editing && !props.timed ? (
                <input
                  id="weight"
                  type="text"
                  value={formState.weight}
                  onChange={handleChange}
                  style={{ width: '2vw' }}
                />
              ) : (
                !props.timed && props.weight
              )}
            </td>
            <td style={{ width: '11vw' }}>
              <label htmlFor="breakTime">Break time: </label>
              {editing ? (
                <input
                  id="breakTime"
                  type="text"
                  value={formState.breakTime}
                  onChange={handleChange}
                  style={{ width: '2vw' }}
                />
              ) : (
                props.breakTime
              )}
              s
            </td>

            <td style={{ width: '3vw' }}>
              {editing ? (
                <button onClick={handleClickSave}>Save</button>
              ) : (
                <button onClick={handleClickEdit}>Edit</button>
              )}
            </td>
            <td>
              {editing ? (
                <button onClick={handleClickCancel}>Cancel</button>
              ) : (
                <button onClick={handleClickDelete}>Delete</button>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  )
}
