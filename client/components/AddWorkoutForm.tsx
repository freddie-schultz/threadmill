import React, { useState } from 'react'
import { useCreateWorkout } from '../apis/api'
import { WorkoutData } from '../../models/workouts'
import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react'

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

    const newWorkout = { name }
    props.handleAddWorkout(newWorkout)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormControl m="2vw">
          <FormLabel fontSize="2vw">New Workout Name: </FormLabel>
          <Input
            id="name"
            type="text"
            bgColor="white"
            height="5vw"
            fontSize="4vw"
            value={name}
            onChange={handleChange}
          />
        </FormControl>
        <Button type="submit" m="1vw" p="2vw" fontSize="2.5vw">
          Add
        </Button>
      </form>
    </>
  )
}
