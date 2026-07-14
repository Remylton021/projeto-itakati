import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, ContactShadows, Text } from "@react-three/drei";
import * as THREE from "three";

function CupModel() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.8, 0]}>
      {/* --- Main Cup Body --- */}
      <mesh castShadow receiveShadow position={[0, 0, 0]}>
        {/* Tapered cylinder: top radius, bottom radius, height, radial segments */}
        <cylinderGeometry args={[1.4, 1.1, 3, 64]} />
        <meshStandardMaterial 
          color="#f4f4f5" 
          roughness={0.7} 
          metalness={0.1} 
        />
      </mesh>
      
      {/* Top Green Band */}
      <mesh position={[0, 1.25, 0]}>
        <cylinderGeometry args={[1.41, 1.38, 0.25, 64]} />
        <meshStandardMaterial color="#217937" roughness={0.5} />
      </mesh>
      
      {/* Bottom Green Band */}
      <mesh position={[0, -1.25, 0]}>
        <cylinderGeometry args={[1.14, 1.11, 0.25, 64]} />
        <meshStandardMaterial color="#217937" roughness={0.5} />
      </mesh>

      {/* --- Açaí & Toppings --- */}
      <group position={[0, 1.5, 0]}>
        {/* Base inside cup */}
        <mesh position={[0, -0.1, 0]}>
          <cylinderGeometry args={[1.35, 1.3, 0.4, 32]} />
          <meshStandardMaterial color="#260430" roughness={0.8} />
        </mesh>
        
        {/* Açaí Swirls */}
        <mesh position={[0, 0.2, 0]}>
          <sphereGeometry args={[1.2, 32, 16]} />
          <meshStandardMaterial color="#260430" roughness={0.9} />
        </mesh>
        <mesh position={[0, 0.7, 0]}>
          <sphereGeometry args={[0.9, 32, 16]} />
          <meshStandardMaterial color="#260430" roughness={0.9} />
        </mesh>
        <mesh position={[0, 1.2, 0]}>
          <sphereGeometry args={[0.5, 32, 16]} />
          <meshStandardMaterial color="#260430" roughness={0.9} />
        </mesh>
        <mesh position={[0, 1.5, 0]} rotation={[0, 0, 0.2]}>
          <coneGeometry args={[0.25, 0.8, 16]} />
          <meshStandardMaterial color="#260430" roughness={0.9} />
        </mesh>

        {/* Wafer Sticks */}
        <mesh position={[0.5, 0.8, -0.5]} rotation={[0.3, 0, -0.4]} castShadow>
          <cylinderGeometry args={[0.08, 0.08, 1.8, 16]} />
          <meshStandardMaterial color="#8B5A2B" roughness={0.8} />
        </mesh>
        <mesh position={[0.7, 0.5, -0.1]} rotation={[0.5, 0, -0.6]} castShadow>
          <cylinderGeometry args={[0.08, 0.08, 1.5, 16]} />
          <meshStandardMaterial color="#8B5A2B" roughness={0.8} />
        </mesh>

        {/* Strawberries */}
        <mesh position={[-0.9, 0.4, 0.5]} rotation={[0.2, 0.5, 0]} castShadow>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial color="#D90429" roughness={0.3} />
        </mesh>
        <mesh position={[-0.7, 0.7, 0.8]} rotation={[-0.2, 0.1, 0.4]} castShadow>
          <sphereGeometry args={[0.25, 16, 16]} />
          <meshStandardMaterial color="#D90429" roughness={0.3} />
        </mesh>

        {/* Banana Slices */}
        <mesh position={[0.8, 0.2, 0.8]} rotation={[1.2, 0.2, 0.5]} castShadow>
          <cylinderGeometry args={[0.3, 0.3, 0.15, 16]} />
          <meshStandardMaterial color="#F4E285" roughness={0.6} />
        </mesh>
        <mesh position={[1.0, 0.35, 0.5]} rotation={[1.4, -0.1, 0.2]} castShadow>
          <cylinderGeometry args={[0.3, 0.3, 0.15, 16]} />
          <meshStandardMaterial color="#F4E285" roughness={0.6} />
        </mesh>

        {/* Blueberries */}
        <mesh position={[-0.2, 0.5, 1.05]} castShadow>
          <sphereGeometry args={[0.18, 16, 16]} />
          <meshStandardMaterial color="#1D2D44" roughness={0.2} metalness={0.1} />
        </mesh>
        <mesh position={[0.2, 0.4, 1.1]} castShadow>
          <sphereGeometry args={[0.18, 16, 16]} />
          <meshStandardMaterial color="#1D2D44" roughness={0.2} metalness={0.1} />
        </mesh>
        <mesh position={[0.0, 0.7, 0.95]} castShadow>
          <sphereGeometry args={[0.18, 16, 16]} />
          <meshStandardMaterial color="#1D2D44" roughness={0.2} metalness={0.1} />
        </mesh>
        <mesh position={[0.4, 0.8, 0.7]} castShadow>
          <sphereGeometry args={[0.18, 16, 16]} />
          <meshStandardMaterial color="#1D2D44" roughness={0.2} metalness={0.1} />
        </mesh>
      </group>
    </group>
  );
}

export function Cup3D() {
  return (
    <div className="w-full h-full min-h-[500px]">
      <Canvas camera={{ position: [0, 1.5, 7], fov: 45 }} shadows>
        <ambientLight intensity={0.6} />
        <spotLight 
          position={[5, 10, 5]} 
          angle={0.25} 
          penumbra={1} 
          intensity={2} 
          castShadow 
          shadow-mapSize={1024}
        />
        <pointLight position={[-5, 5, -5]} intensity={1} color="#4B0082" />
        
        <Float 
          speed={2} 
          rotationIntensity={0.2} 
          floatIntensity={1}
          floatingRange={[-0.1, 0.1]}
        >
          <CupModel />
        </Float>
        
        <Environment preset="city" />
        <ContactShadows 
          position={[0, -2.5, 0]} 
          opacity={0.5} 
          scale={10} 
          blur={2.5} 
          far={4} 
        />
      </Canvas>
    </div>
  );
}
