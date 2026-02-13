"use client"

import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { useState } from "react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const testimonials = [
  {
    quote:
      "We have reduced our testing cycle time and can deliver new capabilities faster.",
    role: "CIO",
    company: "Financial Institution",
  },
  {
    quote:
      "You guys rock, we went live with 100% financial accuracy!! Excellent work!",
    role: "CIO",
    company: "Insurance Company",
  },
  {
    quote:
      "A strategic partner, who executed projects on time with high quality and brings innovation to the table on how we can meet our business goals.",
    role: "Executive",
    company: "Leading MNC in Asia Pacific",
  },
]

export function Testimonials() {
  const [page, setPage] = useState(0)
  const perPage = 3
  const maxPage = Math.ceil(testimonials.length / perPage) - 1
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="bg-background py-20 md:py-28">
      <div ref={ref} className="mx-auto max-w-7xl px-6">
        <div
          className={`mb-12 flex items-end justify-between transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Testimonials
            </p>
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              What Our Clients Say
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setPage(Math.max(0, page - 1))}
              disabled={page === 0}
              className="rounded-full border border-border p-2.5 text-muted-foreground transition-all duration-300 hover:border-accent hover:bg-accent/10 hover:text-accent disabled:opacity-30"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => setPage(Math.min(maxPage, page + 1))}
              disabled={page === maxPage}
              className="rounded-full border border-border p-2.5 text-muted-foreground transition-all duration-300 hover:border-accent hover:bg-accent/10 hover:text-accent disabled:opacity-30"
              aria-label="Next testimonials"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className={`grid grid-cols-1 gap-6 md:grid-cols-3 stagger-children ${isVisible ? "is-visible" : ""}`}>
          {testimonials
            .slice(page * perPage, page * perPage + perPage)
            .map((t, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <Quote className="h-6 w-6 text-accent" />
                </div>
                <p className="mb-8 text-base leading-relaxed text-card-foreground">
                  {`"${t.quote}"`}
                </p>
                <div className="border-t border-border pt-5">
                  <p className="font-heading text-sm font-bold text-foreground">{t.role}</p>
                  <p className="text-xs text-muted-foreground">{t.company}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
