import { Stack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Container from '../components/container'
import Intro from '../components/intro'

const Home: NextPage = () => {
  return (
        <Container>
          <Stack
              as="main"
              spacing="144px"
              justifyContent="center"
              alignItems="flex-start"
              px={{ base: '5vw', md: '6vw' }}
              mt={{ base: '15vh', md: '22.5vh' }}
            >
              <Intro />
            </Stack>
      </Container>
  )
}

export default Home
