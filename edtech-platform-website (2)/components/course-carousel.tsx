"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface Course {
  id: number
  title: string
  instructor: string
  image: string
  category: string
  duration: string
  badge?: string
}

const courses: Course[] = [
  {
    id: 1,
    title: "Restaurant Financial Mastery",
    instructor: "Chef Somchai",
    image: "/images/course-1.jpg",
    category: "Management",
    duration: "12 Episodes",
    badge: "NEW",
  },
  {
    id: 2,
    title: "The Art of Menu Engineering",
    instructor: "Chef Nattapong",
    image: "/images/course-2.jpg",
    category: "Operations",
    duration: "8 Episodes",
  },
  {
    id: 3,
    title: "Building Restaurant Empires",
    instructor: "Khun Praew",
    image: "/images/course-3.jpg",
    category: "Growth",
    duration: "15 Episodes",
    badge: "POPULAR",
  },
  {
    id: 4,
    title: "Artisan Kitchen Techniques",
    instructor: "Chef Apinya",
    image: "/images/course-4.jpg",
    category: "Culinary",
    duration: "10 Episodes",
  },
  {
    id: 5,
    title: "Digital Marketing for Restaurants",
    instructor: "Khun Thanakrit",
    image: "/images/course-5.jpg",
    category: "Marketing",
    duration: "9 Episodes",
    badge: "TRENDING",
  },
  {
    id: 6,
    title: "Mastering Culinary Presentation",
    instructor: "Chef Wanida",
    image: "/images/course-6.jpg",
    category: "Culinary",
    duration: "11 Episodes",
  },
]

function CourseCard({ course, index }: { course: Course; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="card-cinematic group relative flex-shrink-0 cursor-pointer overflow-hidden rounded-xl"
      style={{
        width: "300px",
        animationDelay: `${index * 0.1}s`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={course.image || "/placeholder.svg"}
          alt={course.title}
          fill
          className={`object-cover transition-transform duration-700 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

        {/* Badge */}
        {course.badge && (
          <div className="absolute top-3 left-3 rounded-md bg-primary px-2 py-0.5 text-[10px] font-bold tracking-wider text-primary-foreground uppercase">
            {course.badge}
          </div>
        )}

        {/* Play button overlay */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-foreground/50 bg-background/60 backdrop-blur-sm transition-transform duration-300 hover:scale-110">
            <svg className="ml-1 h-6 w-6 text-foreground" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Duration */}
        <div className="absolute right-3 bottom-3 rounded-md bg-background/80 px-2 py-1 text-[11px] font-medium text-foreground backdrop-blur-sm">
          {course.duration}
        </div>
      </div>

      {/* Info */}
      <div className="bg-card p-4">
        <div className="mb-2 text-[11px] font-medium tracking-wider text-primary uppercase">
          {course.category}
        </div>
        <h3 className="mb-1 text-sm font-semibold leading-snug text-foreground line-clamp-2">
          {course.title}
        </h3>
        <p className="text-xs text-muted-foreground">{course.instructor}</p>

        {/* Progress bar animation on hover */}
        <div className="mt-3 h-0.5 w-full overflow-hidden rounded-full bg-border">
          <div
            className={`h-full rounded-full bg-primary transition-all duration-1000 ${
              isHovered ? "w-1/3" : "w-0"
            }`}
          />
        </div>
      </div>
    </div>
  )
}

export default function CourseCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>()

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return
    const amount = direction === "left" ? -640 : 640
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" })
  }

  return (
    <section id="courses" ref={sectionRef} className="relative py-24">
      {/* Section Header */}
      <div className="mx-auto mb-12 max-w-7xl px-6">
        <div
          className={`flex items-end justify-between transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <span className="mb-2 block text-xs font-medium tracking-widest text-primary uppercase">
              Latest Releases
            </span>
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-5xl">
              Trending Now
            </h2>
          </div>
          <div className="hidden gap-2 md:flex">
            <button
              type="button"
              onClick={() => scroll("left")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
              aria-label="Scroll left"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
              aria-label="Scroll right"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="hide-scrollbar flex gap-5 overflow-x-auto px-6 pb-4 scroll-smooth md:px-[calc((100vw-1280px)/2+24px)]"
      >
        {courses.map((course, i) => (
          <div
            key={course.id}
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: `${i * 100 + 200}ms` }}
          >
            <CourseCard course={course} index={i} />
          </div>
        ))}
      </div>

      {/* Gradient edges */}
      <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />
    </section>
  )
}
