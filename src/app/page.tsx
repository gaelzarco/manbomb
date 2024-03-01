"use client";

import { Center, PerspectiveCamera, Html, Text3D } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";

import Button from "@/components/button";
import ManBomber from "@/components/manbomber";

export default function Home() {
  return (
    <main className="w-full h-screen cursor-default">
      <Canvas className="fixed w-full h-full m-0 p-0">
        <Perf position="top-left" />
        <OrbitControls makeDefault />
        <PerspectiveCamera position={[0, 0, 0]}>
          <Center>
            <Text3D
              height={1}
              size={1}
              bevelEnabled
              bevelThickness={1}
              curveSegments={12}
              font="assets/GeistMono.json"
            >
              <meshNormalMaterial />
              MANBOMBER
            </Text3D>
          </Center>
          <pointLight intensity={0.2} position={[1, 0.5, 1]} />
          <ambientLight intensity={0.2} />
          <ManBomber />
        </PerspectiveCamera>

        <Html>
          <div className="fixed w-full h-full flex flex-col content-center items-center justify-center">
            <div className="flex flex-row justify-center mt-20">
              <Button>Login</Button>
            </div>
          </div>
        </Html>
      </Canvas>
    </main>
  );
}
