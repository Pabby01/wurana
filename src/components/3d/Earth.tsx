'use client';

import { useRef, Suspense } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Html, useTexture } from '@react-three/drei';
import { Group, Vector3 } from 'three';

interface ArtisanMarker {
  position: [number, number, number];
  name: string;
  skill: string;
  image?: string;
}

function EarthMesh() {
  const [earthMap, normalMap, specularMap] = useTexture([
    '/textures/earth_daymap.jpg',
    '/textures/earth_normal_map.jpg',
    '/textures/earth_specular_map.jpg',
  ]);

  return (
    <mesh>
      <sphereGeometry args={[2, 64, 64]} />
      <meshPhongMaterial
        map={earthMap}
        normalMap={normalMap}
        specularMap={specularMap}
        shininess={5}
      />
    </mesh>
  );
}

const Earth = () => {
  const earthRef = useRef<Group>(null);
  const markersRef = useRef<Group>(null);

  const artisans: ArtisanMarker[] = [
    { position: [1, 1, 1], name: 'John Doe', skill: 'Woodworking' },
    { position: [-1, 1, -1], name: 'Jane Smith', skill: 'Metalworking' },
    { position: [1, -1, -1], name: 'Mike Johnson', skill: 'Pottery' },
  ];

  useFrame((state, delta) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += delta * 0.1;
    }
    if (markersRef.current) {
      markersRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group>
      <Suspense fallback={null}>
        <group ref={earthRef}>
          <EarthMesh />
        </group>

        <group ref={markersRef}>
          {artisans.map((artisan, index) => (
            <group
              key={index}
              position={new Vector3(...artisan.position).normalize().multiplyScalar(2.1)}
            >
              <Sphere args={[0.05, 16, 16]}>
                <meshStandardMaterial
                  color="#FF4B4B"
                  emissive="#FF4B4B"
                  emissiveIntensity={0.5}
                />
              </Sphere>
              <Html position={[0, 0.1, 0]} center distanceFactor={8}>
                <div className="bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-lg">
                  <p className="font-bold text-sm">{artisan.name}</p>
                  <p className="text-xs text-gray-600">{artisan.skill}</p>
                </div>
              </Html>
            </group>
          ))}
        </group>

        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
      </Suspense>
    </group>
  );
};

export default Earth;