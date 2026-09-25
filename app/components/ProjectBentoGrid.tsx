"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Lock } from "lucide-react";

type Category = "ai" | "web";

function ProjectVisual({ project, featured }: any) {
    if (project.image) {
        return (
            <img
                src={project.image}
                alt={project.title}
                className={`object-contain w-full h-full ${featured ? "p-4 opacity-90" : "p-3 opacity-80"} group-hover:opacity-100 group-hover:scale-105 transition duration-700`}
            />
        );
    }

    const Icon = project.icon;
    return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <div
                className={`absolute -inset-10 bg-gradient-to-br ${project.accent} opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-700`}
            />
            <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                }}
            />
            <div
                className={`relative p-5 rounded-2xl bg-gradient-to-br ${project.accent} shadow-2xl group-hover:scale-110 transition-transform duration-500`}
            >
                <Icon size={40} className="text-white" strokeWidth={2} />
            </div>
        </div>
    );
}

function ProjectLinks({ project, t, compact }: any) {
    const size = compact ? 12 : 14;
    return (
        <>
            {project.link ? (
                <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className={
                        compact
                            ? "inline-flex items-center text-white text-xs font-bold hover:text-cyan-400 transition-colors"
                            : "inline-flex items-center text-white font-bold hover:text-cyan-400 border-b-2 border-white hover:border-cyan-400 pb-0.5 transition-colors text-sm"
                    }
                >
                    {t.projects.viewCode} <ExternalLink size={size} className="ml-1.5" />
                </a>
            ) : (
                <span
                    className={`inline-flex items-center gap-1.5 text-gray-400 font-semibold ${compact ? "text-xs" : "text-sm"}`}
                >
                    <Lock size={size} /> {t.projects.privateCode}
                </span>
            )}
            {project.liveLink && (
                <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className={
                        compact
                            ? "inline-flex items-center text-cyan-400 text-xs font-bold hover:text-cyan-300 transition-colors"
                            : "inline-flex items-center text-cyan-400 font-bold hover:text-cyan-300 border-b-2 border-cyan-400 hover:border-cyan-300 pb-0.5 transition-colors text-sm"
                    }
                >
                    {t.projects.liveDemo} <ExternalLink size={size} className="ml-1.5" />
                </a>
            )}
        </>
    );
}

function StatusBadge({ status, small }: { status?: string; small?: boolean }) {
    if (!status) return null;
    return (
        <span
            className={`bg-gradient-to-r from-cyan-400/20 to-blue-500/20 text-cyan-200 font-bold uppercase tracking-wider rounded-full border border-cyan-400/30 ${small ? "px-2 py-0.5 text-[9px]" : "px-2.5 py-1 text-[10px] md:text-xs"}`}
        >
            {status}
        </span>
    );
}

function FeaturedCard({ project, t, TechBadge, CheckIcon }: any) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.5 }}
            className="group relative md:col-span-2 lg:row-span-2 bg-black/40 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-cyan-400/30 shadow-2xl shadow-cyan-500/10 hover:shadow-cyan-500/20 hover:border-cyan-400/50 transition-[border-color,box-shadow] duration-500 overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none" />
            <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 opacity-10 blur-3xl group-hover:opacity-20 transition-opacity duration-700" />

            <div className="relative flex flex-col lg:flex-row gap-6 lg:gap-8 h-full">
                <div className="lg:w-1/2 flex flex-col">
                    <div className="flex items-center gap-3 flex-wrap mb-4">
                        <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
                            {project.title}
                        </h3>
                        <StatusBadge status={project.status} />
                    </div>

                    <p className="text-gray-200 text-sm md:text-base font-medium mb-4 leading-relaxed">
                        {project.desc}
                    </p>

                    <ul className="space-y-2 mb-4">
                        {[project.feat1, project.feat2].map((feat: string, i: number) => (
                            <li key={i} className="flex items-start gap-3">
                                <span className="bg-white/10 p-1 rounded text-white mt-1 shrink-0">
                                    <CheckIcon />
                                </span>
                                <span className="text-gray-300 text-sm">{feat}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech: any, i: number) => (
                            <TechBadge key={i} icon={tech.icon} label={tech.label} />
                        ))}
                    </div>

                    <div className="mt-auto pt-4 flex flex-wrap gap-x-6 gap-y-3">
                        <ProjectLinks project={project} t={t} />
                    </div>
                </div>

                <div className="lg:w-1/2 relative min-h-[200px] lg:min-h-[300px]">
                    <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black rounded-xl flex items-center justify-center overflow-hidden border border-white/10 shadow-lg">
                        <ProjectVisual project={project} featured />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

