import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";

const onest = Onest({
    subsets: ["latin", "cyrillic"],
    variable: "--font-onest",
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://www.nomad1nk.org"),
    title: "Bayasgalan Battulga — Full-Stack Developer & AI Engineer",
    description:
        "I build AI phone receptionists, websites and business systems for companies in Mongolia and abroad — from first idea to launch. Maker of Bedel AI Box. Working in Mongolian, English and Japanese.",
    keywords: [
        "Full-Stack Developer",
        "AI Engineer",
        "Mongolia",
        "Ulaanbaatar",
        "Улаанбаатар",
        "Bedel AI",
        "AI Receptionist",
        "Mongolian Voice AI",
        "Next.js",
        "Python",
        "Java",
        "Spring Boot",
    ],
    alternates: {
        canonical: "/",
        languages: {
            en: "/?lang=en",
            mn: "/?lang=mn",
            ja: "/?lang=jp",
        },
    },
    openGraph: {
        title: "Bayasgalan Battulga — Full-Stack Developer & AI Engineer",
        description:
            "AI phone receptionists, websites and business systems — built end to end by one developer in Ulaanbaatar.",
        url: "https://www.nomad1nk.org",
        locale: "en_US",
        alternateLocale: ["mn_MN", "ja_JP"],
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
            <body className={`${onest.variable} font-sans`}>{children}</body>
        </html>
    );
}
