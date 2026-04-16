import { Canvas } from '@react-three/fiber'
import React from 'react'
import "./style.css"
import { OrbitControls } from '@react-three/drei'
import Scence from './Scence'

const App = () => {

  return (
    <>
      <Canvas camera={{fov: 60}}>
        <OrbitControls />
        <ambientLight />
        <Scence />
      </Canvas>
    </>
  )
}

export default App;