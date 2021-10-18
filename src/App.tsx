import React, { Suspense, useRef, VFC } from 'react';
import { DoubleSide } from 'three';
import { Environment, OrbitControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  Physics,
  useBox,
  useCompoundBody,
  useCylinder,
  useSphere,
  usePlane,
  useConeTwistConstraint,
  usePointToPointConstraint
} from '@react-three/cannon'
import styled from 'styled-components';
import Main from './components/Main';
import { Plane } from './components/Plane';

const Container = styled.div({
  width: '100vw',
  height: '100vh',
});

export default function App() {
  return (
    <Container>
      <Canvas camera={{ fov: 50, position: [0, 5, 10] }}>
        <Contents />
      </Canvas>
    </Container>
  )
}


const Contents: VFC = () => {
  const panSpeed = 5.0
  const boxRef = useRef<any>(null)

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime()
    if (!boxRef || !boxRef.current || !boxRef.current.rotation) { return; }
    boxRef.current.rotation.x = a * 1
    boxRef.current.rotation.y = a * 1
    boxRef.current.rotation.z = a * 0
  })

  const clickHandler = () => {
    window.location.href = "https://gizumon.github.io/portfolio/#portfolio"
  }

  return (
    <>

      {/* light */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={1} // 光の強さ
        shadow-mapSize-width={2048} // 描画精度
        shadow-mapSize-height={2048}
        castShadow
      />

      <directionalLight
        position={[-10, -10, -5]}
        intensity={1} // 光の強さ
        shadow-mapSize-width={2048} // 描画精度
        shadow-mapSize-height={2048}
        castShadow
      />
      <color attach="background" args={['#171720']} />
      <fog attach="fog" args={['#171720', 20, 70]} />
      <ambientLight intensity={0.2} />
      <pointLight position={[-10, -10, -10]} color="red" intensity={1.5} />
      <Physics iterations={15} gravity={[0, -200, 0]} allowSleep={false}>
        <Suspense fallback={null}>
          <Main />
        </Suspense>
      </Physics>

      {/* control */}
      <OrbitControls panSpeed={panSpeed} />

      {/* grid */}
      {/* <gridHelper position={[0, 0.01, 0]} args={[10, 10, 'gray', 'black']} /> */}
    </>
  )
}
