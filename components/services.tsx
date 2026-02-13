"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Database,
  Code2,
  Bot,
  ShieldCheck,
  Cloud,
  Layers,
  Lock,
  BarChart3,
  Settings,
  Workflow,
  CheckCircle2,
} from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const services = [
  {
    title: "Data & Analytics",
    subtitle: "Turn data into decisions",
    description:
      "Unlock business value with advanced data engineering, business intelligence, AI/ML models, and real-time predictive analytics. We help enterprises build modern data platforms that enable faster, smarter decision-making at scale.",
    highlights: [
      "Data Lake & Warehouse Modernization",
      "Real-time BI Dashboards & Reporting",
      "Predictive Analytics & ML Models",
      "Data Governance & Quality Frameworks",
    ],
    image: "/images/service-data-analytics.jpg",
    icon: Database,
    accent: "from-blue-600 to-cyan-500",
    href: "#",
  },
  {
    title: "Digital Engineering",
    subtitle: "Build future-ready products",
    description:
      "Architect and deliver resilient, scalable digital products using microservices, cloud-native stacks, and modern DevOps practices. Our engineering teams specialize in rapid prototyping and full-lifecycle product development.",
    highlights: [
      "Cloud-Native Application Development",
      "Microservices & API Architecture",
      "DevOps, CI/CD Pipeline Automation",
      "UI/UX Design & Front-end Engineering",
    ],
    image: "/images/service-digital-engineering.jpg",
    icon: Code2,
    accent: "from-indigo-600 to-blue-500",
    href: "#",
  },
  {
    title: "Intelligent Automation",
    subtitle: "Accelerate every process",
    description:
      "Transform operations with AI-driven process automation, RPA, intelligent document processing, and conversational AI. Reduce manual effort by up to 80% while improving accuracy and compliance.",
    highlights: [
      "Robotic Process Automation (RPA)",
      "AI-Powered Document Processing",
      "Conversational AI & Chatbots",
      "Workflow Orchestration & BPM",
    ],
    image: "/images/service-intelligent-automation.jpg",
    icon: Bot,
    accent: "from-violet-600 to-indigo-500",
    href: "#",
  },
  {
    title: "SAP Services",
    subtitle: "Enterprise resource mastery",
    description:
      "End-to-end SAP consulting, implementation, migration to S/4HANA, and managed services. We bring deep SAP expertise across finance, supply chain, manufacturing, and HR modules to optimize your enterprise operations.",
    highlights: [
      "SAP S/4HANA Migration & Implementation",
      "SAP BTP & Cloud Integration",
      "SAP Analytics & Fiori UX",
      "Managed SAP Operations & AMS",
    ],
    image: "/images/service-sap.jpg",
    icon: Layers,
    accent: "from-amber-600 to-orange-500",
    href: "#",
  },
  {
    title: "Quality Engineering",
    subtitle: "Ship with confidence",
    description:
      "Ensure software excellence with end-to-end quality engineering, automated testing at scale, performance engineering, and security testing. We embed quality into every stage of your development lifecycle.",
    highlights: [
      "Test Automation Frameworks (Selenium, Cypress)",
      "Performance & Load Testing",
      "Security Testing & Vulnerability Assessment",
      "QA Strategy & Advisory",
    ],
    image: "/images/service-quality-engineering.jpg",
    icon: ShieldCheck,
    accent: "from-emerald-600 to-teal-500",
    href: "#",
  },
  {
    title: "Cloud Solutions",
    subtitle: "Modernize your infrastructure",
    description:
      "Accelerate cloud adoption with end-to-end migration, cloud-native development, FinOps optimization, and multi-cloud management across AWS, Azure, and Google Cloud Platform.",
    highlights: [
      "Cloud Migration & Modernization",
      "Multi-Cloud & Hybrid Cloud Strategy",
      "Cloud-Native Development & Containers",
      "FinOps & Cost Optimization",
    ],
    image: "/images/service-cloud.jpg",
    icon: Cloud,
    accent: "from-sky-600 to-blue-500",
    href: "#",
  },
  {
    title: "Cybersecurity",
    subtitle: "Protect what matters most",
    description:
      "Safeguard your digital assets with 24/7 security operations, advanced threat detection, identity management, and regulatory compliance. Our certified experts defend against evolving cyber threats.",
    highlights: [
      "Security Operations Center (SOC)",
      "Identity & Access Management (IAM)",
      "Threat Intelligence & Incident Response",
      "Compliance & Risk Assessment",
    ],
    image: "/images/service-cybersecurity.jpg",
    icon: Lock,
    accent: "from-red-600 to-rose-500",
    href: "#",
  },
]

