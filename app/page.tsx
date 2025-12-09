"use client";

import React, { useState } from 'react';
import { Github, Linkedin, Mail, MapPin, ExternalLink, Download, Database, Layout, Server, Cpu, Camera, Eye, MousePointer2, Brain, MessageSquare, Sparkles, Globe, ChevronDown, ShoppingBag, CreditCard, Calendar, Users } from 'lucide-react';

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
      p4: {
        title: "LUXEcommerce",
        status: "Completed",
        desc: "A high-performance headless eCommerce platform designed for luxury retail. Features a seamless checkout experience, real-time inventory management, and AI-driven product recommendations.",
        feat1: "Headless Architecture: Decoupled frontend (Next.js) and backend (Shopify API) for maximum flexibility and speed.",
        feat2: "Global Payments: Integrated Stripe and PayPal for secure, multi-currency transactions."
      },
      p5: {
        title: "BookingSystem",
        status: "In Development",
        desc: "A comprehensive booking management system for scheduling appointments and managing resources. Designed for high availability and ease of use.",
        feat1: "Real-time Availability: Dynamic calendar integration for instant slot booking and conflict resolution.",
        feat2: "User Management: Role-based access control (RBAC) for admins, staff, and customers."
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
      p4: {
        title: "LUXEcommerce",
        status: "完了",
        desc: "高級小売向けに設計された高性能ヘッドレスeコマースプラットフォーム。シームレスなチェックアウト体験、リアルタイムの在庫管理、AI主導の製品推奨機能を備えています。",
        feat1: "ヘッドレスアーキテクチャ: 柔軟性と速度を最大化するための分離されたフロントエンド(Next.js)とバックエンド(Shopify API)。",
        feat2: "グローバル決済: 安全な多通貨取引のためにStripeとPayPalを統合。"
      },
      p5: {
        title: "BookingSystem",
        status: "開発中",
        desc: "予約とリソース管理のための包括的な予約管理システム。高可用性と使いやすさを重視して設計されています。",
        feat1: "リアルタイムの空き状況: 即時スロット予約と競合解決のための動的カレンダー統合。",
        feat2: "ユーザー管理: 管理者、スタッフ、顧客のためのロールベースのアクセス制御(RBAC)。"
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
      p4: {
        title: "LUXEcommerce",
        status: "Abgeschlossen",
        desc: "Eine leistungsstarke Headless-E-Commerce-Plattform für den Luxuseinzelhandel. Bietet ein nahtloses Checkout-Erlebnis, Bestandsmanagement in Echtzeit und KI-gesteuerte Produktempfehlungen.",
        feat1: "Headless-Architektur: Entkoppeltes Frontend (Next.js) und Backend (Shopify API) für maximale Flexibilität und Geschwindigkeit.",
        feat2: "Globale Zahlungen: Integrierte Stripe und PayPal für sichere Transaktionen in mehreren Währungen."
      },
      p5: {
        title: "BookingSystem",
        status: "In Entwicklung",
        desc: "Ein umfassendes Buchungsmanagementsystem zur Terminplanung und Ressourcenverwaltung. Entwickelt für hohe Verfügbarkeit und Benutzerfreundlichkeit.",
        feat1: "Echtzeit-Verfügbarkeit: Dynamische Kalenderintegration für sofortige Slot-Buchung und Konfliktlösung.",
        feat2: "Benutzerverwaltung: Rollenbasierte Zugriffskontrolle (RBAC) für Administratoren, Mitarbeiter und Kunden."
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
        title: "Virtual Mouse & Eye Tracker",
        desc: "Компьютерийн хараа ашиглан дохио зангааг курсорын нарийн үйлдэл болгон хувиргаж, хүрэлцэхгүйгээр удирдах боломжийг олгодог гар ашиглахгүй HCI систем.",
        feat1: "Дохио таних: Хурууны үзүүрийг хянах болон нүдээ цавчих замаар хулганы товшилт, гүйлгэх үйлдлийг удирддаг.",
        feat2: "Оновчтой гүйцэтгэл: OpenCV болон MediaPipe ашиглан бүтээгдсэн бөгөөд энгийн CPU дээр өндөр FPS-тэй бодит цагийн боловсруулалт хийдэг."
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
        title: "BookingSystem",
        status: "Хөгжүүлэлтийн шатанд",
        desc: "Цаг захиалга болон нөөцийн менежментэд зориулсан цогц захиалгын систем. Өндөр хүртээмжтэй, ашиглахад хялбар байхаар бүтээгдсэн.",
        feat1: "Бодит цагийн боломж: Шууд цаг захиалах, зөрчилдөөнийг шийдвэрлэх динамик хуанлийн интеграцчилал.",
        feat2: "Хэрэглэгчийн менежмент: Админ, ажилчид болон үйлчлүүлэгчдэд зориулсан үүрэгт суурилсан хандалтын хяналт (RBAC)."
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
    <div className="min-h-screen font-sans selection:bg-gray-700 bg-gradient-to-br from-gray-950 via-slate-900 to-black animate-gradient-xy text-gray-200 relative overflow-hidden">

      {/* --- BACKGROUND ANIMATION --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gray-500/10 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-slate-500/10 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        <Bubbles />
      </div>

      <div className="relative z-10">

        {/* --- NAV / HERO SECTION --- */}
        <header className="bg-black/50 border-b border-white/10 sticky top-0 z-50 backdrop-blur-md">
          <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="font-bold text-xl tracking-tight text-white">Nomad<span className="text-gray-400">.Dev</span></div>
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
              <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
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
          <section id="projects" className="py-20 bg-black/20 backdrop-blur-sm border-y border-white/5">
            <div className="max-w-5xl mx-auto px-6 space-y-24">
              <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-8 border-b border-white/10 pb-2 inline-block">{t.projects.title}</h2>

              {/* PROJECT 1: EcoRoute */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-white">{t.projects.p1.title}</h3>
                  <div className="prose text-gray-400">
                    <p>{t.projects.p1.desc}</p>
                    <ul className="space-y-2 mt-4">
                      <li className="flex items-start gap-3">
                        <span className="bg-white/10 p-1 rounded text-white mt-1"><CheckIcon /></span>
                        <span>{t.projects.p1.feat1}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-white/10 p-1 rounded text-white mt-1"><CheckIcon /></span>
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

                  <div className="pt-4">
                    <a href="https://github.com/Nomad1nk/RouteChecker" target="_blank" rel="noreferrer" className="inline-flex items-center text-white font-bold hover:text-gray-300 border-b-2 border-white hover:border-gray-300 pb-0.5 transition-colors">
                      {t.projects.viewCode} <ExternalLink size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10 shadow-2xl rotate-1 hover:rotate-0 transition duration-500">
                  <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center overflow-hidden relative border border-white/5">
                    <img
                      src="/ecoroute.png"
                      alt="EcoRoute Dashboard Interface"
                      className="object-cover w-full h-full opacity-80 hover:opacity-100 transition duration-500 hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                      <p className="text-white font-medium text-sm">Live Map Dashboard View</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* PROJECT 2: Virtual Mouse */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 bg-white/5 rounded-2xl p-4 border border-white/10 shadow-2xl -rotate-1 hover:rotate-0 transition duration-500">
                  <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center border-2 border-dashed border-white/10 overflow-hidden">
                    <img
                      src="/virtualmouse.png"
                      alt="AI Hand Gesture Recognition"
                      className="object-cover w-full h-full opacity-80 hover:opacity-100 transition duration-500 hover:scale-105"
                    />
                  </div>
                </div>

                <div className="order-1 md:order-2 space-y-6">
                  <h3 className="text-3xl font-bold text-white">{t.projects.p2.title}</h3>
                  <div className="prose text-gray-400">
                    <p>{t.projects.p2.desc}</p>
                    <ul className="space-y-2 mt-4">
                      <li className="flex items-start gap-3">
                        <span className="bg-white/10 p-1 rounded text-white mt-1"><CheckIcon /></span>
                        <span>{t.projects.p2.feat1}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-white/10 p-1 rounded text-white mt-1"><CheckIcon /></span>
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
                    <a href="https://github.com/Nomad1nk/mouseTrack" target="_blank" rel="noreferrer" className="inline-flex items-center text-white font-bold hover:text-gray-300 border-b-2 border-white hover:border-gray-300 pb-0.5 transition-colors">
                      {t.projects.viewCode} <ExternalLink size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>

              {/* PROJECT 3: MindSync AI */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <h3 className="text-3xl font-bold text-white">{t.projects.p3.title}</h3>
                    <span className="px-3 py-1 bg-white/10 text-white text-xs font-bold uppercase tracking-wide rounded-full border border-white/20">{t.projects.p3.status}</span>
                  </div>
                  <div className="prose text-gray-400">
                    <p>{t.projects.p3.desc}</p>
                    <ul className="space-y-2 mt-4">
                      <li className="flex items-start gap-3">
                        <span className="bg-white/10 p-1 rounded text-white mt-1"><CheckIcon /></span>
                        <span>{t.projects.p3.feat1}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-white/10 p-1 rounded text-white mt-1"><CheckIcon /></span>
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

                  <div className="pt-4">
                    <a href="https://github.com/Nomad1nk/AI-voice-MN-test-version" target="_blank" rel="noreferrer" className="inline-flex items-center text-white font-bold hover:text-gray-300 border-b-2 border-white hover:border-gray-300 pb-0.5 transition-colors">
                      {t.projects.viewCode} <ExternalLink size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10 shadow-2xl rotate-1 hover:rotate-0 transition duration-500">
                  <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center border-2 border-dashed border-white/10 overflow-hidden">
                    <img
                      src="/syncAI.png"
                      alt="AI Chat Interface"
                      className="object-cover w-full h-full opacity-80 hover:opacity-100 transition duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* PROJECT 4: LUXEcommerce */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 bg-white/5 rounded-2xl p-4 border border-white/10 shadow-2xl -rotate-1 hover:rotate-0 transition duration-500">
                  <div className="aspect-video bg-black rounded-lg flex items-center justify-center border-2 border-dashed border-gray-800 overflow-hidden">
                    <img
                      src="/luxeComm.png"
                      alt="Lux eCommerce Interface"
                      className="object-cover w-full h-full opacity-80 hover:opacity-100 transition duration-500 hover:scale-105"
                    />
                  </div>
                </div>

                <div className="order-1 md:order-2 space-y-6">
                  <div className="flex items-center gap-3">
                    <h3 className="text-3xl font-bold text-white">{t.projects.p4.title}</h3>
                    <span className="px-3 py-1 bg-white text-black text-xs font-bold uppercase tracking-wide rounded-full border border-gray-200">{t.projects.p4.status}</span>
                  </div>
                  <div className="prose text-gray-400">
                    <p>{t.projects.p4.desc}</p>
                    <ul className="space-y-2 mt-4">
                      <li className="flex items-start gap-3">
                        <span className="bg-white/10 p-1 rounded text-white mt-1"><CheckIcon /></span>
                        <span>{t.projects.p4.feat1}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-white/10 p-1 rounded text-white mt-1"><CheckIcon /></span>
                        <span>{t.projects.p4.feat2}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4">
                    <TechBadge icon={Layout} label="Next.js" />
                    <TechBadge icon={ShoppingBag} label="Shopify API" />
                    <TechBadge icon={CreditCard} label="Stripe" />
                    <TechBadge icon={Database} label="Redis" />
                  </div>

                  <div className="pt-4">
                    <a href="https://github.com/Nomad1nk/LuxEcommerce" target="_blank" rel="noreferrer" className="inline-flex items-center text-white font-bold hover:text-gray-300 border-b-2 border-white hover:border-gray-300 pb-0.5 transition-colors">
                      {t.projects.viewCode} <ExternalLink size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>

              {/* PROJECT 5: BookingSystem (NEW) */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <h3 className="text-3xl font-bold text-white">{t.projects.p5.title}</h3>
                    <span className="px-3 py-1 bg-white/10 text-white text-xs font-bold uppercase tracking-wide rounded-full border border-white/20">{t.projects.p5.status}</span>
                  </div>
                  <div className="prose text-gray-400">
                    <p>{t.projects.p5.desc}</p>
                    <ul className="space-y-2 mt-4">
                      <li className="flex items-start gap-3">
                        <span className="bg-white/10 p-1 rounded text-white mt-1"><CheckIcon /></span>
                        <span>{t.projects.p5.feat1}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-white/10 p-1 rounded text-white mt-1"><CheckIcon /></span>
                        <span>{t.projects.p5.feat2}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-4">
                    <TechBadge icon={Calendar} label="Next.js" />
                    <TechBadge icon={Database} label="PostgreSQL" />
                    <TechBadge icon={Users} label="Auth.js" />
                    <TechBadge icon={Layout} label="Tailwind" />
                  </div>

                  <div className="pt-4">
                    <a href="https://github.com/Nomad1nk/BookingSystem" target="_blank" rel="noreferrer" className="inline-flex items-center text-white font-bold hover:text-gray-300 border-b-2 border-white hover:border-gray-300 pb-0.5 transition-colors">
                      {t.projects.viewCode} <ExternalLink size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10 shadow-2xl rotate-1 hover:rotate-0 transition duration-500">
                  <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center border-2 border-dashed border-white/10 overflow-hidden">
                    <img
                      src="/Bookingsystem.png"
                      alt="Booking System Interface"
                      className="object-cover w-full h-full opacity-80 hover:opacity-100 transition duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* --- TECH STACK --- */}
          <section id="skills" className="py-20 px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-12 text-center">{t.skills.title}</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <SkillCard title="Frontend" skills={["React / Next.js", "TypeScript", "Tailwind CSS", "Leaflet.js"]} />
                <SkillCard title="Backend" skills={["Ruby on Rails", "Python (Flask)", "Node.js", "REST APIs"]} />
                <SkillCard title="Databases" skills={["PostgreSQL", "SQLite", "Redis", "Vector Databases"]} />
                <SkillCard title="DevOps" skills={["Docker", "Git / GitHub", "Vercel", "CI/CD Basics"]} />
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
