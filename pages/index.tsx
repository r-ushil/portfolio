import { Wrap, Stack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import AboutMe from '../components/sections/about-me'
import Container from '../components/sections/container'
import Intro from '../components/sections/intro'
import IntroScene from '../components/intro-model'
import Projects from '../components/sections/projects'

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
            <Wrap spacing="100px" justifyContent="center" alignItems="flex-start">
              <Intro />
              <IntroScene />
            </Wrap>
            
            <AboutMe />
            
            <Projects />
            </Stack>
      </Container>
  )
}

export default Home
