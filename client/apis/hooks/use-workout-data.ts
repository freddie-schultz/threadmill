import { useQuery } from '@tanstack/react-query'
import request from 'superagent'

export default function useWorkoutData(id: number) {
  return useQuery({
    queryKey: ['workouts', id],
    queryFn: async () => {
      const response = await request.get(`/api/v1/workouts/${id}`)
      return response.body
    },
  })
}
