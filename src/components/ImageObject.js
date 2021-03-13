import React, { useMemo, useState, useEffect } from 'react'
import * as THREE from 'three'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useSpring, animated, config } from 'react-spring/three' 
import { useLoader, useUpdate } from 'react-three-fiber'
import { HoverImageShader } from '../resources/index'

const ImageObject = ({ url, size=[5.3, 3], scaled, hoverable = true, ...props }) => {
    const [hovered, setHover] = useState(false)

    const [texture] = useMemo(() => {
        const loader = new THREE.TextureLoader()
        return [loader.load(url)]
    }, [url])

    const { hoverValue, scale } = useSpring({
        hoverValue: hovered ? 1 : 0,
        scale: hovered ? [1.2, 1.2, 1.2] : [1, 1, 1],
        // config: config.molasses
    })

    useEffect(() => {
        document.body.style.cursor = (hovered && hoverable) ? 'pointer' : 'auto'
    }, [hovered])

    return (
        <animated.scene scale={scale}>
            <animated.mesh
            onPointerOver={e => setHover(true)}
            onPointerOut={e => setHover(false)}
            {...props}
            >
                <animated.planeBufferGeometry attach="geometry" args={size} />
                {/* <animated.shaderMaterial attach="material" transparent args={[HoverImageShader]} uniforms-texture-value={texture} uniforms-hover-value={hoverValue} /> */}
                <meshStandardMaterial map={texture} attach="material" />
            </animated.mesh>
        </animated.scene>
    )
}

export default ImageObject
