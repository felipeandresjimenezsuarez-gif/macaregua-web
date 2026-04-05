import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import StatsBar from '@/components/StatsBar'
import MenuSection from '@/components/MenuSection'
// import { AboutSection, GMBSection, WhatsAppSection, ReviewsSection, Footer } from '@/components/sections'
// import WhatsAppFloat from '@/components/WhatsAppFloat'

export default function Home() {
  return (
    <main className="bg-[#0d0d0d] min-h-screen">
      <Nav />
      <Hero />
      <StatsBar />
      <MenuSection />
      {/* <AboutSection />
      <GMBSection />
      <WhatsAppSection />
      <ReviewsSection />
      <Footer />
      <WhatsAppFloat /> */}
    </main>
  )
}
