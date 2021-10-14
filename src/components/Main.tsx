import { useFrame } from '@react-three/fiber';
import React, { useState } from 'react';
import BoardModel from './BoardModel';
import * as THREE from 'three';
import { Plane } from './Plane';

export default function Main() {
  const [p, setP] = useState({ x: 0, y: 15, z: 0 });
  const [r, setR] = useState({ x: -90, y: 0, z: 0 });
  const [scale, setScale] = useState({ x: 1.8, y: 1, z: 1.5 });

  const onPick = () => {
    setP({x: 0, y: 5, z: 0})
    setR({x: 0, y: 0, z: 0})  
  }
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime()
    // if (!boxRef || !boxRef.current || !boxRef.current.rotation) { return; }
    // boxRef.current.rotation.x = a * 1
    // boxRef.current.rotation.y = a * 1
    // boxRef.current.rotation.z = a * 0
    setR((prev) => {
      // const v = a * 0.2 
      return {
        ...prev,
        // x: a * 1,
      }
    })
  })

  return (
    <>
      <BoardModel
        model='cms'
        pos={p}
        rotation={[THREE.MathUtils.degToRad(r.x), THREE.MathUtils.degToRad(r.y), THREE.MathUtils.degToRad(r.z)]}
        scale={[scale.x, scale.y, scale.z]}
        onClick={onPick}
      /> 
      <Plane position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} />
    </>
  )
}