import { useMutation, useQueryClient } from '@tanstack/react-query'
import request from 'superagent'

export default function useDeleteExerciseInWorkout(workoutId: number) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (exerciseId: number) => {
      await request.delete(`/api/v1/workouts/${workoutId}/exercises/${exerciseId}`)
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({
        queryKey: ['workouts'],
      })
    },
  })
}
