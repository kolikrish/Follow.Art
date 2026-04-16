import { Canvas } from '@react-three/fiber'
import React from 'react'
import { OrbitControls } from '@react-three/drei'
import Scence from './components/Scence'
import { Bloom, BrightnessContrast, EffectComposer, ToneMapping } from '@react-three/postprocessing'
import TextReveal from './components/TextReveal'
import Navbar from './components/Navbar'
import Second from './components/Second'
import Third from './components/Third'
import Fourth from './components/Fourth'
import Footer from './components/Footer'
import Lenis from 'lenis'
import { useEffect } from 'react'

const App = () => {

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

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

      {/* Third Section */}
      <Third />

      {/* Fourth Section */}
      <Fourth />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App;