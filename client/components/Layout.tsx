import { Outlet } from 'react-router-dom'
import Header from './Header.tsx'
import NavBar from './NavBar.tsx'
import App from './App.tsx'
import Footer from './Footer.tsx'

export default function Layout() {
  return (
    <>
      <Header />
      <App />
      <Footer />
    </>
  )
}
