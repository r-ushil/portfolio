import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    node_id30: THREE.Mesh;
  };
  materials: {
    ["54"]: THREE.MeshStandardMaterial;
  };
};

export default function Laptop({ ...props }: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF("/models/laptop.glb") as GLTFResult;
  useFrame(() => (group.current.rotation.y += 0.002));
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_id30.geometry}
        material={materials["54"]}
        position={[0.02, -0.04, 0.35]}
        scale={0.06}
      />
    </group>
  );
}

useGLTF.preload("/models/laptop.glb");