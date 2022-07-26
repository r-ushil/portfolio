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

              , and this is some text about{' '}
              Other stuff! 🏀  askjfh aisdj ajshdaj jdhajdha jdhajdhj{' '}
              <Link fontSize="display3" color="#3CCF91" onClick={() => { setModelSrc(<Laptop />) }}>
                click
              </Link>

              {' '}blahblahblah aksdhalksfhsdkla ajsdfhaksjdfh, and also, my favourite programming language is {' '}
              <Link fontSize="display3" color="#3CCF91" onClick={() => { setModelSrc(<Ferris />) }}>
                Rust
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