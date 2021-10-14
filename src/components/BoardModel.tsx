import { BoxProps, useBox } from '@react-three/cannon';
import { useLoader } from '@react-three/fiber';
import React from 'react';
import { GLTFLoader } from 'three-stdlib/loaders/GLTFLoader';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import useDragConstraint from '../hooks/useDragConstraint';
import { IPosition } from '../types/interfaces';
import { getModelPath, IModelName } from '../utils/constants';

interface Props {
  model: IModelName;
  pos: IPosition
  onClick?: () => void;
}

type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh
  }
  materials: {
    Material: THREE.MeshStandardMaterial
  }
}

export default function BoardModel({
  model, pos, onClick, ...props
}: Props & JSX.IntrinsicElements['group']) {
  const glb = useLoader(GLTFLoader, getModelPath(model)) as any as GLTFResult;
  const [board] = useBox(() => ({
    mass: 1,
    args: [1, 0, 5],
    linearDamping: 0.9,
    angulardamping: 1.99,
    position: [pos.x, pos.y, pos.z],
  } as BoxProps));
  const bind = useDragConstraint(board);
  console.log('glb ', glb)
  return (
    <group ref={board} onClick={onClick} {...bind} dispose={null}>
      <group scale={[1, 1, 1]} {...props}>
        <mesh receiveShadow castShadow material={glb.materials.Material} geometry={glb.nodes['Cube'].geometry} />
      </group>
    </group>
  )
}