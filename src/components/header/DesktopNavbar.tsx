"use client";

import Link from "next/link";
import { NavItem, useActiveSection } from "./useActiveSection";

type DesktopNavbarProps = {
    navItems: NavItem[];
};

export default function DesktopNavbar({ navItems }: DesktopNavbarProps) {
    const { isActive } = useActiveSection(navItems);

    return (
        <nav
            aria-label="Main navigation"
            className="hidden items-center gap-1 lg:flex"
        >
            {navItems.map((item) => {
                const active = isActive(item.href);

                return (
                    <Link
                        key={item.name}
                        href={item.href}
                        aria-current={active ? "location" : undefined}
                        className={`rounded-full px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors duration-300 xl:px-4 ${active
                            ? "bg-primary/10 text-primary"
                            : "text-[#a1a1aa] hover:bg-white/[0.05] hover:text-primary"
                            }`}
                    >
                        {item.name}
                    </Link>
                );
            })}
        </nav>
    );
}
