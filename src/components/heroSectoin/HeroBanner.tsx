import { ArrowDown, Download, Code2 } from "lucide-react";
import MyImage from "@/assets/nafisdev.jpeg";
import Image from "next/image";
import Link from "next/link";

const stats = [
    { value: "Full Stack", label: "Web Development" },
    { value: "REST API", label: "Backend Development" },
    { value: "Always", label: "Learning & Building" },
];

export default function HeroBanner() {
    return (
        <section
            id="home"
            className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 overflow-hidden px-5 pb-20 pt-24 text-white sm:px-8 md:gap-16 md:pb-28 md:pt-28 lg:grid-cols-12 lg:gap-12 lg:px-16"
        >
            {/* Subtle dark-theme glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/4 top-20 -z-10 h-[26rem] w-[26rem] rounded-full bg-[#d49a68]/[0.07] blur-[120px]"
            />

            {/* Left column */}
            <div className="relative z-10 flex flex-col gap-7 lg:col-span-7">
                {/* Availability status */}
                <div className="inline-flex self-start items-center gap-2 rounded-full border border-[#d49a68]/25 bg-[#111111]/90 px-4 py-2 backdrop-blur-md">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-[#d49a68]" />
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#a1a1aa]">
                        Open to Opportunities
                    </span>
                </div>

                {/* Name and title */}
                <div>
                    <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#d49a68]">
                        Hello, I&apos;m
                    </p>

                    <h1 className="font-headline-lg text-5xl leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
                        Nafis Mahamud{" "}
                        <span className="text-[#d49a68]">Shahin</span>
                    </h1>

                    <div className="mt-4 flex items-center gap-3">
                        <h2 className="text-lg font-medium tracking-wide text-[#d49a68] sm:text-xl">
                            Full-Stack Web Developer
                        </h2>
                    </div>
                </div>

                {/* Description */}
                <p className="max-w-xl text-base leading-8 text-[#a1a1aa] sm:text-lg">
                    I build modern web applications, scalable REST APIs, and reliable
                    backend systems using React, Next.js, Node.js, Express.js, Python,
                    and Django. I focus on clean code, performance, and solving real-world
                    problems through technology.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-1">
                    <Link
                        href="#projects"
                        className="group inline-flex items-center gap-2 rounded-full bg-[#d49a68] px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#050505] shadow-[0_4px_24px_rgba(212,154,104,0.18)] transition duration-300 hover:scale-[1.02] hover:bg-[#e5b68e] hover:shadow-[0_4px_32px_rgba(212,154,104,0.28)] active:scale-[0.98]"
                    >
                        View My Projects
                        <ArrowDown
                            size={18}
                            aria-hidden="true"
                            className="transition-transform duration-300 group-hover:translate-y-1"
                        />
                    </Link>

                    <a
                        href="/resume.pdf"
                        download
                        className="group inline-flex items-center gap-2.5 rounded-full border border-white/[0.14] bg-[#111111] px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition duration-300 hover:border-[#d49a68]/50 hover:bg-[#191919]"
                    >
                        <Download
                            size={18}
                            aria-hidden="true"
                            className="text-[#d49a68] transition-transform duration-300 group-hover:-translate-y-0.5"
                        />
                        Download Resume
                    </a>
                </div>

                {/* Stats */}
                <div className="mt-2 grid max-w-xl grid-cols-3 gap-3 rounded-xl border border-white/[0.09] bg-[#0a0a0a]/90 p-4 backdrop-blur-md sm:gap-4 sm:p-6">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.label}
                            className={
                                index > 0
                                    ? "border-l border-white/[0.10] pl-3 sm:pl-4"
                                    : ""
                            }
                        >
                            <p className="text-xl tracking-tight text-[#d49a68] sm:text-3xl">
                                {stat.value}
                            </p>
                            <p className="mt-1 text-[10px] font-semibold uppercase leading-4 tracking-wider text-[#a1a1aa] sm:text-xs">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right column */}
            <div className="relative mt-2 flex w-full items-center justify-center lg:col-span-5 lg:mt-0">
                {/* Decorative orbit */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute flex h-[min(88vw,540px)] w-[min(88vw,540px)] items-center justify-center"
                >
                    <div className="absolute inset-0 rounded-full bg-[#d49a68]/[0.08] blur-[100px]" />

                    <svg
                        viewBox="0 0 500 500"
                        fill="none"
                        aria-hidden="true"
                        className="absolute inset-0 h-full w-full animate-[spin_120s_linear_infinite] opacity-40 motion-reduce:animate-none"
                    >
                        <circle cx="250" cy="250" r="238" stroke="#d49a68" strokeDasharray="4 8" />
                        <circle cx="250" cy="250" r="205" stroke="#d49a68" strokeDasharray="2 14" />
                        <circle cx="250" cy="250" r="165" stroke="#d49a68" strokeDasharray="12 12" />
                        <line x1="250" y1="8" x2="250" y2="492" stroke="#d49a68" strokeDasharray="4 8" />
                        <line x1="8" y1="250" x2="492" y2="250" stroke="#d49a68" strokeDasharray="4 8" />
                        <circle cx="250" cy="10" r="4" fill="#d49a68" />
                        <circle cx="490" cy="250" r="4" fill="#d49a68" />
                        <circle cx="250" cy="490" r="4" fill="#d49a68" />
                        <circle cx="10" cy="250" r="4" fill="#d49a68" />
                    </svg>

                    <div className="absolute h-[78%] w-[78%] rotate-45 rounded-[28%] border border-dashed border-[#d49a68]/30" />
                </div>

                {/* Portrait frame */}
                <div className="group relative z-10 aspect-[4/5] w-full rounded-2xl border border-white/[0.12] bg-gradient-to-b from-[#191919] via-[#0d0d0d] to-[#050505] p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.65)]">
                    <div className="relative h-full w-full overflow-hidden rounded-xl bg-[#111111]">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-6xl text-[#d49a68]/50">NS</span>
                        </div>

                        <Image
                            src={MyImage}
                            alt="Nafis Mahamud Shahin"
                            priority
                            sizes="(max-width: 1024px) 90vw, 42vw"
                            className="relative h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                        />

                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-70" />
                    </div>

                    {/* Top badge */}
                    <div className="absolute -right-3 -top-3 z-20 flex items-center gap-2 rounded-full border border-[#d49a68]/25 bg-[#111111]/95 px-3.5 py-2 shadow-lg backdrop-blur-md">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#d49a68]" />
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-[#f5f5f5]">
                            Learn. Build. Improve.
                        </span>
                    </div>

                    {/* Bottom badge */}
                    <div className="absolute -bottom-4 -left-4 z-20 flex items-center gap-3 rounded-xl border border-white/[0.12] bg-[#111111]/95 px-4 py-2.5 shadow-xl backdrop-blur-md">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#d49a68] text-[#050505]">
                            <Code2 size={18} aria-hidden="true" />
                        </div>

                        <div>
                            <p className="text-[10px] font-semibold uppercase tracking-wider text-[#f5f5f5]">
                                Full-Stack Developer
                            </p>
                            <p className="mt-0.5 text-[11px] text-[#a1a1aa]">
                                React · Next.js · Django
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
