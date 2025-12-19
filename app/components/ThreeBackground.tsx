"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function ThreeBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const columns = Math.floor(width / 20);
        const drops: number[] = [];

        for (let i = 0; i < columns; i++) {
            drops[i] = 1;
        }

        // Ancient Romaji (Latin + Runic)
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789ᚠᚢᚦᚨᚱᚲᚷᚹᚺᚾᛁᛃᛈᛇᛉᛊᛏᛒᛖᛗᛚᛜᛞᛟ";

        const draw = () => {
            // Fade effect - transparent black to allow image to show through slightly if needed, 
            // but mostly we want the rain to be visible. 
            // Using a very low opacity clear rect or fill rect to create trails.
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, width, height);

            // Silver/White text
            ctx.fillStyle = '#C0C0C0'; // Silver
            ctx.font = '15px monospace';

            for (let i = 0; i < drops.length; i++) {
                const text = chars.charAt(Math.floor(Math.random() * chars.length));

                // Randomly vary opacity for "glitch" effect
                ctx.globalAlpha = Math.random() * 0.5 + 0.5;

                ctx.fillText(text, i * 20, drops[i] * 20);

                if (drops[i] * 20 > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
            ctx.globalAlpha = 1.0;
        };

        const interval = setInterval(draw, 33);

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            // Re-initialize drops on resize to prevent gaps
            const newColumns = Math.floor(width / 20);
            for (let i = 0; i < newColumns; i++) {
                drops[i] = drops[i] || 1;
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="absolute inset-0 w-full h-full z-0">
            {/* Static Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/futuristic-bg.png"
                    alt="Futuristic Background"
                    fill
                    className="object-cover opacity-30" // Lower opacity to blend with dark theme
                    priority
                />
            </div>

            {/* Digital Rain Canvas Overlay */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full z-10 opacity-60 mix-blend-screen"
            />
        </div>
    );
}
