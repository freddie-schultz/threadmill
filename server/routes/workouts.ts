import express from 'express'

import * as db from '../db/functions/workouts.ts'

const router = express.Router()
export default router

router.get('/', async (req, res, next) => {
  try {
    const workouts = await db.getAllWorkouts()
    res.json(workouts)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id)
    const workout = await db.getWorkoutById(id)
    res.json(workout)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newWorkout = req.body
    const response = await db.addWorkout(newWorkout)
    res.status(201).json(response)
  } catch (error) {
    next(error)
  }
})

router.patch('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id)
    const updatedWorkout = req.body
    const response = await db.updateWorkout(id, updatedWorkout)
    res.status(204).json(response)
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id)
    const response = await db.deleteWorkout(id)
    res.status(204).json(response)
  } catch (error) {
    next(error)
  }
})
