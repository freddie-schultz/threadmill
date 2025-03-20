import navBarElements from '../nav-bar-elements'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className="flex1">
      <ul>
        {navBarElements.map((e) => {
          return (
            <li>
              <NavLink to={e.link}>{e.name}</NavLink>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
