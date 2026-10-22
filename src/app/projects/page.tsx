import type { Metadata } from "next";
import Projects from "@/components/Projects";

export const metadata: Metadata = {
    title: "Projects | Nafis Mahamud Shahin",
    description:
        "Selected web development projects by Nafis Mahamud Shahin, with live demos, source code, and the technologies used.",
};

export default function ProjectsPage() {
    return (
        <main className="flex-1">
            <Projects />
        </main>
    );
}
