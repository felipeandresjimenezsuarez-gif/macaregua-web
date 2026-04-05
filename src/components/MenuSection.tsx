'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const WA = (plato: string) =>
  `https://wa.me/573052015683?text=${encodeURIComponent(`Hola, quiero ordenar: ${plato}`)}`

const ALMUERZOS = [
  {
    name: 'Almuerzo Medio',
    desc: 'Selección especial para personal autorizado. Un plato completo y satisfactorio.',
    price: '$20.000',
    featured: false,
    img: '/images/plato-almuerzo.jpg',
  },
  {
    name: 'Corriente Normal',
    desc: 'El plato tradicional de la casa. Sopa, seco y jugo. La experiencia Macaregua.',
    price: '$22.000',
    featured: false,
    img: '/images/hero-bandeja-paisa.jpg',
  },
  {
    name: 'Corriente Mixto',
    desc: 'Incluye los dos principios del día. La opción más completa preferida por nuestros clientes.',
    price: '$25.000',
    featured: true,
    img: '/images/hero-cazuela.jpg',
  },
]

const DESAYUNOS = [
  { name: 'Bandeja Asada Pechuga Cerdo', price: '$20.000', base: 'Precio base', extras: [],                            img: '/images/pollo-plancha.jpg',       pos: 'object-center' },
  { name: 'Caldo de Res Especial',       price: '$30.000', base: 'Con bebida',  extras: ['Sin bebida −$3.000'],        img: '/images/caldo-costilla.jpg',     pos: 'object-top' },
  { name: 'Caldo de Costilla',           price: '$33.000', base: 'Con bebida',  extras: ['Sin bebida −$3.000'],        img: '/images/caldo-costilla.jpg',     pos: 'object-top' },
  { name: 'Caldo con Huevo y Arepa',     price: '$18.000', base: 'Con bebida',  extras: ['Sin bebida −$2.000', '+ Queso +$2.000'], img: '/images/caldo-huevo.jpg', pos: 'object-top' },
  { name: 'Caldo de Pollo',              price: '$16.000', base: 'Con bebida',  extras: ['Sin bebida −$2.000', '+ Huevos +$3.000'], img: '/images/caldo-huevo.jpg', pos: 'object-top' },
  { name: 'Huevos al Gusto',             price: '$16.000', base: 'Con bebida',  extras: ['Sin bebida −$3.000'],        img: '/images/plato-bandeja-paisa.jpg', pos: 'object-center' },
  { name: 'Bandeja de Carne',            price: '$18.000', base: 'Con bebida',  extras: [],                            img: '/images/plato-bandeja-paisa.jpg', pos: 'object-center' },
  { name: 'Sandwich de Pollo',           price: '$18.000', base: 'Sin papa',    extras: ['+ Jugo +$4.000'],            img: '/images/pollo-plancha.jpg',       pos: 'object-center' },
  { name: 'Sandwich Jamón y Queso',      price: '$12.000', base: 'Sin papa',    extras: ['+ Jugo +$4.000'],            img: '/images/plato-bandeja-paisa.jpg', pos: 'object-center' },
  { name: 'Huevos Pericos / Rancheros',  price: '$10.000', base: 'Precio fijo', extras: [],                            img: '/images/plato-bandeja-paisa.jpg', pos: 'object-center' },
  { name: 'Arepa con Queso',             price: '$3.500',  base: 'Base',        extras: ['+ Jamón +$500'],             img: '/images/gallery-pollo-plancha.jpg', pos: 'object-center' },
]

