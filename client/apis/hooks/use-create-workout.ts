import { useMutation, useQueryClient } from '@tanstack/react-query'
import request from 'superagent'

import { WorkoutData } from '../../../models/workouts.ts'

export default function useCreateWorkout() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (newWorkout: WorkoutData) => {
      await request.post('/api/v1/workouts').send(newWorkout)
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({
        queryKey: ['workouts'],
      })
    },
  })
}
