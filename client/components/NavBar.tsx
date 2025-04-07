import navBarElements from '../nav-bar-elements'
import { Link, NavLink } from 'react-router-dom'
import NavBarWorkouts from './NavBarWorkouts'
import React, { SyntheticEvent, useState } from 'react'

export default function NavBar() {
  return (
    <div className="flex1 navBarText">
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
