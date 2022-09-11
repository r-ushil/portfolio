import React from 'react'
import {
  Button,
  Flex,
  Box,
  Text,
  Slide,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import styled from '@emotion/styled'

export default function Navbar() {
  const Bracket = styled.span`
    color: #8f9094;
    font-weight: 600;
  `

  return (
    <Box>
      <Slide
        direction="top"
        in={true}
        style={{background: "black"}}
      >
        <Flex
          as="nav"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          px="3vw"
          py="3"
          borderBottom="0.5px solid #1e2029"
          background="black"
        >
          <NextLink href="/" passHref>
            <Text
              cursor="pointer"
              color="displayColor"
              fontWeight="bold"
              fontSize="32px"
            >
              <Bracket>&#123;</Bracket>R<Bracket>&#125;</Bracket>
            </Text>
          </NextLink>
          <Box color="textSecondary">
              <NextLink href="/" passHref>
              <Button as="a" variant="ghost" p="4" ml="3vw" fontSize="16px">
                  Home
              </Button>
              </NextLink>
              <NextLink href="/projects" passHref>
              <Button as="a" variant="ghost" p="4" ml="3vw" fontSize="16px">
                  Projects
              </Button>
              </NextLink>
              <NextLink href="/blog" passHref>
              <Button as="a" variant="ghost" p="4" ml="3vw" fontSize="16px">
                  Blog
              </Button>
              </NextLink>{' '}
          </Box>
        </Flex>
      </Slide>
    </Box>
  )
}