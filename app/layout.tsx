import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin", "cyrillic"],
    variable: "--font-inter",
    display: "swap",
});

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
            <body className={`${inter.variable} font-sans`}>{children}</body>
        </html>
    );
}
