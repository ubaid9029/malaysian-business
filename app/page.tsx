import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { IndustryFocus } from "@/components/industry-focus"
import { Services } from "@/components/services"
import { Stats } from "@/components/stats"
import { Testimonials } from "@/components/testimonials"
import { Partners } from "@/components/partners"
import { News } from "@/components/news"
import { Careers } from "@/components/careers"
import { Offices } from "@/components/offices"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <>
      <Header />
      <main className="">
        <Hero />
        <IndustryFocus />
        <Services />
        <Stats />
        <Testimonials />
        <Partners />
        <News />
        <Careers />
        <Offices />
      </main>
      <SiteFooter />
    </>
  )
}
