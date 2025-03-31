import React, { useState } from 'react'
import { useCreateWorkout } from '../apis/api'
import { WorkoutData } from '../../models/workouts'
import { prependOnceListener } from 'process'

interface Props {
  handleAddWorkout: (data: WorkoutData) => void
}

export default function AddWorkoutForm(props: Props) {
  const [name, setName] = useState('')
  const addWorkout = useCreateWorkout()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const newWorkout = { name: name }
    props.handleAddWorkout(newWorkout)
  }

  return (
    <form name="addWorkout" onSubmit={handleSubmit} style={{ marginTop: 20 }}>
      <label htmlFor="name">Name: </label>
      <input id="name" type="text" value={name} onChange={handleChange} />
      &nbsp;<button>Add</button>
    </form>
  )
}
