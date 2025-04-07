import { useState } from 'react'
import { ExerciseInWorkout, NewExercise } from '../../models/exercises'
import { WorkoutWithExercises } from '../../models/workouts'
import WorkoutDetailLine from './WorkoutDetailLine'
import { useCreateExerciseInWorkout, useDeleteExerciseInWorkout, useEditExerciseInWorkout } from '../apis/api'
import AddExerciseToWorkout from './AddExerciseToWorkout'
import { Box, Button, Flex, ListItem, UnorderedList, Text } from '@chakra-ui/react'

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
      <Flex marginBottom="2vw">
        {props.exercises.length > 0 && showDetails && (
          <Button fontSize="2vw" p="20px" bgColor="#8190D1" _hover={{ bg: '#8190D1' }} onClick={toggleDetails}>
            Hide All Details
          </Button>
        )}
        {props.exercises.length > 0 && !showDetails && (
          <Button fontSize="2vw" p="20px" bgColor="#8190D1" _hover={{ bg: '#8190D1' }} onClick={toggleDetails}>
            Show All Details +
          </Button>
        )}
        {props.exercises.length === 0 && <Text fontSize="2vw">Add an exercise below</Text>}
      </Flex>
      <UnorderedList>
        {props.exercises.map((e: ExerciseInWorkout, i: number) => {
          return (
            <div key={`div${e.id}`}>
              <ListItem
                marginTop="1vw"
                fontSize="2vw"
                id={e.name}
                className="workoutListButton"
                role="button"
                onClick={handleClickWorkout}
                key={`exercise${e.id}`}
              >
                {e.name}
              </ListItem>
              {(showDetails || selectedWorkout === e.name) && (
                <WorkoutDetailLine {...{ ...e, handleDelete, handleEdit }} key={`details${e.id}`} />
              )}
            </div>
          )
        })}
      </UnorderedList>
      <Box m="2vw" p="2vw" bgColor="#918a00" borderRadius="1vw">
        <Button onClick={toggleAddExerciseForm}>{showAddExerciseForm ? 'Cancel' : 'Add New Exercise'}</Button>
        {showAddExerciseForm && <AddExerciseToWorkout workoutId={props.id} handleAddExercise={handleAddExercise} />}
      </Box>
    </>
  )
}
