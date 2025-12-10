"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

function ProjectCard({ project, isActive, isNeighbor, t, TechBadge, CheckIcon }: any) {
    return (
        <div className={`w-full h-full p-4 md:p-8 transition-all duration-500`}>
            <div className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center bg-black/40 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl w-full h-full transition-all duration-500 ${isActive ? 'opacity-100 scale-100 blur-0' : 'opacity-40 scale-90 blur-sm grayscale'}`}>

                {/* Text Content - Only visible if active or large screen */}
                <div className={`space-y-6 order-2 md:order-1 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0 md:opacity-30'}`}>
                    <div className="flex items-center gap-3">
                        <h3 className="font-cartoon text-3d text-3xl md:text-5xl font-bold text-white tracking-wide">{project.title}</h3>
                        {project.status && (
                            <span className="px-3 py-1 bg-white/10 text-white text-xs font-bold uppercase tracking-wide rounded-full border border-white/20">
                                {project.status}
                            </span>
                        )}
                    </div>

                    <div className="prose text-gray-300 text-lg">
                        <p className="line-clamp-3 md:line-clamp-none">{project.desc}</p>
                        <ul className="space-y-3 mt-4 hidden md:block">
                            <li className="flex items-start gap-3">
                                <span className="bg-white/10 p-1 rounded text-white mt-1"><CheckIcon /></span>
                                <span>{project.feat1}</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="bg-white/10 p-1 rounded text-white mt-1"><CheckIcon /></span>
                                <span>{project.feat2}</span>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-4">
                        {project.tech.map((tech: any, i: number) => (
                            <TechBadge key={i} icon={tech.icon} label={tech.label} />
                        ))}
                    </div>

                    <div className="pt-4">
                        <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center text-white font-bold hover:text-cyan-400 border-b-2 border-white hover:border-cyan-400 pb-0.5 transition-colors text-lg">
                            {t.projects.viewCode} <ExternalLink size={20} className="ml-2" />
                        </a>
                    </div>
                </div>

                {/* Image Content */}
                <div className="order-1 md:order-2 h-full flex items-center">
                    <div className="aspect-video bg-gray-900 rounded-2xl flex items-center justify-center overflow-hidden relative border border-white/10 shadow-lg group w-full">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="object-cover w-full h-full opacity-90 group-hover:opacity-100 group-hover:scale-105 transition duration-700"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default function ProjectCarousel({ projects, t, TechBadge, CheckIcon }: any) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    // Mouse tracking for parallax
    const x = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 100, damping: 30 });
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isHovered) return;
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % projects.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [isHovered, projects.length]);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const { width, left } = containerRef.current.getBoundingClientRect();
        const mouseX = e.clientX - left;
        const center = width / 2;
        // Calculate offset: move opposite to mouse to "peek"
        const offset = (mouseX - center) * -0.05;
        x.set(offset);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        x.set(0);
    };

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % projects.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

    // Helper to get relative index for circular wrapping
    const getRelativeIndex = (index: number, current: number, length: number) => {
        const diff = (index - current + length) % length;
        if (diff > length / 2) return diff - length;
        return diff;
    };

    return (
        <div
            ref={containerRef}
            className="relative w-full overflow-hidden py-10 min-h-[700px] flex items-center justify-center perspective-1000"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
        >
            {/* 3D Stack Container */}
            <div className="relative w-full max-w-6xl h-[600px] flex items-center justify-center">
                <AnimatePresence initial={false}>
                    {projects.map((p: any, i: number) => {
                        const relativeIndex = getRelativeIndex(i, currentIndex, projects.length);
                        const isVisible = Math.abs(relativeIndex) <= 1; // Only show center and immediate neighbors

                        if (!isVisible) return null;

                        return (
                            <motion.div
                                key={i}
                                className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                                style={{
                                    zIndex: 20 - Math.abs(relativeIndex),
                                    x: springX
                                }}
                                initial={{ opacity: 0, scale: 0.8, x: relativeIndex * 1000 }}
                                animate={{
                                    x: `calc(${relativeIndex * 65}% + ${springX.get()}px)`, // 65% offset for neighbors
                                    scale: relativeIndex === 0 ? 1 : 0.85,
                                    opacity: relativeIndex === 0 ? 1 : 0.5,
                                    zIndex: 20 - Math.abs(relativeIndex)
                                }}
                                transition={{ type: "spring", stiffness: 50, damping: 20 }}
                            >
                                <ProjectCard
                                    project={p}
                                    isActive={relativeIndex === 0}
                                    isNeighbor={Math.abs(relativeIndex) === 1}
                                    t={t}
                                    TechBadge={TechBadge}
                                    CheckIcon={CheckIcon}
                                />
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-4 md:left-10 z-30 p-3 bg-black/50 hover:bg-white/20 rounded-full text-white backdrop-blur-md border border-white/10 transition-all"
            >
                <ChevronLeft size={32} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 md:right-10 z-30 p-3 bg-black/50 hover:bg-white/20 rounded-full text-white backdrop-blur-md border border-white/10 transition-all"
            >
                <ChevronRight size={32} />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-0 left-0 w-full flex justify-center gap-2 z-30">
                {projects.map((_: any, i: number) => (
                    <button
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={`w-3 h-3 rounded-full transition-all ${i === currentIndex ? 'bg-cyan-400 w-8' : 'bg-white/20 hover:bg-white/40'}`}
                    />
                ))}
            </div>
        </div>
    );
}
