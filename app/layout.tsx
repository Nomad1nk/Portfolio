import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin", "cyrillic"],
    variable: "--font-inter",
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://www.nomad1nk.org"),
    title: "Bayasgalan Battulga — Full-Stack Developer & AI Engineer",
    description:
        "Full-Stack Developer & AI Engineer in Ulaanbaatar. Builder of Bedel AI Box, a Mongolian-language AI phone receptionist, plus Haiguul, BedelERP and more. Next.js, Python, Java/Spring, Claude, Docker. Available in English, Mongolian and Japanese.",
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
            "Production voice AI for Mongolian businesses, full-stack web apps and a double-entry accounting core. Portfolio in English, Mongolian and Japanese.",
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
            <body className={`${inter.variable} font-sans`}>{children}</body>
        </html>
    );
}
