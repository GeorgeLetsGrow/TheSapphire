import Link from "next/link";
import { ParallaxHeroBackground } from "../components/ParallaxHeroBackground";
import { buttonClassName } from "../components/ui/button";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#06080F] text-white">
      <SapphireBackdrop />

      <HeroWordmark />

      <section id="location" className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="mb-6">
          <div className="text-xs font-semibold tracking-[0.32em] text-white/55">LOCATION</div>
          <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="text-3xl font-semibold tracking-[0.04em] md:text-5xl">Find The Sapphire</h2>
            <a
              href="https://maps.google.com/?q=4410+W+Boy+Scout+Blvd+Tampa+FL"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-white/70 underline underline-offset-4 transition hover:text-white"
            >
              View on Google Maps
            </a>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1fr_1.4fr]">
          <div className="rounded-[1.25rem] border border-white/12 bg-white/[0.02] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.35)]">
            <div className="text-xs font-semibold tracking-[0.32em] text-white/55">ADDRESS</div>
            <div className="mt-3 text-xl font-semibold tracking-[0.02em] text-white/90">4410 W Boy Scout Blvd</div>
            <div className="mt-1 text-sm text-white/65">Tampa, FL</div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://maps.google.com/?q=4410+W+Boy+Scout+Blvd+Tampa+FL"
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClassName({ variant: "primary", size: "lg" })}
              >
                DIRECTIONS
              </a>
              <a
                href="https://maps.google.com/?q=4410+W+Boy+Scout+Blvd+Tampa+FL"
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClassName({ variant: "secondary", size: "lg" })}
              >
                OPEN MAP
              </a>
            </div>

            <div className="mt-8 h-[1px] w-full bg-white/10" />
            <p className="mt-6 text-sm leading-relaxed text-white/65">
              Easy access from major routes. Tap directions for the fastest way to arrive.
            </p>
          </div>

          <div className="overflow-hidden rounded-[1.25rem] border border-white/12 bg-black/25 shadow-[0_24px_90px_rgba(0,0,0,0.45)]">
            <iframe
              title="The Sapphire Tampa location"
              src="https://www.google.com/maps?q=4410+W+Boy+Scout+Blvd+Tampa+FL&output=embed"
              className="h-[380px] w-full md:h-[460px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <footer className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-12">
        <div className="h-[1px] w-full bg-white/10" />
        <div className="mt-8 flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/S-logo.png"
              alt="The Sapphire Tampa"
              width={40}
              height={40}
              className="brightness-0 invert"
            />
            <span className="text-[11px] tracking-[0.38em] text-white/50">THE SAPPHIRE TAMPA</span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://www.facebook.com/thesapphiretampa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white/50 transition hover:text-white"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/thesapphiretampa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white/50 transition hover:text-white"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/thesapphiretampa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white/50 transition hover:text-white"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>

          <div className="text-[11px] text-white/35">
            © 2026 The Sapphire Tampa
          </div>
        </div>
      </footer>
    </main>
  );
}

function HeroWordmark() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Parallax S-logo hero background — higher on mobile */}
      <div
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center pt-[6vh] md:pt-[22vh]"
        aria-hidden
      >
        <ParallaxHeroBackground
          src="/images/S-logo.png"
          className="h-[min(240vmin,2400px)] w-[min(240vmin,2400px)] max-w-none opacity-[0.06] brightness-0 invert object-contain will-change-transform"
        />
      </div>

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-4 py-6 md:px-8">
        <Link href="/" className="group -ml-1 flex items-center gap-3 md:ml-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/S-logo.png"
            alt="The Sapphire Tampa"
            width={80}
            height={80}
            className="brightness-0 invert transition-opacity duration-200 group-hover:opacity-90"
          />
          <span className="-translate-y-[5px] -translate-x-[30px] text-[11px] tracking-[0.38em] text-white/65 transition-colors duration-200 group-hover:text-white">THE SAPPHIRE TAMPA</span>
        </Link>
        <nav className="flex items-center gap-3">
          <a
            href="#location"
            className={buttonClassName({ variant: "secondary", size: "md", className: "text-[12px]" })}
          >
            Address
          </a>
          <Link
            href="/apply"
            className={buttonClassName({ variant: "primary", size: "md", className: "text-[12px]" })}
          >
            Apply Now
          </Link>
        </nav>
      </header>

      {/* Spotlight overlay — soft blue glow centered on hero */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] flex items-center justify-center"
        aria-hidden
      >
        <div
          className="h-[80vh] w-[min(100%,900px)] rounded-full opacity-90"
          style={{
            background:
              "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(11,71,255,0.18) 0%, rgba(59,130,246,0.06) 45%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-84px)] max-w-7xl items-start justify-center px-8 py-8 md:items-center md:py-16">
        <div className="w-full max-w-4xl -mt-6 text-center md:mt-0">
          <div className="mb-1 flex justify-center md:mb-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/S-logo.png"
              alt="The Sapphire"
              width={140}
              height={140}
              className="brightness-0 invert"
            />
          </div>

          <h1 className="text-[clamp(3.75rem,9vw,9.25rem)] font-bold leading-[0.9] tracking-[0.12em] text-white">
            THE SAPPHIRE
          </h1>

          <div className="mx-auto mt-8 h-[1px] w-full max-w-[720px] bg-gradient-to-r from-transparent via-white/18 to-transparent" />
          <div className="mx-auto mt-[6px] h-[1px] w-2/3 max-w-[520px] bg-gradient-to-r from-transparent via-[#0B47FF]/35 to-transparent" />

          <div className="mt-8 text-[11px] tracking-[0.32em] text-white/65">MODERN LUXURY • TAMPA</div>
          <div className="mt-4 flex justify-center">
            <div className="inline-flex items-center rounded-full bg-white/5 px-4 py-2 text-[11px] font-semibold tracking-[0.32em] text-white/80 ring-1 ring-inset ring-white/10">
              COMING SOON
            </div>
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
            A refined nightlife destination built for atmosphere, premium service, and unforgettable entertainment.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/apply"
              className={buttonClassName({ variant: "primary", size: "lg", className: "px-9" })}
            >
              APPLY NOW
            </Link>
            <a
              href="#location"
              className={buttonClassName({ variant: "secondary", size: "lg", className: "px-9" })}
            >
              4410 W Boy Scout Blvd
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SapphireBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute inset-0 bg-[#06080F]" />
      <div className="absolute inset-0 bg-sapphire-aurora opacity-[0.85]" />

      <div className="absolute left-[40%] top-[55%] h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0B47FF]/10 blur-[200px]" />
      <div className="absolute left-[15%] top-[70%] h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-[#0B47FF]/[0.07] blur-[170px]" />

      {/* Layered radial glows for a soft sapphire ambience */}
      <div className="absolute right-[-10%] top-[-15%] h-[700px] w-[700px] rounded-full bg-[#0B47FF]/[0.08] blur-[160px]" />
      <div className="absolute right-[5%] top-[-5%] h-[400px] w-[400px] rounded-full bg-[#0B47FF]/[0.12] blur-[120px]" />
      <div className="absolute right-[15%] top-[10%] h-[200px] w-[200px] rounded-full bg-[#3B82F6]/[0.10] blur-[80px]" />

      <div className="absolute inset-0 opacity-[0.07] mix-blend-overlay">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22300%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22300%22 height=%22300%22 filter=%22url(%23n)%22 opacity=%220.55%22/%3E%3C/svg%3E')",
          }}
        />
      </div>
    </div>
  );
}
