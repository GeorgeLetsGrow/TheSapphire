/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "var(--color-charcoal)",
        ink: "var(--color-ink)",
        sapphire: "var(--color-sapphire)",
        "sapphire-bright": "var(--color-sapphire-bright)",
        gold: "var(--color-gold)",
        pearl: "var(--color-pearl)",
        "pearl-muted": "var(--color-pearl-muted)",

        // Used by `@apply border-border` in `app/globals.css`
        border: "rgba(255, 255, 255, 0.10)",
      },
      fontFamily: {
        serif: ["var(--font-serif)"],
        sans: ["var(--font-sans)"],
      },
    },
  },
};

