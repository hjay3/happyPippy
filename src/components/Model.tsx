import { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { Mesh } from 'three';
import { useSpring, animated } from '@react-spring/three';

export default function Model() {
  const obj = useLoader(
    OBJLoader,
    'https://qemqgbsrfkfkgtqpvurb.supabase.co/storage/v1/object/public/mhhGop1/HAPPY!3D.obj'
  );
  const meshRef = useRef<Mesh>(null);

  const { scale } = useSpring({
    from: { scale: 1.8 },
    to: [{ scale: 4.5 }, { scale: 1.8 }],
    config: { mass: 2.5, tension: 180, friction: 12 },
    loop: true,
  });

  useFrame((state) => {
    if (!meshRef.current) return;

    // Smooth rotation
    meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.53;

    // Gentle floating motion
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;

    // Subtle tilt
    meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
  });

  return (
    <animated.mesh ref={meshRef} scale={scale} position={[0, 0, 0]}>
      <primitive object={obj} scale={0.45} rotation={[0, Math.PI, 0]} />
    </animated.mesh>
  );
}
