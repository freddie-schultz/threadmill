import { useQuery } from '@tanstack/react-query'
import request from 'superagent'

export default function useExerciseData(id: number) {
  return useQuery({
    queryKey: ['exercises', id],
    queryFn: async () => {
      const response = await request.get(`/api/v1/exercises/${id}`)
      return response.body
    },
  })
}
