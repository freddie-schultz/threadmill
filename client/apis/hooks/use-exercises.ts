import { useQuery } from '@tanstack/react-query'
import request from 'superagent'

export default function useExercises() {
  return useQuery({
    queryKey: ['exercises'],
    queryFn: async () => {
      const response = await request.get(`/api/v1/exercises`)
      return response.body
    },
  })
}
