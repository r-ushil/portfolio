import { Stack, Box, SlideFade, Image, Text, Heading, Link, Button, HStack } from '@chakra-ui/react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import Emoji from '../emoji'
import TextLoop from '../text-loop'

export default function Intro() {
    return (
        <Stack spacing={10} justifyContent="flex-start" alignItems="flex-start">
        <SlideFade
          in={true}
          transition={{ enter: { duration: 0.4, delay: 0.7 } }}>
          
          <Box position="relative">
            <Text
              color="button1"
              fontSize="display2"
              fontWeight="medium"
              position="relative"
              zIndex={1}
            >
              Hey there, I'm-
            </Text>
          </Box>
          <Heading
            fontSize="display"
            lineHeight={'95%'}
            color="displayColor"
            letterSpacing={{ sm: '-1.2px', md: '-1.8px' }}
            position="relative"
            zIndex={1}
          >
            Rushil Patel.
          </Heading>
        </SlideFade>

        <SlideFade
          in={true}
          transition={{ enter: { duration: 0.4, delay: 0.8 } }}
        >
          <Heading
            color="textSecondary"
            fontSize="display2"
            fontWeight="medium"
            whiteSpace="pre-wrap"
            letterSpacing="-1.6px"
          >
              <Box color="displayColor" as="span">Computing Student. </Box>
              An aspiring developer who loves{'\n'}spending his time{' '}
              <TextLoop texts={["experimenting with frameworks.", "playing cricket.", "learning instruments.", "tinkering with electronics."]} interval={3000}/>
             
  
          </Heading>
        </SlideFade>

        <SlideFade
          in={true}
          transition={{ enter: { duration: 0.4, delay: 0.9 } }}
        >
          <Text fontSize="display3" color="textSecondary">
            <Emoji symbol='💻' label='laptop'/> Year 3 MEng Computing Student at {' '}
            <Link
                  isExternal
                  href={"https://www.imperial.ac.uk/"}
                >
                  Imperial College London
                </Link>
          </Text>           

          <Text fontSize="display3" color="textSecondary">
            <Emoji symbol='🚀' label='rocket'/> Enterprise Architecture Intern at {' '}
            <Link
                  isExternal
                  href={"https://www.globalpayments.com/"}
                >
                  Global Payments
                </Link>
                .
          </Text>
        </SlideFade>
        <SlideFade
          in={true}
          transition={{ enter: { duration: 0.4, delay: 1.0 } }}
        >
          <Stack isInline spacing={4}>
            <Link href="https://github.com/r-ushil" isExternal>
              <Button
                leftIcon={<FaGithub color="#3CCF91" />}
                position="static"
                size='md'
                color="white"
                bg="#151415"
              >
                Github
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/rushil791" isExternal>
              <Button
                leftIcon={<FaLinkedin color="#3CCF91" />}
                position="static"
                size='md'
                color="white"
                bg="#151415"
              >
                LinkedIn
              </Button>
            </Link>
            <Link href="mailto:rushil.patel20@imperial.ac.uk" isExternal>
              <Button
                leftIcon={<FaEnvelope fill="#3CCF91" />}
                transition="0.3s"
                position="static"
                size='md'
                color="white"
                bg="#151415"
              >
                Email
              </Button>
            </Link>
          </Stack>
        </SlideFade>
      </Stack>
    )
}