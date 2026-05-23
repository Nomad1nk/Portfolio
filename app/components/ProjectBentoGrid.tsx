"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

function FeaturedCard({ project, t, TechBadge, CheckIcon }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="group relative md:col-span-2 lg:row-span-2 bg-black/40 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-cyan-400/30 shadow-2xl shadow-cyan-500/10 hover:shadow-cyan-500/20 hover:border-cyan-400/50 transition-all duration-500 overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none" />
            <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 opacity-10 blur-3xl group-hover:opacity-20 transition-opacity duration-700" />

            <div className="relative flex flex-col lg:flex-row gap-6 lg:gap-8 h-full">
                <div className="lg:w-1/2 flex flex-col">
                    <div className="flex items-center gap-3 flex-wrap mb-4">
                        <h3 className="font-cartoon text-3d text-2xl md:text-4xl font-bold text-white tracking-wide">
                            {project.title}
                        </h3>
                        {project.status && (
                            <span className="px-2.5 py-1 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 text-cyan-200 text-[10px] md:text-xs font-bold uppercase tracking-wider rounded-full border border-cyan-400/30">
                                {project.status}
                            </span>
                        )}
                    </div>

                    <p className="text-gray-200 text-sm md:text-base font-medium mb-4 leading-relaxed">
                        {project.desc}
                    </p>

                    <ul className="space-y-2 mb-4">
                        <li className="flex items-start gap-3">
                            <span className="bg-white/10 p-1 rounded text-white mt-1 shrink-0">
                                <CheckIcon />
                            </span>
                            <span className="text-gray-300 text-sm">{project.feat1}</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="bg-white/10 p-1 rounded text-white mt-1 shrink-0">
                                <CheckIcon />
                            </span>
                            <span className="text-gray-300 text-sm">{project.feat2}</span>
                        </li>
                    </ul>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech: any, i: number) => (
                            <TechBadge key={i} icon={tech.icon} label={tech.label} />
                        ))}
                    </div>

                    <div className="mt-auto pt-4 flex flex-wrap gap-x-6 gap-y-3">
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center text-white font-bold hover:text-cyan-400 border-b-2 border-white hover:border-cyan-400 pb-0.5 transition-colors text-sm"
                        >
                            {t.projects.viewCode} <ExternalLink size={14} className="ml-2" />
                        </a>
                        {project.liveLink && (
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center text-cyan-400 font-bold hover:text-cyan-300 border-b-2 border-cyan-400 hover:border-cyan-300 pb-0.5 transition-colors text-sm"
                            >
                                {t.projects.liveDemo || "Live Demo"}{" "}
                                <ExternalLink size={14} className="ml-2" />
                            </a>
                        )}
                    </div>
                </div>

                <div className="lg:w-1/2 relative min-h-[200px] lg:min-h-[300px]">
                    <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black rounded-xl flex items-center justify-center overflow-hidden border border-white/10 shadow-lg">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="object-contain w-full h-full p-4 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition duration-700"
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

function CompactCard({ project, t, TechBadge, index }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="group relative bg-black/40 backdrop-blur-md rounded-3xl border border-white/10 hover:border-cyan-400/30 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 hover:-translate-y-1 overflow-hidden flex flex-col"
        >
            <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-black overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="object-contain w-full h-full p-3 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>

            <div className="relative p-5 flex-1 flex flex-col">
                <div className="flex items-center gap-2 flex-wrap mb-2">
                    <h3 className="font-cartoon text-xl font-bold text-white tracking-wide">
                        {project.title}
                    </h3>
                    {project.status && (
                        <span className="px-2 py-0.5 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 text-cyan-200 text-[9px] font-bold uppercase tracking-wider rounded-full border border-cyan-400/30">
                            {project.status}
                        </span>
                    )}
                </div>

                <p className="text-gray-300 text-sm mb-3 line-clamp-2 leading-relaxed">
                    {project.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.slice(0, 4).map((tech: any, i: number) => (
                        <TechBadge key={i} icon={tech.icon} label={tech.label} />
                    ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-x-4 gap-y-2 pt-3 border-t border-white/10">
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center text-white text-xs font-bold hover:text-cyan-400 transition-colors"
                    >
                        {t.projects.viewCode} <ExternalLink size={12} className="ml-1" />
                    </a>
                    {project.liveLink && (
                        <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center text-cyan-400 text-xs font-bold hover:text-cyan-300 transition-colors"
                        >
                            {t.projects.liveDemo || "Live Demo"}{" "}
                            <ExternalLink size={12} className="ml-1" />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

export default function ProjectBentoGrid({
    projects,
    t,
    TechBadge,
    CheckIcon,
}: any) {
    const [featured, ...rest] = projects;

    return (
        <div className="max-w-6xl mx-auto px-6 py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 auto-rows-[minmax(0,1fr)]">
                <FeaturedCard
                    project={featured}
                    t={t}
                    TechBadge={TechBadge}
                    CheckIcon={CheckIcon}
                />
                {rest.map((p: any, i: number) => (
                    <CompactCard
                        key={i}
                        project={p}
                        t={t}
                        TechBadge={TechBadge}
                        index={i}
                    />
                ))}
            </div>
        </div>
    );
}
