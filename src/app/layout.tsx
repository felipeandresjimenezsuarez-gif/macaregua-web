import type { Metadata, Viewport } from 'next'
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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://macaregua.com'),
  title: 'Restaurante Macaregua | Comida Santandereana en Chimita · Domicilios Bucaramanga',
  description:
    'Restaurante Macaregua — cocina santandereana auténtica en Vía Chimita Km 1, Girón. Almuerzos ejecutivos, pinchos, hamburguesas y domicilios a Bucaramanga. Abierto lunes a sábado hasta las 10:30 PM.',
  keywords: [
    'Restaurante Macaregua',
    'comida santandereana Chimita',
    'restaurante Vía Chimita',
    'domicilios Bucaramanga',
    'domicilios Girón Santander',
    'almuerzo ejecutivo Girón',
    'pinchos Bucaramanga',
    'hamburguesas Chimita',
    'restaurante colombiano Girón',
    'comida a domicilio Bucaramanga',
    'restaurante Girón Santander',
  ],
  openGraph: {
    title: 'Restaurante Macaregua · Comida Santandereana en Chimita',
    description:
      'Cocina santandereana auténtica a domicilio en Bucaramanga y Girón. Pinchos, hamburguesas, almuerzos ejecutivos. Pedí por WhatsApp.',
    url: 'https://macaregua.com',
    siteName: 'Restaurante Macaregua',
    images: [{ url: '/images/logo-macaregua.png', width: 800, height: 800, alt: 'Logo Restaurante Macaregua' }],
    locale: 'es_CO',
    type: 'website',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Restaurante Macaregua',
  servesCuisine: 'Colombian, Santandereana',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Vía Chimita #Km 1',
    addressLocality: 'Girón',
    addressRegion: 'Santander',
    addressCountry: 'CO',
  },
  telephone: '+577676071905',
  openingHours: 'Mo-Sa 06:30-22:30',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.4',
    reviewCount: '83',
  },
  url: 'https://macaregua.com',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${merriweather.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="font-sans antialiased">
        <ScrollReveal />
        {children}
      </body>
    </html>
  )
}
