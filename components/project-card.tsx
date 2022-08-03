import {
  Text,
  Link,
  Image,
  Heading,
  Flex,
  Box,
  chakra,
  Stack,
} from '@chakra-ui/react'
import {
  FaGithub,
  FaExternalLinkAlt,
} from 'react-icons/fa'


interface ProjectCardProps {
  imageSrc: string,
  title: string,
  desc: string,
  githubLink: string,
  deployLink: string,
  tags: React.ReactNode[],
}

export default function ProjectCard({
  imageSrc,
  title,
  desc,
  githubLink,
  deployLink,
  tags,
}: ProjectCardProps) {

  return (
    <Flex
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        mx="auto"
        rounded="lg"
        shadow="md"
        bg="gray.800"
        maxW="2xl"
      >
        <Image
          roundedTop="lg"
          w="full"
          h={64}
          fit="cover"
          src={imageSrc}
        />

        <Box p={6}>
          <Box>
            <Stack isInline justifyContent="space-between" alignItems="center">
              <Text
                display="block"
                color="displayColor"
                fontWeight="bold"
                fontSize="2xl"
                mt={2}
                _hover={{ color: "gray.600", textDecor: "underline" }}
              >
                {title}
              </Text>

              <Stack
                isInline
                justifyContent="flex-end"
                alignItems="center"
                spacing={4}
              >
                {githubLink && (
                  <Link
                    href={githubLink}
                    color="white"
                    isExternal
                  >
                    <FaGithub size={23} />
                  </Link>
                )}
                {deployLink && (
                  <Link
                    href={deployLink}
                    color="white"
                    isExternal
                  >
                    <FaExternalLinkAlt size={20} />
                  </Link>
                )}
              </Stack>
            </Stack>

            <chakra.p
              mt={2}
              fontSize="md"
              color="gray.600"
            >
              {desc}
            </chakra.p>
          </Box>
          <br/>
          <Box>
          <Stack isInline>{tags}</Stack>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}

