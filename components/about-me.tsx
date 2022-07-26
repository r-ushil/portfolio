import {
  Text,
  Heading,
  Flex,
  VStack,
  HStack,
  Button,
  Link,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import AboutMeCanvas from './about-me-canvas'
import Laptop from './models/laptop'
import Ferris from './models/ferris'
import Emoji from './emoji'
import Piano from './models/piano'
import GoPro from './models/gopro'
import Capacitor from './models/capacitor'

export default function AboutMe() {

  // default display item - set as picture of me

  const [modelSrc, setModelSrc] = useState<React.ReactNode>(null)
  const [modelCanvas, setModelCanvas] = useState<React.ReactNode>()

  useEffect(() => {

    setModelCanvas(AboutMeCanvas({ src: modelSrc }))

  }, [modelSrc])

  return (
    <>
      <VStack spacing={4} justifyContent="left" alignItems="flex-start">
        <Heading color={"displayColor"}>
          About Me ⚡
        </Heading>
        <HStack spacing="200px" justifyContent="center" alignItems="flex-start">

          <VStack spacing={4} justifyContent="left" alignItems="flex-start">
            <Text
              fontSize="display3" color="textSecondary">

              Hey! I'm {' '}
              <Link fontSize="display3" color="#3CCF91" onClick={() => { setModelSrc(null) }}>
                Rushil Patel
              </Link>

              {' '}and I'm an aspiring full-stack developer based in Crawley, West Sussex. I'm currently studying Computing at Imperial College London {' '}
              <Emoji symbol='🎓' label='uni-hat'/>
              <br/><br/>


              {' '} I've had the priviledge of working with both a {' '}
              <Link isExternal href={"https://cub3.com/"}> start-up </Link>
              and a {' '}
              <Link isExternal href={"https://www.globalpayments.com/"}> large corporation</Link>
              , allowing me to explore the Web3 and Payments industries respectively.
              <br/><br/>

              {' '} In my spare time, I love playing instruments, particularly the{' '}
              <Link fontSize="display3" color="#3CCF91" onClick={() => { setModelSrc(<Piano/>) }}> piano</Link>
              . I also enjoy playing league and university cricket, as well as{' '}
              <Link fontSize="display3" color="#3CCF91" onClick={() => { setModelSrc(<GoPro/>) }}> videography </Link>
              and tinkering with fun electronics projects on the side!
              <br/><br/>


              {' '}Also, my favourite programming language is {' '}
              <Link fontSize="display3" color="#3CCF91" onClick={() => { setModelSrc(<Ferris />) }}>
                Rust.
              </Link>


            </Text>
          </VStack>

          <Flex alignItems="center" justifyContent="center" position="relative">
            {modelCanvas}
          </Flex>

        </HStack>
      </VStack>
    </>
  )
}