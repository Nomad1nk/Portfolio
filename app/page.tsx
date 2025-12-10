"use client";

import React, { useState } from 'react';
import { Github, Linkedin, Mail, MapPin, ExternalLink, Download, Database, Layout, Server, Cpu, Camera, Eye, MousePointer2, Brain, MessageSquare, Sparkles, Globe, ChevronDown, ShoppingBag, CreditCard, Calendar, Users, Container } from 'lucide-react';

import dynamic from 'next/dynamic';
import ProjectCarousel from './components/ProjectCarousel';

const ThreeBackground = dynamic(() => import('./components/ThreeBackground'), { ssr: false });

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
        title: "BookingSystem",
        status: "In Development",
        desc: "A comprehensive booking management system built with a modern full-stack architecture. Features multi-language support (MN, EN, JP), Stripe payments, and real-time scheduling.",
        feat1: "Full-Stack Architecture: Next.js (React) frontend with Tailwind CSS v4, connected to a robust NestJS backend.",
        feat2: "Advanced Features: Stripe payment integration, multi-language support (i18n), and role-based access control."
      },
      p3: {
        title: "MindSync AI",
        status: "In Development",
        desc: "An empathetic AI companion designed for deep psychological context retention. It utilizes Vector Memory to maintain \"perfect sync\" with the user's long-term history and emotional state.",
        feat1: "RAG Architecture: Retrieval-Augmented Generation using vector embeddings to recall past conversations accurately.",
        feat2: "Emotional Alignment: System prompts tuned for psychological support modalities (CBT/DBT principles)."
      },
      p4: {
        title: "LUXEcommerce",
        status: "Completed",
        desc: "A high-performance headless eCommerce platform designed for luxury retail. Features a seamless checkout experience, real-time inventory management, and AI-driven product recommendations.",
        feat1: "Headless Architecture: Decoupled frontend (Next.js) and backend (Shopify API) for maximum flexibility and speed.",
        feat2: "Global Payments: Integrated Stripe and PayPal for secure, multi-currency transactions."
      },
      p5: {
        title: "AI Receptionist",
        status: "In Development",
        desc: "A production-grade AI Voice Operator handling real-time VoIP calls. Solved complex Docker NAT routing and VAD challenges. Developed as a Mongolian prototype, but the architecture is fully scalable to any language or region.",
        feat1: "Advanced Audio Pipeline: Custom RMS-based Voice Activity Detection (VAD) and Promiscuous RTP Mode for robust audio streaming within Docker.",
        feat2: "Smart Integration: OpenAI Function Calling for real-time database queries and a custom text normalization engine for error-free TTS."
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
        title: "BookingSystem",
        status: "開発中",
        desc: "モダンなフルスタックアーキテクチャで構築された包括的な予約管理システム。多言語サポート(MN, EN, JP)、Stripe決済、リアルタイムスケジューリング機能を備えています。",
        feat1: "フルスタックアーキテクチャ: Tailwind CSS v4を使用したNext.js (React)フロントエンドと、堅牢なNestJSバックエンドの連携。",
        feat2: "高度な機能: Stripe決済統合、多言語サポート(i18n)、およびロールベースのアクセス制御。"
      },
      p3: {
        title: "MindSync AI",
        status: "開発中",
        desc: "深い心理的文脈の保持のために設計された共感型AIコンパニオン。ベクトルメモリを使用して、ユーザーの長期的な履歴と感情状態との「完全な同期」を維持します。",
        feat1: "RAGアーキテクチャ: ベクトル埋め込みを使用した検索拡張生成により、過去の会話を正確に想起。",
        feat2: "感情調整: 心理的サポートのモダリティ(CBT/DBTの原則)に合わせて調整されたシステムプロンプト。"
      },
      p4: {
        title: "LUXEcommerce",
        status: "完了",
        desc: "高級小売向けに設計された高性能ヘッドレスeコマースプラットフォーム。シームレスなチェックアウト体験、リアルタイムの在庫管理、AI主導の製品推奨機能を備えています。",
        feat1: "ヘッドレスアーキテクチャ: 柔軟性と速度を最大化するための分離されたフロントエンド(Next.js)とバックエンド(Shopify API)。",
        feat2: "グローバル決済: 安全な多通貨取引のためにStripeとPayPalを統合。"
      },
      p5: {
        title: "AI Receptionist",
        status: "開発中",
        desc: "リアルタイムVoIP通話を処理する本番レベルのAIオペレーター。Docker NATとVADの課題を解決。モンゴル語で実証実験を行いましたが、あらゆる言語や地域に対応可能な拡張性を持っています。",
        feat1: "高度な音声パイプライン: Docker内での堅牢な音声ストリーミングのために、独自のRMSベース音声区間検出(VAD)とPromiscuous RTPモードを実装。",
        feat2: "スマート統合: OpenAI Function CallingによるリアルタイムDB操作と、TTSエラーを防ぐ独自のテキスト正規化エンジンを搭載。"
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
        title: "BookingSystem",
        status: "In Entwicklung",
        desc: "Ein umfassendes Buchungsmanagementsystem, das auf einer modernen Full-Stack-Architektur basiert. Bietet mehrsprachige Unterstützung (MN, EN, JP), Stripe-Zahlungen und Echtzeit-Terminplanung.",
        feat1: "Full-Stack-Architektur: Next.js (React) Frontend mit Tailwind CSS v4, verbunden mit einem robusten NestJS-Backend.",
        feat2: "Erweiterte Funktionen: Stripe-Zahlungsintegration, mehrsprachige Unterstützung (i18n) und rollenbasierte Zugriffskontrolle."
      },
      p3: {
        title: "MindSync AI",
        status: "In Entwicklung",
        desc: "Ein empathischer KI-Begleiter, der für tiefes psychologisches Kontextverständnis entwickelt wurde. Nutzt Vektorspeicher, um eine \"perfekte Synchronisation\" mit der langfristigen Geschichte und dem emotionalen Zustand des Nutzers aufrechtzuerhalten.",
        feat1: "RAG-Architektur: Retrieval-Augmented Generation unter Verwendung von Vektoreinbettungen, um vergangene Gespräche genau abzurufen.",
        feat2: "Emotionale Ausrichtung: System-Prompts, die auf psychologische Unterstützungsmodalitäten (CBT/DBT-Prinzipien) abgestimmt sind."
      },
      p4: {
        title: "LUXEcommerce",
        status: "Abgeschlossen",
        desc: "Eine leistungsstarke Headless-E-Commerce-Plattform für den Luxuseinzelhandel. Bietet ein nahtloses Checkout-Erlebnis, Bestandsmanagement in Echtzeit und KI-gesteuerte Produktempfehlungen.",
        feat1: "Headless-Architektur: Entkoppeltes Frontend (Next.js) und Backend (Shopify API) für maximale Flexibilität und Geschwindigkeit.",
        feat2: "Globale Zahlungen: Integrierte Stripe und PayPal für sichere Transaktionen in mehreren Währungen."
      },
      p5: {
        title: "AI Receptionist",
        status: "In Entwicklung",
        desc: "Ein produktionsreifer KI-Sprachoperator für Echtzeit-VoIP-Anrufe. Löst Docker-NAT- und VAD-Probleme. Als mongolischer Prototyp entwickelt, ist die Architektur jedoch für jede Sprache und Region skalierbar.",
        feat1: "Fortschrittliche Audio-Pipeline: Benutzerdefinierte RMS-basierte Spracherkennung (VAD) und Promiscuous RTP Mode für robustes Streaming in Docker.",
        feat2: "Intelligente Integration: OpenAI Function Calling für Echtzeit-Datenbankabfragen und eine benutzerdefinierte Textnormalisierungs-Engine für fehlerfreies TTS."
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
  },
  mn: {
    nav: { about: "Тухай", projects: "Төслүүд", stack: "Технологи", contact: "Холбоо барих" },
    hero: {
      openToWork: "Ажилд ороход бэлэн",
      titlePrefix: "Өргөтгөх боломжтой",
      titleHighlight: "Микросервис",
      titleSuffix: "ба AI шийдлүүд.",
      description: "Би Япон улсад суурилсан Full-Stack хөгжүүлэгч бөгөөд Next.js, Ruby on Rails, болон Applied AI чиглэлээр мэргэшсэн. Би академик мэдлэгээ практик инженерийн ур чадвартай хослуулан ложистик, харилцан үйлчлэл, танин мэдэхүйн бодит асуудлуудыг шийдвэрлэх системүүдийг бүтээдэг.",
      contact: "Надтай холбогдох",
      github: "GitHub"
    },
    projects: {
      title: "Онцлох төслүүд",
      p1: {
        title: "EcoRoute Optimizer",
        desc: "Бодит физик болон замын хөдөлгөөний өгөгдлийг ашиглан хүргэлтийн маршрутыг оновчтой болгож, нүүрстөрөгчийн ялгарлыг бууруулдаг тогтвортой ложистикийн платформ.",
        feat1: "Микросервис архитектур: Логик (Python), Удирдлага (Rails), болон UI (Next.js)-д зориулсан тусдаа үйлчилгээнүүд.",
        feat2: "Бодит маршрутчлал: OSRM-ийг нэгтгэн замын нарийн геометр болон хөдөлгөөнд тохируулсан аялах хугацааг тооцоолдог."
      },
      p2: {
        title: "BookingSystem",
        status: "Хөгжүүлэлтийн шатанд",
        desc: "Орчин үеийн full-stack архитектураар бүтээгдсэн захиалгын удирдлагын цогц систем. Олон хэлний дэмжлэг (MN, EN, JP), Stripe төлбөр тооцоо, бодит цагийн хуваарь зэрэг боломжуудтай.",
        feat1: "Full-Stack Архитектур: Tailwind CSS v4 ашигласан Next.js (React) frontend-ийг хүчирхэг NestJS backend-тэй холбосон.",
        feat2: "Дэвшилтэт боломжууд: Stripe төлбөрийн интеграцчилал, олон хэлний дэмжлэг (i18n), болон үүрэгт суурилсан хандалтын хяналт."
      },
      p3: {
        title: "MindSync AI",
        status: "Хөгжүүлэлтийн шатанд",
        desc: "Сэтгэл зүйн гүн гүнзгий контекстийг хадгалахад зориулагдсан эмпатик AI хамтрагч. Вектор санах ой ашиглан хэрэглэгчийн урт хугацааны түүх болон сэтгэл хөдлөлийн байдалтай \"төгс синхрончлол\"-ыг хадгалдаг.",
        feat1: "RAG Архитектур: Өнгөрсөн харилцан яриаг нарийн санахын тулд вектор шигтгээ ашиглан Retrieval-Augmented Generation хийдэг.",
        feat2: "Сэтгэл хөдлөлийн тохируулга: Сэтгэл зүйн дэмжлэг үзүүлэх аргууд (CBT/DBT зарчим)-д тохируулсан системийн промптууд."
      },
      p4: {
        title: "LUXEcommerce",
        status: "Дууссан",
        desc: "Тансаг зэрэглэлийн жижиглэн худалдаанд зориулагдсан өндөр гүйцэтгэлтэй headless eCommerce платформ. Төлбөр тооцооны саадгүй туршлага, бодит цагийн бараа материалын менежмент, AI-д суурилсан бүтээгдэхүүний зөвлөмжийг агуулсан.",
        feat1: "Headless Архитектур: Уян хатан байдал, хурдыг дээд зэргээр нэмэгдүүлэхийн тулд салгагдсан frontend (Next.js) болон backend (Shopify API).",
        feat2: "Дэлхийн төлбөр тооцоо: Олон валютын гүйлгээг найдвартай хийхийн тулд Stripe болон PayPal-г нэгтгэсэн."
      },
      p5: {
        title: "AI Receptionist",
        status: "Хөгжүүлэлтийн шатанд",
        desc: "Хүний оронд дуудлага хүлээн авах AI Operator. Docker NAT болон RTP урсгалын асуудлыг шийдсэн. Туршилтын хувилбар Монгол хэл дээр байгаа ч, систем нь олон улсын ямар ч хэл дээр ажиллах бүрэн боломжтой.",
        feat1: "Аудио Шийдэл: WebRTC-ийн алдааг засаж RMS (дууны хүч) хэмжигч болон Promiscuous RTP горимыг ашиглан дуу тасалдах асуудлыг бүрэн шийдсэн.",
        feat2: "Системийн Сайжруулалт: Тусгай тэмдэгт болон тоог үг рүү хөрвүүлэх текст цэвэрлэгээний функц болон OpenAI Function Calling-ийг нэвтрүүлсэн."
      },
      viewCode: "GitHub дээр код үзэх"
    },
    skills: { title: "Техникийн ур чадвар" },
    footer: {
      title: "Өөрчлөлт хийхэд бэлэн.",
      desc: "Би идэвхтэй ярилцлагад орж байгаа бөгөөд төгсөлт/виз батлагдсаны дараа шууд нүүх боломжтой.",
      rights: "Бүх эрх хуулиар хамгаалагдсан.",
      imprint: "Imprint (Impressum) | Data Privacy (Datenschutz)"
    },
    cv: "CV татах"
  }
};

