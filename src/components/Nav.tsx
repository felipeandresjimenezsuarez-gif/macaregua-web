'use client'
import Image from 'next/image'
import Link from 'next/link'

const WA_NUMBER = '573052015683'
const WA_MESSAGE = encodeURIComponent('Hola, me gustaría hacer un pedido 🍽️')
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-[#0d0d0d]/95 backdrop-blur-sm border-b border-[#1e1e1e]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/LOGO_macaregua_WHITE.png"
            alt="Macaregua Restaurante"
            width={140}
            height={48}
            priority
            className="object-contain"
          />
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {['#menu', '#galeria', '#nosotros', '#contacto'].map((href, i) => {
            const labels = ['Menú', 'Galería', 'Nosotros', 'Contacto']
            return (
              <a
                key={href}
                href={href}
                className="text-[13px] font-light text-[#777] hover:text-[#D4A017] transition-colors duration-200 tracking-wide"
              >
                {labels[i]}
              </a>
            )
          })}
        </div>

        {/* CTA WhatsApp */}
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="animate-wa-bounce flex items-center gap-2 bg-[#25D366] text-white text-[12px] font-medium px-5 py-2.5 rounded tracking-wide"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.112 1.524 5.84L0 24l6.336-1.48A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.37l-.36-.213-3.732.872.934-3.612-.235-.372A9.78 9.78 0 012.182 12c0-5.42 4.398-9.818 9.818-9.818 5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z"/>
          </svg>
          Pedir por WhatsApp
        </a>
      </div>
    </nav>
  )
}
