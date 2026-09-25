"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { Bot, Check, Phone, RotateCcw } from "lucide-react";

// The call itself is always in Mongolian — that is the point of the demo.
// Other languages get a small translation under each line.
const LINES: { who: "ai" | "caller"; text: string }[] = [
    { who: "ai", text: "Сайн байна уу, Нарлаг кафе байна. Юугаар туслах вэ?" },
    { who: "caller", text: "Маргааш өдөр 12 цагт дөрвөн хүний ширээ захиалах гэсэн юм." },
    { who: "ai", text: "Маргааш 12:00 цагт дөрвөн хүний ширээ сул байна. Хэний нэр дээр захиалах вэ?" },
    { who: "caller", text: "Болд гэдэг нэр дээр." },
    { who: "ai", text: "Баярлалаа, Болд оо. Захиалгыг тань баталгаажууллаа. Мессежээр сануулга илгээнэ." },
];

export type CallCopy = {
    label: string;
    business: string;
    status: string;
    ended: string;
    replay: string;
    doneTitle: string;
    doneDetail: string;
    translations: string[];
};

function formatTime(s: number) {
    const m = Math.floor(s / 60);
    return `${String(m).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
}

export default function CallDemo({ copy }: { copy: CallCopy }) {
    const reduce = useReducedMotion();
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    const [shown, setShown] = useState(0);
    const [typing, setTyping] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const [run, setRun] = useState(0);

    const finished = shown >= LINES.length;

    useEffect(() => {
        if (!inView) return;
        if (reduce) {
            setShown(LINES.length);
            setSeconds(38);
            return;
        }
        setShown(0);
        setSeconds(0);
        const timers: ReturnType<typeof setTimeout>[] = [];
        let at = 500;
        LINES.forEach((line, i) => {
            if (line.who === "ai") {
                timers.push(setTimeout(() => setTyping(true), at));
                at += 1100;
            }
            timers.push(
                setTimeout(() => {
                    setTyping(false);
                    setShown(i + 1);
                }, at),
            );
            at += line.who === "ai" ? 1500 : 1300;
        });
        return () => timers.forEach(clearTimeout);
    }, [inView, reduce, run]);

    useEffect(() => {
        if (!inView || reduce || finished) return;
        const id = setInterval(() => setSeconds((s) => s + 1), 1000);
        return () => clearInterval(id);
    }, [inView, reduce, finished, run]);

    return (
        <figure ref={ref} className="w-full max-w-md mx-auto lg:mx-0">
            <div className="rounded-[2rem] bg-ink p-2 shadow-[0_30px_80px_-30px_rgba(14,26,43,0.55)]">
                <div className="rounded-[1.6rem] bg-white overflow-hidden">
                    <div className="flex items-center gap-3 px-5 py-4 border-b border-line">
                        <div className="relative shrink-0">
                            {!finished && (
                                <span className="pulse-ring absolute inset-0 rounded-full bg-live/40" />
                            )}
                            <div
                                className={`relative w-10 h-10 rounded-full flex items-center justify-center ${finished ? "bg-line text-slate" : "bg-live text-white"}`}
                            >
                                <Phone size={18} />
                            </div>
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="font-semibold text-ink leading-tight">{copy.business}</p>
                            <p className={`text-sm ${finished ? "text-slate" : "text-live"}`}>
                                {finished ? copy.ended : copy.status}
                            </p>
                        </div>
                        <span className="text-sm tabular-nums text-slate">{formatTime(seconds)}</span>
                    </div>

                    <div className="px-4 py-5 space-y-3 min-h-[25rem] bg-paper/60" aria-live="polite">
                        {LINES.slice(0, shown).map((line, i) => (
                                <div
                                    key={`${run}-${i}`}
                                    className={`bubble-in flex gap-2 ${line.who === "caller" ? "justify-end" : ""}`}
                                >
                                    {line.who === "ai" && (
                                        <div className="shrink-0 w-7 h-7 mt-0.5 rounded-full bg-khukh text-white flex items-center justify-center">
                                            <Bot size={15} />
                                        </div>
                                    )}
                                    <div
                                        className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-[0.9rem] leading-snug ${
                                            line.who === "ai"
                                                ? "bg-white border border-line text-ink rounded-tl-md"
                                                : "bg-khukh text-white rounded-tr-md"
                                        }`}
                                    >
                                        <p>{line.text}</p>
                                        {copy.translations[i] && (
                                            <p
                                                className={`mt-1 text-xs leading-snug ${line.who === "ai" ? "text-slate" : "text-white/75"}`}
                                            >
                                                {copy.translations[i]}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}

                        {typing && (
                            <div className="flex gap-2">
                                <div className="shrink-0 w-7 h-7 rounded-full bg-khukh text-white flex items-center justify-center">
                                    <Bot size={15} />
                                </div>
                                <div className="rounded-2xl rounded-tl-md bg-white border border-line px-4 py-3 flex gap-1">
                                    <span className="typing-dot w-1.5 h-1.5 rounded-full bg-slate" />
                                    <span className="typing-dot w-1.5 h-1.5 rounded-full bg-slate" />
                                    <span className="typing-dot w-1.5 h-1.5 rounded-full bg-slate" />
                                </div>
                            </div>
                        )}

                        {finished && (
                            <div
                                className="bubble-in flex items-start gap-3 rounded-xl border border-live/30 bg-live/[0.07] px-4 py-3"
                            >
                                <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-live text-white flex items-center justify-center">
                                    <Check size={13} strokeWidth={3} />
                                </span>
                                <div>
                                    <p className="text-sm font-semibold text-ink">{copy.doneTitle}</p>
                                    <p className="text-sm text-slate">{copy.doneDetail}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <figcaption className="mt-4 flex items-start justify-between gap-4 px-2 text-sm text-slate">
                <span className="text-pretty">{copy.label}</span>
                {finished && !reduce && (
                    <button
                        onClick={() => setRun((r) => r + 1)}
                        className="shrink-0 inline-flex items-center gap-1.5 font-medium text-khukh hover:text-khukh-deep rounded"
                    >
                        <RotateCcw size={14} />
                        {copy.replay}
                    </button>
                )}
            </figcaption>
        </figure>
    );
}
