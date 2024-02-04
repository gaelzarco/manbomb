"use client";

import { PerspectiveCamera, Html } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";

import Button from "@/components/button";

export default function Home() {
  return (
    <main className="w-full h-screen border">
      <Canvas className="fixed w-full h-full m-0 p-0">
        <PerspectiveCamera position={[0, 0, 0]}>
          <pointLight intensity={0.7} castShadow position={[1, 0.5, 1]} />
          <ambientLight intensity={0.2} />
          <mesh position={[0, 0, 0]}>
            <torusGeometry />
            <meshStandardMaterial color="hotpink" />
          </mesh>
        </PerspectiveCamera>

        <Html>
          <div className="fixed w-full h-full flex flex-col content-center items-center justify-center">
            <h1 className="font-bold text-3xl">MANBOMB</h1>
            <div className="flex flex-row justify-center mt-20">
              <Button>Login</Button>
              <Button>Sign-Up</Button>
            </div>
          </div>
        </Html>
      </Canvas>
    </main>
  );
}
