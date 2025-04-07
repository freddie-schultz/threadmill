import { Box, Center, Flex } from '@chakra-ui/react'

export default function Header() {
  return (
    <>
      <Center marginBottom="3vw">
        <Box
          bgColor="#8893c7"
          borderRadius="1rem"
          border="1px solid black"
          p="5px"
          paddingLeft="50px"
          paddingRight="50px"
        >
          <h1 className="marginAuto fontTektur headerText">The Threadmill</h1>
        </Box>
      </Center>
    </>
  )
}
