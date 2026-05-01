import type { Metadata } from "next";
import { Fredoka, Bangers } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({ subsets: ["latin"], variable: '--font-fredoka' });
const bangers = Bangers({ weight: "400", subsets: ["latin"], variable: '--font-bangers' });

export const metadata: Metadata = {
    title: "Bayasgalan Battulga — Full-Stack Developer & Bedel AI Founder",
    description:
        "Full-Stack хөгжүүлэгч, Bedel AI Box (ухаалаг хүлээн авагч)-ын үүсгэн байгуулагч. Next.js, Rails, Python, OpenAI, Chimege, QPay, Yeastar SIP/RTP, Docker.",
    keywords: [
        "Full-Stack Developer",
        "Mongolia",
        "Улаанбаатар",
        "Bedel AI",
        "AI Receptionist",
        "Chimege",
        "QPay",
        "Next.js",
        "Rails",
        "Python",
    ],
    openGraph: {
        title: "Bayasgalan Battulga — Full-Stack Developer & Bedel AI Founder",
        description:
            "Bedel AI Box — Монголын анхны худалдаалсан AI хүлээн авагч. Full-Stack, AI интеграц, бодит бизнесийн шийдлүүд.",
        locale: "mn_MN",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="mn">
            <body className={`${fredoka.variable} ${bangers.variable} font-sans`}>{children}</body>
        </html>
    );
}
