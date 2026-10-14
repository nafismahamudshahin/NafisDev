import Link from "next/link";
import { ArrowUpRight, UserRound } from "lucide-react";
import MobileNavbar from "./MobileNavbar";

const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
];
const Navbar = () => {
    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-surface-container-high/40 bg-surface/90 shadow-[0_1px_12px_rgba(0,0,0,0.2)] backdrop-blur-xl">
            <div className="mx-auto flex h-16 w-full max-w-7xl min-w-0 items-center justify-between gap-2 px-3 xs:px-4 sm:h-20 sm:gap-4 sm:px-8 lg:px-16">
                {/* Logo */}
                <Link
                    href="#home"
                    aria-label="Nafis Mahamud Shahin home"
                    className="group flex min-w-0 shrink items-center gap-2 sm:gap-3"
                >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/40 bg-surface-container-low font-headline-sm text-sm text-primary sm:h-10 sm:w-10 sm:text-base">
                        S
                    </span>

                    <span className="block min-w-0">
                        <span className="block truncate font-headline-sm text-[13px] leading-tight text-on-surface min-[380px]:text-sm sm:text-base md:text-lg">
                            Nafis Mahamud Shahin
                        </span>

                        <span className="mt-0.5 block truncate text-[7px] font-semibold uppercase tracking-[0.12em] text-on-surface-variant min-[380px]:text-[8px] sm:mt-1 sm:text-[9px] sm:tracking-[0.18em]">
                            Design &amp; Code
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
                            className="rounded-full px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-on-surface-variant transition-colors hover:bg-surface-container hover:text-primary xl:px-4"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Desktop actions */}
                <div className="hidden items-center gap-3 lg:flex">
                    <Link
                        href="#contact"
                        className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-primary transition-colors hover:border-primary hover:bg-primary hover:text-on-primary"
                    >
                        Let&apos;s Talk
                        <ArrowUpRight size={15} />
                    </Link>

                    <Link
                        href="#about"
                        aria-label="About"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant/50 text-on-surface-variant transition-colors hover:border-primary hover:text-primary"
                    >
                        <UserRound size={16} strokeWidth={1.5} />
                    </Link>
                </div>

                {/* Interactive mobile navigation */}
                <MobileNavbar navItems={navItems} />
            </div>
        </header>
    );
}
export default Navbar;