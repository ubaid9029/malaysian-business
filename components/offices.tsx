"use client"

import { MapPin, Globe } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const regions = [
  {
    region: "Malaysia",
    cities: ["Kuala Lumpur (HQ)", "Penang", "Johor Bahru", "Kota Kinabalu"],
  },
  {
    region: "Southeast Asia",
    cities: ["Singapore", "Jakarta", "Bangkok", "Manila"],
  },
  {
    region: "Asia Pacific",
    cities: ["Hong Kong", "Taipei", "Sydney"],
  },
  {
    region: "Global",
    cities: ["London", "Dubai"],
  },
]

export function Offices() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="relative overflow-hidden bg-primary py-20 md:py-28">
      {/* Decorative background */}
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

      <div ref={ref} className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-14 lg:flex-row">
          {/* Left - Globe visualization */}
          <div
            className={`flex w-full items-center justify-center lg:w-1/2 transition-all duration-700 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
            }`}
          >
            <div className="relative flex h-72 w-full items-center justify-center rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur-sm md:h-96">
              <div className="text-center">
                <Globe className="mx-auto mb-5 h-16 w-16 text-accent animate-pulse" />
                <p className="mb-1 text-lg font-medium text-primary-foreground/80">
                  Presence Across
                </p>
                <p className="font-heading text-5xl font-bold text-accent md:text-6xl">
                  4 Regions
                </p>
                <p className="mt-3 text-sm text-primary-foreground/50">
                  14+ Office Locations Worldwide
                </p>
              </div>
              {/* Decorative dots */}
              <div className="absolute left-8 top-8 h-2 w-2 rounded-full bg-accent/60 animate-ping" />
              <div className="absolute right-12 top-16 h-1.5 w-1.5 rounded-full bg-accent/40 animate-ping" style={{ animationDelay: "0.5s" }} />
              <div className="absolute bottom-12 left-16 h-1.5 w-1.5 rounded-full bg-accent/40 animate-ping" style={{ animationDelay: "1s" }} />
              <div className="absolute bottom-16 right-8 h-2 w-2 rounded-full bg-accent/60 animate-ping" style={{ animationDelay: "1.5s" }} />
            </div>
          </div>

          {/* Right - Office List */}
          <div
            className={`w-full lg:w-1/2 transition-all duration-700 delay-200 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
            }`}
          >
            <h2 className="mb-10 font-heading text-3xl font-bold text-primary-foreground md:text-4xl">
              Our Offices
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {regions.map((r) => (
                <div key={r.region} className="group">
                  <h3 className="mb-3 flex items-center gap-2 font-heading text-sm font-bold text-accent">
                    <MapPin className="h-4 w-4" />
                    {r.region}
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {r.cities.map((city) => (
                      <li
                        key={city}
                        className="text-sm text-primary-foreground/60 transition-colors duration-300 hover:text-primary-foreground"
                      >
                        {city}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
