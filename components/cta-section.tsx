"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function CtaSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>()

  return (
    <section ref={ref} className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div
          className={`relative overflow-hidden rounded-3xl border border-primary/20 bg-card p-12 text-center md:p-20 transition-all duration-700 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {/* Glow effects */}
          <div className="absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-32 left-1/4 h-64 w-64 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />

          <div className="relative z-10">
            <span className="mb-4 inline-block text-xs font-medium tracking-widest text-primary uppercase">
              Limited Time Offer
            </span>
            <h2 className="mx-auto max-w-3xl font-serif text-3xl font-bold text-foreground md:text-5xl">
              <span className="text-balance block">Start Your Journey to</span>
              <span className="text-gradient text-balance block">Restaurant Mastery Today</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Join now and get instant access to our entire library of courses,
              masterclasses, and exclusive content at a special introductory price.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                type="button"
                className="group relative overflow-hidden rounded-xl bg-primary px-10 py-4 text-base font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-pulse-glow"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Join for THB 5,900/year
                  <svg
                    className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 -translate-x-full bg-accent/20 transition-transform duration-500 group-hover:translate-x-0" />
              </button>
              <span className="text-sm text-muted-foreground">
                or start free, no credit card required
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
