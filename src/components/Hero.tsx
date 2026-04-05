'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const WA_URL = `https://wa.me/573052015683?text=${encodeURIComponent('Hola, me gustaría hacer un pedido a domicilio 🍽️')}`

const HERO_IMAGES = [
  { src: '/images/hero-bandeja-paisa.jpg', alt: 'Bandeja Paisa Macaregua' },
  { src: '/images/hero-cazuela.jpg',       alt: 'Cazuela de Mariscos' },
  { src: '/images/hero-caldo-arepa.jpg',   alt: 'Caldo con Arepa' },
  { src: '/images/hero-sancocho.jpg',      alt: 'Sancocho especial' },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % HERO_IMAGES.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-[460px] flex items-center justify-center text-center overflow-hidden">

      {/* Fondo con imagen carousel */}
      {HERO_IMAGES.map((img, i) => (
        <div
          key={img.src}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover"
            priority={i === 0}
          />
          <div className="absolute inset-0 bg-[#0d0d0d]/75" />
        </div>
      ))}

      {/* Grid overlay */}
      <div className="absolute inset-0 hero-grid-bg opacity-20 z-10" />

      {/* Glow center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#D4A017]/8 rounded-full z-10" />

      {/* Contenido */}
      <div className="relative z-20 max-w-3xl mx-auto px-8 py-20">
        <p className={`eyebrow transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
           style={{ transitionDelay: '100ms' }}>
          Girón, Santander · Vía Chimita Km 1
        </p>

        <h1 className={`font-serif text-[54px] font-light leading-[1.12] text-white mt-0 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '200ms' }}>
          Sabor colombiano<br />
          <em className="text-[#D4A017] italic">sin rodeos.</em>
        </h1>

        <div className={`w-10 h-px bg-[#D4A017] mx-auto my-5 transition-all duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
             style={{ transitionDelay: '350ms' }} />

        <p className={`text-[11px] font-light text-[#555] tracking-[0.16em] uppercase mb-9 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
           style={{ transitionDelay: '400ms' }}>
          Donde cada plato tiene historia · Abierto hasta las 11 PM
        </p>

        <div className={`flex flex-wrap gap-3 justify-center transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
             style={{ transitionDelay: '500ms' }}>
          <a href="#menu" className="btn-gold">Ver el Menú</a>
          <a href="tel:76760719" className="btn-outline">Llamar para Reservar</a>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-wa">
            Domicilio WhatsApp
          </a>
        </div>

        {/* Indicadores del carousel */}
        <div className="flex justify-center gap-2 mt-8">
          {HERO_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-px transition-all duration-300 ${i === current ? 'w-8 bg-[#D4A017]' : 'w-4 bg-[#333]'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
