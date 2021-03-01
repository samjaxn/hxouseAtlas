import React, { useRef, useCallback, useState, useEffect, Suspense } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame, useThree } from 'react-three-fiber'
import { ResizeObserver } from '@juggle/resize-observer'

import './css/styles.css'

import Boxes from './components/Boxes';
import Jacky from './components/Jacky';
import NodeObject from './components/NodeObject'
import Main from './components/Main'
import Graph from './components/Graph'

import { getMousePos } from "./javascript/utils"

import lerp from 'lerp';

const Camera = (props) => {
  const ref = useRef();
  const { setDefaultCamera } = useThree();
  useEffect(() => {
    setDefaultCamera(ref.current)
  }, []);
  useFrame(() => {
    ref.current.lookAt(new THREE.Vector3(0,0,0))
    //ref.current.updateMatrixWorld()
  });
  return <perspectiveCamera ref={ref} {...props} />
}

const App = () => {
  const [posX, updateX] = useState(0)
  const [posY, updateY] = useState(0)
  const mousePos = useRef({ x: 0, y: 0 })
  const mouse = useRef([0, 0])

  const onMouseMove = useCallback((e) => {
    mouse.current = [e.clientX - window.innerWidth / 2, e.clientY - window.innerHeight / 2];
    mousePos.current = getMousePos(e);
    updateX(lerp(posX, (posX + ((mouse.current[0] - posX) * 0.05)), 0.1));
    updateY(lerp(posY, (posY + ((- mouse.current[1] - posY) * 0.05)), 0.1));
    //console.log(mouse.current[0]);
  }, [])

  return (
    <div id="root">
      {/* <div id="info">Description</div> */}
      <Canvas
      resize={{ polyfill: ResizeObserver }}
      onMouseMove={onMouseMove}
      gl={{ antialias: true, alpha: false }}
      //camera={camera}
      onCreated={({ gl }) => gl.setClearColor('black')}>
        <Camera position={[posX,posY,20]}/>
        <ambientLight />
        <pointLight position={[150, 150, 150]} intensity={0.55} />
        {/* <Jacky mouse={mouse}/> */}
        <Main mouse={mouse} />
        <Graph />
      </Canvas>
    </div>
  );
}

export default App;
