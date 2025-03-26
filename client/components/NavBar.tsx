import navBarElements from '../nav-bar-elements'
import { Link, NavLink } from 'react-router-dom'
import NavBarWorkouts from './NavBarWorkouts'
import React, { SyntheticEvent, useState } from 'react'

export default function NavBar() {
  const [selectedOption, setSelectedOption] = useState('home')

  // return (
  //   <div className="flex1">
  //     <ul>
  //       <li>
  //         <NavLink to="/">Home</NavLink>
  //       </li>
  //       <li>
  //         <NavLink to="/workouts">Workouts</NavLink>
  //       </li>
  //       <li>
  //         <NavLink to="/stats">Stats</NavLink>
  //       </li>
  //     </ul>
  //   </div>
  // )

  return (
    <div className="flex1">
      <ul>
        {navBarElements.map((e, i) => {
          return (
            <NavLink to={e.link} key={`navLinkIndex${i}`}>
              {({ isActive }) => {
                return isActive ? (
                  <li className="liActive" key={`liIndex${i}`}>
                    {e.name}
                  </li>
                ) : (
                  <li key={`liIndex${i}`}>{e.name}</li>
                )
              }}
            </NavLink>
          )
        })}
      </ul>
    </div>
  )
}
