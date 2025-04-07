import { Link } from 'react-router-dom'
import { Workout, WorkoutData } from '../../models/workouts.ts'
import { useCreateWorkout, useWorkoutData, useWorkouts } from '../apis/api.ts'
import { useState } from 'react'
import AddWorkoutForm from './AddWorkoutForm.tsx'
import { Box, Button, Heading, ListItem, UnorderedList } from '@chakra-ui/react'

export default function Workouts() {
  const { data: workouts, isPending, error } = useWorkouts()
  const [showAddWorkoutForm, setShowAddWorkoutForm] = useState(false)
  const addWorkout = useCreateWorkout()

  if (isPending) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>{error.message}</p>
  }

  if (!workouts) {
    return <p>No data</p>
  }

  const toggleShowAddWorkoutForm = () => {
    setShowAddWorkoutForm(!showAddWorkoutForm)
  }

  const handleAddWorkout = (data: WorkoutData) => {
    addWorkout.mutate(data)
    setShowAddWorkoutForm(false)
  }

  return (
    <>
      <Box bgColor="#6e83fa" borderRadius="1vw" p="2vw" marginBottom="1vw">
        <Heading fontSize="3vw">Your Workouts</Heading>
      </Box>
      <UnorderedList fontSize="2.5vw" m="2vw">
        {workouts.map((workout: Workout, i: number) => {
          return (
            <ListItem marginBottom="2vw" key={`workoutIndex${i}`}>
              <Link to={`/workouts/${workout.id}`}>{workout.name}</Link>
            </ListItem>
          )
        })}
      </UnorderedList>
      <Button fontSize="2vw" m="1vw" p="2vw" onClick={toggleShowAddWorkoutForm}>
        {showAddWorkoutForm ? 'Cancel' : 'Add workout'}
      </Button>
      {showAddWorkoutForm && <AddWorkoutForm handleAddWorkout={handleAddWorkout} />}
    </>
  )
}
