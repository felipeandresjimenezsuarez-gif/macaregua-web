'use client'
import { useEffect, useState } from 'react'

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
  { name: 'Bandeja Asada Pechuga Cerdo', price: '$20.000', base: 'Precio base', extras: [],                           img: '/images/pollo-plancha.jpg' },
  { name: 'Caldo de Res Especial',       price: '$30.000', base: 'Con bebida',  extras: ['Sin bebida −$3.000'],        img: '/images/caldo-huevo.jpg' },
  { name: 'Caldo de Costilla',           price: '$33.000', base: 'Con bebida',  extras: ['Sin bebida −$3.000'],        img: '/images/caldo-costilla.jpg' },
  { name: 'Caldo con Huevo y Arepa',     price: '$18.000', base: 'Con bebida',  extras: ['Sin bebida −$2.000', '+ Queso +$2.000'], img: '/images/caldo-huevo.jpg' },
  { name: 'Caldo de Pollo',              price: '$16.000', base: 'Con bebida',  extras: ['Sin bebida −$2.000', '+ Huevos +$3.000'], img: '/images/caldo-huevo.jpg' },
  { name: 'Huevos al Gusto',             price: '$16.000', base: 'Con bebida',  extras: ['Sin bebida −$3.000'],        img: '/images/plato-bandeja-paisa.jpg' },
  { name: 'Bandeja de Carne',            price: '$18.000', base: 'Con bebida',  extras: [],                           img: '/images/plato-bandeja-paisa.jpg' },
  { name: 'Sandwich de Pollo',           price: '$18.000', base: 'Sin papa',    extras: ['+ Jugo +$4.000'],            img: '/images/pollo-plancha.jpg' },
  { name: 'Sandwich Jamón y Queso',      price: '$12.000', base: 'Sin papa',    extras: ['+ Jugo +$4.000'],            img: '/images/plato-bandeja-paisa.jpg' },
  { name: 'Huevos Pericos / Rancheros',  price: '$10.000', base: 'Precio fijo', extras: [],                           img: '/images/plato-bandeja-paisa.jpg' },
  { name: 'Arepa con Queso',             price: '$3.500',  base: 'Base',        extras: ['+ Jamón +$500'],             img: '/images/plato-bandeja-paisa.jpg' },
]

const ACARTA = [
  { name: 'Chatas',                    price: '$42.000', base: 'Acompañamientos', extras: ['Arroz, papa a la francesa, ensalada'],  img: '/images/plato-bandeja-paisa.jpg' },
  { name: 'Carne a la Plancha',        price: '$30.000', base: 'Acompañamientos', extras: ['Arroz, papa a la francesa, ensalada'],  img: '/images/plato-almuerzo.jpg' },
  { name: 'Pechuga a la Plancha',      price: '$30.000', base: 'Acompañamientos', extras: ['Arroz, papa a la francesa, ensalada'],  img: '/images/pollo-plancha.jpg' },
  { name: 'Pechuga Gratinada',         price: '$36.000', base: 'Acompañamientos', extras: ['Arroz, papa a la francesa, ensalada'],  img: '/images/pollo-plancha.jpg' },
  { name: 'Cerdo a la Plancha',        price: '$30.000', base: 'Acompañamientos', extras: ['Arroz, papa a la francesa, ensalada'],  img: '/images/plato-almuerzo.jpg' },
  { name: 'Sobrebarriga',              price: '$36.000', base: 'Acompañamientos', extras: ['Arroz, papa a la francesa, ensalada'],  img: '/images/plato-almuerzo.jpg' },
  { name: 'Mojarra Frita',             price: '$30.000', base: 'Acompañamientos', extras: ['Arroz, ensalada, papa o patacón'],       img: '/images/plato-almuerzo.jpg' },
  { name: 'Bagre Frito',               price: '$36.000', base: 'Acompañamientos', extras: ['Arroz, ensalada, papa o patacón'],       img: '/images/plato-almuerzo.jpg' },
  { name: 'Bagre Sudado',              price: '$38.000', base: 'Acompañamientos', extras: ['Arroz, ensalada, papa o patacón'],       img: '/images/cazuela-mariscos.jpg' },
  { name: 'Cazuela Mariscos',          price: '$32.000', base: 'Acompañamientos', extras: ['Arroz, ensalada, papa o patacón'],       img: '/images/cazuela-mariscos.jpg' },
  { name: 'Lasagna Mixta',             price: '$30.000', base: 'Carne, pollo',    extras: ['Incluye acompañamientos'],               img: '/images/plato-almuerzo.jpg' },
  { name: 'Lasagna Especial',          price: '$36.000', base: 'Champiñón',       extras: ['Incluye acompañamientos'],               img: '/images/plato-almuerzo.jpg' },
]

