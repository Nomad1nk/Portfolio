"use client";

import React, { useEffect, useState } from "react";
import {
  Github,
  Mail,
  MapPin,
  Download,
  Database,
  Layout,
  Server,
  Cpu,
  Camera,
  Eye,
  MousePointer2,
  Brain,
  Globe,
  ShoppingBag,
  CreditCard,
  Calendar,
  Container,
  Facebook,
  Instagram,
  Phone,
  Mic,
  Radio,
  Cloud,
  Award,
  ExternalLink,
  Calculator,
  AudioLines,
  Coffee,
  Network,
  FlaskConical,
  Workflow,
  Search,
} from "lucide-react";

import CallDemo from "./components/CallDemo";
import ProjectBentoGrid, { ProjectLinks } from "./components/ProjectBentoGrid";
import { translations } from "./i18n";

type Lang = keyof typeof translations;
type T = (typeof translations)[Lang];

const LANGS: { code: Lang; label: string }[] = [
  { code: "mn", label: "MN" },
  { code: "en", label: "EN" },
  { code: "jp", label: "日本語" },
];

const NAME: Record<Lang, string> = {
  mn: "Б. Баясгалан",
  en: "Bayasgalan B.",
  jp: "バヤスガラン",
};

const CV: Record<Lang, string> = {
  mn: "/BayasgalanCV-MN.pdf",
  en: "/BayasgalanCV.pdf",
  jp: "/Bayasgalan.xlsx",
};

const EMAIL = "nomad2nk@gmail.com";
const PHONES = ["9921-6456", "8839-0306"];
const FACEBOOK = "https://www.facebook.com/baysgln.battulga.7/";

const TECH = [
  "Next.js / React",
  "TypeScript",
  "Tailwind CSS",
  "Python (FastAPI)",
  "Java / Spring Boot",
  "NestJS / Node.js",
  "Ruby on Rails",
  "PostgreSQL",
  "Redis",
  "Docker",
  "AWS",
  "Claude / OpenAI",
  "STT / TTS",
  "SIP / VoIP",
  "QPay / Stripe",
  "gRPC",
];

function isLang(v: unknown): v is Lang {
  return v === "mn" || v === "en" || v === "jp";
}

type Project = {
  id: string;
  categories: ("ai" | "web")[];
  title: string;
  status?: string;
  desc: string;
  feat1: string;
  feat2: string;
  link?: string;
  liveLink?: string;
  image?: string;
  icon?: React.ElementType;
  accent?: string;
  tech: { icon: React.ElementType; label: string }[];
};

