import * as THREE from 'three'
import React, { useEffect, useRef, useState } from 'react'
import { useSpring, animated } from 'react-spring/three' 
import { useLoader, useFrame, useThree } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import lerp from 'lerp'
import jackyGLB from '../content/jacky.glb'

export default function Model({mouse, ...props}) {
  const jacky = useRef()
  const { nodes, materials, animations } = useLoader(GLTFLoader, jackyGLB)

  const { size, viewport, aspect } = useThree()
  const aspectX = size.width/ viewport.width
  const aspectY = size.height/ viewport.height

  const [hovered, setHover] = useState(false)
  const [click, setActive] = useState(false)

  const { color, ...spring } = useSpring({
    scale: hovered ? [1.2, 1.2, 1.2] : [1, 1, 1],
    config: { mass: 10, tension: 1000, friction: 300, precision: 0.00001 }
  })

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    if(jacky.current){        
        click ? jacky.current.position.y = lerp(jacky.current.position.y, -6, 0.1) : jacky.current.position.y = lerp(jacky.current.position.y,  0, 0.1)
        //console.log(click)
    }
  })

  return (
    <animated.group
    ref={jacky}
    dispose={null}
    {...spring}
    {...props}
    onPointerOver={e => setHover(true)}
    onPointerOut={e => setHover(false)}
    onClick={e => setActive(!click)}>
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
    </animated.group>
  )
}