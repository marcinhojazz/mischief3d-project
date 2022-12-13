import './styles/globals.css'
import { Canvas } from "@react-three/fiber"
import Experience from "./components/experience/Experience"
import Header from "./components/Header"


function App() {
  return (
    <>
      <Header />
      <Canvas style={{ background: "crimson", height: "100vh" }} legacy={true} shadows camera={{ position: [2, 4, 3.5], fov: 50 }}>
        <Experience />
      </Canvas>
    </>

  )
}

export default App