const iconMap = {
  BarChart3,
  Settings,
  Workflow,
  CheckCircle2,
}

export function Services() {
  const { ref, isVisible } = useScrollReveal()
  const [activeService, setActiveService] = useState(0)
  const active = services[activeService]
  const ActiveIcon = active.icon

  return (
    <section id="services" className="bg-secondary py-20 md:py-28">
      <div ref={ref} className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div
          className={`mb-16 max-w-3xl transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Future Ready Services
          </p>
          <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            <span className="text-balance">
              Transforming enterprises with innovative digital solutions
            </span>
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            We deliver comprehensive technology services that drive measurable business outcomes.
            From strategy to execution, our expert teams partner with you to accelerate your digital transformation journey.
          </p>
        </div>

        {/* Service Tabs */}
        <div
          className={`mb-10 flex flex-wrap gap-2 transition-all duration-700 delay-100 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <button
                key={service.title}
                onClick={() => setActiveService(i)}
                className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                  activeService === i
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "bg-card text-muted-foreground border border-border hover:border-primary/30 hover:text-foreground"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{service.title}</span>
              </button>
            )
          })}
        </div>

        {/* Active Service Detail Card */}
        <div
          className={`overflow-hidden rounded-2xl border border-border bg-card shadow-lg transition-all duration-700 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="flex flex-col lg:flex-row">
            {/* Image Side */}
            <div className="relative w-full lg:w-1/2">
              <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:h-full lg:min-h-[480px]">
                <Image
                  key={activeService}
                  src={active.image}
                  alt={active.title}
                  fill
                  className="object-cover animate-scale-in"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${active.accent} opacity-30 mix-blend-multiply`} />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-xl bg-card/90 px-5 py-3 shadow-xl backdrop-blur-md">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    <ActiveIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{active.subtitle}</p>
                    <p className="font-heading text-sm font-bold text-card-foreground">{active.title}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="flex w-full flex-col justify-center p-8 lg:w-1/2 lg:p-12">
              <div key={activeService} className="animate-fade-up">
                <h3 className="mb-2 font-heading text-2xl font-bold text-card-foreground md:text-3xl">
                  {active.title}
                </h3>
                <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent">
                  {active.subtitle}
                </p>
                <p className="mb-8 text-base leading-relaxed text-muted-foreground">
                  {active.description}
                </p>

                {/* Highlights */}
                <div className="mb-8">
                  <p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-foreground/60">
                    Key Capabilities
                  </p>
                  <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {active.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-sm text-card-foreground"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={active.href}
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-all duration-300 hover:shadow-lg hover:shadow-accent/30"
                >
                  Explore {active.title}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Service Grid Below */}
        <div
          className={`mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7 transition-all duration-700 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <button
                key={service.title}
                onClick={() => setActiveService(i)}
                className={`group flex flex-col items-center gap-3 rounded-xl border p-5 text-center transition-all duration-300 ${
                  activeService === i
                    ? "border-accent/40 bg-accent/5 shadow-md shadow-accent/10"
                    : "border-border bg-card hover:border-accent/20 hover:shadow-md hover:-translate-y-1"
                }`}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 ${
                    activeService === i
                      ? "bg-accent text-accent-foreground shadow-lg shadow-accent/20"
                      : "bg-secondary text-muted-foreground group-hover:bg-accent/10 group-hover:text-accent"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <span
                  className={`text-xs font-semibold leading-tight transition-colors duration-300 ${
                    activeService === i
                      ? "text-accent"
                      : "text-foreground group-hover:text-accent"
                  }`}
                >
                  {service.title}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
