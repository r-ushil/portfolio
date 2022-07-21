import React from 'react'
import { chakra, Flex, Stack, Text } from '@chakra-ui/react'
import Navbar from '../components/navbar'


interface Props {
    children: React.ReactNode
}

export default function Container({children}: Props) {

  return (
    <>
      <Navbar/>
      <Flex as="main" justifyContent="center" flexDirection="column">
        {children}
      </Flex>
      <Stack alignItems="center" mt={10} mb={5}>
        <Text textAlign="center" fontSize="sm">
          Designed and Developed by Rushil Patel.
          <br />
          Built with{' '}
          <chakra.span fontWeight="semibold" color="button1">
            Next.js
          </chakra.span>
          . Hosted on{' '}
          <chakra.span fontWeight="semibold" color="button1">
            Vercel
          </chakra.span>
          .
        </Text>
      </Stack>
    </>
  )
}