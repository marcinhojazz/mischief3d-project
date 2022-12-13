/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

const Walking = (props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./models/walking.gltf')
  const { actions, names } = useAnimations(animations, group)
  console.log(names)

  useEffect(() => {
    actions[names[0]].reset().fadeIn(0.5).play()
  }, [])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="body_cloath" scale={0.01} />
        <group name="legs_cloath" scale={0.01} />
        <group name="shoes" scale={0.01} />
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.Root} />
          <skinnedMesh castShadow name="chest" geometry={nodes.chest.geometry} material={materials['Material #13']} skeleton={nodes.chest.skeleton} />
          <skinnedMesh castShadow name="head" geometry={nodes.head.geometry} material={materials['Material #13']} skeleton={nodes.head.skeleton} />
          <group name="legs">
            <skinnedMesh castShadow name="Mesh001" geometry={nodes.Mesh001.geometry} material={materials['Material #13']} skeleton={nodes.Mesh001.skeleton} />
            <skinnedMesh castShadow name="Mesh001_1" geometry={nodes.Mesh001_1.geometry} material={materials['Material #14']} skeleton={nodes.Mesh001_1.skeleton} />
          </group>
          <skinnedMesh castShadow name="naked_steps" geometry={nodes.naked_steps.geometry} material={materials['Material #13']} skeleton={nodes.naked_steps.skeleton} />
        </group>
      </group>
    </group>
  )
}

export default Walking

useGLTF.preload('./models/walking.gltf')
