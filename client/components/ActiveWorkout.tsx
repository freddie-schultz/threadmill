import { useState } from 'react'
import { WorkoutWithExercises } from '../../models/workouts'

export default function ActiveWorkout(props: WorkoutWithExercises) {
  const [activeExercise, setActiveExercise] = useState(props.exercises[0].id)

  return (
    <table>
      <tbody>
        {props.exercises.map((exercise) => {
          if (exercise.id !== activeExercise) {
            return (
              <tr>
                <td>{exercise.name}</td>
              </tr>
            )
          }

          const sets = Array(exercise.sets).fill(null)

          return (
            <tr key={exercise.id}>
              <table>
                <tr>
                  <td>{exercise.name}</td>
                </tr>
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
