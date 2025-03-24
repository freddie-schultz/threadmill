import { useMutation, useQueryClient } from '@tanstack/react-query'
import request from 'superagent'

import { ExerciseData } from '../../../models/exercises.ts'

export default function useEditExercise(id: number) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (updatedExercise: ExerciseData) => {
      await request.patch(`/api/v1/exercises/${id}`).send(updatedExercise)
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({
        queryKey: ['exercises'],
      })
    },
  })
}
