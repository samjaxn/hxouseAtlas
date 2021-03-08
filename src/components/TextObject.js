import React, { useMemo } from 'react'
import * as THREE from 'three'
import { useLoader, useUpdate } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const TextObject = ({children, vAlign = 'center', hAlign = 'center', size = 1, color = '#FFFFFF', ...props }) => {
    const font = useLoader(THREE.FontLoader, '/Oswald_Regular.json')
    const config = useMemo(
      () => ({ font, size: 7, height: 5, curveSegments: 32, bevelEnabled: true, bevelThickness: 1, bevelSize: 0.5, bevelOffset: 0, bevelSegments: 5 }),
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

    return (
      <scene name="Root Scene">
        <group {...props} scale={[0.1 * size, 0.1 * size, 0.1]}>
          <mesh ref={mesh}>
            <textBufferGeometry args={[children, config]} />
            <meshNormalMaterial />
          </mesh>
        </group>
      </scene>
    )
}

export default TextObject
