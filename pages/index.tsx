import { Container, Stack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Intro from '../components/intro'

const Home: NextPage = () => {
  return (
    <Stack
        as="main"
        spacing="144px"
        justifyContent="center"
        alignItems="flex-start"
        px={{ base: '5vw', md: '10vw' }}
        mt={{ base: '15vh', md: '22.5vh' }}
      >
        <Intro />
      </Stack>
  )
}

export default Home
