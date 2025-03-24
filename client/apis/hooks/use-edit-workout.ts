import { useMutation, useQueryClient } from '@tanstack/react-query'
import request from 'superagent'

import { WorkoutData } from '../../../models/workouts.ts'

export default function useEditWorkout(id: number) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (updatedWorkout: WorkoutData) => {
      await request.patch(`/api/v1/workouts/${id}`).send(updatedWorkout)
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({
        queryKey: ['workouts'],
      })
    },
  })
}
