import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import StatsBar from '@/components/StatsBar'
import dynamic from 'next/dynamic'

const MenuSection = dynamic(() => import('@/components/MenuSection'), { ssr: false })

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
