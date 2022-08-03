import {
  Link,
  Stack,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Box,
} from '@chakra-ui/layout'
import { VStack, Wrap, WrapItem } from '@chakra-ui/react'
import ProjectCard from '../project-card'
import { getTags, ProjectTags } from '../project-tags'

export default function Projects() {

  return (
    <>
      <VStack spacing={4} justifyContent="left" alignItems="flex-start">
        <Heading color={"displayColor"}>
          Creative Works ⚙️
        </Heading>

        <Text fontSize="display3" color="textSecondary">
          Here are some of the projects I've worked on.
        </Text>

      </VStack>

      <Box>
        <SimpleGrid columns={2} spacing={150} justifyContent="center" alignItems="flex-start">

          <ProjectCard
            imageSrc={'/me-square.png'}
            title={'Test Title'}
            desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie\
              parturient et sem ipsum volutpat vel. Natoque sem et aliquam\
              mauris egestas quam volutpat viverra. In pretium nec senectus\
              erat. Et malesuada lobortis.'}
            githubLink={'www.google.com'}
            deployLink={'www.bbc.co.uk'}
            tags={
              getTags([ProjectTags.REACT, ProjectTags.RUST])
            }
          />

          <ProjectCard
            imageSrc={'/me-square.png'}
            title={'Test Title'}
            desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie\
              parturient et sem ipsum volutpat vel. Natoque sem et aliquam\
              mauris egestas quam volutpat viverra. In pretium nec senectus\
              erat. Et malesuada lobortis."}
            githubLink={'www.google.com'}
            deployLink={'www.bbc.co.uk'}
            tags={
              getTags([ProjectTags.REACT, ProjectTags.RUST])
            }
          />
        </SimpleGrid>
      </Box>
    </>
  )
}