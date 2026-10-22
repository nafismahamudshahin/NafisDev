import { GraduationCap, Code2, Sparkles, ArrowUpRight, } from "lucide-react";
import { experiences, highlights } from "@/data/educations";

export default function Education() {
    return (
        <section
            id="education"
            aria-labelledby="journey-heading"
            className="relative scroll-mt-20 overflow-hidden bg-transparent px-5 py-20 text-on-surface sm:px-8 sm:py-24 lg:px-16"
        >
            {/* Background Glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-40 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/[0.06] blur-[120px]"
            />

            <div className="relative mx-auto max-w-5xl">
                {/* Heading */}
                <header className="mx-auto mb-14 max-w-3xl text-center sm:mb-20">
                    <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.07] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary sm:text-xs">
                        <Sparkles size={14} aria-hidden="true" />
                        My Story
                    </span>

                    <h2
                        id="journey-heading"
                        className="font-headline-lg text-3xl tracking-tight text-on-surface sm:text-4xl md:text-5xl lg:text-6xl"
                    >
                        My Journey
                        <span className="text-primary"> & Experience.</span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-on-surface-variant sm:text-base">
                        My journey through education, programming,
                        and software development — learning,
                        building, and growing one step at a time.
                    </p>
                </header>

                {/* Education Timeline */}
                <div className="mb-16 sm:mb-20">
                    <div className="mb-8 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/[0.08] text-primary">
                            <GraduationCap size={20} />
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-on-surface sm:text-2xl">
                                Education
                            </h3>
                            <p className="mt-1 text-xs text-on-surface-variant sm:text-sm">
                                My academic background
                            </p>
                        </div>
                    </div>

                    <div className="relative space-y-5 pl-5 sm:pl-7">
                        {/* Timeline line */}
                        <div
                            aria-hidden="true"
                            className="absolute bottom-8 left-[3px] top-8 w-px bg-gradient-to-b from-primary/70 via-outline-variant to-transparent sm:left-[3px]"
                        />

                        {experiences.map((item) => {
                            const Icon = item.icon;

                            return (
                                <article
                                    key={item.title}
                                    className="group relative"
                                >
                                    {/* Timeline dot */}
                                    <span
                                        aria-hidden="true"
                                        className="absolute -left-[25px] top-6 h-2.5 w-2.5 rounded-full border-2 border-primary bg-background sm:-left-[33px]"
                                    />

                                    <div className="rounded-xl border border-outline-variant bg-surface-container p-4 transition-all duration-300 hover:border-primary/40 hover:bg-surface-container-high sm:p-6">
                                        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                                            <div className="flex min-w-0 gap-3">
                                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/[0.09] text-primary">
                                                    <Icon size={19} />
                                                </div>

                                                <div className="min-w-0">
                                                    <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                                                        {item.category}
                                                    </span>

                                                    <h4 className="mt-1 text-base font-semibold leading-snug text-on-surface sm:text-lg">
                                                        {item.title}
                                                    </h4>

                                                    <p className="mt-1 text-xs leading-5 text-on-surface-variant sm:text-sm">
                                                        {item.organization}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex shrink-0 flex-wrap items-center gap-2 sm:flex-col sm:items-end">
                                                <span className="text-xs font-medium text-primary">
                                                    {item.period}
                                                </span>

                                                <span className="rounded-full border border-outline-variant px-2.5 py-1 text-[9px] font-medium text-on-surface-variant">
                                                    {item.status}
                                                </span>
                                            </div>
                                        </div>

                                        <p className="mt-4 text-xs leading-6 text-on-surface-variant sm:ml-[52px] sm:text-sm">
                                            {item.description}
                                        </p>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>

                {/* Development & Achievements */}
                <div>
                    <div className="mb-8 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/[0.08] text-primary">
                            <Code2 size={20} />
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-on-surface sm:text-2xl">
                                Experience & Highlights
                            </h3>
                            <p className="mt-1 text-xs text-on-surface-variant sm:text-sm">
                                Skills, projects, and achievements
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {highlights.map((item) => {
                            const Icon = item.icon;

                            return (
                                <article
                                    key={item.title}
                                    className="group flex flex-col rounded-xl border border-outline-variant bg-surface-container p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-surface-container-high sm:p-6 motion-reduce:transform-none motion-reduce:transition-none"
                                >
                                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/[0.08] text-primary transition-transform duration-300 group-hover:scale-105">
                                        <Icon size={21} />
                                    </div>

                                    <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                                        {item.category}
                                    </span>

                                    <h4 className="mt-2 text-lg font-semibold text-on-surface">
                                        {item.title}
                                    </h4>

                                    <p className="mt-3 flex-1 text-xs leading-6 text-on-surface-variant sm:text-sm">
                                        {item.description}
                                    </p>

                                    <ul
                                        aria-label={`${item.title} skills`}
                                        className="mt-5 flex flex-wrap gap-2"
                                    >
                                        {item.technologies.map((technology) => (
                                            <li
                                                key={technology}
                                                className="rounded-full border border-outline-variant bg-primary/[0.06] px-2.5 py-1 text-[10px] font-medium text-on-surface-variant"
                                            >
                                                {technology}
                                            </li>
                                        ))}
                                    </ul>
                                </article>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-12 flex justify-center sm:mt-16">
                    <a
                        href="https://github.com/nafismahamudshahin?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-outline-variant px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-primary transition-all hover:border-primary hover:bg-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                        Explore My Projects
                        <ArrowUpRight
                            size={15}
                            aria-hidden="true"
                            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}
