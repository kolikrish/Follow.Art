import { Canvas } from '@react-three/fiber'
import React from 'react'
import "./style.css"
import { OrbitControls } from '@react-three/drei'
import Scence from './Scence'
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing'

const App = () => {

  return (
    <>
      <Canvas flat camera={{fov: 60}}>
        <OrbitControls />
        <ambientLight />
        <Scence />
        <EffectComposer>
        <Bloom
          mipmapBlur
          intensity={2.5}
          luminanceThreshold={0}
          luminanceSmoothing={0}
          />

          {/* <ToneMapping adaptive />   */}
        </EffectComposer>
      </Canvas>
    </>
  )
}

export default App;