"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { value: 24, suffix: "+", label: "Managed Services" },
  { value: 1, suffix: "+", label: "Delivery Centers" },
  { value: 19, suffix: "+", label: "Enterprise Clients" },
]

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 2000
          const steps = 60
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-primary py-16 md:py-24">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, hsl(0 0% 100%) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>
      <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="mb-14 text-center font-heading text-2xl font-bold text-primary-foreground md:text-3xl lg:text-4xl">
          Delivering value for our customers
        </h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="group text-center">
              <p className="mb-3 font-heading text-4xl font-bold text-accent transition-transform duration-300 group-hover:scale-110 md:text-5xl lg:text-6xl">
                <AnimatedNumber target={stat.value} suffix={stat.suffix} />
              </p>
              <div className="mx-auto mb-3 h-0.5 w-8 rounded-full bg-accent/30 transition-all duration-500 group-hover:w-16 group-hover:bg-accent" />
              <p className="text-sm text-primary-foreground/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
