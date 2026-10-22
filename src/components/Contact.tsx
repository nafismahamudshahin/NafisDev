import { ArrowUpRight, Code2, Mail, UserRound } from "lucide-react";

export default function Contact() {
    return (
        <section
            id="contact"
            aria-labelledby="contact-heading"
            className="scroll-mt-20 border-t border-outline-variant bg-transparent py-20 text-on-surface sm:py-24"
        >
            <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:items-center lg:gap-12 lg:px-16">
                <div className="lg:col-span-5">
                    <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-primary sm:text-xs">
                        Get in touch
                    </p>
                    <h2
                        id="contact-heading"
                        className="font-headline-lg text-4xl leading-tight text-on-surface sm:text-5xl"
                    >
                        Let&apos;s build something <span className="text-primary">useful.</span>
                    </h2>
                    <p className="mt-5 max-w-md text-sm leading-7 text-on-surface-variant sm:text-base">
                        Have a project in mind or want to connect? Send me a message or find me
                        on GitHub and LinkedIn.
                    </p>
                </div>

                <div className="flex flex-col gap-4 lg:col-span-7">
                    <a
                        href="mailto:nafismahamudshahin@gmail.com"
                        className="group flex min-h-24 items-center gap-4 rounded-xl border border-outline-variant bg-surface-container p-5 transition-colors hover:border-primary/50 hover:bg-surface-container-high focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:p-6"
                    >
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <Mail size={20} aria-hidden="true" />
                        </span>
                        <span className="min-w-0 flex-1">
                            <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-on-surface-variant">
                                Email me
                            </span>
                            <span className="mt-1 block break-all text-sm font-medium text-on-surface sm:text-base">
                                nafismahamudshahin@gmail.com
                            </span>
                        </span>
                        <ArrowUpRight
                            size={19}
                            aria-hidden="true"
                            className="shrink-0 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                    </a>

                    <div className="grid gap-4 sm:grid-cols-2">
                        <a
                            href="https://github.com/nafismahamudshahin"
                            target="_blank"
                            rel="noreferrer"
                            className="group flex min-h-20 items-center gap-3 rounded-xl border border-outline-variant bg-surface-container p-5 transition-colors hover:border-primary/50 hover:bg-surface-container-high focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        >
                            <Code2 size={19} aria-hidden="true" className="text-primary" />
                            <span className="flex-1">
                                <span className="block text-sm font-semibold text-on-surface">GitHub</span>
                                <span className="mt-1 block text-xs text-on-surface-variant">Code and projects</span>
                            </span>
                            <ArrowUpRight
                                size={16}
                                aria-hidden="true"
                                className="text-on-surface-variant transition-colors group-hover:text-primary"
                            />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/nafismahamudshahin-/"
                            target="_blank"
                            rel="noreferrer"
                            className="group flex min-h-20 items-center gap-3 rounded-xl border border-outline-variant bg-surface-container p-5 transition-colors hover:border-primary/50 hover:bg-surface-container-high focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        >
                            <UserRound size={19} aria-hidden="true" className="text-primary" />
                            <span className="flex-1">
                                <span className="block text-sm font-semibold text-on-surface">LinkedIn</span>
                                <span className="mt-1 block text-xs text-on-surface-variant">Professional profile</span>
                            </span>
                            <ArrowUpRight
                                size={16}
                                aria-hidden="true"
                                className="text-on-surface-variant transition-colors group-hover:text-primary"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
