import { type FC, useState, useRef } from "react";
import { Mesh } from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const ManBomber: FC = () => {
  const meshRef = useRef<Mesh>(null!);
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  useFrame((_, delta) => (meshRef.current.rotation.x += delta));

  return (
    <mesh
      ref={meshRef}
      position={[0, 0, 0]}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHovered(!hovered)}
      onPointerOut={() => setHovered(!hovered)}
    >
      <torusGeometry />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
};

export default ManBomber;
