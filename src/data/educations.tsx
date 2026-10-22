import {
    GraduationCap,
    Code2,
    Trophy,
    BookOpen,
    Rocket,
} from "lucide-react";

export const experiences = [
    {
        period: "2026 – Present",
        category: "Higher Education",
        title: "BSc in Computer Science & Engineering",
        organization: "Eastern University, Bangladesh",
        description:
            "Continuing my academic journey in computer science while developing practical software engineering skills.",
        icon: GraduationCap,
        status: "In Progress",
    },
    {
        period: "2022 – 2025",
        category: "Education",
        title: "Diploma in Computer Science and Technology",
        organization:
            "Rumdo Institute of Modern Technology, Mymensingh",
        description:
            "Completed my diploma with a CGPA of 3.30/4.00 and developed a foundation in programming and computer technology.",
        icon: GraduationCap,
        status: "Completed",
    },
    {
        period: "2016 – 2021",
        category: "Education",
        title: "Secondary School Certificate (SSC)",
        organization:
            "Beara Patuli Rahamat Ullah High School, Mymensingh",
        description:
            "Completed my secondary education and built the foundation for my future academic journey.",
        icon: BookOpen,
        status: "Completed",
    },
    {
        period: "Up to 2015",
        category: "Education",
        title: "Primary School Certificate (PSC)",
        organization: "Balipara Government Primary School",
        description:
            "Started my educational journey and developed the fundamentals for lifelong learning.",
        icon: BookOpen,
        status: "Completed",
    },
];

export const highlights = [
    {
        category: "Development Journey",
        title: "Full-Stack Web Development",
        description:
            "Building web applications and exploring modern frontend and backend technologies.",
        technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Django REST Framework",
            "PostgreSQL",
        ],
        icon: Code2,
    },
    {
        category: "Competitive Programming",
        title: "CodeChef — 2-Star",
        description:
            "Practicing algorithms, data structures, and problem-solving through competitive programming.",
        technologies: [
            "C++",
            "Problem Solving",
            "Data Structures",
            "Algorithms",
        ],
        icon: Trophy,
    },
    {
        category: "Personal Projects",
        title: "Learning by Building",
        description:
            "Working on projects including Bazar Dor, Event Master, and DevStack to apply my skills in practical applications.",
        technologies: [
            "Web Development",
            "REST APIs",
            "Database Design",
        ],
        icon: Rocket,
    },
];
