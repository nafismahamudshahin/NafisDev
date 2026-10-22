import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isText(value: unknown): value is string {
    return typeof value === "string";
}

export async function POST(request: Request) {
    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.CONTACT_FROM_EMAIL;
    const to = process.env.CONTACT_TO_EMAIL;

    if (!apiKey || !from || !to) {
        return NextResponse.json(
            { message: "The contact form is not configured yet. Please email me directly." },
            { status: 503 },
        );
    }

    let body: unknown;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ message: "Invalid request." }, { status: 400 });
    }

    if (typeof body !== "object" || body === null) {
        return NextResponse.json({ message: "Invalid request." }, { status: 400 });
    }

    const payload = body as Record<string, unknown>;

    // Silently accept bot submissions caught by the honeypot field.
    if (isText(payload.website) && payload.website.trim()) {
        return NextResponse.json({ message: "Thanks — your message has been sent." });
    }

    const name = isText(payload.name) ? payload.name.trim() : "";
    const email = isText(payload.email) ? payload.email.trim() : "";
    const subject = isText(payload.subject) ? payload.subject.trim() : "";
    const message = isText(payload.message) ? payload.message.trim() : "";

    if (
        name.length < 2 || name.length > 100 ||
        !emailPattern.test(email) || email.length > 254 ||
        subject.length < 2 || subject.length > 150 ||
        message.length < 10 || message.length > 5000
    ) {
        return NextResponse.json(
            { message: "Please check the fields and try again." },
            { status: 400 },
        );
    }

    try {
        const resendResponse = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${apiKey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                from,
                to: [to],
                reply_to: email,
                subject: `Portfolio message: ${subject.replace(/[\r\n]+/g, " ")}`,
                text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
            }),
            cache: "no-store",
        });

        if (!resendResponse.ok) {
            return NextResponse.json(
                { message: "Your message could not be sent. Please email me directly instead." },
                { status: 502 },
            );
        }

        return NextResponse.json({ message: "Thanks — your message has been sent." });
    } catch {
        return NextResponse.json(
            { message: "Your message could not be sent. Please email me directly instead." },
            { status: 502 },
        );
    }
}
