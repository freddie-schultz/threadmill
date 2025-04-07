import React, { useState } from 'react'
import { useExercises } from '../apis/api'
import { Exercise, NewExercise } from '../../models/exercises'
import useCreateExerciseInWorkout from '../apis/hooks/use-create-exercise-in-workout'
import { Box } from '@chakra-ui/react'

interface Props {
  workoutId: number
  handleAddExercise: (data: NewExercise) => void
}

const emptyForm = {
  exerciseId: 1,
  sets: 4,
  reps: 10,
  weight: 0,
  breakTime: 60,
}

export default function AddExerciseToWorkout(props: Props) {
  const { data: allExercises, isPending, error } = useExercises()
  const [formState, setFormState] = useState(emptyForm)

  if (isPending) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>Error: {error.message}</p>
  }
  if (!allExercises) {
    return <p>No data</p>
  }

  const handleExerciseIdChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFormState({ ...formState, exerciseId: Number(event.target.value) })
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const newExercise = { ...formState, workoutId: props.workoutId }

    props.handleAddExercise(newExercise)
  }

  return (
    <Box bgColor="#c7c25f" borderRadius="1vw" p="1vw" m="1vw">
      <form name="addExercise" onSubmit={handleSubmit} style={{ marginTop: 20 }}>
        <label htmlFor="exerciseId">Exercise: </label>
        <select
          style={{ width: '12vw' }}
          id="exerciseId"
          value={formState.exerciseId}
          onChange={handleExerciseIdChange}
        >
          {allExercises.map((e: Exercise) => {
            return (
              <option key={e.id} value={e.id}>
                {e.name}
              </option>
            )
          })}
        </select>
        &nbsp;<label htmlFor="sets">Sets: </label>
        <input style={{ width: '5vw' }} id="sets" type="text" value={formState.sets} onChange={handleChange} />
        &nbsp;<label htmlFor="reps">Reps: </label>
        <input style={{ width: '5vw' }} id="reps" type="text" value={formState.reps} onChange={handleChange} />
        &nbsp;<label htmlFor="weight">Weight: </label>
        <input style={{ width: '5vw' }} id="weight" type="text" value={formState.weight} onChange={handleChange} />
        &nbsp;&nbsp;<button type="submit">Add</button>
      </form>
    </Box>
  )
}
