"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const instructors = [
  {
    name: "Chef Somchai",
    title: "Restaurant Finance Expert",
    image: "/images/instructor-1.jpg",
    courses: 8,
  },
  {
    name: "Khun Praew",
    title: "Multi-Branch Strategist",
    image: "/images/instructor-2.jpg",
    courses: 12,
  },
  {
    name: "Khun Thanakrit",
    title: "Digital Marketing Specialist",
    image: "/images/instructor-3.jpg",
    courses: 6,
  },
]

export default function InstructorsSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>()

  return (
    <section ref={ref} className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div
          className={`mb-16 flex flex-col items-center justify-between gap-6 md:flex-row transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <span className="mb-3 block text-xs font-medium tracking-widest text-primary uppercase">
              Our Experts
            </span>
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-5xl">
              Learn from the Best
            </h2>
          </div>
          <button
            type="button"
            className="group flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary/50 hover:bg-secondary"
          >
            View All Instructors
            <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Instructors Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {instructors.map((instructor, i) => (
            <div
              key={instructor.name}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${i * 150 + 200}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src={instructor.image || "/placeholder.svg"}
                  alt={instructor.name}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-xl font-bold text-foreground">
                    {instructor.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {instructor.title}
                  </p>
                  <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary">
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    {instructor.courses} Courses
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  <button
                    type="button"
                    className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-105"
                  >
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
