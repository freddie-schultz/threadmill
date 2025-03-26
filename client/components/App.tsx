import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <>
      <div className="flexDiv" style={{ marginBottom: 50 }}>
        <div className="flex1">
          <NavBar />
        </div>
        <div className="flex4 appOutlet">
          <Outlet />
        </div>
      </div>
    </>
  )
}
