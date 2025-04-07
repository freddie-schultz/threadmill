import navBarElements from '../nav-bar-elements'
import { Link, NavLink, To, useNavigate } from 'react-router-dom'
import NavBarWorkouts from './NavBarWorkouts'
import React, { SyntheticEvent, useState } from 'react'
import { Button, Flex, HStack, VStack } from '@chakra-ui/react'

export default function NavBar() {
  const navigate = useNavigate()
  const [selectedUrl, setSelectedUrl] = useState(navBarElements[0].link)

  const handleNavigate = (url: string) => {
    setSelectedUrl(url)
    navigate(url)
  }

  return (
    <>
      <VStack>
        {navBarElements.map((e, i) => {
          return (
            <Flex>
              {e.link == selectedUrl ? (
                <Button
                  id={e.link}
                  bgColor="#8190D1"
                  _hover={{ bg: '#8190D1' }}
                  fontSize="2vw"
                  fontWeight="bold"
                  p="2vw"
                  m="0.5vw"
                  onClick={() => {
                    handleNavigate(e.link)
                  }}
                >
                  {e.name}
                </Button>
              ) : (
                <Button
                  id={e.link}
                  bgColor="#b3bdec"
                  _hover={{ bg: '#b3bdec' }}
                  fontSize="2vw"
                  fontWeight="bold"
                  p="2vw"
                  m="0.5vw"
                  onClick={() => {
                    handleNavigate(e.link)
                  }}
                >
                  {e.name}
                </Button>
              )}
            </Flex>
          )
        })}
      </VStack>
    </>
  )
}
