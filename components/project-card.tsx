import {
    Text,
    Stack,
    Divider,
    Link,
    ScaleFade,
    Image,
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
  } : ProjectCardProps) {

    return (
      <Stack
        bg="secondary"
        borderRadius="10px"
        minH="320px"
        maxH="500px"
        border="1px"
        borderColor={{ base: '#333', md: 'borderColor' }}
      >
        <ScaleFade in={true}>
          <Image
            width={1250}
            height={600}
            w="auto"
            h="auto"
            src={imageSrc}
            alt="project image"
          ></Image>
          <Stack px={4} py={2}>
            <Stack isInline justifyContent="space-between" alignItems="center">
              <Text fontFamily="Ubuntu" fontSize="2xl" color="displayColor">
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
            <Stack isInline>{tags}</Stack>
            <Divider />
            <Text color="textSecondary" fontSize={['sm', 'md']}>
              {desc}
            </Text>
          </Stack>
        </ScaleFade>
      </Stack>
    )
  }