"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

function ProjectCard({ project, isActive, isNeighbor, t, TechBadge, CheckIcon }: any) {
    return (
        <div className={`w-full h-full p-4 transition-all duration-500`}>
            <div className={`grid md:grid-cols-2 gap-6 md:gap-12 items-center bg-white/80 dark:bg-black/40 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-black/5 dark:border-white/10 shadow-2xl w-full h-full transition-all duration-500 ${isActive ? 'opacity-100 scale-100 blur-0' : 'opacity-40 scale-90 blur-sm grayscale'}`}>

                {/* Text Content */}
                <div className={`space-y-4 md:space-y-6 order-2 md:order-1 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0 md:opacity-30'}`}>
                    <div className="flex items-center gap-3">
                        <h3 className="font-cartoon text-3d text-2xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-wide">{project.title}</h3>
                        {project.status && (
                            <span className="px-2 py-0.5 bg-black/5 dark:bg-white/10 text-gray-700 dark:text-white text-[10px] md:text-xs font-bold uppercase tracking-wide rounded-full border border-black/10 dark:border-white/20">
                                {project.status}
                            </span>
                        )}
                    </div>

                    <div className="prose text-gray-600 dark:text-gray-300 text-sm md:text-lg">
                        <p className="line-clamp-3 md:line-clamp-none">{project.desc}</p>
                        <ul className="space-y-2 mt-4 hidden md:block">
                            <li className="flex items-start gap-3">
                                <span className="bg-black/5 dark:bg-white/10 p-1 rounded text-gray-900 dark:text-white mt-1"><CheckIcon /></span>
                                <span>{project.feat1}</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="bg-black/5 dark:bg-white/10 p-1 rounded text-gray-900 dark:text-white mt-1"><CheckIcon /></span>
                                <span>{project.feat2}</span>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2 md:pt-4">
                        {project.tech.map((tech: any, i: number) => (
                            <TechBadge key={i} icon={tech.icon} label={tech.label} />
                        ))}
                    </div>

                    <div className="pt-2 md:pt-4">
                        <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center text-gray-900 dark:text-white font-bold hover:text-cyan-600 dark:hover:text-cyan-400 border-b-2 border-gray-900 dark:border-white hover:border-cyan-600 dark:hover:border-cyan-400 pb-0.5 transition-colors text-sm md:text-lg">
                            {t.projects.viewCode} <ExternalLink size={16} className="ml-2" />
                        </a>
                    </div>
                </div>

                {/* Image Content */}
                <div className="order-1 md:order-2 h-full flex items-center justify-center">
                    <div className="aspect-video bg-gray-100 dark:bg-gray-900 rounded-xl flex items-center justify-center overflow-hidden relative border border-black/5 dark:border-white/10 shadow-lg group w-full">
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

// Dedicated Slide Component to handle complex transforms
function CarouselSlide({ project, index, currentIndex, total, springX, t, TechBadge, CheckIcon }: any) {
    // Calculate relative index for circular wrapping
    let relativeIndex = (index - currentIndex + total) % total;
    if (relativeIndex > total / 2) relativeIndex -= total;

    // Spring for the base position (slide transition)
    const baseOffset = useSpring(relativeIndex * 65, { stiffness: 50, damping: 20 });

    useEffect(() => {
        baseOffset.set(relativeIndex * 65);
    }, [relativeIndex, baseOffset]);

    // Combine transforms: Base Offset (%) + Mouse Parallax (px)
    // We removed -50% because we are using mx-auto for centering
    const x = useTransform(
        [baseOffset, springX],
        ([base, spring]) => `calc(${base}% + ${spring}px)`
    );

    // Visibility check
    const isVisible = Math.abs(relativeIndex) <= 2;
    if (!isVisible) return null;

    return (
        <motion.div
            className="absolute top-0 bottom-0 left-0 right-0 mx-auto w-[85%] md:w-[60%] h-full flex items-center justify-center pointer-events-none"
            style={{
                x, // Apply the combined transform here
                zIndex: 20 - Math.abs(relativeIndex),
                scale: relativeIndex === 0 ? 1 : 0.8,
                opacity: relativeIndex === 0 ? 1 : 0.4,
            }}
            animate={{
                scale: relativeIndex === 0 ? 1 : 0.8,
                opacity: relativeIndex === 0 ? 1 : 0.4,
                zIndex: 20 - Math.abs(relativeIndex)
            }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
        >
            <div className="w-full h-full pointer-events-auto">
                <ProjectCard
                    project={project}
                    isActive={relativeIndex === 0}
                    isNeighbor={Math.abs(relativeIndex) === 1}
                    t={t}
                    TechBadge={TechBadge}
                    CheckIcon={CheckIcon}
                />
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
        const offset = (mouseX - center) * -0.05;
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
            className="relative w-full overflow-hidden py-10 min-h-[600px] flex items-center justify-center perspective-1000"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
        >
            {/* 3D Stack Container */}
            <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center">
                <AnimatePresence initial={false}>
                    {projects.map((p: any, i: number) => (
                        <CarouselSlide
                            key={i}
                            project={p}
                            index={i}
                            currentIndex={currentIndex}
                            total={projects.length}
                            springX={springX}
                            t={t}
                            TechBadge={TechBadge}
                            CheckIcon={CheckIcon}
                        />
                    ))}
                </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-2 md:left-10 z-30 p-2 md:p-3 bg-white/50 dark:bg-black/50 hover:bg-white/80 dark:hover:bg-white/20 rounded-full text-gray-900 dark:text-white backdrop-blur-md border border-black/5 dark:border-white/10 transition-all"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-2 md:right-10 z-30 p-2 md:p-3 bg-white/50 dark:bg-black/50 hover:bg-white/80 dark:hover:bg-white/20 rounded-full text-gray-900 dark:text-white backdrop-blur-md border border-black/5 dark:border-white/10 transition-all"
            >
                <ChevronRight size={24} />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-0 left-0 w-full flex justify-center gap-2 z-30">
                {projects.map((_: any, i: number) => (
                    <button
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${i === currentIndex ? 'bg-cyan-500 dark:bg-cyan-400 w-6 md:w-8' : 'bg-black/20 dark:bg-white/20 hover:bg-black/40 dark:hover:bg-white/40'}`}
                    />
                ))}
            </div>
        </div>
    );
}
