import * as Path from 'node:path'

import express from 'express'
import { preprocessCSS } from 'vite'

import workoutsRoutes from './routes/workouts.ts'
import exercisesRoutes from './routes/exercises.ts'

const server = express()

server.use(express.json())
server.use('/api/v1/workouts', workoutsRoutes)
server.use('/api/v1/exercises', exercisesRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.use('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
