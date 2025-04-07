import { Link, useParams } from 'react-router-dom'
import { useDeleteExercise, useWorkoutData } from '../apis/api'
import ViewWorkoutList from './ViewWorkoutList'
import { useState } from 'react'
import ActiveWorkout from './ActiveWorkout'
import { Button, Flex, HStack } from '@chakra-ui/react'

export default function ViewWorkout() {
  const { id } = useParams()
  const { data: workout, isPending, error } = useWorkoutData(Number(id))
  const [workoutActive, setWorkoutActive] = useState(false)
  // const navigate = useNavigate()

  if (isPending) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>{error.message}</p>
  }

  if (!workout) {
    return <p>No data</p>
  }

  const toggleWorkoutActive = () => {
    setWorkoutActive(!workoutActive)
  }

  return (
    <>
      <HStack>
        <Link to="/workouts">Back</Link>
        <Button marginRight="auto" marginLeft="30vw" onClick={toggleWorkoutActive}>{`${
          workoutActive ? 'Stop' : 'Start'
        } working out!`}</Button>
      </HStack>
      <div className="flexDiv" style={{ alignItems: 'center' }}>
        <div style={{ width: 400 }}>
          <Link to="/workouts">Back</Link>
          <h1>{workout.name}</h1>
        </div>
        <div>
          <button onClick={toggleWorkoutActive}>{`${workoutActive ? 'Stop' : 'Start'} working out!`}</button>
        </div>
      </div>

      {workoutActive ? <ActiveWorkout {...workout} /> : <ViewWorkoutList {...workout} />}
    </>
  )
}
