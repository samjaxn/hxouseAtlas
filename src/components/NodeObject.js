import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { useSpring, animated } from 'react-spring/three' 
import { useLoader, useFrame, useThree } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import lerp from 'lerp'

const NodeObject = ({mouse, scene, position1=[0,0,0], position2=[0,-6,0], testing=false, ...props}) => {
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

    //keep this use frame but remove the click if statement and put that in an external method, use just one position and have that position changed based on what was clicked and what should be displayed and where
    useFrame(() => {
        if(object.current){
            if(click){
                object.current.position.x = lerp(object.current.position.x, position2[0], 0.1)
                object.current.position.y = lerp(object.current.position.y, position2[1], 0.1)
                object.current.position.z = lerp(object.current.position.z, position2[2], 0.1)
            }
            else{
                object.current.position.x = lerp(object.current.position.x,  position1[0], 0.1)
                object.current.position.y = lerp(object.current.position.y,  position1[1], 0.1)
                object.current.position.z = lerp(object.current.position.z,  position1[2], 0.1)
            }
            if(testing){
                console.log(object.current.position.x)
            }
            
        }
    })

    return (
        <animated.group
        ref={object}
        dispose={null}
        {...spring}
        {...props}
        onPointerOver={e => setHover(true)}
        onPointerOut={e => setHover(false)}
        onClick={e => setActive(!click)}>
            {scene}
        </animated.group>
    )
}

export default NodeObject
