import React from 'react'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const JackyObject = () => {
    const { nodes, materials, animations } = useLoader(GLTFLoader, '/jacky.glb')

    return (
      <scene name="Root Scene">
        <group name="RootNode">
          <primitive object={nodes.CINEMA_4D_Editor} />
          <group name="JACKY">
            <mesh
              material={materials['Plastic Shiny warped Procedural']}
              geometry={nodes.Extrude_1.geometry}
              name="Extrude_1"
              position={[0, -0.51, -0.05]}>
              <mesh
                material={materials['Plastic Shiny warped Procedural']}
                geometry={nodes.Rounding_1.geometry}
                name="Rounding_1"
              />
              <mesh
                material={materials['Plastic Shiny warped Procedural']}
                geometry={nodes.Rounding_2.geometry}
                name="Rounding_2"
              />
            </mesh>
            <mesh
              material={materials['Plastic Dark  Procedural']}
              geometry={nodes.Extrude.geometry}
              name="Extrude"
              position={[0, -0.51, 0.05]}>
              <mesh material={materials['Plastic Dark  Procedural']} geometry={nodes.Cap_1.geometry} name="Cap_1" />
              <mesh material={materials['Plastic Dark  Procedural']} geometry={nodes.Cap_2.geometry} name="Cap_2" />
            </mesh>
          </group>
        </group>
      </scene>
    )
}

export default JackyObject
