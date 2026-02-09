"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setLoaded(true)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      setMousePos({
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      })
    }
    const el = heroRef.current
    el?.addEventListener("mousemove", handleMouseMove)
    return () => el?.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 transition-transform duration-700 ease-out"
        style={{
          transform: `scale(1.1) translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)`,
        }}
      >
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      <div className="vignette absolute inset-0" />

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute h-1 w-1 rounded-full bg-primary/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out ${Math.random() * 2}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Badge */}
        <div
          className={`mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
          <span className="text-xs font-medium tracking-wider text-primary uppercase">
            Thailand{"'"}s #1 Restaurant Learning Platform
          </span>
        </div>

        {/* Heading */}
        <h1
          className={`mb-6 font-serif text-5xl font-bold leading-tight tracking-tight text-foreground transition-all duration-1000 delay-200 md:text-7xl lg:text-8xl ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-balance block">Master the Art of</span>
          <span className="text-gradient text-balance block">Restaurant Business</span>
        </h1>

        {/* Subtitle */}
        <p
          className={`mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground transition-all duration-1000 delay-400 md:text-xl ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Learn from real restaurant owners who built empires. Courses, micro-learning,
          and exclusive masterclasses designed to transform your food business.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col items-center justify-center gap-4 transition-all duration-1000 delay-500 sm:flex-row ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button
            type="button"
            className="group relative overflow-hidden rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Free Today
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
          <button
            type="button"
            className="group flex items-center gap-3 rounded-xl border border-border px-8 py-4 text-base font-medium text-foreground transition-all duration-300 hover:border-primary/50 hover:bg-secondary"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/30 transition-all duration-300 group-hover:border-primary group-hover:bg-primary/10">
              <svg className="h-5 w-5 text-foreground transition-colors group-hover:text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            Watch Preview
          </button>
        </div>

        {/* Stats */}
        <div
          className={`mt-16 grid grid-cols-3 gap-8 transition-all duration-1000 delay-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            { value: "50+", label: "Expert Courses" },
            { value: "10K+", label: "Active Learners" },
            { value: "200+", label: "Success Stories" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="text-gradient text-3xl font-bold md:text-4xl">
                {stat.value}
              </span>
              <span className="mt-1 text-xs text-muted-foreground md:text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest text-muted-foreground uppercase">
            Scroll
          </span>
          <div className="flex h-8 w-5 items-start justify-center rounded-full border border-muted-foreground/30 p-1">
            <div className="h-2 w-1 animate-bounce rounded-full bg-primary" />
          </div>
        </div>
      </div>
    </section>
  )
}
