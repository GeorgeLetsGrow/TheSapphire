"use client";

import { useState } from "react";
import { buttonClassName } from "./ui/button";

export function NewsletterSignup() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="text-[13px] text-white/50">
        Thank you for signing up!
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
      <input
        id="newsletter-email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        required
        aria-label="Email"
        className="min-w-[280px] w-full max-w-[360px] rounded border border-white/15 bg-white/5 px-3 py-2.5 text-[13px] text-white placeholder:text-white/35 focus:border-white/25 focus:outline-none focus:ring-1 focus:ring-white/20 sm:min-w-[320px]"
      />
      <button
        type="submit"
        className={buttonClassName({ variant: "secondary", size: "md", className: "text-[11px] shrink-0" })}
      >
        Sign up
      </button>
    </form>
  );
}
