"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const features = [
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: "Learn from Masters",
    description:
      "Exclusive masterclass content from restaurant owners who built businesses from scratch to multi-branch empires.",
    image: "/images/feature-learn.jpg",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Structured Courses",
    description:
      "Carefully crafted curriculum covering finance, marketing, operations, HR, and everything you need to scale.",
    image: "/images/course-3.jpg",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Micro-Learning",
    description:
      "Bite-sized lessons that deliver focused insights in minutes. Perfect for busy restaurant owners on the go.",
    image: "/images/feature-micro.jpg",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
      </svg>
    ),
    title: "Exclusive Perks",
    description:
      "Members-only events, special discounts on tools and services, and a thriving community of fellow restaurateurs.",
    image: "/images/course-5.jpg",
  },
]

export default function FeaturesSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>()

  return (
    <section id="features" ref={ref} className="relative overflow-hidden py-24">
      {/* Background accent */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-1/4 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div
          className={`mb-20 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="mb-3 block text-xs font-medium tracking-widest text-primary uppercase">
            What We Offer
          </span>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-5xl">
            <span className="text-balance block">
              Your Complete Learning
            </span>
            <span className="text-gradient text-balance block">Ecosystem</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Everything you need to launch, grow, and master the restaurant business,
            all in one platform built by restaurateurs, for restaurateurs.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-700 hover:border-primary/30 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${i * 150 + 200}ms` }}
            >
              {/* Image bg */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <Image
                  src={feature.image || "/placeholder.svg"}
                  alt=""
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-background/90" />
              </div>

              <div className="relative z-10 flex flex-col gap-6 p-8 md:p-10">
                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                  {feature.icon}
                </div>

                {/* Content */}
                <div>
                  <h3 className="mb-3 text-xl font-bold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>

                {/* Link */}
                <div className="flex items-center gap-2 text-sm font-medium text-primary transition-all duration-300 group-hover:gap-3">
                  Explore
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
