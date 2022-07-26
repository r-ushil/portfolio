import { HStack, Stack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import AboutMe from '../components/sections/about-me'
import Container from '../components/sections/container'
import Intro from '../components/sections/intro'
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
              mt={{ base: '17.5vh', md: '22.5vh' }}
            >
            <HStack spacing="100px" justifyContent="center" alignItems="flex-start">
              <Intro />
              <IntroScene />
            </HStack>
            
            <AboutMe />

            </Stack>
      </Container>
  )
}

export default Home
