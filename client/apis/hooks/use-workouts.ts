import { useQuery } from '@tanstack/react-query'
import request from 'superagent'

export default function useWorkouts() {
  return useQuery({
    queryKey: ['workouts'],
    queryFn: async () => {
      const response = await request.get(`/api/v1/workouts`)
      return response.body
    },
  })
}
