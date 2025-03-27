import { useState } from 'react'
import { WorkoutWithExercises } from '../../models/workouts'
import ActiveExercise from './ActiveExercise'

export default function ActiveWorkout(props: WorkoutWithExercises) {
  const [activeExercise, setActiveExercise] = useState(props.exercises[0].id)

  return (
    <div className="flexDiv">
      <div className="flex1">
        {props.exercises.map((exercise) => {
          return (
            <div key={`${exercise.id}1`}>
              <div style={{ height: 50 }} key={`${exercise.id}2`}>
                <span>{exercise.name}</span>
              </div>
              {exercise.id === activeExercise && <ActiveExercise {...exercise} />}
            </div>
          )
        })}
      </div>
      <div className="flex1"></div>
    </div>

    // <table>
    //   <tbody>
    //     {props.exercises.map((exercise) => {
    //       if (exercise.id !== activeExercise) {
    //         return (
    //           <tr key={`tr${exercise.id}`}>
    //             <td key={`td${exercise.id}`}>{exercise.name}</td>
    //           </tr>
    //         )
    //       }

    //       const sets = Array(exercise.sets).fill(null)

    //       return (
    //         <tr key={`tr${exercise.id}`}>
    //           <table key={`subTable${exercise.id}`}>
    //             <tbody>
    //               <tr key={`subTr${exercise.id}`}>
    //                 <td key={`subTd${exercise.id}`}>{exercise.name}</td>
    //               </tr>
    //               {sets.map((e, i) => {
    //                 return (
    //                   <div key={`div${exercise.id}${i}`}>
    //                     <tr key={`subTr${exercise.id}${i}1`}>
    //                       <td key={`subTd${exercise.id}${i}1`}>{`Set ${i + 1}`}</td>
    //                       <td key={`subTd${exercise.id}${i}2`}>{`${exercise.reps} reps`}</td>
    //                       <td key={`subTd${exercise.id}${i}3`}>{`${exercise.weight}kg`}</td>
    //                     </tr>
    //                     <tr key={`subTr${exercise.id}${i}2`}>
    //                       <td key={`subTd${exercise.id}${i}4`}>{`${exercise.breakTime} sec`}</td>
    //                     </tr>
    //                   </div>
    //                 )
    //               })}
    //             </tbody>
    //           </table>
    //         </tr>
    //       )
    //     })}
    //   </tbody>
    // </table>
  )
}
