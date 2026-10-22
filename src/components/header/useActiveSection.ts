"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export type NavItem = {
    name: string;
    href: string;
};

export function useActiveSection(navItems: readonly NavItem[]) {
    const pathname = usePathname();
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        // if (pathname !== "/") return;

        const sections = navItems
            .filter(({ href }) => href.startsWith("/#"))
            .map(({ href }) => document.getElementById(href.split("#")[1]))
            .filter((section): section is HTMLElement => section !== null);

        if (!sections.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const currentSection = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            a.boundingClientRect.top - b.boundingClientRect.top,
                    )[0];

                if (currentSection) {
                    const sectionId = currentSection.target.id;
                    setActiveSection((previous) =>
                        previous === sectionId ? previous : sectionId,
                    );
                }
            },
            {
                root: null,
                rootMargin: "-35% 0px -55% 0px",
                threshold: 0,
            },
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, [navItems, pathname]);

    function isActive(href: string) {
        if (href === "/projects") return pathname === "/projects";

        const sectionId = href.split("#")[1];
        return pathname === "/" && sectionId !== undefined && activeSection === sectionId;
    }

    return { isActive };
}
