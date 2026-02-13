"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react"

const navItems = [
  {
    label: "Industries",
    href: "#industries",
    children: [
      { label: "Healthcare", href: "#" },
      { label: "Banking & Financial Services", href: "#" },
      { label: "Insurance", href: "#" },
      { label: "Telecom", href: "#" },
      { label: "Manufacturing", href: "#" },
    ],
  },
  {
    label: "Services",
    href: "#services",
    children: [
      { label: "Data & Analytics", href: "#" },
      { label: "Digital Engineering", href: "#" },
      { label: "Intelligent Automation", href: "#" },
      { label: "SAP Services", href: "#" },
      { label: "Quality Engineering", href: "#" },
      { label: "Cloud Solutions", href: "#" },
      { label: "Cybersecurity", href: "#" },
    ],
  },
  {
    label: "Solutions",
    href: "#solutions",
    children: [
      { label: "Cloud Solutions", href: "#" },
      { label: "Enterprise Applications", href: "#" },
      { label: "Cybersecurity", href: "#" },
    ],
  },
  {
    label: "About Us",
    href: "#about",
    children: [
      { label: "Our Story", href: "#" },
      { label: "Leadership", href: "#" },
      { label: "Careers", href: "#careers" },
    ],
  },
  { label: "Careers", href: "#careers" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-primary/95 shadow-lg shadow-primary/20 backdrop-blur-md"
          : "bg-primary"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
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
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-0.5 lg:flex">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium text-primary-foreground/80 transition-all duration-300 hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                {item.label}
                {item.children && (
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-300 ${
                      openDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                )}
              </Link>
              {item.children && openDropdown === item.label && (
                <div className="absolute left-0 top-full min-w-[260px] animate-fade-up rounded-xl border border-primary-foreground/10 bg-card p-2 shadow-xl shadow-primary/20">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm text-card-foreground transition-all duration-200 hover:bg-secondary hover:pl-5"
                    >
                      <ArrowRight className="h-3 w-3 text-accent opacity-0 transition-opacity group-hover:opacity-100" />
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Contact CTA */}
        <div className="hidden lg:block">
          <Link
            href="#contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-accent-foreground transition-all duration-300 hover:shadow-lg hover:shadow-accent/30"
          >
            <span className="relative z-10">Contact Us</span>
            <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-[hsl(16,85%,45%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-primary-foreground lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${
          mobileOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="border-t border-primary-foreground/10 bg-primary px-6 py-4">
          {navItems.map((item) => (
            <div key={item.label} className="border-b border-primary-foreground/10 last:border-0">
              <Link
                href={item.href}
                className="block py-3.5 text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            </div>
          ))}
          <Link
            href="#contact"
            className="mt-4 block rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold text-accent-foreground"
            onClick={() => setMobileOpen(false)}
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  )
}
