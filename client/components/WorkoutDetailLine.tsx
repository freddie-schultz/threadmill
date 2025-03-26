import { E } from 'vitest/dist/chunks/reporters.d.CqBhtcTq.js'
import { ExerciseInWorkout } from '../../models/exercises'

export default function WorkoutDetailLine(props: ExerciseInWorkout) {
  return (
    <table style={{ fontSize: 12, marginTop: 5, marginBottom: 15 }} key={`table${props.id}`}>
      <tbody key={`tbody${props.id}`}>
        <tr key={`tr${props.id}`}>
          <td style={{ width: 70 }} key={`tdSets${props.id}`}>{`Sets: ${props.sets}`}</td>
          <td style={{ width: 80 }} key={`tdReps${props.id}`}>
            {props.timed ? `Time: ${props.reps}s` : `Reps: ${props.reps}`}
          </td>
          <td style={{ width: 100 }} key={`tdWeight${props.id}`}>
            {!props.timed && `Weight: ${props.weight}kg`}
          </td>
          <td key={`tdBreak${props.id}`}>{`Break between sets: ${props.breakTime}s`}</td>
        </tr>
      </tbody>
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
