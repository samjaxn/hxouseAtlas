import React, { useState } from 'react'
import * as THREE from 'three'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import url from '../content/ballsBallFinal.mp4'

const ShapeObject = ({content='ballsBallFinal.mp4'}) => {

    //const tex = useLoader(THREE.TextureLoader, url)

    return (
      <scene name="Root Scene">
          <group>
        <mesh position={[0, 0, 0]}>
            <boxBufferGeometry attach="geometry" args={[5, 3, 0.3]} />
            <meshBasicMaterial
              attach="material"
              color="white"
            />
        </mesh>
        </group>
      </scene>
    )
}

export default ShapeObject