const ACARTA = [
  { name: 'Chatas',               price: '$42.000', base: 'Acompañamientos', extras: ['Arroz, papa a la francesa, ensalada'],  img: '/images/plato-bandeja-paisa.jpg', pos: 'object-center' },
  { name: 'Carne a la Plancha',   price: '$30.000', base: 'Acompañamientos', extras: ['Arroz, papa a la francesa, ensalada'],  img: '/images/plato-almuerzo.jpg',      pos: 'object-[center_30%]' },
  { name: 'Pechuga a la Plancha', price: '$30.000', base: 'Acompañamientos', extras: ['Arroz, papa a la francesa, ensalada'],  img: '/images/pollo-plancha.jpg',       pos: 'object-center' },
  { name: 'Pechuga Gratinada',    price: '$36.000', base: 'Acompañamientos', extras: ['Arroz, papa a la francesa, ensalada'],  img: '/images/pollo-plancha.jpg',       pos: 'object-center' },
  { name: 'Cerdo a la Plancha',   price: '$30.000', base: 'Acompañamientos', extras: ['Arroz, papa a la francesa, ensalada'],  img: '/images/plato-bandeja-paisa.jpg', pos: 'object-center' },
  { name: 'Sobrebarriga',         price: '$36.000', base: 'Acompañamientos', extras: ['Arroz, papa a la francesa, ensalada'],  img: '/images/plato-almuerzo.jpg',      pos: 'object-[center_30%]' },
  { name: 'Mojarra Frita',        price: '$30.000', base: 'Acompañamientos', extras: ['Arroz, ensalada, papa o patacón'],      img: '/images/cazuela-mariscos.jpg',    pos: 'object-center' },
  { name: 'Bagre Frito',          price: '$36.000', base: 'Acompañamientos', extras: ['Arroz, ensalada, papa o patacón'],      img: '/images/cazuela-mariscos.jpg',    pos: 'object-center' },
  { name: 'Bagre Sudado',         price: '$38.000', base: 'Acompañamientos', extras: ['Arroz, ensalada, papa o patacón'],      img: '/images/cazuela-mariscos.jpg',    pos: 'object-center' },
  { name: 'Cazuela Mariscos',     price: '$32.000', base: 'Acompañamientos', extras: ['Arroz, ensalada, papa o patacón'],      img: '/images/cazuela-mariscos.jpg',    pos: 'object-center' },
  { name: 'Lasagna Mixta',        price: '$30.000', base: 'Carne, pollo',    extras: ['Incluye acompañamientos'],              img: '/images/plato-almuerzo.jpg',      pos: 'object-[center_30%]' },
  { name: 'Lasagna Especial',     price: '$36.000', base: 'Champiñón',       extras: ['Incluye acompañamientos'],              img: '/images/plato-almuerzo.jpg',      pos: 'object-[center_30%]' },
]

const PIZZAS = [
  { name: 'Pizza Hawaiana (Clásica)',     price: '$32.000', base: 'Personal', extras: ['Pequeña +$10.000', 'Mediana +$30.000', 'Maxi +$43.000'] },
  { name: 'Pizza Carnes (Clásica)',       price: '$32.000', base: 'Personal', extras: ['Pequeña +$10.000', 'Mediana +$30.000', 'Maxi +$43.000'] },
  { name: 'Pizza Pepperoni (Clásica)',    price: '$32.000', base: 'Personal', extras: ['Pequeña +$10.000', 'Mediana +$30.000', 'Maxi +$43.000'] },
  { name: 'Pizza Mexicana (Clásica)',     price: '$32.000', base: 'Personal', extras: ['Pequeña +$10.000', 'Mediana +$30.000', 'Maxi +$43.000'] },
  { name: 'Pizza Napolitana (Clásica)',   price: '$32.000', base: 'Personal', extras: ['Pequeña +$10.000', 'Mediana +$30.000', 'Maxi +$43.000'] },
  { name: 'Pizza Marinera (Especial)',    price: '$35.000', base: 'Personal', extras: ['Pequeña +$10.000', 'Mediana +$30.000', 'Maxi +$50.000'] },
  { name: 'Pizza Ritmo Especial',         price: '$35.000', base: 'Personal', extras: ['Pequeña +$10.000', 'Mediana +$30.000', 'Maxi +$50.000'] },
  { name: 'Pizza Frutas (Especial)',      price: '$35.000', base: 'Personal', extras: ['Pequeña +$10.000', 'Mediana +$30.000', 'Maxi +$50.000'] },
  { name: 'Pizza Vegetariana (Especial)', price: '$35.000', base: 'Personal', extras: ['Pequeña +$10.000', 'Mediana +$30.000', 'Maxi +$50.000'] },
  { name: 'Panzerotti',                   price: '$25.000', base: 'Precio fijo', extras: [] },
]

