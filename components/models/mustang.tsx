        
import * as THREE from 'three'
import React, { useRef  } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from "three-stdlib"
import { useFrame } from '@react-three/fiber'
        
type GLTFResult = GLTF & {
    nodes: {
      Cube: THREE.Mesh,
      Cube_1: THREE.Mesh,
      Cube_2: THREE.Mesh,
      Cube_3: THREE.Mesh,
      Cube_4: THREE.Mesh,
      Cube_5: THREE.Mesh,
      Cube_6: THREE.Mesh,
      Plane015: THREE.Mesh,
      Plane015_1: THREE.Mesh,
      Plane015_2: THREE.Mesh,
      Plane015_3: THREE.Mesh,
      Plane015_4: THREE.Mesh,
      Plane015_5: THREE.Mesh,
      Plane015_6: THREE.Mesh
      
    }
    materials: {
      Calip: THREE.MeshPhysicalMaterial,Disk_Metal: THREE.MeshStandardMaterial,
      Disk_Black: THREE.MeshStandardMaterial,
      Tyre: THREE.MeshStandardMaterial,
      Tyre_back_cover: THREE.MeshStandardMaterial,['Wheel.001']: THREE.MeshStandardMaterial,
      Wheel_bolts: THREE.MeshStandardMaterial,['Car body']: THREE.MeshPhysicalMaterial,['Car body black 1']: THREE.MeshStandardMaterial,
      Window: THREE.MeshStandardMaterial,['Car body black 2']: THREE.MeshStandardMaterial,['Fog light']: THREE.MeshStandardMaterial,
      Headlight: THREE.MeshStandardMaterial,['Rear light']: THREE.MeshStandardMaterial
    }
}


export default function Model({ ...props }: JSX.IntrinsicElements['group']) {
    const group = useRef<THREE.Group>(null)
    const { nodes, materials } = useGLTF('/models/Mustang.glb') as GLTFResult
    useFrame(() => (group!.current!.rotation.y += 0.01));

    return (
            <group ref={group} {...props} dispose={null}>
            <mesh castShadow receiveShadow geometry={nodes.Cube.geometry} material={materials.Calip}   />
            <mesh castShadow receiveShadow geometry={nodes.Cube_1.geometry} material={materials.Disk_Metal}   />
            <mesh castShadow receiveShadow geometry={nodes.Cube_2.geometry} material={materials.Disk_Black}   />
            <mesh castShadow receiveShadow geometry={nodes.Cube_3.geometry} material={materials.Tyre}   />
            <mesh castShadow receiveShadow geometry={nodes.Cube_4.geometry} material={materials.Tyre_back_cover}   />
            <mesh castShadow receiveShadow geometry={nodes.Cube_5.geometry} material={materials['Wheel.001']}   />
            <mesh castShadow receiveShadow geometry={nodes.Cube_6.geometry} material={materials.Wheel_bolts}   />
            <group position={[0, 0.8, 1.6,]}   >
            <mesh castShadow receiveShadow geometry={nodes.Plane015.geometry} material={materials['Car body']}   />
            <mesh castShadow receiveShadow geometry={nodes.Plane015_1.geometry} material={materials['Car body black 1']}   />
            <mesh castShadow receiveShadow geometry={nodes.Plane015_2.geometry} material={materials.Window}   />
            <mesh castShadow receiveShadow geometry={nodes.Plane015_3.geometry} material={materials['Car body black 2']}   />
            <mesh castShadow receiveShadow geometry={nodes.Plane015_4.geometry} material={materials['Fog light']}   />
            <mesh castShadow receiveShadow geometry={nodes.Plane015_5.geometry} material={materials.Headlight}   />
            <mesh castShadow receiveShadow geometry={nodes.Plane015_6.geometry} material={materials['Rear light']}   />
            </group>
            </group>
          )
    }

useGLTF.preload('/models/Mustang.glb')