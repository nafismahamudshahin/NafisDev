"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

type SubmissionStatus = {
    kind: "success" | "error";
    message: string;
} | null;

const fieldClassName =
    "mt-2 w-full rounded-md border border-outline-variant bg-background px-3.5 py-3 text-sm text-on-surface placeholder:text-[#777780] outline-none transition-colors focus:border-primary/60 focus:ring-2 focus:ring-primary/15";

const labelClassName =
    "block text-[9px] font-semibold uppercase tracking-[0.14em] text-on-surface-variant";

export default function ContactForm() {
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState<SubmissionStatus>(null);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);

        setIsSending(true);
        setStatus(null);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.get("name"),
                    email: formData.get("email"),
                    subject: formData.get("subject"),
                    message: formData.get("message"),
                    website: formData.get("website"),
                }),
            });

            const result = (await response.json()) as { message?: string };
            if (!response.ok) {
                throw new Error(result.message || "Your message could not be sent. Please try again.");
            }

            form.reset();
            setStatus({ kind: "success", message: result.message || "Thanks — your message has been sent." });
        } catch (error) {
            setStatus({
                kind: "error",
                message:
                    error instanceof Error
                        ? error.message
                        : "Your message could not be sent. Please email me directly instead.",
            });
        } finally {
            setIsSending(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="mt-5 space-y-4" aria-busy={isSending}>
            <div className="grid gap-4 sm:grid-cols-2">
                <label className={labelClassName}>
                    Name
                    <input
                        className={fieldClassName}
                        type="text"
                        name="name"
                        placeholder="Your name"
                        autoComplete="name"
                        minLength={2}
                        maxLength={100}
                        required
                    />
                </label>

                <label className={labelClassName}>
                    Email address
                    <input
                        className={fieldClassName}
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        autoComplete="email"
                        maxLength={254}
                        required
                    />
                </label>
            </div>

            <label className={labelClassName}>
                Subject
                <input
                    className={fieldClassName}
                    type="text"
                    name="subject"
                    placeholder="What would you like to discuss?"
                    minLength={2}
                    maxLength={150}
                    required
                />
            </label>

            <label className={labelClassName}>
                Message
                <textarea
                    className={`${fieldClassName} min-h-32 resize-y leading-6`}
                    name="message"
                    placeholder="Tell me a little about your project..."
                    minLength={10}
                    maxLength={5000}
                    rows={5}
                    required
                />
            </label>

            <div className="sr-only" aria-hidden="true">
                <label>
                    Leave this field empty
                    <input type="text" name="website" tabIndex={-1} autoComplete="off" />
                </label>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-1">
                <button
                    type="submit"
                    disabled={isSending}
                    className="inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-5 py-3 text-[10px] font-bold uppercase tracking-[0.12em] text-[#050505] transition-colors hover:bg-[#e5b68e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-wait disabled:opacity-70"
                >
                    {isSending ? "Sending..." : "Send message"}
                    <Send size={14} aria-hidden="true" />
                </button>

                {status && (
                    <p
                        role="status"
                        aria-live="polite"
                        className={`text-sm ${status.kind === "success" ? "text-primary" : "text-red-300"}`}
                    >
                        {status.message}
                    </p>
                )}
            </div>
        </form>
    );
}