const PIZZAS = [
  { name: 'Pizza Hawaiana (Clásica)',      price: '$32.000', base: 'Personal',     extras: ['Pequeña +$10.000', 'Mediana +$30.000', 'Maxi +$43.000'],  img: '/images/plato-almuerzo.jpg' },
  { name: 'Pizza Carnes (Clásica)',        price: '$32.000', base: 'Personal',     extras: ['Pequeña +$10.000', 'Mediana +$30.000', 'Maxi +$43.000'],  img: '/images/plato-almuerzo.jpg' },
  { name: 'Pizza Pepperoni (Clásica)',     price: '$32.000', base: 'Personal',     extras: ['Pequeña +$10.000', 'Mediana +$30.000', 'Maxi +$43.000'],  img: '/images/plato-almuerzo.jpg' },
  { name: 'Pizza Mexicana (Clásica)',      price: '$32.000', base: 'Personal',     extras: ['Pequeña +$10.000', 'Mediana +$30.000', 'Maxi +$43.000'],  img: '/images/plato-almuerzo.jpg' },
  { name: 'Pizza Napolitana (Clásica)',    price: '$32.000', base: 'Personal',     extras: ['Pequeña +$10.000', 'Mediana +$30.000', 'Maxi +$43.000'],  img: '/images/plato-almuerzo.jpg' },
  { name: 'Pizza Marinera (Especial)',     price: '$35.000', base: 'Personal',     extras: ['Pequeña +$10.000', 'Mediana +$30.000', 'Maxi +$50.000'],  img: '/images/plato-almuerzo.jpg' },
  { name: 'Pizza Ritmo Especial',          price: '$35.000', base: 'Personal',     extras: ['Pequeña +$10.000', 'Mediana +$30.000', 'Maxi +$50.000'],  img: '/images/plato-almuerzo.jpg' },
  { name: 'Pizza Frutas (Especial)',       price: '$35.000', base: 'Personal',     extras: ['Pequeña +$10.000', 'Mediana +$30.000', 'Maxi +$50.000'],  img: '/images/plato-almuerzo.jpg' },
  { name: 'Pizza Vegetariana (Especial)',  price: '$35.000', base: 'Personal',     extras: ['Pequeña +$10.000', 'Mediana +$30.000', 'Maxi +$50.000'],  img: '/images/plato-almuerzo.jpg' },
  { name: 'Panzerotti',                    price: '$25.000', base: 'Precio fijo',  extras: [],                                                        img: '/images/plato-almuerzo.jpg' },
]

