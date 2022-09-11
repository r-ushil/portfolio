import {
  Text,
  Heading,
  Flex,
  VStack,
  HStack,
  Link,
  SimpleGrid,
  List,
  ListItem,
  ListIcon,
  Wrap,
  Box,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import React, { useEffect, useState } from 'react'
import AboutMeCanvas from '../about-me-canvas'
import Ferris from '../models/ferris'
import Emoji from '../emoji'
import GoPro from '../models/gopro'

export default function AboutMe() {

  // default display item - set as picture of me

  const [modelSrc, setModelSrc] = useState<React.ReactNode>(null)
  const [modelCanvas, setModelCanvas] = useState<React.ReactNode>()

  useEffect(() => {

    setModelCanvas(AboutMeCanvas({ src: modelSrc }))

  }, [modelSrc])

  return (
    <>
        <Wrap spacing={["100px", "200px"]} justify={["center", "left"]} align="center">
          <Box w={['85vw', '42.5vw']}>
            <VStack spacing={4} justifyContent="left" alignItems="flex-start">
              <Heading color={"displayColor"}>
                About Me ⚡
              </Heading>
              <Text fontSize="display3" color="textSecondary">

                Hey! I'm {' '}
                <Link fontSize="display3" color="#3CCF91" onClick={() => { setModelSrc(null) }}>
                  Rushil Patel
                </Link>

                {' '}and I'm an aspiring full-stack developer based in Crawley, West Sussex. I'm currently studying Computing at Imperial College London {' '}
                <Emoji symbol='🎓' label='uni-hat' />
                <br /><br />


                {' '} I've had the priviledge of working with both a {' '}
                <Link isExternal href={"https://cub3.com/"}> start-up </Link>
                and a {' '}
                <Link isExternal href={"https://www.globalpayments.com/"}> large corporation</Link>
                , allowing me to explore the Web3 and Payments industries respectively.
                <br /><br />

                {' '} In my spare time, I love playing instruments and making travel
                <Link fontSize="display3" color="#3CCF91" onClick={() => { setModelSrc(<GoPro />) }}> videos</Link>
                . I also enjoy playing league and university cricket and tinkering with fun electronics projects on the side!
                <br /><br />

                Here are some of the tech frameworks and languages I've experimented with recently:
                <br /><br />
              </Text>
              <SimpleGrid columns={2}>

                <List spacing={2}>
                  <ListItem fontSize="display3" color="textSecondary">
                    <ListIcon as={ChevronRightIcon} color='#3CCF91' />
                    Next.js / React
                  </ListItem>
                  <ListItem fontSize="display3" color="textSecondary">
                    <ListIcon as={ChevronRightIcon} color='#3CCF91' />
                    Typescript
                  </ListItem>
                  <ListItem fontSize="display3" color="textSecondary">
                    <ListIcon as={ChevronRightIcon} color='#3CCF91' />
                    C
                  </ListItem>
                  <ListItem fontSize="display3" color="textSecondary">
                    <ListIcon as={ChevronRightIcon} color='#3CCF91' />
                    Go
                  </ListItem>
                  <ListItem fontSize="display3" color="textSecondary">
                    <ListIcon as={ChevronRightIcon} color='#3CCF91' />
                    Protobuf
                  </ListItem>
                </List>

                <List spacing={2} as='span'>
                  <ListItem fontSize="display3" color="textSecondary">
                    <ListIcon as={ChevronRightIcon} color='#3CCF91' />
                    Terraform
                  </ListItem>
                  <ListItem fontSize="display3" color="textSecondary">
                    <ListIcon as={ChevronRightIcon} color='#3CCF91' />
                    GitHub Actions
                  </ListItem>
                  <ListItem fontSize="display3" color="textSecondary">
                    <ListIcon as={ChevronRightIcon} color='#3CCF91' />
                    Kubernetes
                  </ListItem>
                  <ListItem fontSize="display3" color="textSecondary">
                    <ListIcon as={ChevronRightIcon} color='#3CCF91' />
                    Docker
                  </ListItem>
                  <ListItem fontSize="display3" color="textSecondary">
                    <ListIcon as={ChevronRightIcon} color='#3CCF91' />
                    Rust (
                    <Link fontSize="display3" color="#3CCF91" onClick={() => { setModelSrc(<Ferris />) }}>
                      my current favourite
                    </Link>
                    ).
                  </ListItem>
                </List>
              </SimpleGrid>

            </VStack>
          </Box>

          <Flex alignItems="center" justifyContent="center" position="relative">
            {modelCanvas}
          </Flex>

        </Wrap>
    </>
  )
}