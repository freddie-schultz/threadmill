import { useMutation, useQueryClient } from '@tanstack/react-query'
import request from 'superagent'

export default function useDeleteWorkout() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (id: number) => {
      await request.delete(`/api/v1/workouts/${id}`)
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({
        queryKey: ['workouts'],
      })
    },
  })
}
