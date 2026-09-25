"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ExternalLink, Github, Lock } from "lucide-react";

type Category = "ai" | "web";

export function ProjectVisual({ project, className = "" }: any) {
    if (project.image) {
        return (
            <img
                src={project.image}
                alt=""
                className={`object-contain w-full h-full p-4 ${className}`}
            />
        );
    }

    const Icon = project.icon;
    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className={`p-4 rounded-2xl bg-gradient-to-br ${project.accent} text-white shadow-lg`}>
                <Icon size={36} strokeWidth={2} />
            </div>
        </div>
    );
}

export function ProjectLinks({ project, t }: any) {
    return (
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
            {project.liveLink && (
                <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-khukh hover:text-khukh-deep rounded"
                >
                    {t.projects.liveDemo} <ExternalLink size={14} />
                </a>
            )}
            {project.link ? (
                <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-ink hover:text-khukh rounded"
                >
                    <Github size={14} /> {t.projects.viewCode}
                </a>
            ) : (
                <span className="inline-flex items-center gap-1.5 text-slate">
                    <Lock size={14} /> {t.projects.privateCode}
                </span>
            )}
        </div>
    );
}

function ProjectCard({ project, t }: any) {
    const [open, setOpen] = useState(false);

    return (
        <motion.article
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col rounded-2xl bg-white border border-line overflow-hidden hover:border-khukh/40 transition-colors"
        >
            <div className="aspect-[16/9] bg-paper border-b border-line">
                <ProjectVisual project={project} />
            </div>

            <div className="flex-1 flex flex-col p-5">
                <div className="flex items-baseline justify-between gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-ink tracking-tight">{project.title}</h3>
                    {project.status && (
                        <span className="shrink-0 text-xs font-medium text-slate">{project.status}</span>
                    )}
                </div>

                <p className={`text-[0.95rem] text-slate leading-relaxed ${open ? "" : "line-clamp-3"}`}>
                    {project.desc}
                </p>

                <AnimatePresence initial={false}>
                    {open && (
                        <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                        >
                            {[project.feat1, project.feat2].map((feat: string, i: number) => (
                                <li key={i} className="flex gap-2.5 pt-3 text-sm text-slate leading-relaxed">
                                    <Check size={16} className="shrink-0 mt-0.5 text-khukh" />
                                    <span>{feat}</span>
                                </li>
                            ))}
                            <li className="flex flex-wrap gap-1.5 pt-3">
                                {project.tech.map((tech: any) => (
                                    <span
                                        key={tech.label}
                                        className="px-2 py-0.5 rounded-md bg-paper border border-line text-xs text-slate"
                                    >
                                        {tech.label}
                                    </span>
                                ))}
                            </li>
                        </motion.ul>
                    )}
                </AnimatePresence>

                <button
                    onClick={() => setOpen(!open)}
                    aria-expanded={open}
                    className="self-start mt-3 text-sm font-medium text-khukh hover:text-khukh-deep rounded"
                >
                    {open ? t.projects.showLess : t.projects.showMore}
                </button>

                <div className="mt-auto pt-4"><div className="pt-4 border-t border-line">
                    <ProjectLinks project={project} t={t} />
                </div></div>
            </div>
        </motion.article>
    );
}

export default function ProjectBentoGrid({ projects, t }: any) {
    const [filter, setFilter] = useState<"all" | Category>("all");

    const visible =
        filter === "all"
            ? projects
            : projects.filter((p: any) => p.categories.includes(filter));

    const tabs: { key: "all" | Category; label: string }[] = [
        { key: "all", label: t.projects.filters.all },
        { key: "ai", label: t.projects.filters.ai },
        { key: "web", label: t.projects.filters.web },
    ];

    return (
        <div>
            <div role="tablist" className="flex flex-wrap gap-2 mb-8">
                {tabs.map((tab) => {
                    const active = filter === tab.key;
                    return (
                        <button
                            key={tab.key}
                            role="tab"
                            aria-selected={active}
                            onClick={() => setFilter(tab.key)}
                            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                                active
                                    ? "bg-ink text-white border-ink"
                                    : "bg-white text-slate border-line hover:border-ink/30 hover:text-ink"
                            }`}
                        >
                            {tab.label}
                        </button>
                    );
                })}
            </div>

            <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <AnimatePresence mode="popLayout">
                    {visible.map((p: any) => (
                        <ProjectCard key={p.id} project={p} t={t} />
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
