import { ArrowUp, Download } from "lucide-react";
import Link from "next/link";

const footerLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
];

async function getCurrentYear() {
    "use cache";
    return new Date().getFullYear();
}

export default async function Footer() {
    const year = await getCurrentYear();

    return (
        <footer className="mt-auto border-t border-outline-variant bg-transparent">
            <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-16">
                <div className="grid gap-10 py-12 sm:grid-cols-2 sm:items-center sm:py-14">
                    <div>
                        <Link
                            href="#home"
                            className="group inline-flex items-center gap-3"
                            aria-label="Nafis Mahamud Shahin, back to home"
                        >
                            <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-outline-variant bg-[#111111] font-headline-sm text-base text-[#d49a68] transition-colors group-hover:border-primary/60">
                                N
                            </span>
                            <span>
                                <span className="block font-headline-sm text-base text-white">
                                    Nafis Mahamud Shahin
                                </span>
                                <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.16em] text-[#a1a1aa]">
                                    Full-Stack Developer
                                </span>
                            </span>
                        </Link>
                        <p className="mt-4 max-w-sm text-sm leading-6 text-[#a1a1aa]">
                            Building modern web experiences and reliable backend systems.
                        </p>
                    </div>

                    <div className="flex flex-col gap-6 sm:items-end">
                        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-3">
                            {footerLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-xs font-semibold uppercase tracking-[0.14em] text-[#a1a1aa] transition-colors hover:text-[#d49a68]"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <a
                                href="/resume.pdf"
                                download
                                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#a1a1aa] transition-colors hover:text-[#d49a68]"
                            >
                                <Download size={14} aria-hidden="true" />
                                Resume
                            </a>
                        </nav>
                        <Link
                            href="#home"
                            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#d49a68] transition-colors hover:text-[#e5b68e]"
                        >
                            Back to top
                            <ArrowUp size={14} aria-hidden="true" />
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col gap-2 border-t border-outline-variant py-5 text-[11px] text-[#777780] sm:flex-row sm:items-center sm:justify-between">
                    <p>© {year} Nafis Mahamud Shahin. All rights reserved.</p>
                    <p>Designed and built with care.</p>
                </div>
            </div>
        </footer>
    );
}
