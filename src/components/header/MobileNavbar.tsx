"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

type NavItem = {
    name: string;
    href: string;
};

type MobileNavbarProps = {
    navItems: NavItem[];
};

export default function MobileNavbar({ navItems }: MobileNavbarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const sections = navItems
            .map(({ href }) => document.getElementById(href.slice(1)))
            .filter((section): section is HTMLElement => section !== null);

        if (!sections.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSections = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            a.boundingClientRect.top -
                            b.boundingClientRect.top
                    );

                const currentSection = visibleSections[0];

                if (currentSection) {
                    setActiveSection((previous) =>
                        previous === currentSection.target.id
                            ? previous
                            : currentSection.target.id
                    );
                }
            },
            {
                root: null,
                rootMargin: "-35% 0px -60% 0px",
                threshold: 0,
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, [navItems]);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <>
            {/* Mobile menu button */}
            <button
                type="button"
                onClick={() => setIsMenuOpen((open) => !open)}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-navigation"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-outline-variant/50 text-on-surface transition-colors hover:border-primary hover:text-primary sm:h-10 sm:w-10 lg:hidden"
            >
                {isMenuOpen ? (
                    <X size={21} strokeWidth={1.5} />
                ) : (
                    <Menu size={21} strokeWidth={1.5} />
                )}
            </button>

            {/* Mobile dropdown */}
            <div
                id="mobile-navigation"
                className={`absolute inset-x-0 top-full overflow-x-hidden border-b border-surface-container-high/40 bg-surface/95 shadow-xl backdrop-blur-xl transition-[max-height,opacity] duration-300 lg:hidden ${isMenuOpen
                    ? "max-h-[calc(100dvh-4rem)] overflow-y-auto opacity-100"
                    : "pointer-events-none max-h-0 opacity-0"
                    }`}
            >
                <nav
                    aria-label="Mobile navigation"
                    className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-4 py-4 sm:px-8"
                >
                    {navItems.map((item) => {
                        const sectionId = item.href.slice(1);
                        const isActive = activeSection === sectionId;

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={closeMenu}
                                tabIndex={isMenuOpen ? 0 : -1}
                                aria-current={isActive ? "location" : undefined}
                                className={`flex min-h-12 items-center justify-between rounded-lg px-4 py-3 text-sm font-semibold uppercase tracking-[0.1em] transition-colors ${isActive
                                    ? "bg-primary/10 text-primary"
                                    : "text-on-surface-variant hover:bg-surface-container hover:text-primary"
                                    }`}
                            >
                                {item.name}
                                <ArrowUpRight size={16} />
                            </Link>
                        );
                    })}

                    <Link
                        href="#contact"
                        onClick={closeMenu}
                        tabIndex={isMenuOpen ? 0 : -1}
                        className="mt-2 flex min-h-12 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-on-primary transition-colors hover:bg-primary-container"
                    >
                        Let&apos;s Talk
                        <ArrowUpRight size={16} />
                    </Link>
                </nav>
            </div>
        </>
    );
}