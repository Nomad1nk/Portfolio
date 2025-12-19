"use client";

import React, { useEffect, useRef } from 'react';

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

        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789ᚠᚢᚦᚨᚱᚲᚷᚹᚺᚾᛁᛃᛈᛇᛉᛊᛏᛒᛖᛗᛚᛜᛞᛟ";

        const draw = () => {
            // Fade effect (Dark Mode)
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, width, height);

            // Black, White, Silver Theme
            // Silver/White text (Dark Mode)
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
        <div className="absolute inset-0 w-full h-full z-0 opacity-30 pointer-events-none">
            <canvas ref={canvasRef} className="w-full h-full" />
        </div>
    );
}
