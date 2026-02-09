"use client"

import { useState } from "react"
import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const categories = [
  {
    name: "People & HR",
    count: 12,
    image: "/images/course-1.jpg",
    color: "from-red-500/20 to-transparent",
  },
  {
    name: "Marketing",
    count: 15,
    image: "/images/course-5.jpg",
    color: "from-amber-500/20 to-transparent",
  },
  {
    name: "Finance",
    count: 9,
    image: "/images/course-3.jpg",
    color: "from-emerald-500/20 to-transparent",
  },
  {
    name: "Operations",
    count: 18,
    image: "/images/course-4.jpg",
    color: "from-blue-500/20 to-transparent",
  },
  {
    name: "Live Sessions",
    count: 6,
    image: "/images/course-6.jpg",
    color: "from-pink-500/20 to-transparent",
  },
]

export default function CategoriesSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section ref={ref} className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div
          className={`mb-16 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="mb-3 block text-xs font-medium tracking-widest text-primary uppercase">
            Browse by Category
          </span>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-5xl">
            Course Categories
          </h2>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {categories.map((cat, i) => (
            <button
              type="button"
              key={cat.name}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-700 hover:border-primary/40 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${i * 100 + 200}ms` }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={cat.image || "/placeholder.svg"}
                  alt={cat.name}
                  fill
                  className={`object-cover transition-all duration-700 ${
                    hoveredIndex === i ? "scale-110 brightness-75" : "scale-100 brightness-50"
                  }`}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${cat.color}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-end p-4 text-center">
                  <h3 className="text-base font-bold text-foreground md:text-lg">
                    {cat.name}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {cat.count} Courses
                  </p>
                  <div
                    className={`mt-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary transition-all duration-300 ${
                      hoveredIndex === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
