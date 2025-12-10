"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

function ProjectCard({ project, isActive, t, TechBadge, CheckIcon }: any) {
    return (
        <motion.div
            className={`w-full max-w-6xl mx-auto p-4 md:p-8 transition-all duration-500 ${isActive ? 'opacity-100 scale-100 blur-0' : 'opacity-40 scale-90 blur-sm'}`}
        >
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center bg-black/40 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl w-full">

                {/* Text Content */}
                <div className="space-y-6 order-2 md:order-1">
                    <div className="flex items-center gap-3">
                        <h3 className="font-cartoon text-3d text-3xl md:text-5xl font-bold text-white tracking-wide">{project.title}</h3>
                        {project.status && (
                            <span className="px-3 py-1 bg-white/10 text-white text-xs font-bold uppercase tracking-wide rounded-full border border-white/20">
                                {project.status}
                            </span>
                        )}
                    </div>

                    <div className="prose text-gray-300 text-lg">
                        <p>{project.desc}</p>
                        <ul className="space-y-3 mt-4">
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
                <div className="order-1 md:order-2">
                    <div className="aspect-video bg-gray-900 rounded-2xl flex items-center justify-center overflow-hidden relative border border-white/10 shadow-lg group">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="object-cover w-full h-full opacity-90 group-hover:opacity-100 group-hover:scale-105 transition duration-700"
                        />
                    </div>
                </div>

            </div>
        </motion.div>
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
        const offset = (mouseX - center) * -0.1;
        x.set(offset);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        x.set(0);
    };

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % projects.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

    return (
        <div
            ref={containerRef}
            className="relative w-full overflow-hidden py-10 min-h-[600px] flex items-center justify-center"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
        >
            {/* Background Track */}
            <motion.div
                className="flex absolute left-0 top-0 h-full items-center"
                style={{
                    x: springX, // Parallax offset
                    width: `${projects.length * 100}%`
                }}
                animate={{
                    x: `calc(-${currentIndex * 100}% + ${springX.get()}px)`
                }}
                transition={{ type: "spring", stiffness: 50, damping: 20 }}
            >
                {projects.map((p: any, i: number) => (
                    <div key={i} className="w-full flex justify-center px-4 md:px-20" style={{ width: `${100 / projects.length}%` }}>
                        <ProjectCard
                            project={p}
                            isActive={i === currentIndex}
                            t={t}
                            TechBadge={TechBadge}
                            CheckIcon={CheckIcon}
                        />
                    </div>
                ))}
            </motion.div>

            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-4 md:left-10 z-20 p-3 bg-black/50 hover:bg-white/20 rounded-full text-white backdrop-blur-md border border-white/10 transition-all"
            >
                <ChevronLeft size={32} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 md:right-10 z-20 p-3 bg-black/50 hover:bg-white/20 rounded-full text-white backdrop-blur-md border border-white/10 transition-all"
            >
                <ChevronRight size={32} />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-0 w-full flex justify-center gap-2 z-20">
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
