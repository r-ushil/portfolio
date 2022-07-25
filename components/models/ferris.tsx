import { Mesh, MeshStandardMaterial, Group } from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
    nodes: {
        ferris_mesh: Mesh;
        ferris_mesh_1: Mesh;
        ferris_mesh_2: Mesh;
    };
    materials: {
        skin: MeshStandardMaterial;
        eye_black: MeshStandardMaterial;
        eye_white: MeshStandardMaterial;
    };
};

export default function Ferris({ ...props }: JSX.IntrinsicElements["group"]) {
    const group = useRef<Group>();
    const { nodes, materials } = useGLTF("/models/ferris.glb") as GLTFResult;
    useFrame(() => (group.current.rotation.y += 0.002));
    return (
        <group ref={group} {...props} dispose={null}>
            <group
                position={[0, 1.5, 0]}
                rotation={[-Math.PI, -Math.PI - 0.6, -Math.PI]}
                scale={6}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.ferris_mesh.geometry}
                    material={materials.skin}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.ferris_mesh_1.geometry}
                    material={materials.eye_black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.ferris_mesh_2.geometry}
                    material={materials.eye_white}
                />
            </group>
        </group>
    );
}

useGLTF.preload("/models/ferris.glb");
