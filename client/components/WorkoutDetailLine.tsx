import { E } from 'vitest/dist/chunks/reporters.d.CqBhtcTq.js'
import { ExerciseInWorkout } from '../../models/exercises'

export default function WorkoutDetailLine(props: ExerciseInWorkout) {
  return (
    <table style={{ fontSize: 12, marginTop: 5, marginBottom: 15 }}>
      <tr>
        <td style={{ width: 70 }}>{`Sets: ${props.sets}`}</td>
        <td style={{ width: 80 }}>{props.timed ? `Time: ${props.reps}s` : `Reps: ${props.reps}`}</td>
        <td style={{ width: 100 }}>{!props.timed && `Weight: ${props.weight}kg`}</td>
        <td>{`Break between sets: ${props.breakTime}s`}</td>
      </tr>
    </table>
  )

  // return (
  //   <ul>
  //     <li style={{ fontSize: 12 }}>
  //       {`Sets: ${props.sets}`}
  //       <span className="bigSpace" />
  //       {`Reps: ${props.reps}`}
  //       <span className="bigSpace" />
  //       {`Weight: ${props.weight}kg`}
  //       <span className="bigSpace" />
  //       {`Break between sets: ${props.breakTime}s`}
  //     </li>
  //   </ul>
  // )
}
