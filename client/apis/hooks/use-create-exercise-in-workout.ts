import { useMutation, useQueryClient } from '@tanstack/react-query'
import request from 'superagent'
import { NewExercise, NewExerciseData } from '../../../models/exercises'

export default function useCreateExerciseInWorkout() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: NewExercise) => {
      await request.post(`/api/v1/workouts/add-exercise`).send(data)
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({
        queryKey: ['workouts'],
      })
    },
  })
}
