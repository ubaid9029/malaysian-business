"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Heart,
  Landmark,
  Shield,
  Radio,
  FlaskConical,
  Cpu,
  Film,
  Building2,
  Factory,
  ArrowRight,
} from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const industries = [
  { icon: Heart, label: "Healthcare", description: "Seamlessly delivering end-to-end digital health experiences", image: "/healthcare.jpg" },
  { icon: Landmark, label: "Banking & Financial Services", description: "Accelerating digital-first banking transformation", image: "/images/finance.jpg" },
  { icon: Shield, label: "Insurance", description: "Modernizing insurance with AI-driven solutions", image: "/images/insurance.png" },
  { icon: Radio, label: "Telecom", description: "Connecting the future with next-gen telecom solutions", image: "/images/telecom.jpg" },
  { icon: FlaskConical, label: "Life Sciences", description: "Powering innovation in life sciences and pharma", image: "/images/LifeSciences.jpg" },
  { icon: Cpu, label: "High Technology", description: "Enabling tech leaders with cutting-edge digital solutions", image: "/images/high.jpg" },
  { icon: Film, label: "Media & Entertainment", description: "Transforming content delivery and audience engagement", image: "/images/media.jpeg" },
  { icon: Building2, label: "Government", description: "Digitizing public services for better citizen experience", image: "/images/government.png" },
  { icon: Factory, label: "Manufacturing", description: "Smart factory solutions for Industry 4.0", image: "/images/Manufacturing.jpg" },
]

export function IndustryFocus() {
  const [active, setActive] = useState(0)
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="industries" className="bg-background py-20 md:py-28">
      <div ref={ref} className="mx-auto max-w-7xl px-6">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Industry Focus
          </p>
          <h2 className="mb-4 max-w-xl font-heading text-xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
            <span className="text-balance">
              Purpose-built, next-gen solutions grounded in deep industry expertise
            </span>
          </h2>
          <p className="mb-12 max-w-2xl text-base leading-relaxed text-muted-foreground">
            From healthcare to finance, telecom to government bodies, we collaborate
            with clients across sectors to deliver innovative solutions that address
            unique challenges and drive rapid growth.
          </p>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          {/* Left List */}
          <div
            className={`w-full lg:w-2/5 transition-all duration-700 delay-200 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
            }`}
          >
            <ul className="divide-y divide-border rounded-xl border border-border overflow-hidden">
              {industries.map((ind, i) => {
                const Icon = ind.icon
                return (
                  <li key={ind.label}>
                    <button
                      onClick={() => setActive(i)}
                      className={`flex w-full items-center gap-3 px-5 py-4 text-left text-sm transition-all duration-300 ${
                        active === i
                          ? "bg-accent/10 font-semibold text-accent pl-7"
                          : "text-foreground hover:bg-secondary/60 hover:pl-6"
                      }`}
                    >
                      <Icon className={`h-4 w-4 flex-shrink-0 transition-colors duration-300 ${active === i ? "text-accent" : "text-muted-foreground"}`} />
                      <span className="flex-1">{ind.label}</span>
                      {active === i && (
                        <ArrowRight className="h-4 w-4 text-accent animate-slide-in-right" />
                      )}
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Right Image */}
          <div
            className={`relative w-full overflow-hidden rounded-2xl lg:w-3/5 transition-all duration-700 delay-300 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
            }`}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                key={active}
                src={industries[active].image}
                alt={industries[active].label}
                fill
                className="object-cover animate-scale-in"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="mb-4 text-xl font-semibold leading-snug text-primary-foreground md:text-2xl">
                  {industries[active].description}
                </p>
                <Link
                  href="#"
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-accent-foreground transition-all duration-300 hover:shadow-lg hover:shadow-accent/30"
                >
                  Read More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
