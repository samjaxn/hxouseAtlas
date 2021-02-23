import React, { useRef, useCallback } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame } from 'react-three-fiber'
import './css/styles.css'
import Main from './components/Main';
import { getMousePos } from "./javascript/utils" 

function App() {
  const mousePos = useRef({ x: 0, y: 0 })
  const mouse = useRef([0, 0])

  const onMouseMove = useCallback((e) => {
    mouse.current = [e.clientX - window.innerWidth / 2, e.clientY - window.innerHeight / 2];
    mousePos.current = getMousePos(e);
    //console.log(mousePos.current);
  }, [])


  return (
    <div id="root">
      {/* <div id="info">Description</div> */}
      <Canvas
      onMouseMove={onMouseMove}
      gl={{ antialias: false, alpha: false }}
      camera={{ position: [0, 0, 15], near: 5, far: 20 }}
      onCreated={({ gl }) => gl.setClearColor('black')}>
        <ambientLight />
        <pointLight position={[150, 150, 150]} intensity={0.55} />
        <Main mouse={mouse}/>
      </Canvas>
    </div>
  );
}

export default App;