const BEBIDAS = [
  { name: 'Agua',                    price: '$7.000',  base: 'Vaso',        extras: ['Botella +$3.000'],             type: 'agua' },
  { name: 'Leche',                   price: '$8.000',  base: 'Vaso',        extras: ['Botella +$3.000'],             type: 'caliente' },
  { name: 'Jugo Natural',            price: '$7.000',  base: 'Vaso',        extras: ['Vaso grande +$2.000'],         type: 'jugo' },
  { name: 'Limonada Natural',        price: '$7.000',  base: 'Jarra',       extras: ['Vaso individual +$2.000'],     type: 'jugo' },
  { name: 'Limonada de Coco',        price: '$10.000', base: 'Jarra',       extras: ['Vaso individual +$3.000'],     type: 'jugo' },
  { name: 'Limonada de Hierbabuena', price: '$10.000', base: 'Jarra',       extras: ['Vaso individual +$3.000'],     type: 'jugo' },
  { name: 'Gaseosa',                 price: '$2.500',  base: 'Lata/Vaso',   extras: ['Botella 2L +$5.000'],          type: 'gaseosa' },
  { name: 'Agua Aromática (Té)',     price: '$2.000',  base: 'Taza',        extras: ['Con leche +$1.000'],           type: 'caliente' },
  { name: 'Cerveza Nacional',        price: '$4.500',  base: 'Precio fijo', extras: [],                              type: 'cerveza' },
  { name: 'Cerveza Importada',       price: '$6.000',  base: 'Precio fijo', extras: [],                              type: 'cerveza' },
  { name: 'Margarita',               price: '$20.000', base: 'Cóctel',      extras: ['Premium +$5.000'],             type: 'coctel' },
  { name: 'Piña Colada',             price: '$20.000', base: 'Cóctel',      extras: ['Premium +$5.000'],             type: 'coctel' },
  { name: 'Daiquiri',                price: '$20.000', base: 'Cóctel',      extras: ['Premium +$5.000'],             type: 'coctel' },
  { name: 'Amor en Ritmo',           price: '$20.000', base: 'Cóctel',      extras: ['Premium +$5.000'],             type: 'coctel' },
  { name: 'Sangría',                 price: '$40.000', base: 'Jarra',       extras: ['Vaso +$8.000'],                type: 'coctel' },
]

const TABS = ['Desayuno', 'A la Carta', 'Almuerzo', 'Pizzas', 'Bebidas']
const TAB_HASHES = ['desayuno', 'acarta', 'almuerzo', 'pizzas', 'bebidas']

// Pizza slice icon - warm amber tones
function PizzaIcon() {
  return (
    <div className="w-14 h-14 rounded flex-shrink-0 flex items-center justify-center bg-[#160c00] border border-[#2a1500]">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L22 20H2L12 2Z" fill="#D4A017" fillOpacity="0.12" stroke="#D4A017" strokeWidth="1.3" strokeLinejoin="round"/>
        <circle cx="12" cy="12.5" r="1.6" fill="#D4A017" fillOpacity="0.8"/>
        <circle cx="9" cy="16.5" r="1.1" fill="#e05030" fillOpacity="0.85"/>
        <circle cx="15" cy="16.5" r="1.1" fill="#e05030" fillOpacity="0.85"/>
        <path d="M5.5 19.5 Q12 21.5 18.5 19.5" stroke="#D4A017" strokeWidth="1.8" strokeLinecap="round" strokeOpacity="0.45"/>
      </svg>
    </div>
  )
}

