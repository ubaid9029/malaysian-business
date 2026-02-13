import Link from "next/link"
import Image from "next/image"
import { Linkedin, Twitter, Facebook, Youtube, ArrowRight } from "lucide-react"

const navigation = [
  {
    title: "Navigation",
    links: [
      { label: "Industries", href: "#industries" },
      { label: "Services", href: "#services" },
      { label: "About Us", href: "#about" },
      { label: "News & Insights", href: "#news" },
      { label: "Careers", href: "#careers" },
    ],
  },
  {
    title: "What We Do",
    links: [
      { label: "Applied AI Solutions", href: "#" },
      { label: "Artificial Intelligence", href: "#" },
      { label: "Cloud & Infrastructure", href: "#" },
      { label: "SAP Services", href: "#" },
      { label: "Cybersecurity", href: "#" },
      { label: "Data & Analytics", href: "#" },
      { label: "Digital Engineering", href: "#" },
      { label: "Quality Engineering", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Use", href: "#" },
      { label: "Vulnerability Disclosure", href: "#" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-[hsl(216,55%,10%)]">
      <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          {/* Logo + Tagline */}
          <div className="w-full lg:w-1/4">
            <div className="mb-5">
                  {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo.jpeg"
            alt="Malaysian Business Machines Logo"
            width={200}
            height={52}
            className="h-11 w-auto brightness-0 invert transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <span className="text-white">Malaysian Business Machines</span>
        </Link>
            </div>
            <p className="mb-8 text-sm leading-relaxed text-primary-foreground/50">
              Take the first step towards a digitally engineered tomorrow.
            </p>
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all duration-300 hover:shadow-lg hover:shadow-accent/30"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            {/* Social */}
            <div className="mt-8 flex gap-4">
              {[
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Twitter, label: "Twitter" },
                { icon: Facebook, label: "Facebook" },
                { icon: Youtube, label: "YouTube" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/10 text-primary-foreground/40 transition-all duration-300 hover:border-accent hover:bg-accent/10 hover:text-accent"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav Columns */}
          <div className="grid flex-1 grid-cols-1 gap-8 sm:grid-cols-3">
            {navigation.map((col) => (
              <div key={col.title}>
                <h3 className="mb-5 font-heading text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/40">
                  {col.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-primary-foreground/50 transition-all duration-300 hover:text-primary-foreground hover:pl-1"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 border-t border-primary-foreground/10 pt-7">
          <p className="text-xs text-primary-foreground/30">
            {"\u00A9"} 2026 Malaysian Business Machines. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
