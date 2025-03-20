import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <>
      <div className="flexDiv">
        <NavBar />
        <div className="flex4">
          <Outlet />
        </div>
      </div>
    </>
  )
}
