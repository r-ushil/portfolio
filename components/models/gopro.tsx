import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";


type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh;
    Cube_1: THREE.Mesh;
    Cube_2: THREE.Mesh;
    Cube_3: THREE.Mesh;
    Cube_4: THREE.Mesh;
    Cube_5: THREE.Mesh;
    Cube_6: THREE.Mesh;
    Cube_7: THREE.Mesh;
    Cube_8: THREE.Mesh;
    Cube_9: THREE.Mesh;
    Cube_10: THREE.Mesh;
    Cube_11: THREE.Mesh;
    Cube_12: THREE.Mesh;
  };
  materials: {
    ["Material.005"]: THREE.MeshStandardMaterial;
    ["1"]: THREE.MeshStandardMaterial;
    backdisplay1: THREE.MeshStandardMaterial;
    ["2"]: THREE.MeshStandardMaterial;
    ["front display 2"]: THREE.MeshStandardMaterial;
    ["indicator 1"]: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
    lens: THREE.MeshPhysicalMaterial;
    glass: THREE.MeshPhysicalMaterial;
    mode: THREE.MeshStandardMaterial;
    ["Material.003"]: THREE.MeshStandardMaterial;
    ["Material.006"]: THREE.MeshStandardMaterial;
  };
};

export default function GoPro({ ...props }: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF("/models/gopro.glb") as GLTFResult;
  useFrame(() => (group.current.rotation.y += 0.002));

  return (
    <group ref={group} {...props} dispose={null}>
      <group
        position={[0, 2.16, 0.31]}
        rotation={[1, 0, -0.75]}
        scale={0.2}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_1.geometry}
          material={materials["1"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_2.geometry}
          material={materials.backdisplay1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_3.geometry}
          material={materials["2"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_4.geometry}
          material={materials["front display 2"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_5.geometry}
          material={materials["indicator 1"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_6.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_7.geometry}
          material={materials.lens}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_8.geometry}
          material={materials.glass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_9.geometry}
          material={materials.mode}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_10.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_11.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_12.geometry}
          material={materials["Material.006"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/gopro.glb");
