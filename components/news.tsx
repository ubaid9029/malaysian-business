"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const articles = [
  {
    tag: "Leadership",
    title: "Unleashing the Power of Partnerships: Insights into the Future of Tech Alliances",
    excerpt:
      "The technology sector is a rapidly evolving landscape, characterized by regulatory changes and innovation.",
    image: "/images/news-1.jpg",
    href: "#",
  },
  {
    tag: "Industry",
    title: "Winning in the New Normal for the Financial Services Industry",
    excerpt:
      "The banking and financial services industry is facing a vast and complex set of challenges.",
    image: "/images/news-2.jpg",
    href: "#",
  },
  {
    tag: "Case Study",
    title: "Applied AI for Real-Time & Accurate NAV Calculation",
    excerpt:
      "Client is a prominent Fortune 500 brand with a global presence, providing a wide range of financial services.",
    image: "/images/news-3.jpg",
    href: "#",
  },
]

export function News() {
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
              Resources
            </p>
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              News & Insights
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              className="rounded-full border border-border p-2.5 text-muted-foreground transition-all duration-300 hover:border-accent hover:bg-accent/10 hover:text-accent"
              aria-label="Previous articles"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              className="rounded-full border border-border p-2.5 text-muted-foreground transition-all duration-300 hover:border-accent hover:bg-accent/10 hover:text-accent"
              aria-label="Next articles"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className={`grid grid-cols-1 gap-6 md:grid-cols-3 stagger-children ${isVisible ? "is-visible" : ""}`}>
          {articles.map((article) => (
            <article
              key={article.title}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute left-4 top-4 rounded-full bg-accent px-3.5 py-1.5 text-xs font-semibold text-accent-foreground shadow-lg">
                  {article.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="mb-3 font-heading text-base font-bold leading-snug text-card-foreground line-clamp-2 transition-colors duration-300 group-hover:text-accent">
                  {article.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                  {article.excerpt}
                </p>
                <Link
                  href={article.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-all duration-300 hover:gap-3"
                >
                  Read More
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
