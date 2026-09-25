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
  ChevronDown,
  ShoppingBag,
  CreditCard,
  Calendar,
  Container,
  Facebook,
  Instagram,
  Phone,
  Mic,
  Radio,
  Code2,
  Cloud,
  Wrench,
  Sparkles,
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

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import ProjectBentoGrid from "./components/ProjectBentoGrid";

const ThreeBackground = dynamic(() => import("./components/ThreeBackground"), {
  ssr: false,
});

const translations = {
  mn: {
    nav: {
      about: "Тухай",
      projects: "Төслүүд",
      stack: "Технологи",
      contact: "Холбоо барих",
    },
    hero: {
      openToWork: "Улаанбаатарт ажилд орох / Алсын зайнаас",
      titlePrefix: "Full-Stack хөгжүүлэгч &",
      titleHighlight: "AI",
      titleSuffix: "инженер.",
      description:
        "Япон улсад IT Engineer & Full-Stack Developer чиглэлээр суралцаж төгссөн хөгжүүлэгч. Англи, япон хэлээр чөлөөтэй харилцдаг, герман хэлний анхан-дунд шатны мэдлэгтэй. Bedel AI Box — утсаар залгасан үйлчлүүлэгчтэй монголоор ярьж, захиалга авч, төлбөр тооцдог AI ресепшн системийг үүсгэн байгуулж, эхнээс нь дангаараа бүтээсэн. Next.js, Rails, Python (FastAPI), Docker, OpenAI Function Calling зэрэг технологи ашиглан бодит бизнест зориулсан системийг архитектураас нь эхлээд ажиллуулах хүртэл бүтнээр нь хариуцдаг.",
      contact: "Надтай холбогдох",
      github: "GitHub",
      stats: {
        projects: "Бүтээсэн төсөл",
        live: "Онлайн ажиллаж буй",
        languages: "Ажлын хэл",
      },
    },
    projects: {
      title: "Онцлох төслүүд",
      p0: {
        title: "Bedel AI Box",
        status: "Худалдаалагдаж буй",
        desc: "Монголын бизнесүүдэд зориулсан AI хүлээн авагч. Хэрэглэгчийн жинхэнэ дуудлагыг хүлээн авч, монголоор ярилцан захиалга авах, төлбөр тооцох цогц шийдэл. Үүсгэн байгуулагч, цорын ганц хөгжүүлэгчийн хувьд бүтээгдэхүүний архитектур, бизнес моделоос эхлээд live deploy хүртэл бүх үе шатыг ганцаараа удирдсан.",
        feat1:
          "Бүхэлдээ дуу хоолой дээр суурилсан AI систем: утасны сүлжээний интеграц, бодит цагийн ярианы боловсруулалт, монгол хэлний STT/TTS болон AI логикийг Docker дээр тогтвортой ажиллах нэгдмэл бүтэцтэйгээр бүтээсэн.",
        feat2:
          "Бодит бизнест нэвтрүүлсэн бүрэн шийдэл: автомат нэхэмжлэх, мэдэгдлийн систем, хяналтын самбар, харилцагч өөрөө AI заавар (prompt) болон бараа бүтээгдэхүүнээ удирдах боломжтой код шаардахгүй админ хэсэгтэй.",
      },
      p1: {
        title: "EcoRoute Optimizer",
        status: "Дууссан",
        desc: "Бодит физикийн өгөгдөл болон зам хөдөлгөөний мэдээлэлд тулгуурлан хүргэлтийн маршрутыг оновчтой төлөвлөж, нүүрстөрөгчийн ялгарлыг бууруулахад туслахаар бүтээсэн ногоон логистикийн платформ юм.",
        feat1:
          "Микросервис архитектур дээр суурилсан: логикийг Python, удирдлагыг Rails, хэрэглэгчийн интерфейсийг Next.js дээр тус тусад нь салгасан үйлчилгээнүүдтэй.",
        feat2:
          "Бодит цагийн маршрутчлал: OSRM-ийг нэгтгэн замын нарийн геометр болон хөдөлгөөнд тохируулсан аялах хугацааг үнэн зөв тооцдог.",
      },
      p2: {
        title: "BookingSystem",
        status: "Дууссан",
        desc: "Орчин үеийн full-stack архитектураар бүтээсэн захиалгын удирдлагын цогц систем. Олон хэлний дэмжлэг (MN, EN, JP), Stripe төлбөр тооцоо, бодит цагийн хуваарь гэх мэт боломжуудтай юм.",
        feat1:
          "Full-Stack архитектур: Tailwind CSS v4 ашигласан Next.js (React) frontend-ийг хүчирхэг NestJS backend-тэй холбож бүтээсэн.",
        feat2:
          "Дэвшилтэт боломжууд: Stripe төлбөрийн интеграц, олон хэлний дэмжлэг (i18n) болон үүрэгт суурилсан хандалтын хяналттай (RBAC).",
      },
      p3: {
        title: "MindSync AI",
        status: "Дууссан",
        desc: "Япон хэл дээр бүрэн ажилладаг, дуу хоолойгоор харилцдаг сэтгэл зүйн AI зөвлөх. Найдвартай нэвтрэх систем, чатын түүх хадгалах болон төлбөртэй (Premium) эрхийн боломжуудтай юм.",
        feat1:
          "Дуу хоолойн харилцаа: OpenAI Whisper (STT) болон TTS-1-ийг ашиглан 'Дарж ярих' функцээр байгалийн өнгө аястай яриа өрнүүлэх боломжтой.",
        feat2:
          "Төлбөр ба найдвартай байдал: Stripe сарын төлбөрийн систем болон SQLite дээр суурилсан имэйл/нууц үгийн нэвтрэх системийг нэгтгэсэн.",
      },
      p4: {
        title: "E-Commerce Website",
        status: "Дууссан",
        desc: "Онлайн худалдааны бүх үндсэн боломжийг агуулсан иж бүрэн e-commerce платформ. Бүтээгдэхүүний каталог, сагс, хэрэглэгчийн нэвтрэх систем, захиалгын удирдлага, найдвартай төлбөр тооцоо зэргийг бүгдийг нь хэрэгжүүлсэн юм.",
        feat1:
          "Бүрэн худалдааны туршлага: бүтээгдэхүүн үзэх, шүүлт хийх, хайлт хийх, сагс удирдах, хүслийн жагсаалт үүсгэх боломжтой.",
        feat2:
          "Найдвартай гүйлгээ: хэрэглэгчийн нэвтрэх, захиалгын түүх, төлбөрийн интеграц (Stripe/PayPal), захиалгын имэйл мэдэгдэл зэргийг хэрэгжүүлсэн.",
      },
      p6: {
        title: "Hand & Eye Gesture Mouse",
        status: "Дууссан",
        desc: "Гарын хөдөлгөөн болон нүдний харцаар хулганы курсорыг удирдаж, товч дарах боломжтой компьютерийн харааны технологид суурилсан програм юм.",
        feat1:
          "Гарын хяналт: Mediapipe ашиглан гарын цэгүүдийг таньж, курсорыг нарийн удирдах, дохио зангаагаар товч дарах боломжтой.",
        feat2:
          "Нүдний хяналт: нүдний харцаар курсорыг хөдөлгөх энэхүү технологи нь хөгжлийн бэрхшээлтэй иргэдэд хэрэглэхэд тохиромжтой шинэ боломж юм.",
      },
      p7: {
        title: "Хайгуул",
        status: "Туршилтын хувилбар",
        desc: "Монголд үйлчилгээ хэрэгтэй хүнийг тэр үйлчилгээг үзүүлдэг хүнтэй холбодог платформ. Хэрэглэгч «Баянгол дүүрэгт сантехникч яаралтай хэрэгтэй байна» гэж энгийн монголоор бичихэд хүсэлт нь шалгагдсан, чөлөөтэй байгаа эрхлэгч рүү шууд очно. Лавлах сайт шиг хайж суух шаардлагагүй.",
        feat1:
          "Claude хүсэлтийг задлан оператор руу санал болгодог бөгөөд эцсийн шийдвэрийг хүн гаргана. Засвар бүр «загвар юу гэсэн, хүн юу гэсэн» гэсэн хос болж хадгалагдан, eval корпус аяндаа хуримтлагддаг.",
        feat2:
          "Next.js 15, BullMQ worker, Prisma/PostgreSQL бүхий monorepo. Монгол текстийг хэвийн болгох, ойролцоо хайлт хийх боломжтой, утсанд суулгадаг PWA, SMS/Messenger/Push сувагтай бөгөөд Fly.io дээр ажиллаж байна.",
      },
      p8: {
        title: "Хурлын протокол AI",
        status: "Хөгжүүлж буй",
        desc: "Монгол хэлээрх хурлын бичлэгээс хэн юу ярьсныг тэмдэглэж, шийдвэр болон даалгаврын хамт бүтэцлэгдсэн протоколыг автоматаар гаргадаг систем.",
        feat1:
          "Эхлээд pyannote-оор хэн хэзээ ярьсныг тогтоож, бүртгэлтэй дуу хоолойтой тулган илтгэгчийг нэрээр нь таньдаг. Дараа нь ээлж бүрийг Chimege STT-ээр текст болгож, Claude-аар протокол бичүүлдэг.",
        feat2:
          "API-ийн бодит хязгаарт тохируулсан: ASR-ийн 15 секундын хязгаарт багтаахын тулд урт ээлжийг ярианы завсраар хувааж, хэт богино бичлэгийг цагийн тэмдгийг нь алдагдуулалгүйгээр уртасгадаг.",
      },
      p9: {
        title: "BedelERP",
        status: "Хөгжүүлж буй",
        desc: "Монголын жижиг, дунд бизнест зориулсан, дуу хоолойгоор удирддаг нягтлан бодох бүртгэлийн цөм. «Өнөөдөр 3 шуудай гурил зарлаа» гэх мэт яриаг зөв санхүүгийн бүртгэл болгоно. Bedel AI Box-ийн ард ажиллах санхүүгийн систем юм.",
        feat1:
          "Давхар бичилттэй ledger: бичилтийг засдаггүй, зөвхөн эсрэг бичилтээр залруулдаг (Postgres trigger-ээр хамгаалсан). Мөнгөн дүнг BigDecimal-аар тооцож, idempotency key болон optimistic locking-оор давхар бүртгэл, үлдэгдлээс хэтэрсэн борлуулалтаас сэргийлдэг.",
        feat2:
          "НӨАТ-ын тооцоо, eBarimt баримт, жигнэсэн дундаж өртгөөр бараа материал ба өртөг, ашиг/НӨАТ/балансын тайлантай. Bedel-тэй gRPC-ээр холбогдоно. Testcontainers бүхий 77 тест, GitHub Actions CI-тэй.",
      },
      filters: {
        all: "Бүгд",
        ai: "AI ба дуу хоолой",
        web: "Full-Stack ба Backend",
      },
      viewCode: "GitHub дээр код үзэх",
      liveDemo: "Live Demo",
      privateCode: "Код хаалттай — хүсвэл танилцуулна",
      showMore: "Дэлгэрэнгүй",
      showLess: "Хураах",
    },
    skills: { title: "Техникийн ур чадвар" },
    certifications: {
      title: "Сертификатууд",
      aws: {
        name: "AWS Cloud Practitioner",
        issuer: "HelloAI Academy",
        year: "2026",
        verify: "Баталгаажуулах",
      },
      sql: {
        name: "SQL Database Knowledge",
        issuer: "HelloAI Academy",
        year: "2026",
        verify: "Баталгаажуулах",
      },
    },
    footer: {
      title: "Хамтран ажиллахад бэлэн.",
      desc: "Улаанбаатарт байнгын ажилд орох эсвэл алсын зайнаас гэрээт ажил гүйцэтгэхэд бэлэн байна. Bedel Tech-д AI дуу хоолойн системийг хөгжүүлж байна.",
      rights: "Бүх эрх хуулиар хамгаалагдсан.",
      imprint: "Нууцлалын бодлого",
    },
    cv: "CV татах",
  },
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      stack: "Stack",
      contact: "Contact",
    },
    hero: {
      openToWork: "Open to Work — Ulaanbaatar / Remote",
      titlePrefix: "Full-Stack Developer &",
      titleHighlight: "AI",
      titleSuffix: "Engineer.",
      description:
        "A Full-Stack Developer who completed an IT Engineer & Full-Stack Developer program in Japan. Fluent in English and Japanese, with elementary-to-intermediate German. I founded and built Bedel AI Box — an AI receptionist that answers real customer phone calls in Mongolian, takes orders, and handles payment — building it end-to-end on my own. I work with Next.js, Rails, Python (FastAPI), Docker, and OpenAI Function Calling to take production systems for real businesses from architecture through to deployment.",
      contact: "Contact Me",
      github: "GitHub",
      stats: {
        projects: "Projects built",
        live: "Live deployments",
        languages: "Working languages",
      },
    },
    projects: {
      title: "Featured Projects",
      p0: {
        title: "Bedel AI Box",
        status: "Commercial Product",
        desc: "An AI receptionist for Mongolian businesses — answers real customer phone calls, takes orders in Mongolian, and handles payment end-to-end. As founder and sole engineer, I drove the product from architecture and business model through to live deployment with paying customers.",
        feat1:
          "End-to-end voice AI system: telephony integration, real-time speech processing, Mongolian-language STT/TTS, and AI reasoning — all containerized for reliable deployment.",
        feat2:
          "Production-ready business layer: automated payment invoicing, alerts, monitoring dashboard, and a no-code admin panel that lets each customer manage their own prompts and product catalog.",
      },
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
          "Complete Shopping Experience: Product browsing, filtering, search, cart management, wishlists, and reviews.",
        feat2:
          "Secure Transactions: Authentication, order history, payment integration (Stripe/PayPal), and email notifications.",
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
      p7: {
        title: "Haiguul",
        status: "Live Beta",
        desc: "A demand-routing service marketplace for Mongolia. Customers describe what they need in plain Mongolian — “I urgently need a plumber in Bayangol” — and the request goes straight to vetted, available providers. No directory browsing.",
        feat1:
          "Claude parses each request and suggests a triage to a human operator, who makes the final call. Every correction is stored as a model-vs-human pair, so an eval corpus grows out of normal operations.",
        feat2:
          "Monorepo with Next.js 15, BullMQ workers and Prisma/PostgreSQL. Mongolian text normalization and fuzzy matching, installable PWA, SMS/Messenger/Push channels — deployed on Fly.io.",
      },
      p8: {
        title: "Meeting Protocol AI",
        status: "In Development",
        desc: "Turns Mongolian meeting recordings into structured minutes that record who said what — with decisions and action items extracted automatically.",
        feat1:
          "Speaker diarization (pyannote) runs before ASR, then voice-print matching names each speaker. Every turn is transcribed with Chimege STT, and Claude drafts the final protocol.",
        feat2:
          "Engineered around real API limits: long turns are split at speech pauses to fit a 15-second ASR cap, and very short clips are padded without losing their true timestamps.",
      },
      p9: {
        title: "BedelERP",
        status: "In Development",
        desc: "A voice-driven accounting core for Mongolian SMEs: spoken business events like “sold 3 sacks of flour today” become correct accounting records. The financial backbone behind Bedel AI Box.",
        feat1:
          "Append-only double-entry ledger (enforced by Postgres triggers) — corrections are reversing entries, never edits. BigDecimal money, idempotency keys and optimistic locking prevent double-booking and overselling.",
        feat2:
          "VAT split, eBarimt receipts, weighted-average inventory with COGS, and P&L / VAT / balance-sheet reports. gRPC bridge from Bedel's Python stack; 77 tests including Testcontainers, with GitHub Actions CI.",
      },
      filters: {
        all: "All",
        ai: "AI & Voice",
        web: "Full-Stack & Backend",
      },
      viewCode: "View Code on GitHub",
      liveDemo: "Live Demo",
      privateCode: "Private code — walkthrough on request",
      showMore: "Show details",
      showLess: "Show less",
    },
    skills: { title: "Technical Competencies" },
    certifications: {
      title: "Certifications",
      aws: {
        name: "AWS Cloud Practitioner",
        issuer: "HelloAI Academy",
        year: "2026",
        verify: "Verify",
      },
      sql: {
        name: "SQL Database Knowledge",
        issuer: "HelloAI Academy",
        year: "2026",
        verify: "Verify",
      },
    },
    footer: {
      title: "Ready to make an impact.",
      desc: "Open to full-time roles in Ulaanbaatar or remote contracts. Founder of Bedel Tech — AI Voice Systems.",
      rights: "All rights reserved.",
      imprint: "Privacy Policy",
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
      openToWork: "ウランバートルで就職活動中 / リモート可",
      titlePrefix: "フルスタック &",
      titleHighlight: "AI",
      titleSuffix: "エンジニア。",
      description:
        "日本でIT Engineer & Full-Stack Developerの専門課程を修了したフルスタックエンジニアです。英語・日本語ともに流暢で、ドイツ語は初〜中級レベル。AI受付システム『Bedel AI Box』を創業者として一人で開発し、実際の顧客電話にモンゴル語で応答し、注文・決済まで対応する仕組みを構築しました。Next.js / Rails / Python (FastAPI) / Docker / OpenAI Function Callingを用いて、ビジネス向けの本番システムを設計から運用まで一貫して構築します。",
      contact: "お問い合わせ",
      github: "GitHub",
      stats: {
        projects: "制作プロジェクト",
        live: "公開中",
        languages: "対応言語",
      },
    },
    projects: {
      title: "主なプロジェクト",
      p0: {
        title: "Bedel AI Box",
        status: "商用製品",
        desc: "モンゴル企業向けのAI受付システム。実際の顧客電話に応答し、モンゴル語で会話して注文・決済まで対応するエンドツーエンドのソリューション。創業者兼唯一のエンジニアとして、アーキテクチャ設計・ビジネスモデルから本番運用まで一貫して構築。",
        feat1:
          "エンドツーエンドの音声AIシステム: 電話網との統合、リアルタイム音声処理、モンゴル語のSTT/TTS、AI対話ロジックを、Docker化された安定アーキテクチャで実現。",
        feat2:
          "実運用向けビジネス層: 自動決済請求、通知、監視ダッシュボード、顧客自身がプロンプトや商品を管理できるノーコード管理画面を提供。",
      },
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
        title: "Haiguul",
        status: "ベータ公開中",
        desc: "モンゴルでサービスを必要とする人と提供者をつなぐプラットフォーム。「バヤンゴル区で至急配管工が必要」と普段のモンゴル語で書くだけで、審査済みで対応可能な事業者へ依頼が直接届きます。電話帳のように探し回る必要はありません。",
        feat1:
          "Claudeが依頼内容を解析してオペレーターに提案し、最終判断は人が行います。修正はすべて「モデルの判断 vs 人の判断」のペアとして記録され、評価用コーパスが自然に蓄積されます。",
        feat2:
          "Next.js 15、BullMQワーカー、Prisma/PostgreSQLによるモノレポ構成。モンゴル語テキストの正規化とあいまい検索、インストール可能なPWA、SMS/Messenger/Push通知に対応し、Fly.ioで稼働中。",
      },
      p8: {
        title: "議事録AI",
        status: "開発中",
        desc: "モンゴル語の会議録音から「誰が何を話したか」を記録し、決定事項やタスクを含む構造化された議事録を自動生成するシステム。",
        feat1:
          "pyannoteで話者分離を行い、登録済みの声紋と照合して話者を名前で識別。各発話をChimege STTでテキスト化し、Claudeで議事録を作成します。",
        feat2:
          "実際のAPI制限に合わせた設計: ASRの15秒制限に収まるよう長い発話を無音区間で分割し、短すぎる音声は実際のタイムスタンプを保ったまま補完します。",
      },
      p9: {
        title: "BedelERP",
        status: "開発中",
        desc: "モンゴルの中小企業向け、音声で操作する会計システムのコア。「今日小麦粉を3袋売った」といった発話を正確な会計記録に変換します。Bedel AI Boxを支える会計基盤です。",
        feat1:
          "追記専用の複式簿記元帳（Postgresトリガーで保護）で、修正は逆仕訳のみ。金額はBigDecimalで扱い、冪等キーと楽観的ロックで二重計上や在庫超過販売を防止。",
        feat2:
          "付加価値税（VAT）計算、eBarimt電子レシート、移動平均法による在庫・売上原価、損益・VAT・貸借対照表レポート。BedelとはgRPCで連携。Testcontainersを含む77件のテストとGitHub Actions CI。",
      },
      filters: {
        all: "すべて",
        ai: "AI・音声",
        web: "フルスタック・バックエンド",
      },
      viewCode: "GitHubでコードを見る",
      liveDemo: "ライブデモ",
      privateCode: "非公開リポジトリ（ご要望に応じてご説明可）",
      showMore: "詳細を見る",
      showLess: "閉じる",
    },
    skills: { title: "技術スキル" },
    certifications: {
      title: "認定資格",
      aws: {
        name: "AWS Cloud Practitioner",
        issuer: "HelloAI Academy",
        year: "2026",
        verify: "認証する",
      },
      sql: {
        name: "SQL Database Knowledge",
        issuer: "HelloAI Academy",
        year: "2026",
        verify: "認証する",
      },
    },
    footer: {
      title: "ご一緒できる機会をお待ちしております。",
      desc: "ウランバートルでの正社員、またはリモート契約案件を募集中。Bedel Tech — AIボイスシステムの創業者。",
      rights: "All rights reserved.",
      imprint: "プライバシーポリシー",
    },
    cv: "履歴書をダウンロード",
  },
};

