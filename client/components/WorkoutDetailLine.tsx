import { E } from 'vitest/dist/chunks/reporters.d.CqBhtcTq.js'
import { ExerciseInWorkout } from '../../models/exercises'
import { useDeleteExercise } from '../apis/api'

interface Props extends ExerciseInWorkout {
  handleDelete: (id: number) => void
}

export default function WorkoutDetailLine(props: Props) {
  // const deleteExercise = useDeleteExercise()

  // const handleDelete = () => {
  //   deleteExercise.mutate(props.id)
  // }

  return (
    <table className="workoutDetailText" style={{ marginTop: 5, marginBottom: 15 }}>
      <tbody>
        <tr>
          <td style={{ width: '5vw' }}>{`Sets: ${props.sets}`}</td>
          <td style={{ width: '6vw' }}>{props.timed ? `Time: ${props.reps}s` : `Reps: ${props.reps}`}</td>
          <td style={{ width: '8vw' }}>{!props.timed && `Weight: ${props.weight}kg`}</td>
          <td style={{ width: '11vw' }}>{`Break between sets: ${props.breakTime}s`}</td>

          <td style={{ width: '3vw' }}>
            <button>Edit</button>
          </td>
          <td>
            <button
              onClick={() => {
                props.handleDelete(props.id)
              }}
            >
              Delete
            </button>
          </td>
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
