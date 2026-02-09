"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const testimonials = [
  {
    name: "Narathip K.",
    role: "Owner, Koko Shabu",
    quote:
      "Each course delivers knowledge directly relevant to running a restaurant. The content is completely different from anything else out there. Incredibly valuable.",
    rating: 5,
    image: "/images/instructor-1.jpg",
  },
  {
    name: "Jeeraphut S.",
    role: "Founder, Pasta Ama",
    quote:
      "I gained so many new ideas for running and growing my business. The courses are extremely worth it. The platform is intuitive and easy to use.",
    rating: 5,
    image: "/images/instructor-2.jpg",
  },
  {
    name: "Ploypailin K.",
    role: "CEO, Make Me Mango",
    quote:
      "All the knowledge I needed in one place. I can apply what I learn directly to my restaurant and save so much time in the process.",
    rating: 5,
    image: "/images/instructor-3.jpg",
  },
  {
    name: "Worakit S.",
    role: "Owner, Kaprao Ta Pae",
    quote:
      "A great opportunity to learn from the real experiences of fellow restaurant owners. Learning from others' mistakes and successes is priceless.",
    rating: 5,
    image: "/images/instructor-1.jpg",
  },
  {
    name: "Natthakrit K.",
    role: "Founder, Eiao Thai Suki",
    quote:
      "So many principles and ideas that I can adapt for my restaurant. Worth every baht invested. The community support is outstanding.",
    rating: 5,
    image: "/images/instructor-2.jpg",
  },
]

export default function TestimonialsSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>()
  const [activeIndex, setActiveIndex] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <section id="testimonials" ref={ref} className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div
          className={`mb-16 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="mb-3 block text-xs font-medium tracking-widest text-primary uppercase">
            Real Reviews
          </span>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-5xl">
            <span className="text-balance block">Trusted by Restaurant</span>
            <span className="text-gradient text-balance block">Owners Nationwide</span>
          </h2>
        </div>

        {/* Featured Testimonial */}
        <div
          className={`mx-auto max-w-4xl transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 md:p-12">
            {/* Background glow */}
            <div className="absolute top-0 right-0 h-64 w-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />

            <div className="relative z-10">
              {/* Stars */}
              <div className="mb-6 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={`star-${i}`}
                    className="h-5 w-5 text-accent"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <div className="relative mb-8 min-h-[80px]">
                {testimonials.map((t, i) => (
                  <p
                    key={t.name}
                    className={`absolute top-0 left-0 right-0 text-lg leading-relaxed text-foreground transition-all duration-700 md:text-2xl ${
                      i === activeIndex
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                  >
                    {`"${t.quote}"`}
                  </p>
                ))}
              </div>

              {/* Author */}
              <div className="mt-20 flex items-center gap-4 md:mt-16">
                <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-primary/30">
                  <Image
                    src={testimonials[activeIndex].image || "/placeholder.svg"}
                    alt={testimonials[activeIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {testimonials[activeIndex].name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>

              {/* Dots */}
              <div className="mt-8 flex gap-2">
                {testimonials.map((t, i) => (
                  <button
                    key={t.name}
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === activeIndex
                        ? "w-8 bg-primary"
                        : "w-1.5 bg-muted hover:bg-muted-foreground"
                    }`}
                    aria-label={`View testimonial from ${t.name}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
