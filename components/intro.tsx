import { Stack, Box, SlideFade, Image, Text, Heading, Link, Button } from '@chakra-ui/react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Intro() {
    return (
        <Stack spacing={10} justifyContent="flex-start" alignItems="flex-start">
        <SlideFade
          //direction="top"
          in={true}
          transition={{ enter: { duration: 0.4, delay: 0.7 } }}>
          
          <Box position="relative">
            {/* <Image
              src="https://svgsilh.com/svg/26432.svg"
              filter="invert(0.1)"
              w={{ base: '70px', md: '150px' }}
              position="absolute"
              top={{ base: '0', md: '-15' }}
              left={{ base: '-5', md: '-10' }}
              zIndex={0}
              alt=""
            ></Image> */}
            <Text
              color="button1"
              fontSize="display2"
              fontWeight="medium"
              position="relative"
              zIndex={1}
            >
              Hey there!, I'm-
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
          //direction="top"
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
            <Box color="displayColor" as="span">
              Computer Science Student
            </Box>
            { ' ' }
            &amp;&amp; some other things.
          </Heading>
        </SlideFade>

        {/* <SlideFade
          //direction="top"
          in={true}
          transition={{ enter: { duration: 0.4, delay: 0.9 } }}
        >
          <Text fontSize="display3" color="textSecondary">
            <Stack isInline spacing={1}>
              <Box></Box>
              <Box>
                Some description about current company: <br />
                <Link
                  isExternal
                  href={"https://www.globalpayments.com/"}
                >
                  Global Payments
                </Link>
                .
              </Box>
            </Stack>
          </Text>
        </SlideFade> */}
        <SlideFade
          //direction="top"
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
                bg="slategray"
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
                bg="slategray"
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
                bg="slategray"
              >
                Email
              </Button>
            </Link>
          </Stack>
        </SlideFade>
      </Stack>
    )
}