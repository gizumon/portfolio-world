import { useFrame } from '@react-three/fiber';
import React, { useState } from 'react';
import BoardModel from './BoardModel';
import * as THREE from 'three';
import { Plane } from './Plane';
import { PCDisplay } from './PCDisplay';
import { Content } from './Content';

export default function Main() {
  const [p, setP] = useState({ x: 0, y: 15, z: 0 });
  const [r, setR] = useState({ x: -90, y: 0, z: 0 });
  const [scale, setScale] = useState({ x: 2.1, y: 1.3, z: 0.1 });

  const onPick = () => {
    // setP({x: 0, y: , z: 0})
    // setR({x: 0, y: 0, z: 0})
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
        pos={{x: 1, y: 20, z: 2}}
        rotation={[THREE.MathUtils.degToRad(r.x), THREE.MathUtils.degToRad(r.y), THREE.MathUtils.degToRad(r.z + 30)]}
        scale={[scale.x, scale.y, scale.z]}
        onClick={onPick}
      />
      <BoardModel
        model='cms'
        pos={{x: 2, y: 100, z: 1}}
        rotation={[THREE.MathUtils.degToRad(r.x), THREE.MathUtils.degToRad(r.y), THREE.MathUtils.degToRad(r.z + -20)]}
        scale={[scale.x, scale.y, scale.z]}
        onClick={onPick}
      />
      <PCDisplay Child={Content} />
      <BoardModel
        model='cms'
        pos={p}
        rotation={[THREE.MathUtils.degToRad(r.x), THREE.MathUtils.degToRad(r.y), THREE.MathUtils.degToRad(r.z)]}
        scale={[scale.x, scale.y, scale.z]}
        onClick={onPick}
      /> 
      {/* <Plane position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} /> */}
    </>
  )
}