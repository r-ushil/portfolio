import { HStack, Stack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Container from '../components/container'
import Intro from '../components/intro'
import IntroScene from '../components/intro-model'

const Home: NextPage = () => {
  return (
        <Container>
          <Stack
              as="main"
              spacing="144px"
              justifyContent="center"
              alignItems="flex-start"
              px={{ base: '5vw', md: '7.5vw' }}
              mt={{ base: '15vh', md: '22.5vh' }}
            >
            <HStack justifyContent="center" alignItems="flex-start">
              <Intro />
              <IntroScene />
            </HStack>
              
            </Stack>
      </Container>
  )
}

export default Home
