
import Image from "next/image";
import {
    ArrowDown,
    ArrowUpRight,
    Code2,
    Sparkles,
} from "lucide-react";
import { projects } from "@/data/projects";

export default function Projects() {
    return (
        <section
            id="projects"
            aria-labelledby="projects-heading"
            className="relative scroll-mt-20 overflow-hidden bg-transparent py-20 text-on-surface sm:py-24 lg:py-28"
        >
            {/* Background glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-48 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/[0.07] blur-[120px]"
            />

            <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-16">
                {/* Section Heading */}
                <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
                    <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.07] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary sm:text-xs">
                        <Sparkles size={14} aria-hidden="true" />
                        Selected Work
                    </span>

                    <h2
                        id="projects-heading"
                        className="font-headline-lg text-3xl tracking-tight text-on-surface sm:text-4xl md:text-5xl lg:text-6xl"
                    >
                        Things I&apos;ve Built
                        <span className="text-primary">.</span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-on-surface-variant sm:text-base">
                        A collection of ideas turned into real-world
                        projects through code, creativity, and continuous
                        learning.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
                    {projects.map((project) => {
                        const isFeatured = project.number === "02";

                        return (
                            <article
                                key={project.name}
                                className={`group relative flex min-w-0 flex-col overflow-hidden rounded-xl border p-3.5 transition-all duration-500 hover:-translate-y-1.5 sm:p-4 motion-reduce:transform-none motion-reduce:transition-none ${isFeatured
                                        ? "border-primary/40 bg-surface-container-high shadow-[0_0_35px_rgba(217,145,91,0.07)] hover:shadow-[0_12px_45px_rgba(217,145,91,0.13)]"
                                        : "border-outline-variant bg-surface-container shadow-[0_14px_35px_rgba(0,0,0,0.22)] hover:border-primary/50 hover:bg-surface-container-high hover:shadow-[0_20px_48px_rgba(0,0,0,0.34)]"
                                    }`}
                            >
                                {/* Featured Badge */}
                                {isFeatured && (
                                    <span className="absolute right-6 top-6 z-10 inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-background/90 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-primary backdrop-blur-sm">
                                        <Sparkles
                                            size={11}
                                            aria-hidden="true"
                                        />
                                        Featured
                                    </span>
                                )}

                                {/* Browser Preview */}
                                <div className="overflow-hidden rounded-lg border border-outline-variant bg-surface shadow-inner">
                                    <div className="flex h-8 items-center gap-1.5 border-b border-outline-variant bg-background px-3">
                                        <span
                                            aria-hidden="true"
                                            className="h-1.5 w-1.5 rounded-full bg-[#c9785f]"
                                        />
                                        <span
                                            aria-hidden="true"
                                            className="h-1.5 w-1.5 rounded-full bg-[#c69a5a]"
                                        />
                                        <span
                                            aria-hidden="true"
                                            className="h-1.5 w-1.5 rounded-full bg-[#78916b]"
                                        />

                                        <span className="ml-2 min-w-0 flex-1 truncate rounded-sm bg-surface-container px-2 py-1 text-[8px] tracking-wide text-on-surface-variant">
                                            {project.previewLabel}
                                        </span>
                                    </div>

                                    {/* Project Image */}
                                    <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                                        <Image
                                            src={project.image}
                                            alt={project.imageAlt}
                                            fill
                                            sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 33vw"
                                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none"
                                        />

                                        <div
                                            aria-hidden="true"
                                            className="absolute inset-0 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/[0.04]"
                                        />
                                    </div>
                                </div>

                                {/* Project Details */}
                                <div className="flex flex-1 flex-col px-1 pb-1 pt-5 sm:pt-6">
                                    <div className="mb-3 flex items-center justify-between gap-3">
                                        <span className="font-headline-sm text-sm text-primary">
                                            {project.number}
                                        </span>

                                        <span className="truncate text-right text-[9px] font-semibold uppercase tracking-[0.14em] text-on-surface-variant sm:text-[10px]">
                                            {project.category}
                                        </span>
                                    </div>

                                    <h3 className="font-headline-lg text-2xl tracking-tight text-on-surface transition-colors duration-300 group-hover:text-primary">
                                        {project.name}
                                    </h3>

                                    <p className="mt-2 min-h-[4.5rem] text-[13px] leading-6 text-on-surface-variant">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <ul
                                        aria-label={`${project.name} technologies`}
                                        className="mt-5 flex flex-wrap gap-2"
                                    >
                                        {project.technologies.map(
                                            (technology) => (
                                                <li
                                                    key={technology}
                                                    className="rounded-full border border-outline-variant bg-primary/[0.08] px-2.5 py-1 text-[10px] font-medium text-primary transition-colors group-hover:border-primary/25"
                                                >
                                                    {technology}
                                                </li>
                                            )
                                        )}
                                    </ul>

                                    {/* Project Actions */}
                                    <div className="mt-auto flex flex-wrap gap-2 pt-5">
                                        {project.demoUrl && (
                                            <a
                                                href={project.demoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`View ${project.name} live demo`}
                                                className="inline-flex min-h-10 flex-1 items-center justify-center gap-2 rounded-md bg-primary px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#050505] transition-colors hover:bg-[#e5b68e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                            >
                                                Live Demo
                                                <ArrowUpRight
                                                    size={14}
                                                    aria-hidden="true"
                                                />
                                            </a>
                                        )}

                                        <a
                                            href={project.sourceUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`View ${project.name} source code`}
                                            className="inline-flex min-h-10 flex-1 items-center justify-center gap-2 rounded-md border border-outline-variant px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-on-surface transition-colors hover:border-primary/70 hover:bg-primary/[0.08] hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                        >
                                            <Code2
                                                size={14}
                                                aria-hidden="true"
                                            />
                                            Source Code
                                        </a>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>

                {/* GitHub CTA */}
                <div className="mt-10 flex justify-center sm:mt-14">
                    <a
                        href="https://github.com/nafismahamudshahin?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-outline-variant px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-primary transition-all hover:border-primary hover:bg-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                        Explore More on GitHub
                        <ArrowDown
                            size={15}
                            aria-hidden="true"
                            className="-rotate-90 transition-transform group-hover:translate-x-1"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}
