'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const Canvas = dynamic(
  () => import('@react-three/fiber').then((mod) => mod.Canvas),
  { ssr: false }
);

const OrbitControls = dynamic(
  () => import('@react-three/drei').then((mod) => mod.OrbitControls),
  { ssr: false }
);

const Earth = dynamic(() => import('./Earth'), { ssr: false });

export default function Scene() {
  return (
    <div className="h-[600px] w-full">
      <Suspense fallback={<div>Loading...</div>}>
        <Canvas>
          <OrbitControls enableZoom={false} />
          <Earth />
        </Canvas>
      </Suspense>
    </div>
  );
}