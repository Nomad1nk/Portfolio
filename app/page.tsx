"use client";

import React, { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  ExternalLink,
  Download,
  Database,
  Layout,
  Server,
  Cpu,
  Camera,
  Eye,
  MousePointer2,
  Brain,
  MessageSquare,
  Sparkles,
  Globe,
  ChevronDown,
  ShoppingBag,
  CreditCard,
  Calendar,
  Users,
  Container,
  Facebook,
  Instagram,
  Sun,
  Moon,
  Mic,
  Code,
  Smartphone,
  Activity,
  Share2,
  PieChart,
} from "lucide-react";

import dynamic from "next/dynamic";
import ProjectCarousel from "./components/ProjectCarousel";

const ThreeBackground = dynamic(() => import("./components/ThreeBackground"), {
  ssr: false,
});

const translations = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      stack: "Stack",
      contact: "Contact",
    },
    hero: {
      openToWork: "Open to Work",
      titlePrefix: "Building Scalable",
      titleHighlight: "Microservices",
      titleSuffix: "& AI Solutions.",
      description:
        "Multilingual Full-Stack Developer based in Japan. I specialize in architecting decoupled microservices using Next.js, Rails, and Python. With a high technical learning velocity and fluency in English (C1/C2), Japanese (N1/N2), and Mongolian, I am ready to deliver robust, scalable solutions for innovative teams locally and globally.",
      contact: "Contact Me",
      github: "GitHub",
    },
    projects: {
      title: "Featured Projects",
      p1: {
        title: "EcoRoute Optimizer",
        status: "Completed",
        desc: "A sustainable logistics platform that reduces carbon emissions by optimizing delivery routes using real-world physics and traffic data.",
        feat1:
          "Microservice Architecture: Decoupled services for Logic (Python), Management (Rails), and UI (Next.js).",
        feat2:
          "Real-World Routing: Integrated OSRM to fetch precise road geometry and traffic-adjusted travel times.",
      },
      p2: {
        title: "BookingSystem",
        status: "Completed",
        desc: "A comprehensive booking management system built with a modern full-stack architecture. Features multi-language support (MN, EN, JP), Stripe payments, and real-time scheduling.",
        feat1:
          "Full-Stack Architecture: Next.js (React) frontend with Tailwind CSS v4, connected to a robust NestJS backend.",
        feat2:
          "Advanced Features: Stripe payment integration, multi-language support (i18n), and role-based access control.",
      },
      p3: {
        title: "MindSync AI",
        status: "Completed",
        desc: "A compassionate, voice-enabled AI psychologist localized in Japanese. Features secure authentication, persistent chat history, and a premium subscription model.",
        feat1:
          "Full Voice Interaction: 'Hold to Speak' functionality using OpenAI Whisper (STT) and TTS-1 for natural conversations.",
        feat2:
          "Monetization & Security: Integrated Stripe for monthly subscriptions and secure Email/Password authentication with SQLite storage.",
      },
      p4: {
        title: "E-Commerce Website",
        status: "Completed",
        desc: "A full-featured e-commerce platform with all essential online shopping capabilities. Features product catalog, shopping cart, user authentication, order management, and secure checkout.",
        feat1:
          "Complete Shopping Experience: Product browsing, filtering, search functionality, shopping cart management, wishlists, and user reviews.",
        feat2:
          "Secure Transactions: User authentication (sign-up/login), order history tracking, payment integration (Stripe/PayPal), and email notifications for orders.",
      },
      p5: {
        title: "AI Receptionist",
        status: "In Development",
        desc: "A production-grade AI Voice Operator handling real-time VoIP calls. Solved complex Docker NAT routing and VAD challenges. Developed as a Mongolian prototype, but the architecture is fully scalable to any language or region.",
        feat1:
          "Advanced Audio Pipeline: Custom RMS-based Voice Activity Detection (VAD) and Promiscuous RTP Mode for robust audio streaming within Docker.",
        feat2:
          "Smart Integration: OpenAI Function Calling for real-time database queries and a custom text normalization engine for error-free TTS.",
      },
      p6: {
        title: "Hand & Eye Gesture Mouse",
        status: "Completed",
        desc: "A computer vision application that allows users to control their mouse cursor and perform clicks using hand gestures and eye movements.",
        feat1:
          "Hand Tracking: Uses Mediapipe to detect hand landmarks for precise cursor control and gesture-based clicking.",
        feat2:
          "Eye Tracking: Implements eye gaze estimation to move the cursor, providing an alternative input method for accessibility.",
      },
      viewCode: "View Code on GitHub",
    },
    skills: { title: "Technical Competencies" },
    footer: {
      title: "Ready to make an impact.",
      desc: "I am actively interviewing and can relocate immediately upon graduation/visa approval.",
      rights: "All rights reserved.",
      imprint: "Imprint (Impressum) | Data Privacy (Datenschutz)",
    },
    cv: "Download CV",
  },
  jp: {
    nav: {
      about: "プロフィール",
      projects: "制作実績",
      stack: "スキル",
      contact: "お問い合わせ",
    },
    hero: {
      openToWork: "お仕事募集中",
      titlePrefix: "スケーラブルな",
      titleHighlight: "マイクロサービス",
      titleSuffix: "とAIソリューション",
      description:
        "日本在住のフルスタックエンジニア。Next.js, Rails, Pythonを活用したマイクロサービス設計が得意です。新しい技術も素早く習得し、英語・日本語・モンゴル語の3ヶ国語でスムーズにコミュニケーションが可能。グローバルなチームで、スケーラブルな開発に貢献します。",
      contact: "お問い合わせ",
      github: "GitHub",
    },
    projects: {
      title: "主なプロジェクト",
      p1: {
        title: "EcoRoute Optimizer",
        status: "完了",
        desc: "物理データと交通情報を活用し、配送ルートを最適化。CO2排出を削減するサステナブルな物流プラットフォーム。",
        feat1:
          "マイクロサービス: Logic (Python), Management (Rails), UI (Next.js) に機能を分割。",
        feat2:
          "実用的なルーティング: OSRMを統合し、正確な道路情報と交通状況を反映した移動時間を算出。",
      },
      p2: {
        title: "BookingSystem",
        status: "完了",
        desc: "最新技術で構築した予約管理システム。多言語対応 (MN, EN, JP)、Stripe決済、リアルタイム予約機能を完備。",
        feat1:
          "フルスタック構成: Next.js (React) + Tailwind v4 のモダンなUIと、堅牢な NestJS バックエンド。",
        feat2:
          "高度な機能: Stripe決済、多言語対応 (i18n)、権限管理機能 (RBAC) を実装。",
      },
      p3: {
        title: "MindSync AI",
        status: "完了",
        desc: "日本語に完全対応した、音声対話型のAI心理カウンセラー。安全な認証システム、チャット履歴の保存、およびプレミアムサブスクリプション機能を備えています。",
        feat1:
          "音声対話: OpenAI Whisper (STT) と TTS-1 を使用した「長押しして話す」機能により、自然な会話を実現。",
        feat2:
          "収益化とセキュリティ: Stripeによる月額サブスクリプションと、SQLiteを使用した安全なメール/パスワード認証を統合。",
      },
      p4: {
        title: "E-Commerce Website",
        status: "完了",
        desc: "すべての基本的なオンラインショッピング機能を備えた、フル機能のEコマースプラットフォーム。商品カタログ、ショッピングカート、ユーザー認証、注文管理、安全なチェックアウト機能を搭載。",
        feat1:
          "完全なショッピング体験: 商品閲覧、フィルタリング、検索機能、ショッピングカート管理、ウィッシュリスト、ユーザーレビュー。",
        feat2:
          "安全な取引: ユーザー認証（登録/ログイン）、注文履歴追跡、決済統合（Stripe/PayPal）、注文メール通知。",
      },
      p5: {
        title: "AI Receptionist",
        status: "開発中",
        desc: "電話応対を自動化するAIボイスオペレーター。Docker環境での音声遅延や通信課題を解決。現在はモンゴル語版ですが、他言語への拡張も容易な設計です。",
        feat1:
          "高度な音声処理: 独自の音声区間検出 (VAD) と RTPモードにより、Docker内でも安定した通話を実現。",
        feat2:
          "スマートな統合: OpenAI Function Calling によるDB操作と、読み上げエラーを防ぐテキスト正規化エンジンを搭載。",
      },
      p6: {
        title: "Hand & Eye Gesture Mouse",
        status: "完了",
        desc: "手のジェスチャーと視線移動を使用してマウスカーソルを操作し、クリックを実行できるコンピュータビジョンアプリケーション。",
        feat1:
          "ハンドトラッキング: Mediapipeを使用して手のランドマークを検出し、正確なカーソル操作とジェスチャーによるクリックを実現。",
        feat2:
          "アイトラッキング: 視線推定を実装してカーソルを移動させ、アクセシビリティのための代替入力方法を提供。",
      },
      p7: {
        title: "CollabFlow SaaS",
        status: "プロトタイプ",
        desc: "リモートチーム向けのリアルタイム・コラボレーション・ホワイトボード。ライブカーソル、付箋、描画機能を低遅延で提供。",
        feat1:
          "リアルタイム同期: Socket.ioとRedisを使用して構築され、接続されたすべてのクライアント間で瞬時に状態を同期。",
        feat2:
          "インタラクティブUI: ReactとHTML5 Canvasを使用した複雑なキャンバス操作により、複数ユーザーによる同時編集をサポート。",
      },
      p8: {
        title: "HabitSync Mobile",
        status: "開発中",
        desc: "習慣追跡と生産性向上のためのクロスプラットフォーム・モバイルアプリ。データの可視化、毎日の目標、クラウド同期機能を搭載。",
        feat1:
          "クロスプラットフォーム: React Native / Expoで開発され、iOSとAndroidの両方のデバイスでスムーズに動作。",
        feat2:
          "データ可視化: D3.jsを使用した美しいチャートと進捗追跡、オフライン機能のためのローカルストレージ活用。",
      },
      viewCode: "GitHubでコードを見る",
    },
    skills: { title: "技術スキル" },
    footer: {
      title: "開発チームに貢献する準備は万端です。",
      desc: "現在、積極的に面接を受けています。ビザの手続きが完了次第、すぐに勤務・移住が可能です。",
      rights: "All rights reserved.",
      imprint: "Imprint (Impressum) | Data Privacy (Datenschutz)",
    },
    cv: "履歴書をダウンロード",
  },
  de: {
    nav: {
      about: "Über mich",
      projects: "Projekte",
      stack: "Tech Stack",
      contact: "Kontakt",
    },
    hero: {
      openToWork: "Offen für Arbeit",
      titlePrefix: "Entwicklung skalierbarer",
      titleHighlight: "Microservices",
      titleSuffix: "& KI-Lösungen",
      description:
        "Mehrsprachiger Full-Stack-Entwickler mit Sitz in Japan. Spezialisiert auf die Architektur entkoppelter Microservices mit Next.js, Rails und Python. Mit hoher technischer Auffassungsgabe und fließenden Kenntnissen in Englisch (C1/C2), Japanisch (N1/N2) und Mongolisch bin ich bereit, skalierbare Lösungen für innovative Teams weltweit zu liefern.",
      contact: "Kontaktieren Sie mich",
      github: "GitHub",
    },
    projects: {
      title: "Ausgewählte Projekte",
      p1: {
        title: "EcoRoute Optimizer",
        status: "Abgeschlossen",
        desc: "Eine nachhaltige Logistikplattform, die CO2-Emissionen reduziert, indem sie Lieferrouten unter Verwendung realer Physik- und Verkehrsdaten optimiert.",
        feat1:
          "Microservice-Architektur: Entkoppelte Dienste für Logik (Python), Management (Rails) und UI (Next.js).",
        feat2:
          "Real-World Routing: Integriertes OSRM zur Erfassung präziser Straßengeometrie und verkehrsbereinigter Reisezeiten.",
      },
      p2: {
        title: "BookingSystem",
        status: "Abgeschlossen",
        desc: "Ein umfassendes Buchungsmanagementsystem, das auf einer modernen Full-Stack-Architektur basiert. Bietet mehrsprachige Unterstützung (MN, EN, JP), Stripe-Zahlungen und Echtzeit-Terminplanung.",
        feat1:
          "Full-Stack-Architektur: Next.js (React) Frontend mit Tailwind CSS v4, verbunden mit einem robusten NestJS-Backend.",
        feat2:
          "Erweiterte Funktionen: Stripe-Zahlungsintegration, mehrsprachige Unterstützung (i18n) und rollenbasierte Zugriffskontrolle.",
      },
      p3: {
        title: "MindSync AI",
        status: "Abgeschlossen",
        desc: "Ein mitfühlender, sprachgesteuerter KI-Psychologe, lokalisiert auf Japanisch. Bietet sichere Authentifizierung, dauerhaften Chatverlauf und ein Premium-Abonnementmodell.",
        feat1:
          "Vollständige Sprachinteraktion: 'Hold to Speak'-Funktion mit OpenAI Whisper (STT) und TTS-1 für natürliche Gespräche.",
        feat2:
          "Monetarisierung & Sicherheit: Integriertes Stripe für monatliche Abonnements und sichere E-Mail/Passwort-Authentifizierung mit SQLite-Speicherung.",
      },
      p4: {
        title: "E-Commerce Website",
        status: "Abgeschlossen",
        desc: "Eine vollständig ausgestattete E-Commerce-Plattform mit allen wesentlichen Online-Shopping-Funktionen. Umfasst Produktkatalog, Warenkorb, Benutzerauthentifizierung, Bestellverwaltung und sichere Zahlungsabwicklung.",
        feat1:
          "Vollständiges Shopping-Erlebnis: Produktbrowsing, Filterung, Suchfunktion, Warenkorb-Management, Wunschlisten und Benutzerbewertungen.",
        feat2:
          "Sichere Transaktionen: Benutzerauthentifizierung (Registrierung/Login), Bestellverlauf, Zahlungsintegration (Stripe/PayPal) und E-Mail-Benachrichtigungen für Bestellungen.",
      },
      p5: {
        title: "AI Receptionist",
        status: "In Entwicklung",
        desc: "Ein produktionsreifer KI-Sprachoperator für Echtzeit-VoIP-Anrufe. Löst Docker-NAT- und VAD-Probleme. Als mongolischer Prototyp entwickelt, ist die Architektur jedoch für jede Sprache und Region skalierbar.",
        feat1:
          "Fortschrittliche Audio-Pipeline: Benutzerdefinierte RMS-basierte Spracherkennung (VAD) und Promiscuous RTP Mode für robustes Streaming in Docker.",
        feat2:
          "Intelligente Integration: OpenAI Function Calling für Echtzeit-Datenbankabfragen und eine benutzerdefinierte Textnormalisierungs-Engine für fehlerfreies TTS.",
      },
      p6: {
        title: "Hand & Eye Gesture Mouse",
        status: "Abgeschlossen",
        desc: "Eine Computer-Vision-Anwendung, mit der Benutzer ihren Mauszeiger steuern und Klicks mit Handgesten und Augenbewegungen ausführen können.",
        feat1:
          "Hand-Tracking: Verwendet Mediapipe zur Erkennung von Hand-Landmarken für präzise Cursorsteuerung und gestenbasiertes Klicken.",
        feat2:
          "Eye-Tracking: Implementiert Blickrichtungsschätzung zum Bewegen des Cursors und bietet eine alternative Eingabemethode für Barrierefreiheit.",
      },
      viewCode: "Code auf GitHub ansehen",
    },
    skills: { title: "Technische Kompetenzen" },
    footer: {
      title: "Bereit, etwas zu bewirken.",
      desc: "Ich führe aktiv Vorstellungsgespräche und kann nach Abschluss/Visumsgenehmigung sofort umziehen.",
      rights: "Alle Rechte vorbehalten.",
      imprint: "Impressum | Datenschutz",
    },
    cv: "Lebenslauf herunterladen",
  },
  mn: {
    nav: {
      about: "Тухай",
      projects: "Төслүүд",
      stack: "Технологи",
      contact: "Холбоо барих",
    },
    hero: {
      openToWork: "Ажилд ороход бэлэн",
      titlePrefix: "Өргөтгөх боломжтой",
      titleHighlight: "Микросервис",
      titleSuffix: "ба AI шийдлүүд.",
      description:
        "Япон улсад суралцаж буй, олон хэлний мэдлэгтэй Full-Stack хөгжүүлэгч. Next.js, Rails, Python ашиглан бие даасан микросервис архитектур бүтээхээр мэргэшсэн. Шинэ технологийг хурдан сурах чадвар болон Англи (C1/C2), Япон (N1/N2), Монгол хэлний өндөр мэдлэгтэй бөгөөд дэлхийн түвшний багт үнэ цэнэ бүтээхэд бэлэн байна.",
      contact: "Надтай холбогдох",
      github: "GitHub",
    },
    projects: {
      title: "Онцлох төслүүд",
      p1: {
        title: "EcoRoute Optimizer",
        status: "Дууссан",
        desc: "Бодит физик болон замын хөдөлгөөний өгөгдлийг ашиглан хүргэлтийн маршрутыг оновчтой болгож, нүүрстөрөгчийн ялгарлыг бууруулдаг тогтвортой ложистикийн платформ.",
        feat1:
          "Микросервис архитектур: Логик (Python), Удирдлага (Rails), болон UI (Next.js)-д зориулсан тусдаа үйлчилгээнүүд.",
        feat2:
          "Бодит маршрутчлал: OSRM-ийг нэгтгэн замын нарийн геометр болон хөдөлгөөнд тохируулсан аялах хугацааг тооцоолдог.",
      },
      p2: {
        title: "BookingSystem",
        status: "Дууссан",
        desc: "Орчин үеийн full-stack архитектураар бүтээгдсэн захиалгын удирдлагын цогц систем. Олон хэлний дэмжлэг (MN, EN, JP), Stripe төлбөр тооцоо, бодит цагийн хуваарь зэрэг боломжуудтай.",
        feat1:
          "Full-Stack Архитектур: Tailwind CSS v4 ашигласан Next.js (React) frontend-ийг хүчирхэг NestJS backend-тэй холбосон.",
        feat2:
          "Дэвшилтэт боломжууд: Stripe төлбөрийн интеграцчилал, олон хэлний дэмжлэг (i18n), болон үүрэгт суурилсан хандалтын хяналт.",
      },
      p3: {
        title: "MindSync AI",
        status: "Дууссан",
        desc: "Япон хэл дээр бүрэн ажилладаг, дуу хоолойгоор харилцдаг сэтгэл зүйн AI зөвлөх. Аюулгүй нэвтрэх систем, чат түүх хадгалах болон төлбөртэй эрхийн (Premium) боломжуудтай.",
        feat1:
          "Дуу хоолойн харилцаа: OpenAI Whisper (STT) болон TTS-1 ашиглан 'Дарж ярих' функцээр байгалийн яриа өрнүүлнэ.",
        feat2:
          "Төлбөр ба Аюулгүй байдал: Stripe сарын хураамжийн систем болон SQLite дээр суурилсан найдвартай бүртгэлийн системтэй.",
      },
      p4: {
        title: "E-Commerce Website",
        status: "Дууссан",
        desc: "Онлайн худалдааны бүх үндсэн функцтай, бүрэн төлөвлөгөөтэй e-commerce платформ. Бүтээгдэхүүний каталог, сагс, хэрэглэгчийн нэвтрэх систем, захиалгын удирдлага, найдвартай төлбөр тооцоо бүхий.",
        feat1:
          "Бүрэн худалдааны туршлага: Бүтээгдэхүүн үзэх, шүүлтүүр, хайлтын функц, сагсны удирдлага, хүслийн жагсаалт, хэрэглэгчийн үнэлгээ.",
        feat2:
          "Найдвартай гүйлгээ: Хэрэглэгчийн нэвтрэх (бүртгүүлэх/нэвтрэх), захиалгын түүх, төлбөр интеграцчилал (Stripe/PayPal), захиалгын имэйл мэдэгдэл.",
      },
      p5: {
        title: "AI Receptionist",
        status: "Хөгжүүлэлтийн шатанд",
        desc: "Хүний оронд дуудлага хүлээн авах AI Operator. Docker NAT болон RTP урсгалын асуудлыг шийдсэн. Туршилтын хувилбар Монгол хэл дээр байгаа ч, систем нь олон улсын ямар ч хэл дээр ажиллах бүрэн боломжтой.",
        feat1:
          "Аудио Шийдэл: WebRTC-ийн алдааг засаж RMS (дууны хүч) хэмжигч болон Promiscuous RTP горимыг ашиглан дуу тасалдах асуудлыг бүрэн шийдсэн.",
        feat2:
          "Системийн Сайжруулалт: Тусгай тэмдэгт болон тоог үг рүү хөрвүүлэх текст цэвэрлэгээний функц болон OpenAI Function Calling-ийг нэвтрүүлсэн.",
      },
      p6: {
        title: "Hand & Eye Gesture Mouse",
        status: "Дууссан",
        desc: "Гарын хөдөлгөөн болон нүдний харцаар хулганы курсорыг удирдах, товч дарах боломжтой компьютерийн харааны програм.",
        feat1:
          "Гарын хяналт: Mediapipe ашиглан гарын цэгүүдийг таньж, курсорыг нарийн удирдах болон дохио зангаагаар товч дарах боломжтой.",
        feat2:
          "Нүдний хяналт: Нүдний харцаар курсорыг хөдөлгөх технологийг нэвтрүүлсэн нь хөгжлийн бэрхшээлтэй иргэдэд туслах шинэ боломж юм.",
      },
      viewCode: "GitHub дээр код үзэх",
    },
    skills: { title: "Техникийн ур чадвар" },
    footer: {
      title: "Өөрчлөлт хийхэд бэлэн.",
      desc: "Би идэвхтэй ярилцлагад орж байгаа бөгөөд төгсөлт/виз батлагдсаны дараа шууд нүүх боломжтой.",
      rights: "Бүх эрх хуулиар хамгаалагдсан.",
      imprint: "Imprint (Impressum) | Data Privacy (Datenschutz)",
    },
    cv: "CV татах",
  },
};

