import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './components/Model';
import LoadingScreen from './components/LoadingScreen';

function App() {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
      <div className="w-[40vw] h-[40vw] relative">
        <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <Canvas
          camera={{ position: [0, 0, 1], fov: 30 }}
          className="rounded-lg shadow-2xl"
        >
          <Suspense fallback={<LoadingScreen />}>
            <ambientLight intensity={0.8} />
            <spotLight
              position={[10, 10, 10]}
              angle={0.15}
              penumbra={1}
              intensity={1.5}
              castShadow
            />
            <pointLight position={[-10, -10, -10]} intensity={0.8} />
            <Model />
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              minPolarAngle={Math.PI / 2.5}
              maxPolarAngle={Math.PI / 1.5}
            />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

export default App;
