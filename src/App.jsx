import { Canvas } from '@react-three/fiber'
import React from 'react'
import { OrbitControls } from '@react-three/drei'
import Scence from './Scence'
import { Bloom, BrightnessContrast, EffectComposer, ToneMapping } from '@react-three/postprocessing'
import TextReveal from './TextReveal'
import Navbar from './Navbar'
import Second from './Second'

const App = () => {

  return (
    <div className="w-full bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        <TextReveal />
        <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none">
          <Canvas flat camera={{fov: 60}}>
            <OrbitControls enableZoom={false} />
            <ambientLight />
            <Scence />
            <EffectComposer>
              <Bloom
              mipmapBlur
              intensity={1.3}
              luminanceThreshold={0}
              luminanceSmoothing={0}
              />
              <BrightnessContrast brightness={0.1} contrast={0.4} />
            </EffectComposer>
          </Canvas>
        </div>
      </section>

      {/* Second Section */}
      <Second />
    </div>
  )
}

export default App;