import { Canvas } from '@react-three/fiber'
import React, { useRef } from 'react'
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
import { Analytics } from '@vercel/analytics/react'
import VariableProximity from './components/VariableProximity'

const App = () => {

  const containerRef = useRef(null);

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

      <section 
        ref={containerRef} 
        className="relative w-full min-h-[60vh] flex justify-center items-center bg-[#ED7239] text-black font-light text-center px-4 py-20 sm:text-4xl md:text-6xl cursor-default overflow-hidden"
      >
        <VariableProximity
          label={'The Professional network for artists and curators to connect and collaborate.'}
          className={'variable-proximity-demo'}
          fromFontVariationSettings="'wght' 400, 'opsz' 9"
          toFontVariationSettings="'wght' 1000, 'opsz' 40"
          containerRef={containerRef}
          radius={120}
          falloff="linear"
        />
      </section>

      {/* Fourth Section */}
      <Fourth />

      {/* Footer */}
      <Footer />

      {/* Vercel Web Analytics */}
      <Analytics />
    </div>
  )
}

export default App;