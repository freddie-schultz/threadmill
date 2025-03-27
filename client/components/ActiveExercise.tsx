import React from 'react'
import { ExerciseInWorkout } from '../../models/exercises'

export default function ActiveExercise(props: ExerciseInWorkout) {
  const numSets = Array(props.sets).fill(null)

  return (
    <table>
      <tbody>
        {numSets.map((e, i) => {
          return (
            <React.Fragment>
              <tr>
                <td>{`Set ${i + 1}`}</td>
                <td>{`${props.reps} reps`}</td>
                <td>{`${props.weight}kg`}</td>
              </tr>
              <tr>
                <td>{`${props.breakTime} sec`}</td>
              </tr>
            </React.Fragment>
          )
        })}
      </tbody>
    </table>
  )
}
