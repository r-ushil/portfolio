import {
    Text,
    Heading,
    Image,
    Flex,
    chakra,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    PopoverArrow,
    VStack,
    HStack,
  } from '@chakra-ui/react'


  interface MoreInfoProps {
    text: string,
    content: React.ReactNode,
  }
  
  export default function AboutMe() {

    const MoreInfo = (props: MoreInfoProps) => {
      return (
        <div>
          <Popover
            trigger="hover"
            placement={'right'}
          >
            <PopoverTrigger>
              <chakra.span
                color="button1"
                cursor="help"
              >
                {props.text}
              </chakra.span>
            </PopoverTrigger>
            <PopoverContent bg="secondary" borderColor="button1" color="white">
              <PopoverArrow bg="textSecondary" />
              <PopoverBody fontSize="sm" color="textPrimary">
                {props.content}
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </div>
      )
    }
  
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
              
                  Hey! I'm Rushil Patel, and this is some text about{' '}
                  Other stuff! 🏀 blahblahblah aksdhalksfhsdkla ajsdfhaksjdfh askjfh aisdj ajshdaj jdhajdha jdhajdhj 
            
            </Text>
          </VStack>

          <Flex alignItems="center" justifyContent="center" position="relative">
            <div style={{ width: "30vw", height: "60vh" }}>
              <Image
                  src="/me-3.png"
                  w="100%"
                  maxW={{ base: '400px', lg: '450px' }}
                  maxH={{ base: '400px', lg: '450px' }}
                  alt="Rushil Patel"
                />        
            </div>
          </Flex>
              
          </HStack>
        </VStack>
      </>
    )
  }