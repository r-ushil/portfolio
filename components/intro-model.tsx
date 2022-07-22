import { OrbitControls } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import { Suspense } from 'react'
import Mustang from './mustang'




export default function IntroScene() {
    return (
        <div style={{ width: "35vw", height: "50vh" }}>
            <Canvas camera={{ fov: 45, position: [3, 3, 5] }}>
                <ambientLight intensity={0.1} />
                <pointLight position={[0, 10, 0]} intensity={1} />
                <pointLight position={[10, 0, 0]} intensity={1} />
                <pointLight position={[0, 0, 10]} intensity={1} />

                <Mustang/>
                <OrbitControls />
            </Canvas>
        </div>
    )
  }
  