function getProjects(t: T): Project[] {
  const p = t.projects;
  return [
    {
      id: "bedel",
      categories: ["ai", "web"],
      ...p.p0,
      liveLink: "https://bedel.mn",
      image: "/bedel-logo.png",
      tech: [
        { icon: Phone, label: "VoIP / SIP" },
        { icon: Mic, label: "Voice AI (STT/TTS)" },
        { icon: Brain, label: "OpenAI Function Calling" },
        { icon: CreditCard, label: "QPay" },
        { icon: Container, label: "Docker" },
        { icon: Radio, label: "Monitoring" },
        { icon: Cpu, label: "Python (FastAPI)" },
        { icon: Database, label: "PostgreSQL" },
      ],
    },
    {
      id: "haiguul",
      categories: ["ai", "web"],
      ...p.p7,
      liveLink: "https://haiguul.com",
      image: "/haiguul.jpg",
      tech: [
        { icon: Layout, label: "Next.js 15" },
        { icon: Brain, label: "Claude API" },
        { icon: Database, label: "Prisma / PostgreSQL" },
        { icon: Workflow, label: "BullMQ" },
        { icon: Search, label: "Fuzzy Search (MN)" },
        { icon: Cloud, label: "Fly.io" },
      ],
    },
    {
      id: "bedelerp",
      categories: ["web"],
      ...p.p9,
      icon: Calculator,
      accent: "from-emerald-500 to-teal-700",
      tech: [
        { icon: Coffee, label: "Java 21" },
        { icon: Server, label: "Spring Boot" },
        { icon: Database, label: "PostgreSQL / Flyway" },
        { icon: Network, label: "gRPC" },
        { icon: FlaskConical, label: "Testcontainers" },
        { icon: Container, label: "Docker" },
      ],
    },
    {
      id: "protocol",
      categories: ["ai"],
      ...p.p8,
      icon: AudioLines,
      accent: "from-violet-500 to-fuchsia-700",
      tech: [
        { icon: Cpu, label: "Python" },
        { icon: Mic, label: "pyannote (PyTorch)" },
        { icon: AudioLines, label: "Chimege STT" },
        { icon: Brain, label: "Claude API" },
      ],
    },
    {
      id: "booking",
      categories: ["web"],
      ...p.p2,
      link: "https://github.com/Nomad1nk/BookingSystem",
      liveLink: "https://bookingsystemn.vercel.app",
      image: "/Bookingsystem.png",
      tech: [
        { icon: Calendar, label: "Next.js" },
        { icon: Server, label: "NestJS" },
        { icon: Database, label: "PostgreSQL" },
        { icon: Layout, label: "Tailwind v4" },
        { icon: CreditCard, label: "Stripe" },
        { icon: Globe, label: "i18n" },
      ],
    },
    {
      id: "ecommerce",
      categories: ["web"],
      ...p.p4,
      link: "https://github.com/Nomad1nk/LuxEcommerce",
      liveLink: "https://lux-ecommerce.vercel.app",
      image: "/luxeComm.png",
      tech: [
        { icon: Layout, label: "Next.js" },
        { icon: ShoppingBag, label: "Shopify API" },
        { icon: CreditCard, label: "Stripe" },
        { icon: Database, label: "Redis" },
      ],
    },
    {
      id: "ecoroute",
      categories: ["web"],
      ...p.p1,
      status: undefined,
      link: "https://github.com/Nomad1nk/RouteChecker",
      liveLink: "https://route-checker.vercel.app",
      image: "/ecoroute.png",
      tech: [
        { icon: Layout, label: "Next.js 14" },
        { icon: Server, label: "Ruby on Rails" },
        { icon: Cpu, label: "Python Flask" },
        { icon: MapPin, label: "Leaflet / OSRM" },
      ],
    },
    {
      id: "mindsync",
      categories: ["ai", "web"],
      ...p.p3,
      link: "https://github.com/Nomad1nk/MindSync-Psychologist-AI",
      liveLink: "https://mind-sync-psychologist-ai.vercel.app",
      image: "/syncAI.png",
      tech: [
        { icon: Server, label: "FastAPI" },
        { icon: Database, label: "SQLite" },
        { icon: CreditCard, label: "Stripe" },
        { icon: Brain, label: "GPT-4o / Whisper" },
      ],
    },
    {
      id: "mousetrack",
      categories: ["ai"],
      ...p.p6,
      link: "https://github.com/Nomad1nk/MouseTrack",
      image: "/mousetrack.png",
      tech: [
        { icon: Cpu, label: "Python" },
        { icon: Camera, label: "OpenCV" },
        { icon: Eye, label: "Mediapipe" },
        { icon: MousePointer2, label: "PyAutoGUI" },
      ],
    },
  ];
}

function SectionHeading({ title, intro }: { title: string; intro?: string }) {
  return (
    <div className="max-w-2xl mb-10 md:mb-14">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink text-balance">
        {title}
      </h2>
      {intro && (
        <p className="mt-3 text-lg text-slate leading-relaxed text-pretty">{intro}</p>
      )}
    </div>
  );
}

