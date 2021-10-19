import { useFrame } from '@react-three/fiber';
import React, { useState } from 'react';
import { PCDisplay } from './PCDisplay';
import { Web } from './Web';

export default function FloatGroup() {
  const [p, setP] = useState({ x: 0, y: 15, z: 0 });
  const [r, setR] = useState({ x: -90, y: 0, z: 0 });
  const [scale, setScale] = useState({ x: 2.1, y: 1.3, z: 0.1 });

  return (
    <>
      <PCDisplay child={<Web url="https://gizumon.github.io/portfolio/"/>} position={[-15, 3, 8]}/>
      <PCDisplay child={<Web url="https://posmapp-8a86e.web.app/login"/>} position={[-5, 5, 2]}/>
      <PCDisplay child={<Web url="https://pepup-automation-gui.herokuapp.com/"/>} position={[5, 2, 7]}/>
      <PCDisplay child={<Web url="https://life-manager-app.herokuapp.com/"/>} position={[15, 6, 3]}/>
    </>
  )
}