import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { useSpring, animated } from 'react-spring/three' 
import { useLoader, useFrame, useThree } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import lerp from 'lerp'

const NodeObject = ({value, data, mouse, scene, pos=[0,0,0], onClick, getPosRef, testing=false, ...props}) => {
    const object = useRef()
    const position = useRef(pos)

    const { size, viewport, aspect } = useThree()
    const aspectX = size.width/ viewport.width
    const aspectY = size.height/ viewport.height

    const { color, ...spring } = useSpring({
        //scale: hovered ? [1.2, 1.2, 1.2] : [1, 1, 1],
        //color: hovered ? 'white' : 'black',
        config: { mass: 10, tension: 1000, friction: 300, precision: 0.00001 }
    })

    useEffect(() => {
        getPosRef(value, position)
    }, [])

    useFrame(() => {
        if(object.current){
            (Math.abs(object.current.position.x - position.current[0]) > 0.01) ? object.current.position.x = lerp(object.current.position.x, position.current[0], 0.1) : object.current.position.x = position.current[0];
            (Math.abs(object.current.position.y - position.current[1]) > 0.01) ? object.current.position.y = lerp(object.current.position.y, position.current[1], 0.1) : object.current.position.y = position.current[1];
            (Math.abs(object.current.position.z - position.current[2]) > 0.01) ? object.current.position.z = lerp(object.current.position.z, position.current[2], 0.1) : object.current.position.z = position.current[2];

            if(testing){
                //console.log(object.current.position.y)
            }
            
        }
    })

    return (
        <animated.group
        ref={object}
        dispose={null}
        {...spring}
        {...props}
        onClick={e => {
            onClick(value)
        }}>
            {scene}
        </animated.group>
    )
}

export default NodeObject