export default function Portfolio() {
  const [lang, setLangState] = useState<Lang>("mn");
  const t = translations[lang];
  const projects = getProjects(t);
  const bedel = projects[0];
  const byId = Object.fromEntries(projects.map((p) => [p.id, p]));

  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get("lang");
    let saved: string | null = null;
    try {
      saved = localStorage.getItem("lang");
    } catch {}
    const browser = navigator.language.toLowerCase();
    const detected: Lang = browser.startsWith("mn")
      ? "mn"
      : browser.startsWith("ja")
        ? "jp"
        : "en";
    setLangState([fromUrl, saved].find(isLang) ?? detected);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "jp" ? "ja" : lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("lang", l);
    } catch {}
    const url = new URL(window.location.href);
    url.searchParams.set("lang", l);
    window.history.replaceState(null, "", url);
  };

  const navLinks = [
    ["#services", t.nav.services],
    ["#work", t.nav.work],
    ["#process", t.nav.process],
    ["#about", t.nav.about],
  ] as const;

  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="sticky top-0 z-50 bg-paper/85 backdrop-blur-md border-b border-line">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <a href="#top" className="font-bold text-lg tracking-tight rounded">
            {NAME[lang]}
          </a>

          <nav className="hidden md:flex gap-7 text-[0.95rem] text-slate">
            {navLinks.map(([href, label]) => (
              <a key={href} href={href} className="hover:text-ink transition-colors rounded">
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <div
              role="group"
              aria-label="Language"
              className="flex p-0.5 rounded-lg bg-white border border-line"
            >
              {LANGS.map(({ code, label }) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  aria-pressed={lang === code}
                  className={`px-2 sm:px-2.5 py-1 rounded-md text-xs font-semibold transition-colors ${
                    lang === code ? "bg-ink text-white" : "text-slate hover:text-ink"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <a
              href="#contact"
              className="hidden sm:inline-flex px-4 py-2 rounded-lg bg-khukh text-white text-sm font-semibold hover:bg-khukh-deep transition-colors"
            >
              {t.nav.cta}
            </a>
          </div>
        </div>
        <nav className="md:hidden flex justify-between gap-3 overflow-x-auto px-4 pb-2.5 text-sm text-slate">
          {navLinks.map(([href, label]) => (
            <a key={href} href={href} className="shrink-0 hover:text-ink rounded">
              {label}
            </a>
          ))}
        </nav>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-20 md:pt-20 md:pb-28 grid lg:grid-cols-[1.15fr_0.85fr] gap-14 lg:gap-16 items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-medium text-live mb-6">
              <span className="w-2 h-2 rounded-full bg-live" />
              {t.hero.available}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.3rem] font-bold tracking-[-0.03em] leading-[1.08] text-balance">
              {t.hero.title}
            </h1>
            <p className="mt-6 text-lg text-slate leading-relaxed max-w-xl text-pretty">
              {t.hero.lead}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl bg-khukh text-white font-semibold hover:bg-khukh-deep transition-colors shadow-[0_10px_30px_-10px_rgba(27,69,214,0.6)]"
              >
                {t.hero.primary}
              </a>
              <a
                href="#work"
                className="font-semibold text-ink underline decoration-line decoration-2 underline-offset-8 hover:decoration-khukh transition-colors rounded"
              >
                {t.hero.secondary}
              </a>
            </div>
          </div>

          <CallDemo copy={t.call} />
        </section>

        {/* Services */}
        <section id="services" className="bg-white border-y border-line py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SectionHeading title={t.services.title} intro={t.services.intro} />

            <div className="border-b border-line">
              {t.services.items.map((s) => (
                <div
                  key={s.title}
                  className="grid md:grid-cols-[1fr_1.5fr_1fr] gap-4 md:gap-10 py-8 border-t border-line"
                >
                  <h3 className="text-xl font-semibold tracking-tight">{s.title}</h3>
                  <p className="text-slate leading-relaxed text-pretty">{s.desc}</p>
                  <dl className="text-sm space-y-3">
                    <div>
                      <dt className="text-slate">{t.services.fitLabel}</dt>
                      <dd className="font-medium text-ink">{s.fit}</dd>
                    </div>
                    <div>
                      <dt className="text-slate">{t.services.exampleLabel}</dt>
                      <dd className="flex flex-wrap gap-x-3 gap-y-1">
                        {s.examples.map((id) => (
                          <a
                            key={id}
                            href={id === "bedel" ? "#case-bedel" : "#work-grid"}
                            className="font-medium text-khukh hover:text-khukh-deep rounded"
                          >
                            {byId[id]?.title}
                          </a>
                        ))}
                      </dd>
                    </div>
                  </dl>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SectionHeading title={t.work.title} intro={t.work.intro} />

            <article
              id="case-bedel"
              className="grid lg:grid-cols-[0.9fr_1.1fr] rounded-3xl overflow-hidden bg-white border border-line"
            >
              <div className="bg-ink flex items-center justify-center p-12 min-h-[240px]">
                <img src={bedel.image} alt="Bedel AI Box" className="w-full max-w-[280px]" />
              </div>
              <div className="p-7 md:p-10">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{bedel.title}</h3>
                  <span className="text-sm font-medium text-live">{bedel.status}</span>
                </div>
                <dl className="space-y-5">
                  {[
                    [t.work.problemLabel, t.work.problem],
                    [t.work.solutionLabel, t.work.solution],
                    [t.work.roleLabel, t.work.role],
                  ].map(([label, text]) => (
                    <div key={label}>
                      <dt className="text-sm font-semibold text-ink">{label}</dt>
                      <dd className="mt-1 text-slate leading-relaxed text-pretty">{text}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {bedel.tech.map((tech) => (
                    <span
                      key={tech.label}
                      className="px-2 py-0.5 rounded-md bg-paper border border-line text-xs text-slate"
                    >
                      {tech.label}
                    </span>
                  ))}
                </div>
                <div className="mt-7 pt-5 border-t border-line">
                  <ProjectLinks project={bedel} t={t} />
                </div>
              </div>
            </article>

            <div id="work-grid" className="mt-16">
              <h3 className="text-xl font-semibold tracking-tight mb-6">{t.work.othersTitle}</h3>
              <ProjectBentoGrid projects={projects.slice(1)} t={t} />
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="bg-white border-y border-line py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SectionHeading title={t.process.title} />
            <ol className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {t.process.steps.map((step, i) => (
                <li key={step.title} className="relative">
                  <div className="flex items-center gap-4 mb-5">
                    <span className="shrink-0 w-10 h-10 rounded-full bg-khukh-soft text-khukh font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    {i < t.process.steps.length - 1 && (
                      <span className="hidden lg:block h-px flex-1 bg-line" />
                    )}
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight">{step.title}</h3>
                  <p className="mt-2 text-slate leading-relaxed text-pretty">{step.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SectionHeading title={t.about.title} />
            <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
              {t.about.points.map((pt) => (
                <div key={pt.title} className="border-t-2 border-ink pt-5">
                  <h3 className="text-lg font-semibold tracking-tight">{pt.title}</h3>
                  <p className="mt-2 text-slate leading-relaxed text-pretty">{pt.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <h3 className="font-semibold mb-4">{t.about.techTitle}</h3>
                <ul className="flex flex-wrap gap-2">
                  {TECH.map((tech) => (
                    <li
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-white border border-line text-sm text-slate"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">{t.certifications.title}</h3>
                <ul className="space-y-2">
                  {[
                    { c: t.certifications.aws, href: "https://helloai.ink/verify/HBC-AWS-MPEH2K5U" },
                    { c: t.certifications.sql, href: "https://helloai.ink/verify/HBC-SQL-MQHKPJIL" },
                  ].map(({ c, href }) => (
                    <li key={href}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center gap-3 px-4 py-3 rounded-xl bg-white border border-line hover:border-khukh/40 transition-colors"
                      >
                        <Award size={20} className="shrink-0 text-khukh" />
                        <span className="flex-1 min-w-0">
                          <span className="block font-medium text-sm">{c.name}</span>
                          <span className="block text-xs text-slate">
                            {c.issuer}, {c.year}
                          </span>
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-khukh">
                          {c.verify} <ExternalLink size={12} />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="px-4 sm:px-6 pb-20">
          <div className="max-w-6xl mx-auto rounded-3xl bg-ink text-white px-6 py-14 sm:px-12 md:py-20">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-balance">
                {t.contact.title}
              </h2>
              <p className="mt-5 text-lg text-white/70 leading-relaxed text-pretty">
                {t.contact.desc}
              </p>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-3">
              <div className="flex items-center gap-3 px-6 py-4 rounded-xl bg-khukh">
                <Phone size={18} className="shrink-0" />
                <span>
                  <span className="block font-semibold">{t.contact.call}</span>
                  <span className="flex flex-wrap gap-x-3 text-white/85">
                    {PHONES.map((ph) => (
                      <a
                        key={ph}
                        href={`tel:+976${ph.replace("-", "")}`}
                        className="tabular-nums underline underline-offset-4 decoration-white/40 hover:decoration-white rounded"
                      >
                        {ph}
                      </a>
                    ))}
                  </span>
                </span>
              </div>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-white text-ink font-semibold hover:bg-khukh-soft transition-colors"
              >
                <Mail size={18} className="text-khukh" />
                <span>
                  {t.contact.email}
                  <span className="block text-sm font-normal text-slate">{EMAIL}</span>
                </span>
              </a>
              <a
                href={FACEBOOK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl border border-white/20 font-semibold hover:bg-white/10 transition-colors"
              >
                <Facebook size={18} />
                {t.contact.messenger}
              </a>
            </div>
            <p className="mt-10 pt-6 border-t border-white/10 text-sm text-white/60">
              {t.contact.employer}:{" "}
              <a
                href={CV[lang]}
                download
                className="inline-flex items-center gap-1.5 font-medium text-white underline underline-offset-4 decoration-white/30 hover:decoration-white rounded"
              >
                <Download size={14} />
                {t.contact.cv}
              </a>
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row gap-4 justify-between text-sm text-slate">
          <p>
            &copy; {new Date().getFullYear()} {NAME[lang]}. {t.footer.rights}{" "}
            {t.footer.location}
          </p>
          <div className="flex gap-5">
            {[
              { href: "https://github.com/nomad1nk", icon: Github, label: "GitHub" },
              { href: FACEBOOK, icon: Facebook, label: "Facebook" },
              { href: "https://www.instagram.com/baysakun/", icon: Instagram, label: "Instagram" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="hover:text-ink transition-colors rounded"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
