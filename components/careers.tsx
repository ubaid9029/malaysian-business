"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Star, Trophy } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function Careers() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="careers" className="bg-secondary py-20 md:py-28">
      <div ref={ref} className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          {/* Left Content */}
          <div
            className={`w-full lg:w-1/2 transition-all duration-700 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
            }`}
          >
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Join a Team of
            </p>
            <h2 className="mb-5 font-heading text-4xl font-bold text-foreground md:text-5xl">
              Innovators
            </h2>
            <p className="mb-10 max-w-md text-base leading-relaxed text-muted-foreground">
              Discover what inspires and motivates you as you unlock your full
              potential. Be part of a dynamic team shaping the future of
              enterprise technology.
            </p>

            {/* Award badges */}
            <div className="mb-10 flex flex-wrap gap-4">
              {[
                { icon: Trophy, label: "Top Employer" },
                { icon: Star, label: "Great Place to Work" },
                { icon: Award, label: "Best in Tech" },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className="group flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-3 transition-all duration-300 hover:border-accent/30 hover:shadow-md"
                >
                  <badge.icon className="h-5 w-5 text-accent transition-transform duration-300 group-hover:scale-110" />
                  <span className="text-sm font-semibold text-foreground">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="#"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-all duration-300 hover:shadow-lg hover:shadow-accent/30"
            >
              Work With Us
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Right Image */}
          <div
            className={`relative w-full lg:w-1/2 transition-all duration-700 delay-200 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
            }`}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/inovators.jpeg"
                alt="Team of innovators at Malaysian Business Machines"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-primary/10" />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-4 -left-4 rounded-xl border border-border bg-card p-4 shadow-xl md:-bottom-6 md:-left-6">
              <p className="font-heading text-2xl font-bold text-accent">500+</p>
              <p className="text-xs text-muted-foreground">Team Members</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
