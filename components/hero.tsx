"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"

const slides = [
  {
    title: "REIMAGINING ENTERPRISES WITH AI-POWERED SOLUTIONS",
    description:
      "Driving amplification, automation, and acceleration in financial services for future-ready enterprises.",
    cta: "Read More",
    href: "#services",
  },
  {
    title: "TRANSFORMING INDUSTRIES WITH DIGITAL INNOVATION",
    description:
      "Enabling next-gen technology solutions for healthcare, banking, insurance, and more.",
    cta: "Explore Solutions",
    href: "#solutions",
  },
  {
    title: "EMPOWERING BUSINESSES ACROSS MALAYSIA & BEYOND",
    description:
      "Delivering enterprise-grade digital transformation with proven expertise and trusted partnerships.",
    cta: "Learn More",
    href: "#about",
  },
]

export function Hero() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Image */}
      <Image
        src="/test.jpg"
        alt="Enterprise technology solutions"
        fill
        className="object-cover scale-105 transition-transform duration-[10000ms] ease-out"
        priority
      />

      {/* Dark futuristic overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Animated glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] bg-accent/30 blur-[140px] animate-pulse rounded-full" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] bg-primary/40 blur-[120px] animate-pulse rounded-full" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl space-y-6">
          <h1
            key={current}
            className="animate-fade-in-up text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
          >
            {slides[current].title}
          </h1>

          <p
            key={`desc-${current}`}
            className="animate-fade-in-up text-lg text-white/70"
          >
            {slides[current].description}
          </p>

          <div className="flex items-center gap-4 pt-4">
            <Link
              href={slides[current].href}
              className="group relative inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
            >
              {slides[current].cta}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="#industries"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10"
            >
              Explore Industries
            </Link>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute right-6 top-1/2 flex -translate-y-1/2 flex-col gap-4">
          <button
            onClick={prev}
            className="rounded-full bg-white/10 p-3 text-white backdrop-blur-md transition hover:bg-white/20"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={next}
            className="rounded-full bg-white/10 p-3 text-white backdrop-blur-md transition hover:bg-white/20"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Dots */}
        <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                i === current
                  ? "scale-110 bg-accent shadow-[0_0_12px_rgba(255,255,255,0.7)]"
                  : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
