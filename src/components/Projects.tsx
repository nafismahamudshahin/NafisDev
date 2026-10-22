import Image from "next/image";
import { ArrowDown, ArrowUpRight, Code2 } from "lucide-react";
import { projects } from "@/data/projects";

export default function Projects() {
    return (
        <section
            id="projects"
            aria-labelledby="projects-heading"
            className="relative scroll-mt-20 overflow-hidden bg-transparent py-20 text-on-surface sm:py-24"
        >
            {/* <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-primary/[0.06] blur-[120px]"
            /> */}

            <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-16">
                <div className="mb-9 flex flex-col gap-5 border-b border-outline-variant pb-7 sm:mb-11 sm:pb-8 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-primary sm:text-xs">
                            A closer look at what I build
                        </p>
                        <h2
                            id="projects-heading"
                            className="font-headline-lg text-4xl leading-tight text-on-surface sm:text-5xl"
                        >
                            My Work <span className="text-primary">in Action</span>
                        </h2>
                    </div>
                    <p className="max-w-md text-sm leading-6 text-on-surface-variant sm:text-base">
                        From everyday tools to full-stack applications, these projects turn
                        practical ideas into working products.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
                    {projects.map((project) => (
                        <article
                            key={project.name}
                            className="group flex min-w-0 flex-col rounded-xl border border-outline-variant bg-surface-container p-3.5 shadow-[0_14px_35px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-surface-container-high hover:shadow-[0_20px_48px_rgba(0,0,0,0.34)] motion-reduce:transform-none motion-reduce:transition-none sm:p-4"
                        >
                            <div className="overflow-hidden rounded-lg border border-outline-variant bg-surface shadow-inner">
                                <div className="flex h-8 items-center gap-1.5 border-b border-outline-variant bg-background px-3">
                                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#c9785f]" />
                                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#c69a5a]" />
                                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#78916b]" />
                                    <span className="ml-2 min-w-0 flex-1 truncate rounded-sm bg-surface-container px-2 py-1 text-[8px] tracking-wide text-on-surface-variant">
                                        {project.previewLabel}
                                    </span>
                                </div>
                                <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                                    <Image
                                        src={project.image}
                                        alt={project.imageAlt}
                                        fill
                                        sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 33vw"
                                        className="object-cover transition duration-500 brightness-[0.88] saturate-[0.82] group-hover:scale-[1.025] group-hover:brightness-100 group-hover:saturate-100 motion-reduce:transform-none motion-reduce:transition-none"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-1 flex-col px-1 pb-1 pt-5 sm:pt-6">
                                <div className="mb-3 flex items-center justify-between gap-3">
                                    <span className="font-headline-sm text-sm text-primary">
                                        {project.number}
                                    </span>
                                    <span className="truncate text-right text-[9px] font-semibold uppercase tracking-[0.14em] text-on-surface-variant sm:text-[10px]">
                                        {project.category}
                                    </span>
                                </div>

                                <h3 className="font-headline-lg text-2xl text-on-surface transition-colors group-hover:text-primary">
                                    {project.name}
                                </h3>
                                <p className="mt-2 min-h-[4.5rem] text-[13px] leading-6 text-on-surface-variant">
                                    {project.description}
                                </p>

                                <ul
                                    aria-label={`${project.name} technologies`}
                                    className="mt-5 flex flex-wrap gap-2"
                                >
                                    {project.technologies.map((technology) => (
                                        <li
                                            key={technology}
                                            className="rounded-full border border-outline-variant bg-primary/[0.08] px-2.5 py-1 text-[10px] font-medium text-primary"
                                        >
                                            {technology}
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                                    {project.demoUrl && (
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex min-h-10 flex-1 items-center justify-center gap-2 rounded-md bg-primary px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#050505] transition-colors hover:bg-[#e5b68e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                        >
                                            Live Demo
                                            <ArrowUpRight size={14} aria-hidden="true" />
                                        </a>
                                    )}
                                    <a
                                        href={project.sourceUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex min-h-10 flex-1 items-center justify-center gap-2 rounded-md border border-outline-variant px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-on-surface transition-colors hover:border-primary/70 hover:bg-primary/[0.08] hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                    >
                                        <Code2 size={14} aria-hidden="true" />
                                        Source Code
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-9 flex justify-center sm:mt-11">
                    <a
                        href="https://github.com/nafismahamudshahin?tab=repositories"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-11 items-center gap-2 rounded-full border border-outline-variant px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-primary transition-colors hover:border-primary hover:bg-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                        Explore more on GitHub
                        <ArrowDown size={15} aria-hidden="true" className="-rotate-90" />
                    </a>
                </div>
            </div>
        </section>
    );
}