const BEBIDAS = [
  { name: 'Agua',                      price: '$7.000',   base: 'Vaso',        extras: ['Botella +$3.000'],                       img: '/images/plato-almuerzo.jpg' },
  { name: 'Leche',                     price: '$8.000',   base: 'Vaso',        extras: ['Botella +$3.000'],                       img: '/images/plato-almuerzo.jpg' },
  { name: 'Jugo Natural',              price: '$7.000',   base: 'Vaso',        extras: ['Vaso grande +$2.000'],                   img: '/images/plato-almuerzo.jpg' },
  { name: 'Limonada Natural',          price: '$7.000',   base: 'Jarra',       extras: ['Vaso individual +$2.000'],               img: '/images/plato-almuerzo.jpg' },
  { name: 'Limonada de Coco',          price: '$10.000',  base: 'Jarra',       extras: ['Vaso individual +$3.000'],               img: '/images/plato-almuerzo.jpg' },
  { name: 'Limonada de Hierbabuena',   price: '$10.000',  base: 'Jarra',       extras: ['Vaso individual +$3.000'],               img: '/images/plato-almuerzo.jpg' },
  { name: 'Gaseosa',                   price: '$2.500',   base: 'Lata/Vaso',   extras: ['Botella 2L +$5.000'],                    img: '/images/plato-almuerzo.jpg' },
  { name: 'Agua Aromática (Té)',       price: '$2.000',   base: 'Taza',        extras: ['Con leche +$1.000'],                    img: '/images/plato-almuerzo.jpg' },
  { name: 'Cerveza Nacional',          price: '$4.500',   base: 'Precio fijo', extras: [],                                        img: '/images/plato-almuerzo.jpg' },
  { name: 'Cerveza Importada',         price: '$6.000',   base: 'Precio fijo', extras: [],                                        img: '/images/plato-almuerzo.jpg' },
  { name: 'Margarita',                 price: '$20.000',  base: 'Cóctel',      extras: ['Premium +$5.000'],                       img: '/images/plato-almuerzo.jpg' },
  { name: 'Piña Colada',               price: '$20.000',  base: 'Cóctel',      extras: ['Premium +$5.000'],                       img: '/images/plato-almuerzo.jpg' },
  { name: 'Daiquiri',                  price: '$20.000',  base: 'Cóctel',      extras: ['Premium +$5.000'],                       img: '/images/plato-almuerzo.jpg' },
  { name: 'Amor en Ritmo',             price: '$20.000',  base: 'Cóctel',      extras: ['Premium +$5.000'],                       img: '/images/plato-almuerzo.jpg' },
  { name: 'Sangría',                   price: '$40.000',  base: 'Jarra',       extras: ['Vaso +$8.000'],                          img: '/images/plato-almuerzo.jpg' },
]

const TABS = ['Desayuno', 'A la Carta', 'Almuerzo', 'Pizzas', 'Bebidas']
const TAB_HASHES = ['desayuno', 'acarta', 'almuerzo', 'pizzas', 'bebidas']

export default function MenuSection() {
  const [active, setActive] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Add visible class to make the section visible
    const section = document.getElementById('menu')
    if (section) {
      section.classList.add('visible')
    }
    // Get hash from URL on mount
    const hash = window.location.hash.slice(1)
    const tabIndex = TAB_HASHES.indexOf(hash)
    if (tabIndex !== -1) {
      setActive(tabIndex)
    }
  }, [])

  const handleTabClick = (index: number) => {
    setActive(index)
    // Update URL hash
    window.location.hash = TAB_HASHES[index]
  }

  // Avoid hydration mismatch: only render after mount
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
                <div className="w-14 h-14 rounded flex-shrink-0 bg-[#222]"></div>
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
                <div className="w-14 h-14 rounded flex-shrink-0 bg-[#222]"></div>
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
                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#D4A017] text-[#1a0f00] text-[10px] font-medium px-4 py-1 rounded-b tracking-wider">
                  ★ Más popular
                </div>
              )}
              <div className="h-36 w-full bg-[#222]"></div>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1a1a1a] rounded overflow-hidden">
          {PIZZAS.map((p) => (
            <div key={p.name} className="bg-[#0f0f0f] p-4 flex items-center gap-4 hover:bg-[#131313] transition-colors">
              <div className="w-14 h-14 rounded flex-shrink-0 bg-[#222]"></div>
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
      )}

      {/* BEBIDAS */}
      {active === 4 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1a1a1a] rounded overflow-hidden">
          {BEBIDAS.map((b) => (
            <div key={b.name} className="bg-[#0f0f0f] p-4 flex items-center gap-4 hover:bg-[#131313] transition-colors">
              <div className="w-14 h-14 rounded flex-shrink-0 bg-[#222]"></div>
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
      )}
    </section>
  )
}
