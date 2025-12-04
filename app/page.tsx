"use client";

import React, { useState } from 'react';
import { Github, Linkedin, Mail, MapPin, ExternalLink, Download, Database, Layout, Server, Cpu, Camera, Eye, MousePointer2, Brain, MessageSquare, Sparkles } from 'lucide-react';

const translations = {
  en: {
    nav: { about: "About", projects: "Projects", stack: "Stack", contact: "Contact" },
    hero: {
      openToWork: "Open to Work",
      titlePrefix: "Building Scalable",
      titleHighlight: "Microservices",
      titleSuffix: "& AI Solutions.",
      description: "I am a Full-Stack Developer based in Japan, specializing in Next.js, Ruby on Rails, and Applied AI. I combine academic rigor with practical engineering to build systems that solve real-world logistics, interaction, and cognitive problems.",
      contact: "Contact Me",
      github: "GitHub"
    },
    projects: {
      title: "Featured Projects",
      p1: {
        title: "EcoRoute Optimizer",
        desc: "A sustainable logistics platform that reduces carbon emissions by optimizing delivery routes using real-world physics and traffic data.",
        feat1: "Microservice Architecture: Decoupled services for Logic (Python), Management (Rails), and UI (Next.js).",
        feat2: "Real-World Routing: Integrated OSRM to fetch precise road geometry and traffic-adjusted travel times."
      },
      p2: {
        title: "Virtual Mouse & Eye Tracker",
        desc: "A hands-free HCI (Human-Computer Interaction) system enabling touchless control using computer vision to translate gestures into precise cursor actions.",
        feat1: "Gesture Recognition: Controls mouse clicks and scrolling via fingertip tracking and eye blinks.",
        feat2: "Optimized Performance: Built with OpenCV and MediaPipe for high-FPS real-time processing on standard CPUs."
      },
      p3: {
        title: "MindSync AI",
        status: "In Development",
        desc: "An empathetic AI companion designed for deep psychological context retention. It utilizes Vector Memory to maintain \"perfect sync\" with the user's long-term history and emotional state.",
        feat1: "RAG Architecture: Retrieval-Augmented Generation using vector embeddings to recall past conversations accurately.",
        feat2: "Emotional Alignment: System prompts tuned for psychological support modalities (CBT/DBT principles)."
      },
      viewCode: "View Code on GitHub"
    },
    skills: { title: "Technical Competencies" },
    footer: {
      title: "Ready to make an impact.",
      desc: "I am actively interviewing and can relocate immediately upon graduation/visa approval.",
      rights: "All rights reserved.",
      imprint: "Imprint (Impressum) | Data Privacy (Datenschutz)"
    },
    cv: "Download CV"
  },
  jp: {
    nav: { about: "私について", projects: "プロジェクト", stack: "技術スタック", contact: "コンタクト" },
    hero: {
      openToWork: "求職中",
      titlePrefix: "スケーラブルな",
      titleHighlight: "マイクロサービス",
      titleSuffix: "とAIソリューションの構築",
      description: "日本を拠点とするフルスタック開発者です。Next.js、Ruby on Rails、応用AIを専門としています。学術的な厳密さと実践的なエンジニアリングを組み合わせ、物流、インタラクション、認知の問題を解決するシステムを構築します。",
      contact: "お問い合わせ",
      github: "GitHub"
    },
    projects: {
      title: "主なプロジェクト",
      p1: {
        title: "EcoRoute Optimizer",
        desc: "現実世界の物理学と交通データを使用して配送ルートを最適化し、二酸化炭素排出量を削減する持続可能な物流プラットフォーム。",
        feat1: "マイクロサービスアーキテクチャ: ロジック(Python)、管理(Rails)、UI(Next.js)のための分離されたサービス。",
        feat2: "実世界ルーティング: OSRMを統合して、正確な道路形状と交通調整された移動時間を取得。"
      },
      p2: {
        title: "Virtual Mouse & Eye Tracker",
        desc: "コンピュータビジョンを使用してジェスチャーを正確なカーソル操作に変換し、タッチレス制御を可能にするハンズフリーHCIシステム。",
        feat1: "ジェスチャー認識: 指先の追跡とまばたきによるマウスクリックとスクロールの制御。",
        feat2: "最適化されたパフォーマンス: OpenCVとMediaPipeを使用して構築され、標準CPUでの高FPSリアルタイム処理を実現。"
      },
      p3: {
        title: "MindSync AI",
        status: "開発中",
        desc: "深い心理的文脈の保持のために設計された共感型AIコンパニオン。ベクトルメモリを使用して、ユーザーの長期的な履歴と感情状態との「完全な同期」を維持します。",
        feat1: "RAGアーキテクチャ: ベクトル埋め込みを使用した検索拡張生成により、過去の会話を正確に想起。",
        feat2: "感情調整: 心理的サポートのモダリティ(CBT/DBTの原則)に合わせて調整されたシステムプロンプト。"
      },
      viewCode: "GitHubでコードを見る"
    },
    skills: { title: "技術コンピテンシー" },
    footer: {
      title: "インパクトを与える準備ができています。",
      desc: "積極的に面接を受けており、卒業/ビザ承認後すぐに移転可能です。",
      rights: "All rights reserved.",
      imprint: "Imprint (Impressum) | Data Privacy (Datenschutz)"
    },
    cv: "履歴書をダウンロード"
  },
  de: {
    nav: { about: "Über mich", projects: "Projekte", stack: "Tech Stack", contact: "Kontakt" },
    hero: {
      openToWork: "Offen für Arbeit",
      titlePrefix: "Entwicklung skalierbarer",
      titleHighlight: "Microservices",
      titleSuffix: "& KI-Lösungen",
      description: "Ich bin ein Full-Stack-Entwickler mit Sitz in Japan, spezialisiert auf Next.js, Ruby on Rails und angewandte KI. Ich verbinde akademische Strenge mit praktischem Engineering, um Systeme zu bauen, die reale Probleme in Logistik, Interaktion und Kognition lösen.",
      contact: "Kontaktieren Sie mich",
      github: "GitHub"
    },
    projects: {
      title: "Ausgewählte Projekte",
      p1: {
        title: "EcoRoute Optimizer",
        desc: "Eine nachhaltige Logistikplattform, die CO2-Emissionen reduziert, indem sie Lieferrouten unter Verwendung realer Physik- und Verkehrsdaten optimiert.",
        feat1: "Microservice-Architektur: Entkoppelte Dienste für Logik (Python), Management (Rails) und UI (Next.js).",
        feat2: "Real-World Routing: Integriertes OSRM zur Erfassung präziser Straßengeometrie und verkehrsbereinigter Reisezeiten."
      },
      p2: {
        title: "Virtual Mouse & Eye Tracker",
        desc: "Ein freihändiges HCI-System, das berührungslose Steuerung ermöglicht, indem es Computer Vision nutzt, um Gesten in präzise Cursoraktionen zu übersetzen.",
        feat1: "Gestenerkennung: Steuert Mausklicks und Scrollen über Fingerspitzentracking und Augenblinzeln.",
        feat2: "Optimierte Leistung: Gebaut mit OpenCV und MediaPipe für High-FPS-Echtzeitverarbeitung auf Standard-CPUs."
      },
      p3: {
        title: "MindSync AI",
        status: "In Entwicklung",
        desc: "Ein empathischer KI-Begleiter, der für tiefes psychologisches Kontextverständnis entwickelt wurde. Nutzt Vektorspeicher, um eine \"perfekte Synchronisation\" mit der langfristigen Geschichte und dem emotionalen Zustand des Nutzers aufrechtzuerhalten.",
        feat1: "RAG-Architektur: Retrieval-Augmented Generation unter Verwendung von Vektoreinbettungen, um vergangene Gespräche genau abzurufen.",
        feat2: "Emotionale Ausrichtung: System-Prompts, die auf psychologische Unterstützungsmodalitäten (CBT/DBT-Prinzipien) abgestimmt sind."
      },
      viewCode: "Code auf GitHub ansehen"
    },
    skills: { title: "Technische Kompetenzen" },
    footer: {
      title: "Bereit, etwas zu bewirken.",
      desc: "Ich führe aktiv Vorstellungsgespräche und kann nach Abschluss/Visumsgenehmigung sofort umziehen.",
      rights: "Alle Rechte vorbehalten.",
      imprint: "Impressum | Datenschutz"
    },
    cv: "Lebenslauf herunterladen"
  }
};

