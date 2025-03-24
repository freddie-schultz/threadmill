import navBarElements from '../nav-bar-elements'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className="flex1">
      <ul>
        {navBarElements.map((e, i) => {
          return (
            <li key={`liIndex${i}`}>
              <NavLink to={e.link} key={`navLinkIndex${i}`}>
                {e.name}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
