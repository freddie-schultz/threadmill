import { E } from 'vitest/dist/chunks/reporters.d.CqBhtcTq.js'
import { ExerciseInWorkout, NewExercise } from '../../models/exercises'
import React, { Fragment, useState } from 'react'
import { Button, Flex, FormControl, FormLabel, HStack, Input, Spacer, Text } from '@chakra-ui/react'

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
      <FormControl marginTop="1vw">
        <HStack>
          <Flex marginRight="2vw">
            <FormLabel>Sets:</FormLabel>
            <Input
              marginRight="2vw"
              bgColor={editing ? 'white' : '#ced4f0'}
              disabled={!editing}
              _disabled={{ fontcolor: 'black' }}
              id="sets"
              type="text"
              width="80px"
              value={formState.sets}
              onChange={handleChange}
            />
            <FormLabel>Reps:</FormLabel>
            <Input
              marginRight="2vw"
              bgColor={editing ? 'white' : '#ced4f0'}
              disabled={!editing}
              _disabled={{ fontcolor: 'black' }}
              id="reps"
              type="text"
              width="80px"
              value={formState.reps}
              onChange={handleChange}
            />
            <FormLabel>Weight:</FormLabel>
            <Input
              marginRight="2px"
              bgColor={editing ? 'white' : '#ced4f0'}
              disabled={!editing}
              _disabled={{ fontcolor: 'black' }}
              id="weight"
              type="text"
              width="80px"
              value={formState.weight}
              onChange={handleChange}
            />
            <Text marginRight="2vw" fontSize="1.5vw">
              kg
            </Text>
            <FormLabel>Break time:</FormLabel>
            <Input
              marginRight="2px"
              bgColor={editing ? 'white' : '#ced4f0'}
              disabled={!editing}
              _disabled={{ fontcolor: 'black' }}
              id="breakTime"
              type="text"
              width="80px"
              value={formState.breakTime}
              onChange={handleChange}
            />
            <Text marginRight="2vw" fontSize="1.5vw">
              s
            </Text>
          </Flex>
          {editing ? (
            <>
              <Button onClick={handleClickSave}>Save</Button>
              <Button onClick={handleClickCancel}>Cancel</Button>
            </>
          ) : (
            <>
              <Button onClick={handleClickEdit}>Edit</Button>
              <Spacer />
              <Button marginRight="10vw" onClick={handleClickDelete}>
                Delete
              </Button>
            </>
          )}
        </HStack>
      </FormControl>
    </form>
  )
}
