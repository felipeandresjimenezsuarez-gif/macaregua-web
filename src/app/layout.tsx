import type { Metadata } from 'next'
import { Merriweather, DM_Sans } from 'next/font/google'
import ScrollReveal from '@/components/ScrollReveal'
import './globals.css'

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-merriweather',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Macaregua Restaurante · Pizza · Café | Girón, Santander',
  description:
    'Sabor colombiano sin rodeos. Almuerzos ejecutivos, pizzas caseras y desayunos completos en Girón, Santander. Vía Chimita Km 1. Abierto todos los días hasta las 11 PM.',
  keywords: [
    'restaurante girón',
    'almuerzo ejecutivo girón',
    'domicilios vía chimita',
    'pizza santander',
    'macaregua restaurante',
    'comida colombiana girón',
    'restaurante vía chimita',
  ],
  openGraph: {
    title: 'Macaregua Restaurante · Pizza · Café',
    description: 'Sabor colombiano sin rodeos. Girón, Santander.',
    url: 'https://macaregua.com',
    siteName: 'Restaurante Macaregua',
    images: [{ url: '/images/hero-cazuela.png', width: 1200, height: 630 }],
    locale: 'es_CO',
    type: 'website',
  },
  other: {
    'application/ld+json': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Restaurant',
      name: 'Restaurante Macaregua',
      servesCuisine: 'Colombian',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Vía Chimita #Km 1',
        addressLocality: 'Girón',
        addressRegion: 'Santander',
        addressCountry: 'CO',
      },
      telephone: '+5776760719',
      openingHours: 'Mo-Su 06:00-23:00',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.4',
        reviewCount: '83',
      },
      url: 'https://macaregua.com',
    }),
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${merriweather.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">
        <ScrollReveal />
        {children}
      </body>
    </html>
  )
}
