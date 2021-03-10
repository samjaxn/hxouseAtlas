import React, { useMemo, useState } from 'react'
import * as THREE from 'three'
import { useSpring, animated } from 'react-spring/three' 
import { useLoader, useUpdate } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const TextObject = ({children, vAlign = 'center', hAlign = 'center', size = 1, ...props }) => {
    const font = useLoader(THREE.FontLoader, '/Oswald_Regular.json')
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

    const { color, pos, ...configs} = useSpring({
      color: hovered ? 'white' : 'silver'
    })

    return (
      <scene name="Root Scene">
        <group {...props} scale={[0.1 * size, 0.1 * size, 0.1]}>
          <animated.mesh
          ref={mesh}
          onPointerOver={e => setHover(true)}
          onPointerOut={e => setHover(false)}
          {...configs}>
            <textBufferGeometry args={[children, config]} />
            <animated.meshStandardMaterial
              attach="material"
              color={color}
            />
          </animated.mesh>
        </group>
      </scene>
    )
}

export default TextObject