export default function Portfolio() {
  const [lang, setLang] = useState<'en' | 'jp' | 'de' | 'mn'>('en');
  const t = translations[lang];

  return (
    <div className="min-h-screen font-sans selection:bg-cyan-500 bg-gradient-to-br from-slate-900 via-sky-950 to-gray-900 animate-gradient-xy text-gray-200 relative overflow-hidden">

      {/* --- BACKGROUND ANIMATION --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gray-500/10 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-slate-500/10 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        <ThreeBackground />
      </div>

      <div className="relative z-10">

        {/* --- NAV / HERO SECTION --- */}
        <header className="bg-black/50 border-b border-white/10 sticky top-0 z-50 backdrop-blur-md">
          <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="font-cartoon text-3d text-2xl tracking-wider text-white">Nomad<span className="text-gray-400">.Dev</span></div>
            <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-400">
              <a href="#about" className="hover:text-white transition">{t.nav.about}</a>
              <a href="#projects" className="hover:text-white transition">{t.nav.projects}</a>
              <a href="#skills" className="hover:text-white transition">{t.nav.stack}</a>
              <a href="#contact" className="hover:text-white transition">{t.nav.contact}</a>
            </nav>

            <div className="flex items-center gap-4">

              {/* Hover Language Switcher */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-sm font-bold text-gray-300 hover:text-white transition px-2 py-1 rounded-md">
                  <Globe size={16} />
                  <span className="uppercase">{lang}</span>
                  <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                </button>

                {/* Dropdown Menu */}
                <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right z-50">
                  <div className="bg-gray-900 border border-white/10 rounded-lg shadow-xl overflow-hidden min-w-[120px] flex flex-col">
                    {(['en', 'jp', 'de', 'mn'] as const).map((l) => (
                      <button
                        key={l}
                        onClick={() => setLang(l)}
                        className={`px-4 py-2 text-left text-sm font-medium hover:bg-white/10 transition flex items-center justify-between ${lang === l ? 'text-white bg-white/5 font-bold' : 'text-gray-400'}`}
                      >
                        <span className="uppercase">{l}</span>
                        {lang === l && <div className="w-1.5 h-1.5 rounded-full bg-white"></div>}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <a href="/MainRirekiSho.xlsx" className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition shadow-lg shadow-white/5">
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-gray-300 text-xs font-bold uppercase tracking-wide mb-6 border border-white/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-20"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                {t.hero.openToWork}
              </div>
              <h1 className="font-cartoon text-3d text-6xl md:text-7xl font-extrabold text-white tracking-wide mb-6">
                {t.hero.titlePrefix} <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">{t.hero.titleHighlight}</span> {t.hero.titleSuffix}
              </h1>
              <p className="text-lg text-gray-400 mb-10 leading-relaxed">
                {t.hero.description}
              </p>
              <div className="flex justify-center gap-4">
                <a href="#contact" className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition shadow-xl shadow-white/10">
                  {t.hero.contact}
                </a>
                <a href="https://github.com/nomad1nk" target="_blank" rel="noreferrer" className="px-6 py-3 bg-transparent text-white border border-white/20 rounded-lg font-semibold hover:bg-white/10 transition flex items-center gap-2">
                  <Github size={20} />
                  {t.hero.github}
                </a>
              </div>
            </div>
          </section>

          {/* --- FEATURED PROJECTS --- */}
          <section id="projects" className="py-20 bg-black/20 backdrop-blur-sm border-y border-white/5 overflow-hidden">
            <div className="w-full">
              <div className="max-w-5xl mx-auto px-6 mb-8">
                <h2 className="font-cartoon text-3d text-xl font-bold text-gray-500 uppercase tracking-wider border-b border-white/10 pb-2 inline-block">{t.projects.title}</h2>
              </div>

              <ProjectCarousel
                t={t}
                TechBadge={TechBadge}
                CheckIcon={CheckIcon}
                projects={[
                  {
                    title: t.projects.p1.title,
                    desc: t.projects.p1.desc,
                    feat1: t.projects.p1.feat1,
                    feat2: t.projects.p1.feat2,
                    link: "https://github.com/Nomad1nk/RouteChecker",
                    image: "/ecoroute.png",
                    tech: [
                      { icon: Layout, label: "Next.js 14" },
                      { icon: Server, label: "Ruby on Rails" },
                      { icon: Cpu, label: "Python Flask" },
                      { icon: MapPin, label: "Leaflet / OSRM" }
                    ]
                  },
                  {
                    title: t.projects.p2.title,
                    status: t.projects.p2.status,
                    desc: t.projects.p2.desc,
                    feat1: t.projects.p2.feat1,
                    feat2: t.projects.p2.feat2,
                    link: "https://github.com/Nomad1nk/BookingSystem",
                    image: "/Bookingsystem.png",
                    tech: [
                      { icon: Calendar, label: "Next.js" },
                      { icon: Server, label: "NestJS" },
                      { icon: Database, label: "PostgreSQL" },
                      { icon: Layout, label: "Tailwind v4" },
                      { icon: CreditCard, label: "Stripe" },
                      { icon: Globe, label: "i18n" }
                    ]
                  },
                  {
                    title: t.projects.p4.title,
                    status: t.projects.p4.status,
                    desc: t.projects.p4.desc,
                    feat1: t.projects.p4.feat1,
                    feat2: t.projects.p4.feat2,
                    link: "https://github.com/Nomad1nk/LuxEcommerce",
                    image: "/luxeComm.png",
                    tech: [
                      { icon: Layout, label: "Next.js" },
                      { icon: ShoppingBag, label: "Shopify API" },
                      { icon: CreditCard, label: "Stripe" },
                      { icon: Database, label: "Redis" }
                    ]
                  },
                  {
                    title: t.projects.p3.title,
                    status: t.projects.p3.status,
                    desc: t.projects.p3.desc,
                    feat1: t.projects.p3.feat1,
                    feat2: t.projects.p3.feat2,
                    link: "https://github.com/Nomad1nk/AI-voice-MN-test-version",
                    image: "/syncAI.png",
                    tech: [
                      { icon: Brain, label: "LLM / OpenAI" },
                      { icon: MessageSquare, label: "LangChain" },
                      { icon: Database, label: "Vector DB" },
                      { icon: Sparkles, label: "Next.js" }
                    ]
                  },
                  {
                    title: t.projects.p5.title,
                    status: t.projects.p5.status,
                    desc: t.projects.p5.desc,
                    feat1: t.projects.p5.feat1,
                    feat2: t.projects.p5.feat2,
                    link: "https://github.com/Nomad1nk/No1-projectt",
                    image: "/receptionAI.png",
                    tech: [
                      { icon: Cpu, label: "Python" },
                      { icon: Container, label: "Docker" },
                      { icon: Database, label: "PostgreSQL" },
                      { icon: Layout, label: "Admin Dashboard" }
                    ]
                  }
                ]}
              />
            </div>
          </section>

          {/* --- TECH STACK --- */}
          <section id="skills" className="py-20 px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-cartoon text-3d text-4xl font-bold text-white mb-12 text-center tracking-wide">{t.skills.title}</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <SkillCard title="Frontend & UI" skills={["Next.js 14 / React", "TypeScript / ES6+", "Tailwind / Framer Motion", "Three.js / WebGL"]} />
                <SkillCard title="Backend & Core" skills={["NestJS / Node.js", "Python (FastAPI)", "Ruby on Rails", "Microservices / gRPC"]} />
                <SkillCard title="AI & Data" skills={["LLMs / RAG / LangChain", "OpenAI / Whisper API", "Vector DBs / PostgreSQL", "Computer Vision (OpenCV)"]} />
                <SkillCard title="DevOps & Cloud" skills={["Docker / Kubernetes", "AWS / Vercel", "CI/CD (GitHub Actions)", "Linux / Nginx"]} />
              </div>
            </div>
          </section>

          {/* --- FOOTER / CONTACT --- */}
          <footer id="contact" className="bg-black text-gray-500 py-20 px-6 border-t border-white/10">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl font-bold text-white">{t.footer.title}</h2>
              <p className="text-lg text-gray-400">
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
              <div className="border-t border-white/10 pt-8 mt-12 text-sm text-gray-600">
                <p>&copy; {new Date().getFullYear()} Nomad. {t.footer.rights}</p>
                <p className="mt-2">{t.footer.imprint}</p>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}

// --- Helper Components ---

function TechBadge({ icon: Icon, label }: { icon: any, label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 text-gray-300 text-xs font-semibold border border-white/10 shadow-sm">
      <Icon size={14} />
      {label}
    </span>
  );
}

function SkillCard({ title, skills }: { title: string, skills: string[] }) {
  return (
    <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-sm hover:shadow-lg transition duration-300 hover:bg-white/10">
      <h3 className="font-bold text-white mb-4 border-b border-white/10 pb-2">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill) => (
          <li key={skill} className="text-sm text-gray-400 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
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

/*
function Bubbles() {
  // Generate random bubbles
  const bubbles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDuration: `${20 + Math.random() * 40}s`, // 20-60s duration for longer travel
    animationDelay: `-${Math.random() * 40}s`, // Negative delay to start mid-animation
    opacity: 0.1 + Math.random() * 0.2,
    size: `${10 + Math.random() * 30}px` // 10px - 40px size
  }));

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="absolute bottom-0 rounded-full bg-white animate-rise"
          style={{
            left: b.left,
            width: b.size,
            height: b.size,
            opacity: b.opacity,
            animationDuration: b.animationDuration,
            animationDelay: b.animationDelay,
          }}
        ></div>
      ))}
    </div>
  );
}
*/
