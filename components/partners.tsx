"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const partners = [
  { name: "Microsoft" },
  { name: "Google" },
  { name: "AWS" },
  { name: "SAP" },
  { name: "Salesforce" },
  { name: "Oracle" },
]

export function Partners() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="bg-secondary/50 py-20 md:py-28">
      <div ref={ref} className="mx-auto max-w-7xl px-6">
        <div
          className={`mb-12 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Transforming Together
          </p>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            Our trusted partners in driving digital innovation
          </h2>
        </div>

        <div
          className={`mb-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6 transition-all duration-700 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {partners.map((partner, i) => (
            <div
              key={partner.name}
              className="group flex h-20 items-center justify-center rounded-xl border border-border bg-card px-6 transition-all duration-500 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="font-heading text-lg font-bold text-muted-foreground transition-colors duration-300 group-hover:text-accent">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

        <div
          className={`transition-all duration-700 delay-400 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <Link
            href="#"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all duration-300 hover:shadow-lg hover:shadow-accent/30"
          >
            Know More
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
