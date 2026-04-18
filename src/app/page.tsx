import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import StatsBar from '@/components/StatsBar'
import InstagramSection from '@/components/InstagramSection'
import dynamic from 'next/dynamic'
import { AboutSection, GMBSection, ReviewsSection, Footer, WhatsAppFloat } from '@/components/sections'

function MenuSkeleton() {
  return (
    <section className="py-14 px-8 max-w-7xl mx-auto">
      <div className="h-3 w-24 bg-[#1e1e1e] rounded animate-pulse mb-4" />
      <div className="h-7 w-56 bg-[#1e1e1e] rounded animate-pulse mb-2" />
      <div className="h-3 w-40 bg-[#1a1a1a] rounded animate-pulse mb-8" />
      <div className="flex gap-2 mb-8">
        {[80,72,80,64,72].map((w,i) => (
          <div key={i} className="h-8 bg-[#1a1a1a] rounded animate-pulse" style={{width: w}} />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1a1a1a] rounded overflow-hidden">
        {Array.from({length: 6}).map((_,i) => (
          <div key={i} className="bg-[#0f0f0f] p-4 flex items-center gap-4">
            <div className="w-14 h-14 bg-[#1a1a1a] rounded animate-pulse flex-shrink-0" />
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-[#1a1a1a] rounded animate-pulse w-3/4" />
              <div className="h-3 bg-[#161616] rounded animate-pulse w-1/2" />
            </div>
            <div className="h-5 w-16 bg-[#1a1a1a] rounded animate-pulse" />
          </div>
        ))}
      </div>
    </section>
  )
}

const MenuSection = dynamic(() => import('@/components/MenuSection'), { ssr: false, loading: () => <MenuSkeleton /> })

export default function Home() {
  return (
    <main className="bg-[#0d0d0d] min-h-screen">
      <Nav />
      <Hero />
      <StatsBar />
      <MenuSection />
      <div className="h-px bg-[#1a1a1a] max-w-7xl mx-auto" />
      <InstagramSection />
      <div className="h-px bg-[#1a1a1a] max-w-7xl mx-auto" />
      <AboutSection />
      <div className="h-px bg-[#1a1a1a] max-w-7xl mx-auto" />
      <GMBSection />
      <div className="h-px bg-[#1a1a1a] max-w-7xl mx-auto" />
      <ReviewsSection />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