export default function Portfolio() {
  const [lang, setLang] = useState<'en' | 'jp' | 'de'>('en');
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-100">

      {/* --- NAV / HERO SECTION --- */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 backdrop-blur-sm bg-white/90">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl tracking-tight text-slate-900">Nomad<span className="text-blue-600">.Dev</span></div>
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-blue-600 transition">{t.nav.about}</a>
            <a href="#projects" className="hover:text-blue-600 transition">{t.nav.projects}</a>
            <a href="#skills" className="hover:text-blue-600 transition">{t.nav.stack}</a>
            <a href="#contact" className="hover:text-blue-600 transition">{t.nav.contact}</a>
          </nav>

          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center gap-1 bg-slate-100 rounded-lg p-1">
              {(['en', 'jp', 'de'] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2 py-1 rounded-md text-xs font-bold uppercase transition ${lang === l ? 'bg-white shadow text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
                >
                  {l}
                </button>
              ))}
            </div>

            <a href="/MainRirekiSho.xlsx" className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition">
              <Download size={16} />
              <span className="hidden sm:inline">{t.cv}</span>
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* --- HERO --- */}
        <section id="about" className="pt-20 pb-32 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wide mb-6 border border-blue-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              {t.hero.openToWork}
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
              {t.hero.titlePrefix} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">{t.hero.titleHighlight}</span> {t.hero.titleSuffix}
            </h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              {t.hero.description}
            </p>
            <div className="flex justify-center gap-4">
              <a href="#contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-600/20">
                {t.hero.contact}
              </a>
              <a href="https://github.com/nomad1nk" target="_blank" rel="noreferrer" className="px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-lg font-semibold hover:bg-slate-50 transition flex items-center gap-2">
                <Github size={20} />
                {t.hero.github}
              </a>
            </div>
          </div>
        </section>

        {/* --- FEATURED PROJECTS --- */}
        <section id="projects" className="py-20 bg-white border-y border-slate-100">
          <div className="max-w-5xl mx-auto px-6 space-y-24">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-8">{t.projects.title}</h2>

            {/* PROJECT 1: EcoRoute */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-slate-900">{t.projects.p1.title}</h3>
                <div className="prose text-slate-600">
                  <p>{t.projects.p1.desc}</p>
                  <ul className="space-y-2 mt-4">
                    <li className="flex items-start gap-3">
                      <span className="bg-green-100 p-1 rounded text-green-600 mt-1"><CheckIcon /></span>
                      <span>{t.projects.p1.feat1}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-green-100 p-1 rounded text-green-600 mt-1"><CheckIcon /></span>
                      <span>{t.projects.p1.feat2}</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 pt-4">
                  <TechBadge icon={Layout} label="Next.js 14" />
                  <TechBadge icon={Server} label="Ruby on Rails" />
                  <TechBadge icon={Cpu} label="Python Flask" />
                  <TechBadge icon={MapPin} label="Leaflet / OSRM" />
                </div>
              </div>
              <div className="bg-slate-100 rounded-2xl p-4 border border-slate-200 shadow-xl rotate-1 hover:rotate-0 transition duration-500">
                <div className="aspect-video bg-slate-200 rounded-lg flex items-center justify-center overflow-hidden relative border border-slate-200">
                  <img
                    src="/ecoroute.png"
                    alt="EcoRoute Dashboard Interface"
                    className="object-cover w-full h-full opacity-90 hover:opacity-100 transition duration-500 hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white font-medium text-sm">Live Map Dashboard View</p>
                  </div>
                </div>
              </div>
            </div>

            {/* PROJECT 2: Virtual Mouse */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-slate-100 rounded-2xl p-4 border border-slate-200 shadow-xl -rotate-1 hover:rotate-0 transition duration-500">
                <div className="aspect-video bg-indigo-50 rounded-lg flex items-center justify-center border-2 border-dashed border-indigo-200 overflow-hidden">
                  <img
                    src="/virtualmouse.png"
                    alt="AI Hand Gesture Recognition"
                    className="object-cover w-full h-full opacity-90 hover:opacity-100 transition duration-500 hover:scale-105"
                  />
                </div>
              </div>

              <div className="order-1 md:order-2 space-y-6">
                <h3 className="text-3xl font-bold text-slate-900">{t.projects.p2.title}</h3>
                <div className="prose text-slate-600">
                  <p>{t.projects.p2.desc}</p>
                  <ul className="space-y-2 mt-4">
                    <li className="flex items-start gap-3">
                      <span className="bg-indigo-100 p-1 rounded text-indigo-600 mt-1"><CheckIcon /></span>
                      <span>{t.projects.p2.feat1}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-indigo-100 p-1 rounded text-indigo-600 mt-1"><CheckIcon /></span>
                      <span>{t.projects.p2.feat2}</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  <TechBadge icon={Cpu} label="Python" />
                  <TechBadge icon={Camera} label="OpenCV" />
                  <TechBadge icon={Eye} label="MediaPipe" />
                  <TechBadge icon={MousePointer2} label="PyAutoGUI" />
                </div>

                <div className="pt-4">
                  <a href="https://github.com/Nomad1nk/mouseTrack" target="_blank" rel="noreferrer" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800">
                    {t.projects.viewCode} <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* PROJECT 3: MindSync AI */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <h3 className="text-3xl font-bold text-slate-900">{t.projects.p3.title}</h3>
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-wide rounded-full border border-amber-200">{t.projects.p3.status}</span>
                </div>
                <div className="prose text-slate-600">
                  <p>{t.projects.p3.desc}</p>
                  <ul className="space-y-2 mt-4">
                    <li className="flex items-start gap-3">
                      <span className="bg-amber-100 p-1 rounded text-amber-600 mt-1"><CheckIcon /></span>
                      <span>{t.projects.p3.feat1}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-amber-100 p-1 rounded text-amber-600 mt-1"><CheckIcon /></span>
                      <span>{t.projects.p3.feat2}</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 pt-4">
                  <TechBadge icon={Brain} label="LLM / OpenAI" />
                  <TechBadge icon={MessageSquare} label="LangChain" />
                  <TechBadge icon={Database} label="Vector DB" />
                  <TechBadge icon={Sparkles} label="Next.js" />
                </div>
              </div>
              <div className="bg-slate-100 rounded-2xl p-4 border border-slate-200 shadow-xl rotate-1 hover:rotate-0 transition duration-500">
                <div className="aspect-video bg-amber-50 rounded-lg flex items-center justify-center border-2 border-dashed border-amber-200 overflow-hidden">
                  <img
                    src="/syncAI.png"
                    alt="AI Chat Interface"
                    className="object-cover w-full h-full opacity-90 hover:opacity-100 transition duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* --- TECH STACK --- */}
        <section id="skills" className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">{t.skills.title}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <SkillCard title="Frontend" skills={["React / Next.js", "TypeScript", "Tailwind CSS", "Leaflet.js"]} />
              <SkillCard title="Backend" skills={["Ruby on Rails", "Python (Flask)", "Node.js", "REST APIs"]} />
              <SkillCard title="Databases" skills={["PostgreSQL", "SQLite", "Redis", "Vector Databases"]} />
              <SkillCard title="DevOps" skills={["Docker", "Git / GitHub", "Vercel", "CI/CD Basics"]} />
            </div>
          </div>
        </section>

        {/* --- FOOTER / CONTACT --- */}
        <footer id="contact" className="bg-slate-900 text-slate-300 py-20 px-6">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold text-white">{t.footer.title}</h2>
            <p className="text-lg text-slate-400">
              {t.footer.desc}
            </p>
            <div className="flex justify-center gap-6">
              <a href="mailto:nomad2nk@yahoo.com" className="flex items-center gap-2 hover:text-white transition">
                <Mail size={20} /> Email
              </a>
              <a href="https://linkedin.com/in/nomad1nk-30630139a" className="flex items-center gap-2 hover:text-white transition">
                <Linkedin size={20} /> LinkedIn
              </a>
              <a href="https://github.com/nomad1nk" className="flex items-center gap-2 hover:text-white transition">
                <Github size={20} /> GitHub
              </a>
            </div>
            <div className="border-t border-slate-800 pt-8 mt-12 text-sm text-slate-500">
              <p>&copy; {new Date().getFullYear()} Nomad. {t.footer.rights}</p>
              <p className="mt-2">{t.footer.imprint}</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

// --- Helper Components ---

function TechBadge({ icon: Icon, label }: { icon: any, label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200">
      <Icon size={14} />
      {label}
    </span>
  );
}

function SkillCard({ title, skills }: { title: string, skills: string[] }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
      <h3 className="font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill) => (
          <li key={skill} className="text-sm text-slate-600 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
  )
}