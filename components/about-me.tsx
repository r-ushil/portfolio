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
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import React, { useEffect, useState } from 'react'
import AboutMeCanvas from './about-me-canvas'
import Ferris from './models/ferris'
import Emoji from './emoji'
import GoPro from './models/gopro'

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

              {' '} In my spare time, I love playing instruments and making travel
              <Link fontSize="display3" color="#3CCF91" onClick={() => { setModelSrc(<GoPro/>) }}> videos</Link>
              . I also enjoy playing league and university cricket and tinkering with fun electronics projects on the side!
              <br/><br/>

              Here are some of the tech frameworks and languages I've experimented with recently:
              <br/><br/>

              <SimpleGrid columns={2}>
              <List spacing={2}>
                <ListItem>
                  <ListIcon as={ChevronRightIcon} color='#3CCF91' />
                  Next.js / React
                </ListItem>
                <ListItem>
                  <ListIcon as={ChevronRightIcon} color='#3CCF91' />
                  Typescript
                </ListItem>
                <ListItem>
                  <ListIcon as={ChevronRightIcon} color='#3CCF91' />
                  C
                </ListItem>
                <ListItem>
                  <ListIcon as={ChevronRightIcon} color='#3CCF91' />
                  gRPC / protobuf
                </ListItem>
                <ListItem>
                  <ListIcon as={ChevronRightIcon} color='#3CCF91' />
                  Prisma
                </ListItem>
            </List>
            <List spacing={2}>
                <ListItem>
                  <ListIcon as={ChevronRightIcon} color='#3CCF91' />
                  Terraform
                </ListItem>
                <ListItem>
                  <ListIcon as={ChevronRightIcon} color='#3CCF91' />
                  Node / Express.js
                </ListItem>
                <ListItem>
                  <ListIcon as={ChevronRightIcon} color='#3CCF91' />
                  Firebase
                </ListItem>
                <ListItem>
                  <ListIcon as={ChevronRightIcon} color='#3CCF91' />
                  Docker
                </ListItem>
                <ListItem>
                  <ListIcon as={ChevronRightIcon} color='#3CCF91' />
                  Rust (
                  <Link fontSize="display3" color="#3CCF91" onClick={() => { setModelSrc(<Ferris />) }}>
                    my current favourite
                  </Link>
                  ).
                </ListItem>
            </List>
              </SimpleGrid>

              


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