// Drink glass icon - varies by type
function BebidaIcon({ type }: { type: string }) {
  const isCoctel = type === 'coctel'
  const isCerveza = type === 'cerveza'
  const isCaliente = type === 'caliente'

  const bg = isCoctel ? '#07101a' : isCerveza ? '#0e0c00' : isCaliente ? '#100808' : '#061210'
  const border = isCoctel ? '#0d2235' : isCerveza ? '#1e1a00' : isCaliente ? '#1e0a0a' : '#082820'
  const color = isCoctel ? '#5ab4d4' : isCerveza ? '#c8a020' : isCaliente ? '#c86040' : '#40b870'

  return (
    <div
      className="w-14 h-14 rounded flex-shrink-0 flex items-center justify-center border"
      style={{ backgroundColor: bg, borderColor: border }}
    >
      {isCoctel ? (
        // Martini glass
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M5 4h14L12 13V20" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.9"/>
          <path d="M9 20h6" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
          <path d="M18 4l-3 4" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
        </svg>
      ) : isCerveza ? (
        // Beer mug
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M6 4h10l-1.5 16H7.5L6 4Z" fill={color} fillOpacity="0.1" stroke={color} strokeWidth="1.3" strokeLinejoin="round"/>
          <path d="M16 8h2a2 2 0 0 1 0 4h-2" stroke={color} strokeWidth="1.3" strokeLinecap="round" opacity="0.7"/>
          <path d="M7 8h8" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
          <rect x="7" y="4" width="9" height="3" rx="0.5" fill={color} fillOpacity="0.3"/>
        </svg>
      ) : isCaliente ? (
        // Coffee cup
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M6 9h10l-1 9H7L6 9Z" fill={color} fillOpacity="0.1" stroke={color} strokeWidth="1.3" strokeLinejoin="round"/>
          <path d="M16 11h1.5a1.5 1.5 0 0 1 0 3H16" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.7"/>
          <path d="M6 18h10" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
          <path d="M10 5 Q10 3 12 3 Q12 5 10 5" stroke={color} strokeWidth="1" strokeLinecap="round" fillOpacity="0" opacity="0.6"/>
        </svg>
      ) : (
        // Juice glass / water
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M8 4h8l-1.5 16h-5L8 4Z" fill={color} fillOpacity="0.1" stroke={color} strokeWidth="1.3" strokeLinejoin="round"/>
          <path d="M8.5 10 Q12 12 15.5 10" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
          <circle cx="12" cy="14" r="1" fill={color} fillOpacity="0.5"/>
          <path d="M15 4 Q16 2 17 3" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
        </svg>
      )}
    </div>
  )
}