export default function Portfolio() {
  const [lang, setLang] = useState<"en" | "jp" | "de" | "mn">("en");
  const t = translations[lang];

  return (
    <div
      className={`min-h-screen font-sans selection:bg-cyan-500 transition-colors duration-500 dark bg-gradient-to-br from-slate-900 via-sky-950 to-gray-900 animate-gradient-xy text-gray-200 relative overflow-hidden`}
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gray-500/10 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-slate-500/10 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        <ThreeBackground />
      </div>

      <div className="relative z-10">
        <header className="bg-white/70 dark:bg-black/50 border-b border-black/5 dark:border-white/10 sticky top-0 z-50 backdrop-blur-md transition-colors duration-300">
          <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="font-cartoon text-3d text-2xl tracking-wider text-gray-900 dark:text-white">
              Nomad
              <span className="text-gray-600 dark:text-gray-300">.Dev</span>
            </div>
            <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-700 dark:text-gray-300">
              <a
                href="#about"
                className="hover:text-black dark:hover:text-white transition"
              >
                {t.nav.about}
              </a>
              <a
                href="#projects"
                className="hover:text-black dark:hover:text-white transition"
              >
                {t.nav.projects}
              </a>
              <a
                href="#skills"
                className="hover:text-black dark:hover:text-white transition"
              >
                {t.nav.stack}
              </a>
              <a
                href="#contact"
                className="hover:text-black dark:hover:text-white transition"
              >
                {t.nav.contact}
              </a>
            </nav>

            <div className="flex items-center gap-4">
              <div className="relative group">
                <button className="flex items-center gap-1 text-sm font-bold text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition px-2 py-1 rounded-md">
                  <Globe size={16} />
                  <span className="uppercase">{lang}</span>
                  <ChevronDown
                    size={14}
                    className="group-hover:rotate-180 transition-transform duration-200"
                  />
                </button>

                <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right z-50">
                  <div className="bg-gray-900 border border-white/10 rounded-lg shadow-xl overflow-hidden min-w-[120px] flex flex-col">
                    {(["en", "jp", "de", "mn"] as const).map((l) => (
                      <button
                        key={l}
                        onClick={() => setLang(l)}
                        className={`px-4 py-2 text-left text-sm font-medium hover:bg-white/10 transition flex items-center justify-between ${lang === l
                            ? "text-white bg-white/5 font-bold"
                            : "text-gray-400"
                          }`}
                      >
                        <span className="uppercase">{l}</span>
                        {lang === l && (
                          <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <a
                href={lang === "jp" ? "/MainRirekiSho.xlsx" : "/BayasgalanCV.pdf"}
                className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition shadow-lg shadow-white/5"
                download
              >
                <Download size={16} />
                <span className="hidden sm:inline">{t.cv}</span>
              </a>
            </div>
          </div>
        </header>

        <main>
          <section id="about" className="pt-20 pb-32 px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 text-gray-700 dark:text-gray-300 text-xs font-bold uppercase tracking-wide mb-6 border border-black/5 dark:border-white/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-500 dark:bg-white opacity-20"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500 dark:bg-white"></span>
                </span>
                {t.hero.openToWork}
              </div>
              <h1 className="font-cartoon text-3d text-6xl md:text-7xl font-extrabold text-gray-900 dark:text-white tracking-wide mb-6">
                {t.hero.titlePrefix}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-gray-400 dark:to-white">
                  {t.hero.titleHighlight}
                </span>{" "}
                {t.hero.titleSuffix}
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 leading-relaxed font-medium">
                {t.hero.description}
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="#contact"
                  className="px-6 py-3 bg-gray-900 text-white dark:bg-white dark:text-black rounded-lg font-semibold hover:bg-gray-700 dark:hover:bg-gray-200 transition shadow-xl shadow-black/10 dark:shadow-white/10"
                >
                  {t.hero.contact}
                </a>
                <a
                  href="https://github.com/nomad1nk"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 bg-transparent text-gray-900 dark:text-white border border-black/20 dark:border-white/20 rounded-lg font-semibold hover:bg-black/5 dark:hover:bg-white/10 transition flex items-center gap-2"
                >
                  <Github size={20} />
                  {t.hero.github}
                </a>
              </div>
            </div>
          </section>

          <section
            id="projects"
            className="py-20 bg-white/30 dark:bg-black/20 backdrop-blur-sm border-y border-black/5 dark:border-white/5 overflow-hidden"
          >
            <div className="w-full">
              <div className="max-w-5xl mx-auto px-6 mb-8">
                <h2 className="font-cartoon text-3d text-xl font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider border-b border-black/10 dark:border-white/20 pb-2 inline-block">
                  {t.projects.title}
                </h2>
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
                      { icon: MapPin, label: "Leaflet / OSRM" },
                    ],
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
                      { icon: Globe, label: "i18n" },
                    ],
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
                      { icon: Database, label: "Redis" },
                    ],
                  },
                  {
                    title: t.projects.p3.title,
                    status: t.projects.p3.status,
                    desc: t.projects.p3.desc,
                    feat1: t.projects.p3.feat1,
                    feat2: t.projects.p3.feat2,
                    link: "https://github.com/Nomad1nk/MindSync-Psychologist-AI",
                    image: "/syncAI.png",
                    tech: [
                      { icon: Server, label: "FastAPI" },
                      { icon: Database, label: "SQLite" },
                      { icon: CreditCard, label: "Stripe" },
                      { icon: Brain, label: "GPT-4o / Whisper" },
                    ],
                  },
                  {
                    title: t.projects.p5.title,
                    status: t.projects.p5.status,
                    desc: t.projects.p5.desc,
                    feat1: t.projects.p5.feat1,
                    feat2: t.projects.p5.feat2,
                    link: "https://github.com/Nomad1nk/No1-projectt",
                    image: "/reception-ai.png",
                    tech: [
                      { icon: Cpu, label: "Python" },
                      { icon: Container, label: "Docker" },
                      { icon: Database, label: "PostgreSQL" },
                      { icon: Layout, label: "Admin Dashboard" },
                    ],
                  },
                  {
                    title: t.projects.p6.title,
                    status: t.projects.p6.status,
                    desc: t.projects.p6.desc,
                    feat1: t.projects.p6.feat1,
                    feat2: t.projects.p6.feat2,
                    link: "https://github.com/Nomad1nk/MouseTrack",
                    image: "/mousetrack.png",
                    tech: [
                      { icon: Cpu, label: "Python" },
                      { icon: Camera, label: "OpenCV" },
                      { icon: Eye, label: "Mediapipe" },
                      { icon: MousePointer2, label: "PyAutoGUI" },
                    ],
                  },
                ]}
              />
            </div>
          </section>

          <section id="skills" className="py-20 px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-cartoon text-3d text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center tracking-wide">
                {t.skills.title}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <SkillCard
                  title="Frontend Ecosystem"
                  skills={[
                    "Next.js 14 (App Router) / React",
                    "TypeScript / Tailwind CSS (v4)",
                    "Framer Motion / Three.js",
                    "Modern Web Standards (ES6+)",
                  ]}
                />
                <SkillCard
                  title="Backend & API Architecture"
                  skills={[
                    "NestJS / Node.js",
                    "Python (FastAPI) / Rails",
                    "GraphQL / REST APIs",
                    "Microservices / gRPC",
                  ]}
                />
                <SkillCard
                  title="Cloud Infrastructure"
                  skills={[
                    "AWS (Lambda, S3, DynamoDB)",
                    "Docker / Vercel / Supabase",
                    "CI/CD (GitHub Actions)",
                    "Linux / Nginx",
                  ]}
                />
                <SkillCard
                  title="AI Integration"
                  skills={[
                    "OpenAI API (Function Calling)",
                    "RAG / Vector Databases",
                    "Computer Vision (OpenCV)",
                    "Mediapipe / Whisper",
                  ]}
                />
              </div>
            </div>
          </section>

          <footer
            id="contact"
            className="bg-gray-100 dark:bg-black text-gray-500 py-20 px-6 border-t border-black/10 dark:border-white/10 transition-colors duration-500"
          >
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                {t.footer.title}
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 font-medium">
                {t.footer.desc}
              </p>
              <div className="flex justify-center gap-6">
                <a
                  href="https://www.facebook.com/baysgln.battulga.7/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-black dark:hover:text-white transition"
                >
                  <Facebook size={20} /> Facebook
                </a>
                <a
                  href="https://www.instagram.com/baysakun/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-black dark:hover:text-white transition"
                >
                  <Instagram size={20} /> Instagram
                </a>
                <a
                  href="https://linkedin.com/in/nomad1nk-30630139a"
                  className="flex items-center gap-2 hover:text-black dark:hover:text-white transition"
                >
                  <Linkedin size={20} /> LinkedIn
                </a>
                <a
                  href="https://github.com/nomad1nk"
                  className="flex items-center gap-2 hover:text-black dark:hover:text-white transition"
                >
                  <Github size={20} /> GitHub
                </a>
              </div>
              <div className="border-t border-black/10 dark:border-white/10 pt-8 mt-12 text-sm text-gray-600">
                <p>
                  &copy; {new Date().getFullYear()} Nomad. {t.footer.rights}
                </p>
                <p className="mt-2">{t.footer.imprint}</p>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}

function TechBadge({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/5 dark:bg-white/10 text-gray-800 dark:text-gray-200 text-xs font-bold border border-black/10 dark:border-white/10 shadow-sm">
      <Icon size={14} />
      {label}
    </span>
  );
}

function SkillCard({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="bg-white/60 dark:bg-white/5 p-6 rounded-xl border border-black/5 dark:border-white/10 shadow-sm hover:shadow-lg transition duration-300 hover:bg-white/80 dark:hover:bg-white/10">
      <h3 className="font-bold text-gray-900 dark:text-white mb-4 border-b border-black/5 dark:border-white/10 pb-2">
        {title}
      </h3>
      <ul className="space-y-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="text-sm text-gray-700 dark:text-gray-300 flex items-center gap-2 font-medium"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-600 dark:bg-white"></div>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      className="w-3 h-3"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M5 13l4 4L19 7"
      ></path>
    </svg>
  );
}
