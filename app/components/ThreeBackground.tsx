"use client";

import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

function generateParticles(count: number) {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 3; // Spread particles in a 3x3x3 cube
    }
    return positions;
}

function Stars(props: any) {
    const ref = useRef<any>();
    // Generate 7000 particles for a denser storm
    const [sphere] = useState(() => generateParticles(7000));

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 4; // Faster rotation for storm effect
            ref.current.rotation.y -= delta / 5;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#a5f3fc" // Icy blue
                    size={0.003}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.8}
                />
            </Points>
        </group>
    );
}

export default function ThreeBackground() {
    return (
        <div className="absolute inset-0 w-full h-full z-0">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Stars />
            </Canvas>
        </div>
    );
}
