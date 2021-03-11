import React, { useState } from 'react'
import * as THREE from 'three'
import { useSpring, animated } from 'react-spring/three' 
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const ShapeObject = ({content}) => {

    //const tex = useLoader(THREE.TextureLoader, url)

    const [hovered, setHover] = useState(false)

    const { color, scale, pos, ...configs} = useSpring({
      color: hovered ? 'white' : 'silver',
      scale: hovered ? [1.2, 1.2, 1.2] : [1, 1, 1]
    })

    return (
      <animated.scene name="Root Scene" scale={scale}>
        <group>
          <mesh position={[0, 0, 0]}
          onPointerOver={e => setHover(true)}
          onPointerOut={e => setHover(false)}
          >
            <boxBufferGeometry attach="geometry" args={[5, 3, 0.3]} />
            <meshBasicMaterial
              attach="material"
              color="white"
            />
          </mesh>
        </group>
      </animated.scene>
    )
}

export default ShapeObject
