"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const articles = [
  {
    tag: "Leadership",
    title: "Unleashing the Power of Partnerships: Insights into the Future of Tech Alliances",
    excerpt:
      "The technology sector is a rapidly evolving landscape, characterized by regulatory changes and innovation.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    href: "#",
  },
  {
    tag: "Industry",
    title: "Winning in the New Normal for the Financial Services Industry",
    excerpt:
      "The banking and financial services industry is facing a vast and complex set of challenges.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    href: "#",
  },
  {
    tag: "Case Study",
    title: "Applied AI for Real-Time & Accurate NAV Calculation",
    excerpt:
      "Client is a prominent Fortune 500 brand with a global presence, providing a wide range of financial services.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    href: "#",
  },
]

export function News() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <motion.section
      className="bg-background py-20 md:py-28"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div ref={ref} className="mx-auto max-w-7xl px-6">
        <motion.div
          className={`mb-12 flex items-end justify-between`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
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
        </motion.div>

        <div className={`grid grid-cols-1 gap-6 md:grid-cols-3 stagger-children ${isVisible ? "is-visible" : ""}`}>
          {articles.map((article, i) => (
            <motion.article
              key={article.title}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1, ease: "easeOut" }}
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
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
