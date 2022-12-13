import { OrbitControls } from "@react-three/drei"
import { Suspense } from "react"
import { AmbientLight } from "three"
import AvatarDance from "./AvatarDance"
// import Walking from "./Walking"

const Experience = () => {
  return (
    <>
      <OrbitControls makeDefault />
      {/* <mesh>
        <boxBufferGeometry />
        <meshNormalMaterial />
      </mesh> */}
      <directionalLight
        position={[-5, 5, 5]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <directionalLight intensity={3} castShadow position={[2.5, 8, 5]} shadow-mapSize={[512, 512]} />

      <group position={[0, -1, 0]}>
        <Suspense fallback={null}>
          {/* <Walking /> */}
          <AvatarDance />
        </Suspense>
      </group>

      <mesh
        rotation={[-0.5 * Math.PI, 0, 0]}
        position={[0, 1, 0]}
        receiveShadow
      >
        <planeBufferGeometry args={[1, 1, 1, 1]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
    </>
  )
}

export default Experience