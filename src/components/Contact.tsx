import { ArrowUpRight, Code2, Mail, Sparkles, UserRound } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const contactLinks = [
    {
        label: "Email",
        detail: "nafismahamudshahin@gmail.com",
        href: "mailto:nafismahamudshahin@gmail.com",
        Icon: Mail,
    },
    {
        label: "GitHub",
        detail: "Code and projects",
        href: "https://github.com/nafismahamudshahin",
        Icon: Code2,
    },
    {
        label: "LinkedIn",
        detail: "Professional profile",
        href: "https://www.linkedin.com/in/nafismahamudshahin-/",
        Icon: UserRound,
    },
];

export default function Contact() {
    return (
        <section
            id="contact"
            aria-labelledby="contact-heading"
            className="scroll-mt-20 bg-transparent py-16 text-on-surface sm:py-20"
        >
            <div className="mx-auto mb-8 w-full max-w-2xl px-4 text-center sm:mb-10">
                <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.07] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary sm:text-xs">
                    <Sparkles size={14} aria-hidden="true" />
                    Get In Touch
                </span>

                <h2 className="mb-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                    Let&apos;s Connect
                    <span className="text-primary">.</span>
                </h2>

                <p className="mx-auto max-w-xl text-sm leading-7 text-gray-400 sm:text-base md:text-lg">
                    Have an idea or a project in mind? I&apos;m always open to new
                    opportunities, collaborations, and interesting conversations.
                </p>
            </div>
            <div className="mx-auto grid w-full max-w-7xl gap-5 px-5 sm:px-8 lg:grid-cols-12 lg:gap-6 lg:px-16">
                <div className="rounded-2xl border border-outline-variant bg-surface-container p-5 sm:p-7 lg:col-span-7 lg:p-8">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                        Send a message
                    </p>
                    <h2 id="contact-heading" className="sr-only">
                        Contact me
                    </h2>
                    <ContactForm />
                </div>

                <div className="flex flex-col gap-4 lg:col-span-5">
                    <div className="rounded-2xl border border-outline-variant bg-surface-container p-5 sm:p-6">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                            Direct contact
                        </p>
                        <h3 className="mt-2 font-headline-lg text-2xl text-on-surface">
                            Let&apos;s talk
                        </h3>
                        <p className="mt-1 text-sm text-on-surface-variant">
                            Prefer to reach me directly?
                        </p>

                        <div className="mt-5 flex flex-col gap-2.5">
                            {contactLinks.map(({ label, detail, href, Icon }) => {
                                const isExternal = href.startsWith("https://");

                                return (
                                    <a
                                        key={label}
                                        href={href}
                                        target={isExternal ? "_blank" : undefined}
                                        rel={isExternal ? "noreferrer" : undefined}
                                        className="group flex min-h-[4.25rem] items-center gap-3 rounded-lg border border-outline-variant bg-background px-3.5 py-3 transition-colors hover:border-primary/40 hover:bg-surface-container-low focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                    >
                                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                                            <Icon size={17} aria-hidden="true" />
                                        </span>
                                        <span className="min-w-0 flex-1">
                                            <span className="block text-[9px] font-semibold uppercase tracking-[0.14em] text-on-surface-variant">
                                                {label}
                                            </span>
                                            <span className="mt-1 block truncate text-xs text-on-surface sm:text-sm">
                                                {detail}
                                            </span>
                                        </span>
                                        <ArrowUpRight
                                            size={15}
                                            aria-hidden="true"
                                            className="shrink-0 text-on-surface-variant transition-colors group-hover:text-primary"
                                        />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    <div className="rounded-2xl border border-outline-variant bg-surface-container-low p-5 sm:p-6">
                        <blockquote className="font-headline-lg text-xl italic text-primary sm:text-2xl">
                            &ldquo;Let&apos;s build something exceptional.&rdquo;
                        </blockquote>
                        <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.16em] text-on-surface-variant">
                            Open to opportunities
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
