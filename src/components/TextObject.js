import React, { useMemo, useState } from 'react'
import * as THREE from 'three'
import { useSpring, animated } from 'react-spring/three' 
import { useLoader, useUpdate } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import fontJSON from '../javascript/fontJSON'

const TextObject = ({children, vAlign = 'center', hAlign = 'center', size = 1, ...props }) => {
    const font = useLoader(THREE.FontLoader, 'Oswald_Regular.json')
    const config = useMemo(
      () => ({ font, size: 7, height: 3, curveSegments: 32, bevelEnabled: true, bevelThickness: 1, bevelSize: 0.5, bevelOffset: 0, bevelSegments: 5 }),
      [font]
    )

    const mesh = useUpdate(
      (self) => {
        const size = new THREE.Vector3()
        self.geometry.computeBoundingBox()
        self.geometry.boundingBox.getSize(size)
        self.position.x = hAlign === 'center' ? -size.x / 2 : hAlign === 'right' ? 0 : -size.x
        self.position.y = vAlign === 'center' ? -size.y / 2 : vAlign === 'top' ? 0 : -size.y
      },
      [children]
    )

    const [hovered, setHover] = useState(false)

    const { color, scale, pos, ...configs} = useSpring({
      color: hovered ? 'white' : 'silver',
      scale: hovered ? [1.1, 1.1, 1.1] : [1, 1, 1]
    })

    return (
      <animated.scene name="Root Scene" scale={scale}>
        <group {...props} scale={[0.1 * size, 0.1 * size, 0.1]}
        onPointerOver={e => setHover(true)}
        onPointerOut={e => setHover(false)}
        {...configs}>
          <mesh ref={mesh}>
            <textBufferGeometry args={[children, config]} />
            <animated.meshStandardMaterial
              attach="material"
              color={color}
            />
          </mesh>
          {/* <mesh>
            <boxBufferGeometry attach="geometry" args={[85, 15, 3]} />
            <animated.meshStandardMaterial
              attach="material"
              color={color}
            />
          </mesh> */}
        </group>
      </animated.scene>
    )
}

export default TextObject
