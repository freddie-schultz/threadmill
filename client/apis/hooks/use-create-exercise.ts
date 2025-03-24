import { useMutation, useQueryClient } from '@tanstack/react-query'
import request from 'superagent'

import { ExerciseData } from '../../../models/exercises.ts'

export default function useCreateExercise() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (newExercise: ExerciseData) => {
      await request.post(`/api/v1/exercises`).send(newExercise)
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({
        queryKey: ['exercises'],
      })
    },
  })
}
