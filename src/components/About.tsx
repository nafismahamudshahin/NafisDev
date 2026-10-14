import Image from "next/image";
import Link from "next/link";
import { ArrowRight, DraftingCompass } from "lucide-react";
import MyImage from "@/assets/nafisdev.jpeg";

const skills = [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express.js",
    "Python",
    "Django",
    "PostgreSQL",
    "Tailwind CSS",
];

export default function About() {
    return (
        <section
            id="about"
            className="relative w-full overflow-hidden bg-background py-20 text-on-surface sm:py-16 md:py-20"
        >
            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:px-16">
                {/* Left side */}
                <div className="relative flex w-full items-center justify-center lg:col-span-5">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute flex h-[min(90vw,520px)] w-[min(90vw,520px)] items-center justify-center"
                    >
                        <div className="absolute inset-0 rounded-full bg-primary-container/15 blur-[100px]" />

                        <svg
                            viewBox="0 0 480 480"
                            fill="none"
                            aria-hidden="true"
                            className="absolute inset-0 h-full w-full animate-[spin_90s_linear_infinite] opacity-60 motion-reduce:animate-none"
                        >
                            <circle cx="240" cy="240" r="230" stroke="#c58b62" strokeDasharray="3 9" />
                            <circle cx="240" cy="240" r="190" stroke="#9b6039" strokeDasharray="8 12" />
                            <circle cx="240" cy="240" r="145" stroke="#84532f" />
                            <circle cx="240" cy="240" r="105" stroke="#c58b62" strokeDasharray="2 6" />
                            <circle cx="374" cy="106" r="4.5" fill="#9b6039" />
                            <circle cx="106" cy="374" r="3.5" fill="#c58b62" />
                            <circle cx="374" cy="374" r="3" fill="#9b6039" />
                            <circle cx="106" cy="106" r="3" fill="#9b6039" />
                        </svg>

                        <div className="absolute h-[78%] w-[78%] rotate-45 rounded-[28%] border border-dashed border-secondary/30" />
                    </div>

                    {/* Image card */}
                    <div className="group relative z-10 aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-2xl border border-outline/30 bg-surface p-2 shadow-2xl">
                        <div className="relative h-full w-full overflow-hidden rounded-xl bg-surface-container">
                            <div className="absolute inset-0 flex items-center justify-center text-6xl font-semibold text-primary/40">
                                N
                            </div>

                            <Image
                                src={MyImage}
                                alt="Nafis Mahamud Shahin"
                                fill
                                priority
                                sizes="(max-width: 1024px) 90vw, 42vw"
                                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                            />

                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface-container-lowest/70 via-transparent to-transparent" />
                        </div>

                        <div className="absolute bottom-6 left-6 right-6 z-20 flex items-center justify-between rounded-xl border border-secondary/30 bg-surface/95 p-4 shadow-lg backdrop-blur-md">
                            <div>
                                <p className="font-headline-sm text-2xl leading-tight text-primary">
                                    Developer
                                </p>
                                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-on-surface-variant">
                                    Always Learning
                                </p>
                            </div>

                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary">
                                <DraftingCompass size={20} aria-hidden="true" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* About content */}
                <div className="flex min-w-0 flex-col gap-7 lg:col-span-7">
                    <div className="flex flex-col gap-2">
                        <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                            About Me
                        </span>

                        <h2 className="font-headline-lg text-3xl leading-tight text-on-surface sm:text-5xl">
                            Building Modern, Responsive &amp; User-Friendly Web Applications
                        </h2>
                    </div>

                    <div className="flex flex-col gap-4 text-base leading-7 text-on-surface-variant">
                        <p>
                            I&apos;m Nafis Mahamud Shahin, a web developer focused on building
                            modern, responsive, and user-friendly web applications.
                        </p>

                        <p>
                            I work with React, Next.js, TypeScript, Node.js, Express.js, Python,
                            and Django. I enjoy creating clean interfaces, reliable backend
                            systems, and applications connected to databases and APIs.
                        </p>

                        <p>
                            I&apos;m continuously improving my problem-solving and development
                            skills through practical projects. My goal is to build useful digital
                            products with clean code, thoughtful user experiences, and maintainable
                            architecture.
                        </p>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-col gap-3 pt-1">
                        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-on-surface">
                            Core Skills &amp; Technologies
                        </span>

                        <div className="flex flex-wrap gap-2.5">
                            {skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="cursor-default rounded-full border border-outline/35 bg-surface-container-low px-3.5 py-2 text-xs font-medium text-on-surface transition-colors duration-300 hover:border-primary hover:bg-primary hover:text-on-primary"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Projects link */}
                    <div className="pt-1">
                        <Link
                            href="#projects"
                            className="group inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary"
                        >
                            <span className="relative pb-1">
                                Explore My Projects
                                <span className="absolute bottom-0 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                            </span>

                            <ArrowRight
                                size={18}
                                aria-hidden="true"
                                className="transition-transform duration-300 group-hover:translate-x-2"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
