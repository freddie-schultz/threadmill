import { useState } from 'react'
import { WorkoutWithExercises } from '../../models/workouts'

export default function ActiveWorkout(props: WorkoutWithExercises) {
  const [activeExercise, setActiveExercise] = useState(props.exercises[0].id)

  return (
    <table>
      <tbody>
        {props.exercises.map((exercise) => {
          const sets = Array(exercise.sets).fill(null)

          if (exercise.id !== activeExercise) {
            return
          }

          return (
            <tr key={exercise.id}>
              <table>
                <tr>{exercise.name}</tr>
                {sets.map((e, i) => {
                  return (
                    <>
                      <tr>
                        <td>{`Set ${i + 1}`}</td>
                        <td>{`${exercise.reps} reps`}</td>
                        <td>{`${exercise.weight}kg`}</td>
                      </tr>
                      <tr>
                        <td>{`${exercise.breakTime} sec`}</td>
                      </tr>
                    </>
                  )
                })}
              </table>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