export default function MenuSection() {
  const [active, setActive] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const section = document.getElementById('menu')
    if (section) section.classList.add('visible')
    const hash = window.location.hash.slice(1)
    const tabIndex = TAB_HASHES.indexOf(hash)
    if (tabIndex !== -1) setActive(tabIndex)
  }, [])

  const handleTabClick = (index: number) => {
    setActive(index)
    window.location.hash = TAB_HASHES[index]
  }

  if (!mounted) {
    return <section id="menu" className="py-14 px-8 max-w-7xl mx-auto reveal visible"></section>
  }

  return (
    <section id="menu" className="py-14 px-8 max-w-7xl mx-auto reveal visible">
      <p className="eyebrow">Menú completo</p>
      <h2 className="font-serif text-[32px] font-normal text-[#f0f0f0] leading-snug mb-2">¿Qué se te antoja?</h2>
      <p className="text-[13px] font-light text-[#444] mb-8">El menú cambia según la hora · Ordena directo por WhatsApp · IVA incluido</p>

      {/* Tabs */}
      <div className="flex gap-2 flex-wrap mb-8">
        {TABS.map((t, i) => (
          <button
            key={t}
            onClick={() => handleTabClick(i)}
            className={`text-[12px] px-5 py-2 rounded-sm border tracking-wide transition-all duration-200 ${
              active === i
                ? 'bg-[#D4A017] text-[#1a0f00] border-[#D4A017] font-medium'
                : 'bg-transparent text-[#555] border-[#222] hover:border-[#D4A017] hover:text-[#D4A017]'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* DESAYUNOS */}
      {active === 0 && (
        <div>
          <div className="flex gap-3 items-start bg-[#111] border border-[#1e1e1e] rounded p-4 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#D4A017] mt-1 flex-shrink-0" />
            <p className="text-[12px] font-light text-[#555] leading-relaxed">
              <span className="text-[#D4A017] font-normal">Precio base + extras al gusto.</span>{' '}
              Ingredientes adicionales como huevo extra, queso, jamón o bebida ajustan el precio final. Consulta disponibilidad por WhatsApp.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1a1a1a] rounded overflow-hidden">
            {DESAYUNOS.map((d) => (
              <div key={d.name} className="bg-[#0f0f0f] p-4 flex items-center gap-4 hover:bg-[#131313] transition-colors">
                <div className="w-14 h-14 rounded flex-shrink-0 bg-[#222] overflow-hidden relative">
                  <Image
                    src={d.img}
                    alt={d.name}
                    fill
                    className={`object-cover ${d.pos}`}
                    sizes="56px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-serif text-[15px] font-normal text-[#ddd] mb-1 leading-snug">{d.name}</div>
                  <div className="flex gap-1.5 flex-wrap mb-2">
                    <span className="text-[10px] px-2 py-0.5 rounded-sm border border-[#D4A01730] bg-[#D4A01710] text-[#D4A017] tracking-wide">{d.base}</span>
                    {d.extras.map((e) => (
                      <span key={e} className="text-[10px] px-2 py-0.5 rounded-sm border border-[#2222228c] bg-[#111] text-[#555] tracking-wide">{e}</span>
                    ))}
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="font-serif text-[18px] font-light text-[#D4A017]">{d.price}</div>
                  <a
                    href={WA(d.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-1.5 text-[10px] font-medium bg-[#D4A017] text-[#1a0f00] px-3 py-1.5 rounded-sm tracking-wide uppercase"
                  >
                    Ordenar
                  </a>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[11px] font-light text-[#333] text-center mt-5 tracking-wide">
            * Precios sujetos a cambio · Los extras se confirman al ordenar por WhatsApp
          </p>
        </div>
      )}

      {/* A LA CARTA */}
      {active === 1 && (
        <div>
          <div className="flex gap-3 items-start bg-[#111] border border-[#1e1e1e] rounded p-4 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#D4A017] mt-1 flex-shrink-0" />
            <p className="text-[12px] font-light text-[#555] leading-relaxed">
              <span className="text-[#D4A017] font-normal">Todos los platos incluyen acompañamientos.</span>{' '}
              Cada plato viene con arroz, papas a la francesa, y ensalada. Consulta especificaciones por WhatsApp.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1a1a1a] rounded overflow-hidden">
            {ACARTA.map((d) => (
              <div key={d.name} className="bg-[#0f0f0f] p-4 flex items-center gap-4 hover:bg-[#131313] transition-colors">
                <div className="w-14 h-14 rounded flex-shrink-0 bg-[#222] overflow-hidden relative">
                  <Image
                    src={d.img}
                    alt={d.name}
                    fill
                    className={`object-cover ${d.pos}`}
                    sizes="56px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-serif text-[15px] font-normal text-[#ddd] mb-1 leading-snug">{d.name}</div>
                  <div className="flex gap-1.5 flex-wrap mb-2">
                    <span className="text-[10px] px-2 py-0.5 rounded-sm border border-[#D4A01730] bg-[#D4A01710] text-[#D4A017] tracking-wide">{d.base}</span>
                    {d.extras.map((e) => (
                      <span key={e} className="text-[10px] px-2 py-0.5 rounded-sm border border-[#2222228c] bg-[#111] text-[#555] tracking-wide">{e}</span>
                    ))}
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="font-serif text-[18px] font-light text-[#D4A017]">{d.price}</div>
                  <a
                    href={WA(d.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-1.5 text-[10px] font-medium bg-[#D4A017] text-[#1a0f00] px-3 py-1.5 rounded-sm tracking-wide uppercase"
                  >
                    Ordenar
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ALMUERZOS */}
      {active === 2 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {ALMUERZOS.map((p) => (
            <div
              key={p.name}
              className={`relative rounded bg-[#111] transition-all duration-300 hover:-translate-y-1 overflow-hidden ${
                p.featured
                  ? 'border-[1.5px] border-[#D4A017] bg-[#0f0e00] animate-border-glow'
                  : 'border border-[#1e1e1e] hover:border-[#333]'
              }`}
            >
              {p.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#D4A017] text-[#1a0f00] text-[10px] font-medium px-4 py-1 rounded-b tracking-wider z-10">
                  ★ Más popular
                </div>
              )}
              {/* Imagen con tono oscurecido para armonía con el diseño */}
              <div className="h-36 w-full bg-[#1a1a1a] relative overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  className="object-cover object-[center_35%] brightness-75 saturate-75 contrast-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Gradiente inferior para transición suave al contenido */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
              </div>
              <div className="p-5 pt-4">
                <h3 className="font-serif text-[19px] font-normal text-[#f0f0f0] mb-2 mt-2 leading-snug">{p.name}</h3>
                <p className="text-[12px] font-light text-[#555] leading-relaxed mb-4">{p.desc}</p>
                <div className="font-serif text-[28px] font-light text-[#D4A017]">{p.price}</div>
                <div className="text-[9px] font-light text-[#333] tracking-widest mt-1 mb-4">IVA INCLUIDO</div>
                <a
                  href={WA(p.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center text-[11px] font-medium py-2.5 rounded-sm tracking-widest uppercase transition-all duration-200 ${
                    p.featured
                      ? 'bg-[#D4A017] text-[#1a0f00] hover:opacity-85'
                      : 'bg-transparent text-[#555] border border-[#222] hover:border-[#D4A017] hover:text-[#D4A017]'
                  }`}
                >
                  Ordenar por WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* PIZZAS */}
      {active === 3 && (
        <div>
          <div className="flex gap-3 items-start bg-[#111] border border-[#1e1e1e] rounded p-4 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#D4A017] mt-1 flex-shrink-0" />
            <p className="text-[12px] font-light text-[#555] leading-relaxed">
              <span className="text-[#D4A017] font-normal">Pizzas artesanales al horno.</span>{' '}
              Precio base para tamaño personal. Disponibles en personal, pequeña, mediana y maxi. Confirma tamaños disponibles por WhatsApp.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1a1a1a] rounded overflow-hidden">
            {PIZZAS.map((p) => (
              <div key={p.name} className="bg-[#0f0f0f] p-4 flex items-center gap-4 hover:bg-[#131313] transition-colors">
                <PizzaIcon />
                <div className="flex-1 min-w-0">
                  <div className="font-serif text-[15px] font-normal text-[#ddd] mb-1 leading-snug">{p.name}</div>
                  <div className="flex gap-1.5 flex-wrap mb-2">
                    <span className="text-[10px] px-2 py-0.5 rounded-sm border border-[#D4A01730] bg-[#D4A01710] text-[#D4A017] tracking-wide">{p.base}</span>
                    {p.extras.map((e) => (
                      <span key={e} className="text-[10px] px-2 py-0.5 rounded-sm border border-[#2222228c] bg-[#111] text-[#555] tracking-wide">{e}</span>
                    ))}
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="font-serif text-[18px] font-light text-[#D4A017]">{p.price}</div>
                  <a
                    href={WA(p.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-1.5 text-[10px] font-medium bg-[#D4A017] text-[#1a0f00] px-3 py-1.5 rounded-sm tracking-wide uppercase"
                  >
                    Ordenar
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* BEBIDAS */}
      {active === 4 && (
        <div>
          <div className="flex gap-3 items-start bg-[#111] border border-[#1e1e1e] rounded p-4 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#D4A017] mt-1 flex-shrink-0" />
            <p className="text-[12px] font-light text-[#555] leading-relaxed">
              <span className="text-[#D4A017] font-normal">Frescas y naturales.</span>{' '}
              Jugos preparados al momento con frutas de temporada. Cócteles artesanales disponibles en la noche. Consulta disponibilidad por WhatsApp.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1a1a1a] rounded overflow-hidden">
            {BEBIDAS.map((b) => (
              <div key={b.name} className="bg-[#0f0f0f] p-4 flex items-center gap-4 hover:bg-[#131313] transition-colors">
                <BebidaIcon type={b.type} />
                <div className="flex-1 min-w-0">
                  <div className="font-serif text-[15px] font-normal text-[#ddd] mb-1 leading-snug">{b.name}</div>
                  <div className="flex gap-1.5 flex-wrap mb-2">
                    <span className="text-[10px] px-2 py-0.5 rounded-sm border border-[#D4A01730] bg-[#D4A01710] text-[#D4A017] tracking-wide">{b.base}</span>
                    {b.extras.map((e) => (
                      <span key={e} className="text-[10px] px-2 py-0.5 rounded-sm border border-[#2222228c] bg-[#111] text-[#555] tracking-wide">{e}</span>
                    ))}
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="font-serif text-[18px] font-light text-[#D4A017]">{b.price}</div>
                  <a
                    href={WA(b.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-1.5 text-[10px] font-medium bg-[#D4A017] text-[#1a0f00] px-3 py-1.5 rounded-sm tracking-wide uppercase"
                  >
                    Ordenar
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