function CompactCard({ project, t, TechBadge, CheckIcon, index }: any) {
    const [open, setOpen] = useState(false);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.45, delay: Math.min(index, 6) * 0.05 }}
            className="group relative bg-black/40 backdrop-blur-md rounded-3xl border border-white/10 hover:border-cyan-400/30 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 transition-[border-color,box-shadow] duration-500 overflow-hidden flex flex-col"
        >
            <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-black overflow-hidden">
                <ProjectVisual project={project} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>

            <div className="relative p-5 flex-1 flex flex-col">
                <div className="flex items-center gap-2 flex-wrap mb-2">
                    <h3 className="text-xl font-bold text-white tracking-tight">
                        {project.title}
                    </h3>
                    <StatusBadge status={project.status} small />
                </div>

                <p
                    className={`text-gray-300 text-sm mb-3 leading-relaxed ${open ? "" : "line-clamp-3"}`}
                >
                    {project.desc}
                </p>

                {open && (
                    <ul className="space-y-2 mb-3">
                        {[project.feat1, project.feat2].map((feat: string, i: number) => (
                            <li key={i} className="flex items-start gap-2.5">
                                <span className="bg-white/10 p-1 rounded text-white mt-0.5 shrink-0">
                                    <CheckIcon />
                                </span>
                                <span className="text-gray-400 text-xs leading-relaxed">{feat}</span>
                            </li>
                        ))}
                    </ul>
                )}

                <button
                    onClick={() => setOpen(!open)}
                    className="self-start text-xs font-semibold text-cyan-400/80 hover:text-cyan-300 mb-3 transition-colors"
                >
                    {open ? t.projects.showLess : t.projects.showMore}
                </button>

                <div className="flex flex-wrap gap-1.5 mb-4">
                    {(open ? project.tech : project.tech.slice(0, 4)).map((tech: any, i: number) => (
                        <TechBadge key={i} icon={tech.icon} label={tech.label} />
                    ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-x-4 gap-y-2 pt-3 border-t border-white/10">
                    <ProjectLinks project={project} t={t} compact />
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
    const [filter, setFilter] = useState<"all" | Category>("all");

    const visible =
        filter === "all"
            ? projects
            : projects.filter((p: any) => p.categories.includes(filter));
    const [featured, ...rest] = visible;
    const showFeatured = featured && featured.featured;
    const compact = showFeatured ? rest : visible;

    const tabs: { key: "all" | Category; label: string }[] = [
        { key: "all", label: t.projects.filters.all },
        { key: "ai", label: t.projects.filters.ai },
        { key: "web", label: t.projects.filters.web },
    ];

    return (
        <div className="max-w-6xl mx-auto px-6 py-6">
            <div className="flex flex-wrap gap-2 mb-8">
                {tabs.map((tab) => {
                    const count =
                        tab.key === "all"
                            ? projects.length
                            : projects.filter((p: any) => p.categories.includes(tab.key)).length;
                    const active = filter === tab.key;
                    return (
                        <button
                            key={tab.key}
                            onClick={() => setFilter(tab.key)}
                            className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
                                active
                                    ? "bg-white text-black border-white shadow-lg shadow-cyan-500/10"
                                    : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:border-cyan-400/30"
                            }`}
                        >
                            {tab.label}
                            <span className={`ml-2 text-xs ${active ? "text-gray-500" : "text-gray-500"}`}>
                                {count}
                            </span>
                        </button>
                    );
                })}
            </div>

            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
            >
                <AnimatePresence mode="popLayout">
                    {showFeatured && (
                        <FeaturedCard
                            key={featured.id}
                            project={featured}
                            t={t}
                            TechBadge={TechBadge}
                            CheckIcon={CheckIcon}
                        />
                    )}
                    {compact.map((p: any, i: number) => (
                        <CompactCard
                            key={p.id}
                            project={p}
                            t={t}
                            TechBadge={TechBadge}
                            CheckIcon={CheckIcon}
                            index={i}
                        />
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
