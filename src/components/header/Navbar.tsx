import Link from "next/link";
import { ArrowUpRight, UserRound } from "lucide-react";
import MobileNavbar from "./MobileNavbar";

const navItems = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/projects" },
];

const Navbar = () => {
    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-outline-variant bg-[#050505]/90 shadow-[0_4px_24px_rgba(0,0,0,0.4)] backdrop-blur-xl">
            <div className="mx-auto flex h-16 w-full max-w-7xl min-w-0 items-center justify-between gap-2 px-3 sm:h-20 sm:gap-4 sm:px-8 lg:px-16">
                {/* Logo */}
                <Link
                    href="/#home"
                    aria-label="Nafis Mahamud Shahin home"
                    className="group flex min-w-0 shrink items-center gap-2 sm:gap-3"
                >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-outline-variant bg-[#111111] font-headline-sm text-sm text-[#d49a68] transition-colors duration-300 group-hover:border-primary/60 group-hover:bg-[#191919] sm:h-10 sm:w-10 sm:text-base">
                        N
                    </span>

                    <span className="block min-w-0">
                        <span className="block truncate font-headline-sm text-[13px] leading-tight text-white min-[380px]:text-sm sm:text-base md:text-lg">
                            Nafis Mahamud Shahin
                        </span>

                        <span className="mt-0.5 block truncate text-[7px] font-semibold uppercase tracking-[0.12em] text-[#a1a1aa] min-[380px]:text-[8px] sm:mt-1 sm:text-[9px] sm:tracking-[0.18em]">
                            Full Stack Developer
                        </span>
                    </span>
                </Link>

                {/* Desktop navigation */}
                <nav
                    aria-label="Main navigation"
                    className="hidden items-center gap-1 lg:flex"
                >
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="rounded-full px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#a1a1aa] transition-colors duration-300 hover:bg-white/[0.05] hover:text-[#d49a68] xl:px-4"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Desktop actions */}
                <div className="hidden items-center gap-3 lg:flex">
                    <Link
                        href="mailto:nafismahamudshahin@gmail.com"
                        className="inline-flex items-center gap-2 rounded-full border border-outline-variant px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#d49a68] transition-all duration-300 hover:border-primary hover:bg-[#d49a68] hover:text-[#050505]"
                    >
                        Let&apos;s Talk
                        <ArrowUpRight size={15} aria-hidden="true" />
                    </Link>

                    <Link
                        href="#about"
                        aria-label="About me"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant text-[#a1a1aa] transition-all duration-300 hover:border-primary hover:bg-[#d49a68]/10 hover:text-[#d49a68]"
                    >
                        <UserRound size={16} strokeWidth={1.5} aria-hidden="true" />
                    </Link>
                </div>

                {/* Mobile navigation */}
                <MobileNavbar navItems={navItems} />
            </div>
        </header>
    );
};

export default Navbar;
