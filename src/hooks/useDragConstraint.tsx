import React, { createRef, useCallback, useEffect } from "react"
import { usePointToPointConstraint } from "@react-three/cannon"
import { Object3D } from "three"

const cursor = createRef<Object3D>()

export default function useDragConstraint(child: React.RefObject<Object3D<THREE.Event>>) {
  const [, , api] = usePointToPointConstraint(cursor, child, { pivotA: [0, 0, 0], pivotB: [0, 0, 0] })
  useEffect(() => void api.disable(), [])
  const onPointerUp = useCallback((e) => {
    api.disable()
    console.log('on pointer up...')
  }, [])
  const onPointerDown = useCallback((e) => {
    e.stopPropagation()
    e.target.setPointerCapture(e.pointerId)
    console.log('on pointer down...', e)
    api.enable()
  }, [])
  return { onPointerUp, onPointerDown }
}