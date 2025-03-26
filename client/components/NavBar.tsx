import navBarElements from '../nav-bar-elements'
import { NavLink } from 'react-router-dom'
import NavBarWorkouts from './NavBarWorkouts'

export default function NavBar() {
  return (
    <div className="flex1">
      <ul>
        {navBarElements.map((e, i) => {
          return (
            <li key={`liIndex${i}`}>
              <NavLink to={e.link} key={`navLinkIndex${i}`}>
                {({ isActive }) => {
                  return isActive ? (
                    <li className="liActive" key={`liIndex${i}`}>
                      {e.name}
                      {e.name === 'Workouts' && <NavBarWorkouts />}
                    </li>
                  ) : (
                    <li key={`liIndex${i}`}>{e.name}</li>
                  )
                }}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