type Lang = keyof typeof translations;
type T = (typeof translations)[Lang];

const LANGS: { code: Lang; label: string }[] = [
  { code: "mn", label: "MN" },
  { code: "en", label: "EN" },
  { code: "jp", label: "日本語" },
];

function isLang(v: unknown): v is Lang {
  return v === "mn" || v === "en" || v === "jp";
}

type Project = {
  id: string;
  featured?: boolean;
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
      featured: true,
      categories: ["ai", "web"],
      ...p.p0,
      liveLink: "https://bedel.mn",
      image: "/bedel-logo.png",
      tech: [
        { icon: Phone, label: "VoIP / SIP" },
        { icon: Mic, label: "Voice AI (STT/TTS)" },
        { icon: Brain, label: "OpenAI Function Calling" },
        { icon: CreditCard, label: "Payment Gateway" },
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
      accent: "from-emerald-400 to-teal-600",
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
      accent: "from-violet-400 to-fuchsia-600",
      tech: [
        { icon: Cpu, label: "Python" },
        { icon: Mic, label: "pyannote (PyTorch)" },
        { icon: AudioLines, label: "Chimege STT" },
        { icon: Brain, label: "Claude API" },
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

export default function Portfolio() {
  const [lang, setLangState] = useState<Lang>("mn");
  const t = translations[lang];
  const projects = getProjects(t);

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
    const initial = [fromUrl, saved].find(isLang) ?? detected;
    setLangState(initial);
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

  return (
    <div
      className={`min-h-screen font-sans selection:bg-cyan-500 transition-colors duration-500 dark bg-gradient-to-br from-slate-900 via-sky-950 to-gray-900 animate-gradient-xy text-gray-200 relative overflow-hidden`}
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob"></div>
        <ThreeBackground />
      </div>

      <div className="relative z-10">
        <header className="bg-white/70 dark:bg-black/50 border-b border-black/5 dark:border-white/10 sticky top-0 z-50 backdrop-blur-md transition-colors duration-300">
          <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
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

            <div className="flex items-center gap-2 sm:gap-4">
              <div
                role="group"
                aria-label="Language"
                className="flex items-center p-0.5 rounded-lg bg-white/5 border border-white/10"
              >
                <Globe size={14} className="mx-1.5 text-gray-400 hidden sm:block" />
                {LANGS.map(({ code, label }) => (
                  <button
                    key={code}
                    onClick={() => setLang(code)}
                    aria-pressed={lang === code}
                    className={`px-2.5 py-1 rounded-md text-xs font-bold transition-all ${
                      lang === code
                        ? "bg-white text-black shadow"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              <a
                href={
                  lang === "mn"
                    ? "/BayasgalanCV-MN.pdf"
                    : lang === "jp"
                      ? "/Bayasgalan.xlsx"
                      : "/BayasgalanCV.pdf"
                }
                className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition shadow-lg shadow-white/5"
                download
              >
                <Download size={16} />
                <span className="hidden sm:inline">{t.cv}</span>
              </a>
            </div>
          </div>
          <nav className="md:hidden flex justify-around border-t border-white/5 px-4 py-2 text-xs font-medium text-gray-300">
            {(
              [
                ["#about", t.nav.about],
                ["#projects", t.nav.projects],
                ["#skills", t.nav.stack],
                ["#contact", t.nav.contact],
              ] as const
            ).map(([href, label]) => (
              <a key={href} href={href} className="hover:text-white transition">
                {label}
              </a>
            ))}
          </nav>
        </header>

        <main>
          <section id="about" className="pt-20 pb-32 px-6 relative">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.12, delayChildren: 0.1 },
                },
              }}
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 text-gray-200 text-xs font-bold uppercase tracking-wider mb-6 border border-cyan-400/20 glow-cyan backdrop-blur-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-60"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                </span>
                {t.hero.openToWork}
              </motion.div>

              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6"
              >
                {t.hero.titlePrefix}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 animate-gradient-x inline-block">
                  {t.hero.titleHighlight}
                </span>{" "}
                {t.hero.titleSuffix}
              </motion.h1>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="text-lg text-gray-300 mb-10 leading-relaxed font-medium"
              >
                {t.hero.description}
              </motion.p>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="flex justify-center gap-4 flex-wrap"
              >
                <a
                  href="#contact"
                  className="group relative px-6 py-3 bg-white text-black rounded-lg font-semibold transition-all shadow-xl shadow-white/10 hover:shadow-cyan-400/30 hover:-translate-y-0.5 overflow-hidden"
                >
                  <span className="relative z-10">{t.hero.contact}</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-sky-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </a>
                <a
                  href="https://github.com/nomad1nk"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 bg-transparent text-white border border-white/20 rounded-lg font-semibold hover:bg-white/10 hover:border-cyan-400/40 hover:-translate-y-0.5 transition-all flex items-center gap-2"
                >
                  <Github
                    size={20}
                    className="group-hover:rotate-12 transition-transform"
                  />
                  {t.hero.github}
                </a>
              </motion.div>

              <motion.dl
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="mt-14 grid grid-cols-3 max-w-xl mx-auto divide-x divide-white/10 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm"
              >
                {[
                  { value: String(projects.length), label: t.hero.stats.projects },
                  {
                    value: String(projects.filter((p) => p.liveLink).length),
                    label: t.hero.stats.live,
                  },
                  { value: "MN · EN · JA", label: t.hero.stats.languages },
                ].map(({ value, label }) => (
                  <div key={label} className="px-3 py-4 flex flex-col-reverse gap-1">
                    <dt className="text-[11px] sm:text-xs text-gray-400 font-medium leading-tight">
                      {label}
                    </dt>
                    <dd className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {value}
                    </dd>
                  </div>
                ))}
              </motion.dl>
            </motion.div>

            <motion.a
              href="#projects"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute left-1/2 -translate-x-1/2 bottom-8 text-gray-400 hover:text-cyan-400 transition-colors animate-bounce-slow"
              aria-label="Scroll to projects"
            >
              <ChevronDown size={28} />
            </motion.a>
          </section>

          <section
            id="projects"
            className="py-20 bg-white/30 dark:bg-black/20 backdrop-blur-sm border-y border-black/5 dark:border-white/5 overflow-hidden"
          >
            <div className="w-full">
              <div className="max-w-5xl mx-auto px-6 mb-8">
                <h2 className="text-4xl font-bold text-white tracking-tight">
                  {t.projects.title}
                </h2>
              </div>

              <ProjectBentoGrid
                t={t}
                TechBadge={TechBadge}
                CheckIcon={CheckIcon}
                projects={projects}
              />
            </div>
          </section>

          <section id="skills" className="py-20 px-6">
            <div className="max-w-5xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold text-white mb-12 text-center tracking-tight"
              >
                {t.skills.title}
              </motion.h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <SkillCard
                  icon={Layout}
                  accent="from-cyan-400 to-sky-500"
                  title="Frontend Development"
                  skills={[
                    "Next.js 14 (App Router) / React",
                    "TypeScript / JavaScript (ES6+)",
                    "Tailwind CSS v4 / Styled Components",
                    "Framer Motion / Three.js / WebGL",
                    "Responsive & Accessible UI",
                  ]}
                  index={0}
                />
                <SkillCard
                  icon={Server}
                  accent="from-emerald-400 to-teal-500"
                  title="Backend Engineering"
                  skills={[
                    "NestJS / Node.js / Express",
                    "Java 21 / Spring Boot (JPA, Flyway)",
                    "Python (FastAPI / Flask)",
                    "Ruby on Rails",
                    "REST / GraphQL / WebSocket",
                    "Microservices / gRPC / BullMQ",
                  ]}
                  index={1}
                />
                <SkillCard
                  icon={Database}
                  accent="from-violet-400 to-purple-500"
                  title="Database & Storage"
                  skills={[
                    "PostgreSQL / MySQL",
                    "MongoDB / Redis",
                    "SQLite / Supabase",
                    "Prisma / TypeORM / SQLAlchemy",
                    "Schema Design & Optimization",
                  ]}
                  index={2}
                />
                <SkillCard
                  icon={Cloud}
                  accent="from-amber-400 to-orange-500"
                  title="Cloud & DevOps"
                  skills={[
                    "AWS Compute & Storage: EC2, Lambda, S3, EBS",
                    "AWS Data & Networking: RDS, DynamoDB, VPC, CloudFront",
                    "AWS Security & Ops: IAM, CloudWatch, Pricing/Billing",
                    "Docker / Docker Compose / Linux / Nginx",
                    "CI/CD (GitHub Actions) / Vercel / Netlify",
                  ]}
                  index={3}
                />
                <SkillCard
                  icon={Sparkles}
                  accent="from-pink-400 to-rose-500"
                  title="AI & Voice Systems"
                  skills={[
                    "Mongolian Voice AI: STT/TTS, Diarization",
                    "VoIP / SIP / RTP / VAD",
                    "LLMs: Claude, OpenAI (GPT)",
                    "Function Calling / RAG",
                    "Computer Vision (OpenCV, Mediapipe)",
                  ]}
                  index={4}
                />
                <SkillCard
                  icon={Wrench}
                  accent="from-blue-400 to-indigo-500"
                  title="Integrations & Tooling"
                  skills={[
                    "Stripe / PayPal Integration",
                    "Payment & Messaging APIs",
                    "Authentication (JWT, OAuth)",
                    "Testing (JUnit, Testcontainers, Jest, Pytest)",
                    "Git / GitHub Workflow",
                  ]}
                  index={5}
                />
              </div>
            </div>
          </section>

          <section id="certifications" className="py-16 px-6">
            <div className="max-w-3xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="text-xl font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider border-b border-black/10 dark:border-white/20 pb-2 inline-block mb-10"
              >
                {t.certifications.title}
              </motion.h2>

              <div className="flex flex-col gap-4">
                <motion.a
                  href="https://helloai.ink/verify/HBC-AWS-MPEH2K5U"
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5 }}
                  className="group relative flex items-center gap-5 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-400/30 transition-all hover:-translate-y-1 hover:shadow-2xl overflow-hidden"
                >
                  <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500"></div>

                  <div className="relative shrink-0 p-3 rounded-xl bg-gradient-to-br from-orange-400 to-amber-500 shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Award size={26} className="text-white" strokeWidth={2.5} />
                  </div>

                  <div className="relative flex-1 min-w-0">
                    <h3 className="font-bold text-white text-base sm:text-lg truncate">
                      {t.certifications.aws.name}
                    </h3>
                    <p className="text-sm text-gray-400 font-medium">
                      {t.certifications.aws.issuer} · {t.certifications.aws.year}
                    </p>
                  </div>

                  <div className="relative shrink-0 flex items-center gap-1.5 text-xs sm:text-sm text-cyan-400 font-semibold opacity-80 group-hover:opacity-100 transition-opacity">
                    <span className="hidden sm:inline">
                      {t.certifications.aws.verify}
                    </span>
                    <ExternalLink
                      size={14}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </div>
                </motion.a>

                <motion.a
                  href="https://helloai.ink/verify/HBC-SQL-MQHKPJIL"
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="group relative flex items-center gap-5 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-400/30 transition-all hover:-translate-y-1 hover:shadow-2xl overflow-hidden"
                >
                  <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br from-sky-400 to-blue-500 opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500"></div>

                  <div className="relative shrink-0 p-3 rounded-xl bg-gradient-to-br from-sky-400 to-blue-500 shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Database size={26} className="text-white" strokeWidth={2.5} />
                  </div>

                  <div className="relative flex-1 min-w-0">
                    <h3 className="font-bold text-white text-base sm:text-lg truncate">
                      {t.certifications.sql.name}
                    </h3>
                    <p className="text-sm text-gray-400 font-medium">
                      {t.certifications.sql.issuer} · {t.certifications.sql.year}
                    </p>
                  </div>

                  <div className="relative shrink-0 flex items-center gap-1.5 text-xs sm:text-sm text-cyan-400 font-semibold opacity-80 group-hover:opacity-100 transition-opacity">
                    <span className="hidden sm:inline">
                      {t.certifications.sql.verify}
                    </span>
                    <ExternalLink
                      size={14}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </div>
                </motion.a>
              </div>
            </div>
          </section>

          <footer
            id="contact"
            className="relative bg-black text-gray-400 py-24 px-6 border-t border-white/10 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent pointer-events-none"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"></div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative max-w-3xl mx-auto text-center space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                {t.footer.title}
              </h2>
              <p className="text-lg text-gray-300 font-medium max-w-2xl mx-auto leading-relaxed">
                {t.footer.desc}
              </p>

              <a
                href="mailto:nomad2nk@gmail.com"
                className="group inline-flex items-center gap-3 px-6 py-3.5 bg-white/5 hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-400/40 rounded-full text-white font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <Mail
                  size={18}
                  className="text-cyan-400 group-hover:scale-110 transition-transform"
                />
                nomad2nk@gmail.com
              </a>

              <div className="flex flex-wrap justify-center gap-3 pt-4">
                {[
                  {
                    href: "https://www.facebook.com/baysgln.battulga.7/",
                    icon: Facebook,
                    label: "Facebook",
                  },
                  {
                    href: "https://www.instagram.com/baysakun/",
                    icon: Instagram,
                    label: "Instagram",
                  },
                  {
                    href: "https://github.com/nomad1nk",
                    icon: Github,
                    label: "GitHub",
                  },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/30 rounded-full text-sm text-gray-300 hover:text-white transition-all hover:-translate-y-0.5"
                  >
                    <Icon
                      size={16}
                      className="group-hover:text-cyan-400 transition-colors"
                    />
                    {label}
                  </a>
                ))}
              </div>

              <div className="border-t border-white/10 pt-8 mt-12 text-sm text-gray-500 flex flex-col sm:flex-row justify-between items-center gap-3">
                <p>
                  &copy; {new Date().getFullYear()} Nomad. {t.footer.rights}
                </p>
                <p>{t.footer.imprint}</p>
              </div>
            </motion.div>
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

function SkillCard({
  title,
  skills,
  icon: Icon,
  accent,
  index,
}: {
  title: string;
  skills: string[];
  icon: any;
  accent: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative bg-white/5 p-6 rounded-2xl border border-white/10 shadow-sm hover:shadow-2xl transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 overflow-hidden"
    >
      <div
        className={`absolute -top-16 -right-16 w-32 h-32 rounded-full bg-gradient-to-br ${accent} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`}
      ></div>

      <div className="relative flex items-center gap-3 mb-5 pb-3 border-b border-white/10">
        <div
          className={`p-2 rounded-lg bg-gradient-to-br ${accent} bg-opacity-10 shadow-md group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon size={18} className="text-white" strokeWidth={2.5} />
        </div>
        <h3 className="font-bold text-white text-base">{title}</h3>
      </div>

      <ul className="space-y-2.5 relative">
        {skills.map((skill) => (
          <li
            key={skill}
            className="text-sm text-gray-300 flex items-start gap-2.5 font-medium group-hover:text-gray-100 transition-colors"
          >
            <div
              className={`w-1.5 h-1.5 mt-1.5 shrink-0 rounded-full bg-gradient-to-br ${accent}`}
            ></div>
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </motion.div>
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
