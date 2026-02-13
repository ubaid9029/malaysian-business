"use client"

import { MapPin, Globe } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const regions = [
  { region: "Malaysia" },
  { region: "UAE" },
  { region: "Dallas USA" },
  { region: "India" },
]

export function Offices() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="relative overflow-hidden bg-white py-8">
      {/* 🌌 Futuristic Background */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-black via-primary/20 to-black" /> */}

      {/* Glow Orbs */}
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] bg-accent/20 blur-[140px] rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] bg-primary/20 blur-[120px] rounded-full animate-pulse" />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div ref={ref} className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-12 lg:flex-row">

          {/* 🌍 Left - Futuristic Globe */}
          <div
            className={`flex w-full items-center justify-center lg:w-1/2 transition-all duration-700 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <div className=" flex flex-col space-y-5 items-center justify-center ">
              
              {/* Rotating Ring */}
              {/* <div className="absolute h-full w-full rounded-full border border-accent/40 animate-spin-slow" /> */}

              <img src="/earth.png" alt="Earth" className="h-1000 w-1000 drop-shadow-gray/400" />

              {/* <div className="absolute bottom-10 text-center">
                <p className="text-accent text-md uppercase tracking-widest">
                  Global Presence
                </p>
                <p className="text-4xl font-bold text-white">
                  4 Regions
                </p>
              </div> */}
            </div>
          </div>

          {/* 🏢 Right - Office Cards */}
          <div
            className={`w-full lg:w-1/2 transition-all duration-700 delay-200 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <h2 className="mb-10 text-3xl font-bold text-black md:text-4xl">
              Our Global Offices
            </h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {regions.map((r, i) => (
                <div
                  key={r.region}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gray-300 p-6 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-accent/60 hover:shadow-gray-400"
                >
                  {/* Neon border glow */}
                  <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-accent/50 transition-all duration-300" />

                  <div className="flex items-center gap-3 mb-3">
                    <div className="rounded-full bg-accent/20 p-2 group-hover:bg-accent transition-all duration-300">
                      <MapPin className="h-5 w-5 text-accent group-hover:text-black transition-all duration-300" />
                    </div>

                    <h3 className="text-lg font-semibold text-black">
                      {r.region}
                    </h3>
                  </div>

                  <p className="text-sm text-black/60">
                    Strategic regional hub powering digital transformation.
                  </p>

                  <div className="absolute top-4 right-4 text-xs text-accent/70">
                    #{i + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
