import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { useSpring, animated } from 'react-spring/three' 
import { useLoader, useFrame, useThree } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import lerp from 'lerp'

const NodeObject = ({mouse, scene, position=[0,0,0], ...props}) => {
    const object = useRef()

    const { size, viewport, aspect } = useThree()
    const aspectX = size.width/ viewport.width
    const aspectY = size.height/ viewport.height

    const [hovered, setHover] = useState(false)
    const [click, setActive] = useState(false)

    const { color, ...spring } = useSpring({
        scale: hovered ? [1.2, 1.2, 1.2] : [1, 1, 1],
        config: { mass: 10, tension: 1000, friction: 300, precision: 0.00001 }
    })

    useFrame(() => {
        if(object.current){        
            click ? object.current.position.y = lerp(object.current.position.y, -6, 0.1) : object.current.position.y = lerp(object.current.position.y,  position[1], 0.1)
            //console.log(click)
        }
    })

    return (
        <animated.group
        ref={object}
        dispose={null}
        {...spring}
        {...props}
        position={position}
        onPointerOver={e => setHover(true)}
        onPointerOut={e => setHover(false)}
        onClick={e => setActive(!click)}>
            {scene}
        </animated.group>
    )
}

export default NodeObject
