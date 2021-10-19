import React, { Suspense, useRef, VFC } from 'react';
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
import FloatGroup from './components/FloatGroup';
import GroundGroup from './components/GroundGroup';

const Container = styled.div({
  width: '100vw',
  height: '100vh',
});

export default function App() {
  const panSpeed = 5.0
  return (
    <Container>
      <Canvas camera={{ fov: 50, position: [0, 5, 45] }}>
        {/* control */}
        <OrbitControls panSpeed={panSpeed} />

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
            <GroundGroup />
          </Suspense>
        </Physics>
        <Suspense fallback={null}>
          <FloatGroup />
        </Suspense>

        {/* grid */}
        {/* <gridHelper position={[0, 0.01, 0]} args={[10, 10, 'gray', 'black']} /> */}
      </Canvas>
    </Container>
  )
}
