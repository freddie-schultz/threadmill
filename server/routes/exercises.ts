import express from 'express'

import * as db from '../db/functions/exercises.ts'

const router = express.Router()
export default router

router.get('/', async (req, res, next) => {
  try {
    const exercises = await db.getAllExercises()
    res.json(exercises)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id)
    const exercise = await db.getExerciseById(id)
    res.json(exercise)
  } catch (error) {
    next(error)
  }
})

router.get('/workout/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id)
    const exercises = await db.getExercisesByWorkoutId(id)
    res.json(exercises)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newExercise = req.body
    const response = await db.addExercise(newExercise)
    res.status(201).json(response)
  } catch (error) {
    next(error)
  }
})

router.patch('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id)
    const updatedExercise = req.body
    const response = await db.updateExercise(id, updatedExercise)
    res.status(204).json(response)
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id)
    const response = await db.deleteExercise(id)
    res.status(204).json(response)
  } catch (error) {
    next(error)
  }
})
