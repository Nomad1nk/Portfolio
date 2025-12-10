"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

// Helper component for individual project card animation
function ProjectCard({ project, index, t, TechBadge, CheckIcon }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="min-w-full md:min-w-[80vw] lg:min-w-[70vw] h-full flex items-center justify-center p-4 md:p-12 snap-center"
        >
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center bg-black/40 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl w-full max-w-6xl">

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
    const containerRef = useRef(null);

    return (
        <div className="relative w-full overflow-hidden py-10">
            <div
                ref={containerRef}
                className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-10 px-4 md:px-20 gap-8"
                style={{ scrollBehavior: 'smooth' }}
            >
                {projects.map((p: any, i: number) => (
                    <ProjectCard
                        key={i}
                        project={p}
                        index={i}
                        t={t}
                        TechBadge={TechBadge}
                        CheckIcon={CheckIcon}
                    />
                ))}
            </div>

            {/* Scroll Hint */}
            <div className="absolute bottom-0 left-0 w-full flex justify-center pb-4 pointer-events-none opacity-50">
                <span className="text-white text-sm uppercase tracking-widest animate-pulse">Scroll Horizontal &rarr;</span>
            </div>
        </div>
    );
}
