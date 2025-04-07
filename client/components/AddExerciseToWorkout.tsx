import React, { useState } from 'react'
import { useExercises } from '../apis/api'
import { Exercise, NewExercise } from '../../models/exercises'
import useCreateExerciseInWorkout from '../apis/hooks/use-create-exercise-in-workout'
import { Box, Button, Flex, FormControl, FormLabel, Input, Select } from '@chakra-ui/react'

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
      <form name="addExercise" onSubmit={handleSubmit}>
        <FormControl margin="2vw">
          <FormLabel marginTop="1.5vw" fontSize="2vw" htmlFor="exerciseId">
            Exercise:{' '}
          </FormLabel>
          <Select
            bgColor="white"
            width="40vw"
            height="4vw"
            fontSize="2vw"
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
          </Select>
          <FormLabel marginTop="1.5vw" fontSize="2vw" htmlFor="sets">
            Sets:{' '}
          </FormLabel>
          <Input
            bgColor="white"
            width="10vw"
            height="4vw"
            fontSize="2vw"
            id="sets"
            type="text"
            value={formState.sets}
            onChange={handleChange}
          />
          <FormLabel marginTop="1.5vw" fontSize="2vw" htmlFor="reps">
            Reps:{' '}
          </FormLabel>
          <Input
            bgColor="white"
            width="10vw"
            height="4vw"
            fontSize="2vw"
            id="reps"
            type="text"
            value={formState.reps}
            onChange={handleChange}
          />
          <FormLabel marginTop="1.5vw" fontSize="2vw" htmlFor="weight">
            Weight:{' '}
          </FormLabel>
          <Input
            bgColor="white"
            width="10vw"
            height="4vw"
            fontSize="2vw"
            id="weight"
            type="text"
            value={formState.weight}
            onChange={handleChange}
          />
          <Flex marginTop="2vw">
            <Button fontSize="2.5vw" p="2vw" bgColor="#8190D1" _hover={{ bg: '#8190D1' }} type="submit">
              Add
            </Button>
          </Flex>
        </FormControl>
      </form>
    </Box>
  )
}
