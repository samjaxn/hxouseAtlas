import React, { useState } from 'react'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useSpring, animated } from 'react-spring/three'
import jackyGLB from '../content/jacky.glb'

const JackyObject = () => {
    const { nodes, materials, animations } = useLoader(GLTFLoader, jackyGLB)

    const [hovered, setHover] = useState(false)

    const { color, scale, pos, ...configs} = useSpring({
      color: hovered ? 'white' : 'silver',
      scale: hovered ? [1.1, 1.1, 1.1] : [1, 1, 1]
    })

    return (
      <animated.scene name="Root Scene" scale={scale}>
        <group name="RootNode"
        onPointerOver={e => setHover(true)}
        onPointerOut={e => setHover(false)}
        >
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
      </animated.scene>
    )
}

export default JackyObject
