import Header from './Header.tsx'
import App from './App.tsx'
import Footer from './Footer.tsx'
import { Box } from '@chakra-ui/react'

export default function Layout() {
  return (
    <>
      <Box bgColor="#ced4f0" height="100vw">
        <Header />
        <App />
        <Footer />
      </Box>
    </>
  )
}
