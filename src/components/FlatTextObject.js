import React, { useMemo, useState, useEffect } from 'react'
import * as THREE from 'three'
import { useSpring, animated } from 'react-spring/three' 
import { useLoader, useUpdate, useThree } from 'react-three-fiber'
import { Text } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import OswaldFont from '../fonts/Oswald-Medium.ttf'

const FlatTextObject = ({children, width = 700, ...props }) => {
    const { viewport } = useThree()
    const color = 'white'
    const fontSize = 6
    //const maxWidth = 700
    const lineHeight = 1
    const letterSpacing = 0
    const textAlign = "center"
    
    return (
      <scene name="Root Scene">
        <group scale={[0.1, 0.1, 0.1]} {...props}>
            <Text
            color={color}
            fontSize={fontSize}
            maxWidth={(viewport.width / 100) * width}
            lineHeight={lineHeight}
            letterSpacing={letterSpacing}
            textAlign={textAlign}
            // font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
            font={OswaldFont}
            anchorX="center"
            anchorY="middle">
            {children}
            </Text>
        </group>
      </scene>
    )
}

export default FlatTextObject
