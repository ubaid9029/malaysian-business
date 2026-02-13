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
  const [isAnimating, setIsAnimating] = useState(true)

  const goTo = useCallback(
    (idx: number) => {
      setIsAnimating(false)
      setTimeout(() => {
        setCurrent(idx)
        setIsAnimating(true)
      }, 100)
    },
    []
  )

  const prev = () => goTo((current - 1 + slides.length) % slides.length)
  const next = () => goTo((current + 1) % slides.length)

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [current, goTo])

  return (
    <section className="relative h-[560px] w-full overflow-hidden md:h-[650px] lg:h-[700px]">
      <Image
        src="/hero.jpg"
        alt="Enterprise technology solutions"
        fill
        className="object-cover"
        priority
      />
      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />

      {/* Decorative grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(to right, hsl(0 0% 100%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          {/* Animated accent line */}
          <div
            className={`mb-6 h-1 w-16 rounded-full bg-accent transition-all duration-700 ${
              isAnimating ? "w-16 opacity-100" : "w-0 opacity-0"
            }`}
          />

          <h1
            className={`mb-5 font-heading text-3xl font-bold leading-tight text-primary-foreground transition-all duration-700 md:text-4xl lg:text-5xl xl:text-6xl ${
              isAnimating
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <span className="text-balance">{slides[current].title}</span>
          </h1>
          <p
            className={`mb-8 max-w-lg text-base leading-relaxed text-primary-foreground/80 transition-all delay-100 duration-700 md:text-lg ${
              isAnimating
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            {slides[current].description}
          </p>
          <div
            className={`flex items-center gap-4 transition-all delay-200 duration-700 ${
              isAnimating
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <Link
              href={slides[current].href}
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-all duration-300 hover:shadow-lg hover:shadow-accent/30"
            >
              {slides[current].cta}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="#industries"
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary-foreground/30 px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:border-primary-foreground hover:bg-primary-foreground/10"
            >
              Explore Industries
            </Link>
          </div>
        </div>

        {/* Arrows */}
        <div className="absolute right-6 top-1/2 flex -translate-y-1/2 flex-col gap-3">
          <button
            onClick={prev}
            className="rounded-full border border-primary-foreground/20 bg-primary-foreground/10 p-2.5 text-primary-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary-foreground/40 hover:bg-primary-foreground/20"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="rounded-full border border-primary-foreground/20 bg-primary-foreground/10 p-2.5 text-primary-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary-foreground/40 hover:bg-primary-foreground/20"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Progress Dots */}
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="group relative h-3 w-3"
              aria-label={`Go to slide ${i + 1}`}
            >
              <span
                className={`block h-full w-full rounded-full transition-all duration-500 ${
                  i === current
                    ? "scale-100 bg-accent"
                    : "scale-75 bg-primary-foreground/30 group-hover:bg-primary-foreground/50"
                }`}
              />
              {i === current && (
                <span className="absolute -inset-1 animate-ping rounded-full bg-accent/40" />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
