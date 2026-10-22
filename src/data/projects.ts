export type Project = {
    number: string;
    name: string;
    category: string;
    description: string;
    image: string;
    imageAlt: string;
    previewLabel: string;
    technologies: string[];
    demoUrl?: string;
    sourceUrl: string;
};

export const projects: Project[] = [
    {
        number: "01",
        name: "Bazar Dor",
        category: "Bangla-first price tracker",
        description:
            "A daily essentials price tracker for Bangladesh, with market-wise prices, category browsing, and day-to-day price changes.",
        image: "/projects/bazar-dor.webp",
        imageAlt: "Bazar Dor homepage showing Bangla grocery prices and product cards",
        previewLabel: "bazardorbd.vercel.app",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "daisyUI"],
        demoUrl: "https://bazardorbd.vercel.app/",
        sourceUrl: "https://github.com/nafismahamudshahin/bazar-dor",
    },
    {
        number: "02",
        name: "Event Master",
        category: "Event management system",
        description:
            "An event platform with user authentication, event management, participant registration, and PostgreSQL-backed data.",
        image: "/projects/event-master.webp",
        imageAlt: "Event Master event website homepage screenshot",
        previewLabel: "Event Master · homepage preview",
        technologies: ["Django", "PostgreSQL", "Tailwind CSS"],
        sourceUrl: "https://github.com/nafismahamudshahin/Event-Managements",
    },
    {
        number: "03",
        name: "DevStack",
        category: "Interactive technology explorer",
        description:
            "Explore development technologies, compare tools, and assemble a personal stack for a future project.",
        image: "/projects/devstack.webp",
        imageAlt: "DevStack technology explorer with technology cards and a stack builder",
        previewLabel: "nafisdevstack.netlify.app",
        technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
        demoUrl: "https://nafisdevstack.netlify.app/",
        sourceUrl: "https://github.com/nafismahamudshahin/DevStack",
    },
];
