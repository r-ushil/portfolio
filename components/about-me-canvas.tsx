import React from 'react'
import { Fade, Image } from '@chakra-ui/react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

interface AboutModelProps {
    src?: React.ReactNode
}

export default function AboutMeCanvas(props: AboutModelProps) {

    if (props.src) {

        return (
            <Fade in={true}>
                <div style={{ width: "30vw", height: "60vh" }}>
                    <Canvas camera={{ fov: 45, position: [4, 4, 6] }}>
                        <ambientLight intensity={0.1} />
                        <pointLight position={[0, 10, 0]} intensity={1} />
                        <pointLight position={[0, -10, 0]} intensity={0.6} />
                        <pointLight position={[10, 0, 0]} intensity={1} />
                        <pointLight position={[-10, 0, 0]} intensity={1} />

                        {props.src}
                        <OrbitControls />
                    </Canvas>
                </div>
            </Fade>
        )

    } else {
        return (
            <div style={{ width: "30vw", height: "60vh" }}>
                <Image
                    src="/me-3.png"
                    w="100%"
                    maxW={{ base: '400px', lg: '450px' }}
                    maxH={{ base: '400px', lg: '450px' }}
                    alt="Rushil Patel"
                />
            </div>
        )
    }

}