import { useMutation, useQueryClient } from '@tanstack/react-query'
import request from 'superagent'
import { NewExercise, NewExerciseData } from '../../../models/exercises'

export default function useEditExerciseInWorkout() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: NewExercise) => {
      await request.patch(`/api/v1/workouts/edit-exercise`).send(data)
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({
        queryKey: ['workouts'],
      })
    },
  })
}
