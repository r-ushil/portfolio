import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    BottomPart: THREE.Mesh;
    Body: THREE.Mesh;
    WKeys: THREE.Mesh;
    Buttons: THREE.Mesh;
    TopPart: THREE.Mesh;
    Cylinder003: THREE.Mesh;
    Stand: THREE.Mesh;
    Speaker: THREE.Mesh;
    StandPart: THREE.Mesh;
    BKeys: THREE.Mesh;
  };
  materials: {
    ButtonPart: THREE.MeshStandardMaterial;
    Body: THREE.MeshStandardMaterial;
    WKeys: THREE.MeshStandardMaterial;
    Buttons: THREE.MeshStandardMaterial;
    TopPart: THREE.MeshStandardMaterial;
    Cylinder: THREE.MeshStandardMaterial;
    Stand: THREE.MeshStandardMaterial;
    Speaker: THREE.MeshStandardMaterial;
    StandPart: THREE.MeshStandardMaterial;
    BKeys: THREE.MeshStandardMaterial;
  };
};

export default function Piano({ ...props }: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF("/models/piano.glb") as GLTFResult;
  useFrame(() => (group!.current!.rotation.y += 0.002));
  return (
    <group ref={group} {...props} dispose={null} position={[0, 1.8, 0]} rotation={[-Math.PI + 0.6, -Math.PI, -Math.PI]} scale={0.9}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BottomPart.geometry}
        material={materials.ButtonPart}
        position={[0, -0.1, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Body.geometry}
        material={materials.Body}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WKeys.geometry}
        material={materials.WKeys}
        position={[-2.3, 0.17, -0.08]}
        scale={0.04}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Buttons.geometry}
        material={materials.Buttons}
        position={[-0.75, 1.12, -0.24]}
        scale={0.07}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TopPart.geometry}
        material={materials.TopPart}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={materials.Cylinder}
        position={[0.05, -1.4, 0]}
        rotation={[0, 0, 0.91]}
        scale={0.16}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stand.geometry}
        material={materials.Stand}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Speaker.geometry}
        material={materials.Speaker}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.StandPart.geometry}
        material={materials.StandPart}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BKeys.geometry}
        material={materials.BKeys}
        position={[-1.99, 0.11, -0.1]}
        scale={0.02}
      />
    </group>
  );
}

useGLTF.preload("/models/piano.glb");
