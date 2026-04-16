import React, { useRef } from 'react'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

const Scence = () => {

    let tex = useTexture("./image.png")
    tex.needsUpdate = true;
    let cyl = useRef(null);

    useFrame((state, delta) => {
      cyl.current.rotation.y += delta;
    })

  return (
    <>
    <mesh ref={cyl} rotation={[0, 1.2, 0.1]}>
        <cylinderGeometry args={[1.8, 1.8, 1.8, 60, 60, true]}/>
        <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide}/>
    </mesh>    
    </>

  )
}

export default Scence;
