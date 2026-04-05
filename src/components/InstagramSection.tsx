'use client'
import { useEffect } from 'react'
import Script from 'next/script'

const INSTAGRAM_USER = 'restaurante_macaregua'
const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_USER}/`

// Los 6 reels reales de @restaurante_macaregua (más recientes primero)
const REELS = [
  'https://www.instagram.com/restaurante_macaregua/reel/DCUlIK0PIg8/',
  'https://www.instagram.com/restaurante_macaregua/reel/DBclwl0vLR7/',
  'https://www.instagram.com/restaurante_macaregua/reel/DAbYImHMVR2/',
  'https://www.instagram.com/restaurante_macaregua/reel/C_I0J8HOQzb/',
  'https://www.instagram.com/restaurante_macaregua/reel/C_HZuaYMKWL/',
  'https://www.instagram.com/restaurante_macaregua/reel/C-thg_rp6tU/',
]

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } }
  }
}

export default function InstagramSection() {
  // Re-procesar embeds si el script ya estaba cargado (navegación entre páginas)
  useEffect(() => {
    if (typeof window !== 'undefined' && window.instgrm) {
      window.instgrm.Embeds.process()
    }
  }, [])

  return (
    <section id="instagram" className="py-20 px-8 max-w-7xl mx-auto">

      {/* Header */}
      <div className="text-center mb-12">
        <p className="eyebrow mb-3">Síguenos</p>
        <div className="flex items-center justify-center gap-3 mb-3">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f09433" />
                <stop offset="25%" stopColor="#e6683c" />
                <stop offset="50%" stopColor="#dc2743" />
                <stop offset="75%" stopColor="#cc2366" />
                <stop offset="100%" stopColor="#bc1888" />
              </linearGradient>
            </defs>
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="url(#ig-grad)" strokeWidth="2" fill="none" />
            <circle cx="12" cy="12" r="4.5" stroke="url(#ig-grad)" strokeWidth="2" fill="none" />
            <circle cx="17.5" cy="6.5" r="1.2" fill="url(#ig-grad)" />
          </svg>
          <h2 className="font-serif text-[32px] font-normal text-[#f0f0f0] leading-snug">
            @{INSTAGRAM_USER}
          </h2>
        </div>
        <p className="text-[13px] font-light text-[#444]">
          Cada plato tiene su historia · Mira nuestros reels en Instagram
        </p>
      </div>

      {/* Grid de reels reales de Instagram */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 items-start">
        {REELS.map((url, i) => (
          <div key={i} className="flex justify-center w-full">
            {/* blockquote procesado por embed.js de Instagram */}
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={url}
              data-instgrm-version="14"
              style={{
                background: '#111',
                border: '1px solid #222',
                borderRadius: '4px',
                margin: '0 auto',
                maxWidth: '100%',
                minWidth: '280px',
                width: '100%',
                padding: '0',
              }}
            >
              {/* Placeholder mientras carga el embed */}
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center h-64 gap-3 text-[#444] hover:text-[#D4A017] transition-colors"
                style={{ textDecoration: 'none' }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" opacity="0.4">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span className="text-[11px] tracking-widest uppercase">Ver en Instagram</span>
              </a>
            </blockquote>
          </div>
        ))}
      </div>

      {/* Botón ver más */}
      <div className="text-center">
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-8 py-3 border border-[#333] text-[#aaa] text-[12px] tracking-widest uppercase rounded-sm hover:border-[#D4A017] hover:text-[#D4A017] transition-all duration-200"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
          Ver más en Instagram
        </a>
      </div>

      {/* Script oficial de Instagram para procesar los embeds */}
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (window.instgrm) window.instgrm.Embeds.process()
        }}
      />
    </section>
  )
}
