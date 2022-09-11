import React from 'react'
import { Fade, Image, Box } from '@chakra-ui/react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

interface AboutModelProps {
    src?: React.ReactNode
}

export default function AboutMeCanvas(props: AboutModelProps) {

    if (props.src) {

        return (
            <Fade in={true}>
                <Box w={['65vw', '30vw']} h={['50vh', '60vh']}>
                    <Canvas camera={{ fov: 45, position: [4, 4, 6] }}>
                        <ambientLight intensity={0.1} />
                        <pointLight position={[0, 10, 0]} intensity={1} />
                        <pointLight position={[0, -10, 0]} intensity={0.6} />
                        <pointLight position={[10, 0, 0]} intensity={1} />
                        <pointLight position={[-10, 0, 0]} intensity={1} />

                        {props.src}
                        <OrbitControls />
                    </Canvas>
                </Box>
            </Fade>
        )

    } else {
        return (
            <Box w={['65vw', '30vw']} h={['50vh', '60vh']}>
                <Image
                    src="/me-3.png"
                    w="100%"
                    maxW={{ base: '400px', lg: '450px', sm: '65vw' }}
                    maxH={{ base: '400px', lg: '450px', sm: '50vh' }}
                    alt="Rushil Patel"
                />
            </Box>
        )
    }

}