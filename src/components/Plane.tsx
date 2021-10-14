import React from 'react';
import { PlaneProps, usePlane } from '@react-three/cannon';

export function Plane(props: PlaneProps) {
  const [ref] = usePlane(() => ({ ...props }))
  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry args={[1000, 1000]} />
      <meshStandardMaterial color="#ffffff" />
    </mesh>
  )
}