'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const WA = (plato: string) =>
  `https://wa.me/573052015683?text=${encodeURIComponent(`Hola, quiero ordenar: ${plato}`)}`

// ─── Tipos ────────────────────────────────────────────────────────────────────

type PlatoItem   = { name: string; price: string; base: string; extras: string[]; img: string }
type BebidaItem  = { name: string; price: string; base: string; extras: string[]; type: string }

// ─── MAÑANAS ─────────────────────────────────────────────────────────────────

const MANANAS_FEATURED = [
  {
    name: 'Santandereano de Costilla',
    desc: 'Costilla asada, pepitoria, caldo de costilla, arepa y bebida. El desayuno premium de la casa.',
    price: '$35.000',
    img: '/images/foto-desayunosantandereano-decostilla-carne.jpg',
  },
  {
    name: 'Santandereano',
    desc: 'Carne asada, pepitoria, caldo, arepa y bebida. El sabor santandereano en Macaregua.',
    price: '$30.000',
    img: '/images/foto-desayunosantandereano-huevo-carne.jpg',
  },
]

const MANANAS_ITEMS: PlatoItem[] = [
  { name: 'Caldo de Costilla', price: '$18.000', base: 'Con bebida',  extras: ['Sin bebida −$2.000'],                    img: '/images/foto-caldo-costilla.jpg' },
  { name: 'Caldo de Huevo',    price: '$16.000', base: 'Con bebida',  extras: ['Sin bebida −$2.000', '+ Queso +$2.000'], img: '/images/foto-caldo-huevo.jpg' },
  { name: 'Huevos al Gusto',   price: '$16.000', base: 'Con bebida',  extras: ['Sin bebida −$3.000'],                    img: '/images/foto-huevos-gusto.jpg' },
  { name: 'Bandeja de Carne',  price: '$20.000', base: 'Con bebida',  extras: [],                                        img: '/images/foto-bandeja-carne.jpg' },
  { name: 'Caldo de Pollo',    price: '$18.000', base: 'Con bebida', extras: ['Papa, cilantro y proteína fresca de pollo', 'Arepas · Café o Chocolate'],     img: '/images/foto-caldo-pollo.jpg' },
  { name: 'Huevos Rancheros', price: '$16.000', base: 'Con bebida', extras: ['Huevos revueltos con salchicha'],                img: '/images/foto-huevos-rancheros.jpg' },
  { name: 'Arepa con Queso',  price: '$4.000',  base: 'Unidad',     extras: ['Queso Mozzarella'],                             img: '/images/foto-arepa-queso.jpg' },
]

const MANANAS_COMBOS: BebidaItem[] = [
  { name: 'Caldo + Huevos',    price: '$22.000 – $24.000', base: 'Combo mañanero', extras: ['Con arepa incluida'],    type: 'caliente' },
  { name: 'Porción de Huevos', price: '$8.000 – $10.000',  base: 'Porción',        extras: ['Según preparación'],     type: 'caliente' },
  { name: 'Arepas',            price: '$3.000 – $4.000',   base: 'Unidad',         extras: ['Con queso o con jamón'], type: 'caliente' },
]

const MANANAS_BEBIDAS: BebidaItem[] = [
  { name: 'Chocolate / Café con Leche', price: '$4.000', base: 'Taza', extras: [], type: 'caliente' },
  { name: 'Tinto',                      price: '$2.000', base: 'Taza', extras: [], type: 'caliente' },
]

// ─── ALMUERZOS ────────────────────────────────────────────────────────────────

const ALMUERZOS = [
  {
    name: 'Almuerzo Medio',
    desc: 'Selección especial para personal autorizado. Un plato completo y satisfactorio.',
    price: '$20.000',
    featured: false,
    img: '/images/foto-arroz-pollo.jpg',
  },
  {
    name: 'Corriente Normal',
    desc: 'El plato tradicional de la casa. Sopa, seco y jugo. La experiencia Macaregua.',
    price: '$22.000',
    featured: false,
    img: '/images/foto-bandeja-paisa.jpg',
  },
  {
    name: 'Corriente Mixto',
    desc: 'Incluye los dos principios del día. La opción más completa preferida por nuestros clientes.',
    price: '$25.000',
    featured: true,
    img: '/images/foto-sancocho.jpg',
  },
  {
    name: 'Lasaña Especial',
    desc: 'Lasaña rellena de champiñones, gratinada al horno. Incluye acompañamientos. Disponible hasta las 2:00 PM.',
    price: '$38.000',
    featured: false,
    img: '/images/foto-lasagna-nuevaseccionalmuerzoespecial.jpg',
  },
]

// ─── A LA CARTA — organizadas por categoría ───────────────────────────────────

const ACARTA_CARNES: PlatoItem[] = [
  { name: 'Chatas',             price: '$48.000', base: 'Acompañamientos', extras: ['Arroz, papa a la francesa, ensalada'], img: '/images/foto-chatas.jpg' },
  { name: 'Carne a la Plancha', price: '$34.000', base: 'Acompañamientos', extras: ['Arroz, papa a la francesa, ensalada'], img: '/images/foto-carne-guisada-asada.jpg' },
  { name: 'Cerdo a la Plancha', price: '$34.000', base: 'Acompañamientos', extras: ['Arroz, papa a la francesa, ensalada'], img: '/images/foto-cerdo-plancha.jpg' },
  { name: 'Sobrebarriga',       price: '$38.000', base: 'Acompañamientos', extras: ['Arroz, papa a la francesa, ensalada'], img: '/images/foto-sobrebarriga.jpg' },
  { name: 'Milanesa de Carne', price: '$34.000', base: 'Res apanada',     extras: ['Queso mozzarella fundido', 'Papa a la francesa'],  img: '/images/foto-milanesa-carne.jpg' },
]

const ACARTA_AVES: PlatoItem[] = [
  { name: 'Pechuga Gratinada',    price: '$38.000', base: 'Acompañamientos', extras: ['Arroz, papa a la francesa, ensalada'], img: '/images/foto-pechuga-gratinada.jpg' },
  { name: 'Pechuga a la Plancha', price: '$34.000', base: 'Acompañamientos', extras: ['Arroz, papa a la francesa, ensalada'], img: '/images/foto-pollo-plancha.jpg' },
]

const ACARTA_MAR: PlatoItem[] = [
  { name: 'Mojarra Frita',        price: '$34.000', base: 'Acompañamientos', extras: ['Arroz, ensalada, papa o patacón'], img: '/images/foto-mojarra.jpg' },
  { name: 'Bagre Frito',          price: '$38.000', base: 'Acompañamientos', extras: ['Arroz, ensalada, papa o patacón'], img: '/images/foto-bagre-frito.jpg' },
  { name: 'Bagre Sudado',         price: '$38.000', base: 'Acompañamientos', extras: ['Arroz, ensalada, papa o patacón'], img: '/images/foto-bagre-sudado.jpg' },
  { name: 'Cazuela de Mariscos',  price: '$34.000', base: 'Acompañamientos', extras: ['Arroz, ensalada, papa o patacón'], img: '/images/foto-cazuela-mariscos.jpg' },
  { name: 'Cazuela de Camarones', price: '$36.000', base: 'Acompañamientos', extras: ['Arroz, ensalada, papa o patacón'], img: '/images/foto-cazuela-camarones.jpg' },
]

const ACARTA_PASTAS: PlatoItem[] = [
  { name: 'Lasagna Mixta',           price: '$32.000', base: 'Carne, pollo',    extras: ['Incluye acompañamientos'],               img: '/images/foto-lasagna-.jpg' },
  { name: 'Lasagna Especial',        price: '$38.000', base: 'Champiñón',       extras: ['Incluye acompañamientos'],               img: '/images/foto-lasagna-especial.jpg' },
  { name: 'Pollo Nuggets Marinero',  price: '$42.000', base: 'Acompañamientos', extras: ['Arroz, papa a la francesa, ensalada'],   img: '/images/foto-pollo-plancha.jpg' },
  { name: 'Pollo Nuggets Corriente', price: '$37.000', base: 'Acompañamientos', extras: ['Arroz, papa a la francesa, ensalada'],   img: '/images/foto-pollo-plancha.jpg' },
  { name: 'Espaguetis',        price: '$32.000', base: 'Salsa artesanal', extras: ['Queso gratinado', 'Papa a la francesa'],        img: '/images/foto-spaguettis.jpg' },
]

// ─── PIZZAS ───────────────────────────────────────────────────────────────────
// Precios: Personal | Pequeña (+diferencia) | Mediana (+diferencia) | Maxi (+diferencia)

const PIZZAS_ESPECIALES = [
  { name: 'Pizza Marinera',    price: '$38.000', base: 'Personal', extras: ['Pequeña +$12.000', 'Mediana +$37.000', 'Maxi +$57.000'] },
  { name: 'Pizza Ritmo',       price: '$38.000', base: 'Personal', extras: ['Pequeña +$12.000', 'Mediana +$37.000', 'Maxi +$57.000'] },
  { name: 'Pizza Frutas',      price: '$38.000', base: 'Personal', extras: ['Pequeña +$12.000', 'Mediana +$37.000', 'Maxi +$57.000'] },
  { name: 'Pizza Vegetariana', price: '$38.000', base: 'Personal', extras: ['Pequeña +$12.000', 'Mediana +$37.000', 'Maxi +$57.000'] },
]

const PIZZAS_CLASICAS = [
  { name: 'Pizza Hawaiana',   price: '$35.000', base: 'Personal', extras: ['Pequeña +$13.000', 'Mediana +$37.000', 'Maxi +$50.000'] },
  { name: 'Pizza de Carnes',  price: '$35.000', base: 'Personal', extras: ['Pequeña +$13.000', 'Mediana +$37.000', 'Maxi +$50.000'] },
  { name: 'Pizza Pepperoni',  price: '$35.000', base: 'Personal', extras: ['Pequeña +$13.000', 'Mediana +$37.000', 'Maxi +$50.000'] },
  { name: 'Pizza Mexicana',   price: '$35.000', base: 'Personal', extras: ['Pequeña +$13.000', 'Mediana +$37.000', 'Maxi +$50.000'] },
  { name: 'Pizza Napolitana', price: '$35.000', base: 'Personal', extras: ['Pequeña +$13.000', 'Mediana +$37.000', 'Maxi +$50.000'] },
]

const PANCEROTTI_ITEM = { name: 'Panzerotti', price: '$29.000', base: 'Precio fijo', extras: [] }

// ─── CENAS & PARRILLA ────────────────────────────────────────────────────────

const OTROS: PlatoItem[] = [
  { name: 'Pincho Mixto',                       price: '$38.000',  base: 'Precio base',              extras: [],                                                               img: '/images/foto-pincho-mixto.jpg' },
  { name: 'Pincho de Carne',                    price: '$38.000',  base: 'Precio base',              extras: [],                                                               img: '/images/foto-pincho-carne.jpg' },
  { name: 'Pincho de Cerdo',                    price: '$36.000',  base: 'Precio base',              extras: [],                                                               img: '/images/foto-pincho-cerdo.jpg' },
  { name: 'Pincho de Pollo',                    price: '$36.000',  base: 'Precio base',              extras: [],                                                               img: '/images/foto-pincho-pollo.jpg' },
  { name: 'Picada Grande',                      price: '$120.000', base: 'Lomito res, pollo, cerdo', extras: ['Cebollita, tomate, queso, papa criolla y a la francesa'],        img: '/images/foto-picada.jpg' },
  { name: 'Picada Pequeña',                     price: '$80.000',  base: 'Lomito res, pollo, cerdo', extras: ['Cebollita, tomate, queso, papa criolla y a la francesa'],        img: '/images/foto-picada.jpg' },
  { name: 'Hamburguesa Especial',               price: '$35.000',  base: 'Carne y pollo',            extras: [],                                                               img: '/images/foto-hamburguesa-mixta.jpg' },
  { name: 'Hamburguesa Corriente',              price: '$29.000',  base: 'Solo carne',               extras: [],                                                               img: '/images/foto-hamburguesa-sencilla.jpg' },
  { name: 'Sándwich de Pollo',                  price: '$24.000',  base: 'Precio base',              extras: [],                                                               img: '/images/foto-sandwich-pollo-queso.jpg' },
  { name: 'Sándwich de Jamón y Queso',          price: '$17.000',  base: 'Precio base',              extras: [],                                                               img: '/images/foto-sandwich-jamon-queso.jpg' },
  { name: 'Papa a la Francesa con Queso',       price: '$13.000',  base: 'Porción',                  extras: [],                                                               img: '/images/foto-papa-francesa.jpg' },
  { name: 'Papa Francesa con Queso y Tocineta', price: '$17.000',  base: 'Porción',                  extras: [],                                                               img: '/images/foto-papa-francesa-tocineta-queso.jpg' },
]

// ─── BEBIDAS ─────────────────────────────────────────────────────────────────

const BEBIDAS: BebidaItem[] = [
  { name: 'Agua',                    price: '$7.000',  base: 'Vaso',        extras: ['Botella +$3.000'],         type: 'agua' },
  { name: 'Leche',                   price: '$8.000',  base: 'Vaso',        extras: ['Botella +$3.000'],         type: 'caliente' },
  { name: 'Jugo Natural',            price: '$7.000',  base: 'Vaso',        extras: ['Vaso grande +$2.000'],     type: 'jugo' },
  { name: 'Limonada Natural',        price: '$7.000',  base: 'Jarra',       extras: ['Vaso individual +$2.000'], type: 'jugo' },
  { name: 'Limonada de Coco',        price: '$10.000', base: 'Jarra',       extras: ['Vaso individual +$3.000'], type: 'jugo' },
  { name: 'Limonada de Hierbabuena', price: '$10.000', base: 'Jarra',       extras: ['Vaso individual +$3.000'], type: 'jugo' },
  { name: 'Gaseosa',                 price: '$2.500',  base: 'Lata/Vaso',   extras: ['Botella 2L +$5.000'],      type: 'gaseosa' },
  { name: 'Agua Aromática (Té)',     price: '$2.000',  base: 'Taza',        extras: ['Con leche +$1.000'],       type: 'caliente' },
  { name: 'Cerveza Nacional',        price: '$4.500',  base: 'Precio fijo', extras: [],                          type: 'cerveza' },
  { name: 'Cerveza Importada',       price: '$6.000',  base: 'Precio fijo', extras: [],                          type: 'cerveza' },
]

const MOCKTAILS: BebidaItem[] = [
  { name: 'Pink Tonic',      price: '$16.000', base: 'Mocktail', extras: ['Granadina · tónica · fresa · limón'],          type: 'mocktail' },
  { name: 'Green Tonic',     price: '$16.000', base: 'Mocktail', extras: ['Pepino · menta · tónica · lima'],              type: 'mocktail' },
  { name: 'Mojito Mocktail', price: '$16.000', base: 'Mocktail', extras: ['Lima · menta fresca · azúcar · agua con gas'], type: 'mocktail' },
  { name: 'Yellow Tonic',    price: '$16.000', base: 'Mocktail', extras: ['Maracuyá · jengibre · tónica · limón'],        type: 'mocktail' },
]

const SODAS_REFRESCANTES: BebidaItem[] = [
  { name: 'Frutos Rojos',     price: '$14.000', base: 'Soda Artesanal', extras: ['Fresa · Maracuyá'],        type: 'soda' },
  { name: 'Frutos Amarillos', price: '$14.000', base: 'Soda Artesanal', extras: ['Maracuyá · Piña · Limón'], type: 'soda' },
]

const SODAS_HATSU: BebidaItem[] = [
  { name: 'Frambuesa Rosas',     price: '$8.000', base: 'Soda Hatsu', extras: [], type: 'hatsu' },
  { name: 'Limón & Hierbabuena', price: '$8.000', base: 'Soda Hatsu', extras: [], type: 'hatsu' },
  { name: 'Sandía & Albahaca',   price: '$8.000', base: 'Soda Hatsu', extras: [], type: 'hatsu' },
]

const TE_HATSU: BebidaItem[] = [
  { name: 'Té Hatsu Veggiedrink', price: '$9.500', base: 'Té Hatsu', extras: [], type: 'hatsu' },
  { name: 'Té Hatsu Amarillo',    price: '$9.500', base: 'Té Hatsu', extras: [], type: 'hatsu' },
  { name: 'Té Hatsu Azul',        price: '$9.500', base: 'Té Hatsu', extras: [], type: 'hatsu' },
  { name: 'Té Hatsu Blanco',      price: '$9.500', base: 'Té Hatsu', extras: [], type: 'hatsu' },
  { name: 'Té Hatsu Lila',        price: '$9.500', base: 'Té Hatsu', extras: [], type: 'hatsu' },
  { name: 'Té Hatsu Negro',       price: '$9.500', base: 'Té Hatsu', extras: [], type: 'hatsu' },
  { name: 'Té Hatsu Rojo',        price: '$9.500', base: 'Té Hatsu', extras: [], type: 'hatsu' },
  { name: 'Té Hatsu Rosas',       price: '$9.500', base: 'Té Hatsu', extras: [], type: 'hatsu' },
  { name: 'Té Hatsu Verde',       price: '$9.500', base: 'Té Hatsu', extras: [], type: 'hatsu' },
]

// ─── Tabs ─────────────────────────────────────────────────────────────────────
// 0=Mañanas  1=Almuerzo  2=CenasParrilla  3=ACarta  4=Pizzas  5=Mocktails&Sodas

const TABS      = ['Mañanas', 'Almuerzo', 'Cenas & Parrilla', 'A la Carta', 'Pizzas', 'Mocktails & Sodas']
const TAB_HASHES = ['mananas', 'almuerzo', 'cenas',           'acarta',     'pizzas',  'bebidas']

// ─── Lógica de horario ─────────────────────────────────────────────────────────
// Horario real: 6:30 AM – 10:30 PM
// Mañanas:   6:30 AM – 11:29 AM
// Almuerzos: 11:30 AM –  2:00 PM  (ventana estricta)
// Cena/Carta: 11:30 AM – 10:30 PM

type TimeSlot = 'breakfast' | 'lunch' | 'dinner' | 'closed'

function getTimeSlot(): TimeSlot {
  const now = new Date()
  if (now.getDay() === 0) return 'closed'                    // Domingo — cerrado
  const t = now.getHours() * 60 + now.getMinutes()
  if (t < 6 * 60 + 30 || t >= 22 * 60 + 30) return 'closed'
  if (t < 11 * 60 + 30) return 'breakfast'
  if (t < 14 * 60)      return 'lunch'
  return 'dinner'
}

function isTabAvailable(tabIndex: number, slot: TimeSlot): boolean {
  if (tabIndex === 5) return true                        // Mocktails & Sodas — siempre
  if (slot === 'closed')    return false
  if (slot === 'breakfast') return tabIndex === 0        // Solo Mañanas
  if (slot === 'lunch')     return tabIndex !== 0        // Todo menos Mañanas
  return tabIndex !== 0 && tabIndex !== 1                // dinner: sin Mañanas ni Almuerzo
}

function getDefaultTab(slot: TimeSlot): number {
  if (slot === 'lunch')  return 1  // Almuerzo
  if (slot === 'dinner') return 4  // Pizzas
  return 0                         // breakfast / closed → Mañanas
}

type BannerInfo = { emoji: string; text: string; style: 'gold' | 'green' | 'muted' }

function getBannerInfo(slot: TimeSlot): BannerInfo {
  if (slot === 'breakfast') return {
    emoji: '☕',
    text: 'Estamos en el horario de Mañanas. Almuerzos y platos a la carta disponibles desde las 11:30 AM.',
    style: 'gold',
  }
  if (slot === 'lunch') return {
    emoji: '🍽️',
    text: 'Almuerzos, Pizzas y Cenas & Parrilla disponibles ahora. Los Almuerzos se sirven hasta las 2:00 PM.',
    style: 'green',
  }
  if (slot === 'dinner') return {
    emoji: '🍽️',
    text: 'Pizzas, Parrilla y Platos a la carta disponibles ahora. Los Almuerzos regresan mañana a las 11:30 AM.',
    style: 'green',
  }
  const isSunday = new Date().getDay() === 0
  return {
    emoji: '🔒',
    text: isSunday
      ? 'Hoy es domingo — estamos cerrados. Volvemos el lunes a las 6:30 AM.'
      : 'Estamos cerrados. Volvemos mañana a las 6:30 AM con el menú de Mañanas listo.',
    style: 'muted',
  }
}

// ─── Íconos ────────────────────────────────────────────────────────────────────

function PizzaIcon() {
  return (
    <div className="w-14 h-14 rounded flex-shrink-0 flex items-center justify-center bg-[#160c00] border border-[#2a1500]">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L22 20H2L12 2Z" fill="#D4A017" fillOpacity="0.12" stroke="#D4A017" strokeWidth="1.3" strokeLinejoin="round"/>
        <circle cx="12" cy="12.5" r="1.6" fill="#D4A017" fillOpacity="0.8"/>
        <circle cx="9" cy="16.5" r="1.1" fill="#e05030" fillOpacity="0.85"/>
        <circle cx="15" cy="16.5" r="1.1" fill="#e05030" fillOpacity="0.85"/>
        <path d="M5.5 19.5 Q12 21.5 18.5 19.5" stroke="#D4A017" strokeWidth="1.8" strokeLinecap="round" strokeOpacity="0.45"/>
      </svg>
    </div>
  )
}

function BebidaIcon({ type }: { type: string }) {
  const isMocktail = type === 'mocktail'
  const isSoda     = type === 'soda'
  const isHatsu    = type === 'hatsu'
  const isCerveza  = type === 'cerveza'
  const isCaliente = type === 'caliente'

  const bg    = isMocktail ? '#07100e' : isSoda ? '#07100e' : isHatsu ? '#060e0e' : isCerveza ? '#0e0c00' : isCaliente ? '#100808' : '#061210'
  const bdr   = isMocktail ? '#0d2a22' : isSoda ? '#0a2218' : isHatsu ? '#0a2020' : isCerveza ? '#1e1a00' : isCaliente ? '#1e0a0a' : '#082820'
  const color = isMocktail ? '#4dd4a0' : isSoda ? '#36c478' : isHatsu ? '#30b8c0' : isCerveza ? '#c8a020' : isCaliente ? '#c86040' : '#40b870'

  return (
    <div className="w-14 h-14 rounded flex-shrink-0 flex items-center justify-center border" style={{ backgroundColor: bg, borderColor: bdr }}>
      {isMocktail || isSoda ? (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M8 4h8l-1 12H9L8 4Z" fill={color} fillOpacity="0.1" stroke={color} strokeWidth="1.3" strokeLinejoin="round"/>
          <path d="M8.5 9 Q12 11 15.5 9" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
          <path d="M9.5 16h5" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
          <circle cx="12" cy="6.5" r="0.8" fill={color} fillOpacity="0.7"/>
          <circle cx="10" cy="7.5" r="0.5" fill={color} fillOpacity="0.5"/>
          <circle cx="14" cy="7.5" r="0.5" fill={color} fillOpacity="0.5"/>
        </svg>
      ) : isHatsu ? (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M7 5h10l-1.5 14h-7L7 5Z" fill={color} fillOpacity="0.1" stroke={color} strokeWidth="1.3" strokeLinejoin="round"/>
          <rect x="7" y="5" width="10" height="2.5" rx="0.5" fill={color} fillOpacity="0.25"/>
          <circle cx="11" cy="11" r="1" fill={color} fillOpacity="0.6"/>
          <circle cx="14" cy="13" r="0.7" fill={color} fillOpacity="0.45"/>
          <circle cx="10" cy="14" r="0.5" fill={color} fillOpacity="0.35"/>
        </svg>
      ) : isCerveza ? (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M6 4h10l-1.5 16H7.5L6 4Z" fill={color} fillOpacity="0.1" stroke={color} strokeWidth="1.3" strokeLinejoin="round"/>
          <path d="M16 8h2a2 2 0 0 1 0 4h-2" stroke={color} strokeWidth="1.3" strokeLinecap="round" opacity="0.7"/>
          <rect x="7" y="4" width="9" height="3" rx="0.5" fill={color} fillOpacity="0.3"/>
        </svg>
      ) : isCaliente ? (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M6 9h10l-1 9H7L6 9Z" fill={color} fillOpacity="0.1" stroke={color} strokeWidth="1.3" strokeLinejoin="round"/>
          <path d="M16 11h1.5a1.5 1.5 0 0 1 0 3H16" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.7"/>
          <path d="M6 18h10" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
        </svg>
      ) : (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M8 4h8l-1.5 16h-5L8 4Z" fill={color} fillOpacity="0.1" stroke={color} strokeWidth="1.3" strokeLinejoin="round"/>
          <path d="M8.5 10 Q12 12 15.5 10" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
          <circle cx="12" cy="14" r="1" fill={color} fillOpacity="0.5"/>
        </svg>
      )}
    </div>
  )
}

// ─── Helpers de UI ────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-light text-[#D4A017] tracking-widest uppercase mb-3 mt-1">{children}</p>
  )
}

function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3 items-start bg-[#111] border border-[#1e1e1e] rounded p-4 mb-6">
      <div className="w-2 h-2 rounded-full bg-[#D4A017] mt-1 flex-shrink-0" />
      <p className="text-[13px] font-light text-[#555] leading-relaxed">{children}</p>
    </div>
  )
}

function BebidaRow({ b }: { b: BebidaItem }) {
  return (
    <div className="bg-[#0f0f0f] p-4 flex items-center gap-4 hover:bg-[#131313] transition-colors">
      <BebidaIcon type={b.type} />
      <div className="flex-1 min-w-0">
        <div className="font-serif text-[15px] font-normal text-[#ddd] mb-1 leading-snug">{b.name}</div>
        <div className="flex gap-1.5 flex-wrap">
          <span className="text-[10px] px-2 py-0.5 rounded-sm border border-[#D4A01730] bg-[#D4A01710] text-[#D4A017] tracking-wide">{b.base}</span>
          {b.extras.map((e) => (
            <span key={e} className="text-[10px] px-2 py-0.5 rounded-sm border border-[#2222228c] bg-[#111] text-[#555] tracking-wide">{e}</span>
          ))}
        </div>
      </div>
      <div className="text-right flex-shrink-0">
        <div className="font-serif text-[18px] font-light text-[#D4A017]">{b.price}</div>
        <a href={WA(b.name)} target="_blank" rel="noopener noreferrer"
          className="inline-block mt-1.5 text-[10px] font-medium bg-[#D4A017] text-[#1a0f00] px-3 py-1.5 rounded-sm tracking-wide uppercase">
          Ordenar
        </a>
      </div>
    </div>
  )
}

// ─── Card de plato con imagen grande ──────────────────────────────────────────

function PlatoCard({ name, price, base, extras, img, waUrl }: PlatoItem & { waUrl: string }) {
  return (
    <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded overflow-hidden hover:border-[#2a2a2a] hover:-translate-y-0.5 transition-all duration-200">
      <div className="relative h-40 w-full overflow-hidden bg-[#1a1a1a]">
        <Image
          src={img}
          alt={name}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent" />
        <div className="absolute bottom-2 right-2">
          <span className="font-serif text-[17px] font-light text-[#D4A017] drop-shadow-lg">{price}</span>
        </div>
      </div>
      <div className="p-3">
        <div className="font-serif text-[14px] font-normal text-[#ddd] leading-snug mb-2">{name}</div>
        <div className="flex gap-1 flex-wrap mb-3">
          <span className="text-[10px] px-2 py-0.5 rounded-sm border border-[#D4A01730] bg-[#D4A01710] text-[#D4A017] tracking-wide">{base}</span>
          {extras.map((e) => (
            <span key={e} className="text-[10px] px-2 py-0.5 rounded-sm border border-[#222] bg-[#111] text-[#555] tracking-wide">{e}</span>
          ))}
        </div>
        <a href={waUrl} target="_blank" rel="noopener noreferrer"
          className="block w-full text-center text-[10px] font-medium bg-[#D4A017] text-[#1a0f00] py-2 rounded-sm tracking-widest uppercase hover:opacity-85 transition-opacity">
          Ordenar
        </a>
      </div>
    </div>
  )
}

// ─── Componente principal ──────────────────────────────────────────────────────

export default function MenuSection() {
  const [active, setActive] = useState(0)
  const [mounted, setMounted] = useState(false)
  const [slot, setSlot] = useState<TimeSlot>('closed')

  useEffect(() => {
    const currentSlot = getTimeSlot()
    setMounted(true)
    setSlot(currentSlot)
    const section = document.getElementById('menu')
    if (section) section.classList.add('visible')

    const hash = window.location.hash.slice(1)
    const hashIndex = TAB_HASHES.indexOf(hash)
    if (hashIndex !== -1) {
      setActive(hashIndex)
      return
    }

    setActive(getDefaultTab(currentSlot))
  }, [])

  const handleTabClick = (index: number) => {
    setActive(index)
    window.location.hash = TAB_HASHES[index]
  }

  if (!mounted) {
    return <section id="menu" className="py-14 px-8 max-w-7xl mx-auto reveal visible" />
  }

  return (
    <section id="menu" className="py-14 px-8 max-w-7xl mx-auto reveal visible">
      <p className="eyebrow">Menú completo</p>
      <h2 className="font-serif text-[32px] font-normal text-[#f0f0f0] leading-snug mb-2">¿Qué se te antoja?</h2>
      <p className="text-[13px] font-light text-[#444] mb-4">Ordena directo por WhatsApp · IVA incluido</p>

      {/* Banner de disponibilidad horaria */}
      {mounted && (() => {
        const b = getBannerInfo(slot)
        const cls = b.style === 'gold'
          ? 'bg-[#D4A01712] border border-[#D4A01730] text-[#b8880f]'
          : b.style === 'green'
            ? 'bg-[#0e1e0e] border border-[#1e3a1e] text-[#5a9e5a]'
            : 'bg-[#111] border border-[#1e1e1e] text-[#444]'
        return (
          <div className={`flex items-start gap-3 px-4 py-3 rounded-sm mb-6 text-[13px] leading-relaxed ${cls}`}>
            <span className="text-[16px] leading-none mt-px flex-shrink-0">{b.emoji}</span>
            <span>{b.text}</span>
          </div>
        )
      })()}

      {/* Tabs */}
      <div className="flex gap-2 flex-wrap mb-8">
        {TABS.map((t, i) => {
          const available = isTabAvailable(i, slot)
          return (
            <button
              key={t}
              onClick={() => handleTabClick(i)}
              className={`cursor-pointer px-4 py-2 rounded-sm border tracking-wide transition-all duration-200 ${
                t === 'Cenas & Parrilla' || t === 'Mocktails & Sodas' ? 'text-[10px]' : 'text-[12px]'
              } ${
                active === i
                  ? 'bg-[#D4A017] text-[#1a0f00] border-[#D4A017] font-medium'
                  : available
                    ? 'bg-transparent text-[#555] border-[#222] hover:border-[#D4A017] hover:text-[#D4A017]'
                    : 'bg-transparent text-[#2e2e2e] border-[#181818] hover:border-[#2a2a2a] hover:text-[#3a3a3a]'
              }`}
            >
              {t}
            </button>
          )
        })}
      </div>

      {/* ══════════════════════════════════════════════════════════════
          MAÑANAS (tab 0)
      ══════════════════════════════════════════════════════════════ */}
      {active === 0 && (
        <div>
          {!isTabAvailable(0, slot) && (
            <div className="flex items-center gap-2 bg-[#111] border border-[#1e1e1e] rounded px-4 py-3 mb-4 text-[13px] text-[#444]">
              <span>⏰</span>
              <span>No disponible — El menú de Mañanas regresa mañana a las 6:30 AM</span>
            </div>
          )}
          <div className={isTabAvailable(0, slot) ? '' : 'opacity-70 pointer-events-none select-none'}>

            {/* Destacados */}
            <SectionLabel>Destacados</SectionLabel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {MANANAS_FEATURED.map((p) => (
                <div key={p.name}
                  className="relative rounded overflow-hidden transition-all duration-300 hover:-translate-y-1 border-[1.5px] border-[#D4A017]"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#D4A017] text-[#1a0f00] text-[10px] font-medium px-4 py-1 rounded-b tracking-wider z-10">
                    ★ Destacado
                  </div>
                  <div className="h-44 w-full relative overflow-hidden bg-[#111]">
                    <Image
                      src={p.img}
                      alt={p.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/10 to-transparent" />
                  </div>
                  <div className="bg-[#111] p-5">
                    <h3 className="font-serif text-[19px] font-normal text-[#f0f0f0] mb-2 leading-snug">{p.name}</h3>
                    <p className="text-[13px] font-light text-[#555] leading-relaxed mb-4">{p.desc}</p>
                    <div className="font-serif text-[28px] font-light text-[#D4A017]">{p.price}</div>
                    <div className="text-[9px] font-light text-[#333] tracking-widest mt-1 mb-4">IVA INCLUIDO</div>
                    <a href={WA(p.name)} target="_blank" rel="noopener noreferrer"
                      className="block w-full text-center text-[11px] font-medium py-2.5 rounded-sm tracking-widest uppercase transition-all duration-200 bg-[#D4A017] text-[#1a0f00] hover:opacity-85">
                      Ordenar por WhatsApp
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Caldos y platos */}
            <SectionLabel>Caldos & Platos</SectionLabel>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {MANANAS_ITEMS.map((d) => (
                <PlatoCard key={d.name} {...d} waUrl={WA(d.name)} />
              ))}
            </div>

            {/* Combos y porciones */}
            <SectionLabel>Combos & Porciones</SectionLabel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1a1a1a] rounded overflow-hidden mb-8">
              {MANANAS_COMBOS.map((b) => <BebidaRow key={b.name} b={b} />)}
            </div>

            {/* Bebidas calientes */}
            <SectionLabel>Bebidas Calientes</SectionLabel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1a1a1a] rounded overflow-hidden">
              {MANANAS_BEBIDAS.map((b) => <BebidaRow key={b.name} b={b} />)}
            </div>

            <p className="text-[13px] font-light text-[#333] text-center mt-5 tracking-wide">
              * Precios sujetos a cambio · Extras se confirman al ordenar por WhatsApp
            </p>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════
          ALMUERZOS (tab 1)
      ══════════════════════════════════════════════════════════════ */}
      {active === 1 && (
        <div>
          {!isTabAvailable(1, slot) && (
            <div className="flex items-center gap-2 bg-[#111] border border-[#1e1e1e] rounded px-4 py-3 mb-4 text-[13px] text-[#444]">
              <span>⏰</span>
              <span>Almuerzos disponibles de 11:30 AM a 2:00 PM · {slot === 'breakfast' ? 'Volvemos al mediodía' : 'Servicio finalizado por hoy'}</span>
            </div>
          )}
          <SectionLabel>Almuerzo Especial</SectionLabel>
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${isTabAvailable(1, slot) ? '' : 'opacity-70 pointer-events-none select-none'}`}>
            {ALMUERZOS.map((p) => (
              <div key={p.name}
                className={`relative rounded overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                  p.featured ? 'border-[1.5px] border-[#D4A017]' : 'border border-[#1e1e1e] hover:border-[#333]'
                }`}
              >
                {p.featured && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#D4A017] text-[#1a0f00] text-[10px] font-medium px-4 py-1 rounded-b tracking-wider z-10">
                    ★ Más popular
                  </div>
                )}
                <div className="h-44 w-full relative overflow-hidden bg-[#111]">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/10 to-transparent" />
                </div>
                <div className="bg-[#111] p-5">
                  <h3 className="font-serif text-[19px] font-normal text-[#f0f0f0] mb-2 leading-snug">{p.name}</h3>
                  <p className="text-[13px] font-light text-[#555] leading-relaxed mb-4">{p.desc}</p>
                  <div className="font-serif text-[28px] font-light text-[#D4A017]">{p.price}</div>
                  <div className="text-[9px] font-light text-[#333] tracking-widest mt-1 mb-4">IVA INCLUIDO</div>
                  <a href={WA(p.name)} target="_blank" rel="noopener noreferrer"
                    className={`block w-full text-center text-[11px] font-medium py-2.5 rounded-sm tracking-widest uppercase transition-all duration-200 ${
                      p.featured
                        ? 'bg-[#D4A017] text-[#1a0f00] hover:opacity-85'
                        : 'bg-transparent text-[#555] border border-[#222] hover:border-[#D4A017] hover:text-[#D4A017]'
                    }`}>
                    Ordenar por WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════
          CENAS & PARRILLA (tab 2)
      ══════════════════════════════════════════════════════════════ */}
      {active === 2 && (
        <div>
          {!isTabAvailable(2, slot) && (
            <div className="flex items-center gap-2 bg-[#111] border border-[#1e1e1e] rounded px-4 py-3 mb-4 text-[13px] text-[#444]">
              <span>⏰</span>
              <span>No disponible por ahora — Cenas & Parrilla disponibles desde las 11:30 AM</span>
            </div>
          )}
          <div className={isTabAvailable(2, slot) ? '' : 'opacity-70 pointer-events-none select-none'}>
            <InfoBox>
              <span className="text-[#D4A017] font-normal">Cenas & Parrilla — pinchos, picadas, hamburguesas y más.</span>{' '}
              Perfectos para compartir o disfrutar solos. Confirmá ingredientes por WhatsApp.
            </InfoBox>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {OTROS.map((d) => (
                <PlatoCard key={d.name} {...d} waUrl={WA(d.name)} />
              ))}
            </div>
            <p className="text-[13px] font-light text-[#333] text-center mt-5 tracking-wide">
              * Precios sujetos a cambio · Los extras se confirman al ordenar por WhatsApp
            </p>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════
          A LA CARTA (tab 3)
      ══════════════════════════════════════════════════════════════ */}
      {active === 3 && (
        <div>
          <InfoBox>
            <span className="text-[#D4A017] font-normal">Todos los platos incluyen acompañamientos.</span>{' '}
            Arroz, papas a la francesa y ensalada. Consulta especificaciones por WhatsApp.
          </InfoBox>

          {([
            { label: 'Carnes',           items: ACARTA_CARNES },
            { label: 'Aves',             items: ACARTA_AVES },
            { label: 'Pescados & Mar',   items: ACARTA_MAR },
            { label: 'Pastas & Nuggets', items: ACARTA_PASTAS },
          ] as const).map(({ label, items }) => (
            <div key={label} className="mb-8">
              <SectionLabel>{label}</SectionLabel>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {items.map((d) => (
                  <PlatoCard key={d.name} {...d} waUrl={WA(d.name)} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════
          PIZZAS (tab 4)
      ══════════════════════════════════════════════════════════════ */}
      {active === 4 && (
        <div>
          {!isTabAvailable(4, slot) && (
            <div className="flex items-center gap-2 bg-[#111] border border-[#1e1e1e] rounded px-4 py-3 mb-4 text-[13px] text-[#444]">
              <span>⏰</span>
              <span>No disponible por ahora — Las pizzas están disponibles desde las 11:30 AM</span>
            </div>
          )}
          <div className={isTabAvailable(4, slot) ? '' : 'opacity-70 pointer-events-none select-none'}>
            <InfoBox>
              <span className="text-[#D4A017] font-normal">Pizzas artesanales al horno.</span>{' '}
              Precio base para tamaño personal. Disponibles en personal, pequeña, mediana y maxi.
            </InfoBox>

            <SectionLabel>Especiales</SectionLabel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1a1a1a] rounded overflow-hidden mb-6">
              {PIZZAS_ESPECIALES.map((p) => (
                <div key={p.name} className="bg-[#0f0f0f] p-4 flex items-center gap-4 hover:bg-[#131313] transition-colors">
                  <PizzaIcon />
                  <div className="flex-1 min-w-0">
                    <div className="font-serif text-[15px] font-normal text-[#ddd] mb-1 leading-snug">{p.name}</div>
                    <div className="flex gap-1.5 flex-wrap">
                      <span className="text-[10px] px-2 py-0.5 rounded-sm border border-[#D4A01730] bg-[#D4A01710] text-[#D4A017] tracking-wide">{p.base}</span>
                      {p.extras.map((e) => (
                        <span key={e} className="text-[10px] px-2 py-0.5 rounded-sm border border-[#2222228c] bg-[#111] text-[#555] tracking-wide">{e}</span>
                      ))}
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="font-serif text-[18px] font-light text-[#D4A017]">{p.price}</div>
                    <a href={WA(p.name)} target="_blank" rel="noopener noreferrer"
                      className="inline-block mt-1.5 text-[10px] font-medium bg-[#D4A017] text-[#1a0f00] px-3 py-1.5 rounded-sm tracking-wide uppercase">
                      Ordenar
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <SectionLabel>Clásicas</SectionLabel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1a1a1a] rounded overflow-hidden mb-6">
              {PIZZAS_CLASICAS.map((p) => (
                <div key={p.name} className="bg-[#0f0f0f] p-4 flex items-center gap-4 hover:bg-[#131313] transition-colors">
                  <PizzaIcon />
                  <div className="flex-1 min-w-0">
                    <div className="font-serif text-[15px] font-normal text-[#ddd] mb-1 leading-snug">{p.name}</div>
                    <div className="flex gap-1.5 flex-wrap">
                      <span className="text-[10px] px-2 py-0.5 rounded-sm border border-[#D4A01730] bg-[#D4A01710] text-[#D4A017] tracking-wide">{p.base}</span>
                      {p.extras.map((e) => (
                        <span key={e} className="text-[10px] px-2 py-0.5 rounded-sm border border-[#2222228c] bg-[#111] text-[#555] tracking-wide">{e}</span>
                      ))}
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="font-serif text-[18px] font-light text-[#D4A017]">{p.price}</div>
                    <a href={WA(p.name)} target="_blank" rel="noopener noreferrer"
                      className="inline-block mt-1.5 text-[10px] font-medium bg-[#D4A017] text-[#1a0f00] px-3 py-1.5 rounded-sm tracking-wide uppercase">
                      Ordenar
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <SectionLabel>Panzerotti</SectionLabel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1a1a1a] rounded overflow-hidden">
              <div className="bg-[#0f0f0f] p-4 flex items-center gap-4 hover:bg-[#131313] transition-colors">
                <PizzaIcon />
                <div className="flex-1 min-w-0">
                  <div className="font-serif text-[15px] font-normal text-[#ddd] mb-1 leading-snug">{PANCEROTTI_ITEM.name}</div>
                  <div className="flex gap-1.5">
                    <span className="text-[10px] px-2 py-0.5 rounded-sm border border-[#D4A01730] bg-[#D4A01710] text-[#D4A017] tracking-wide">{PANCEROTTI_ITEM.base}</span>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="font-serif text-[18px] font-light text-[#D4A017]">{PANCEROTTI_ITEM.price}</div>
                  <a href={WA(PANCEROTTI_ITEM.name)} target="_blank" rel="noopener noreferrer"
                    className="inline-block mt-1.5 text-[10px] font-medium bg-[#D4A017] text-[#1a0f00] px-3 py-1.5 rounded-sm tracking-wide uppercase">
                    Ordenar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════
          MOCKTAILS & SODAS (tab 5)
      ══════════════════════════════════════════════════════════════ */}
      {active === 5 && (
        <div>
          <InfoBox>
            <span className="text-[#D4A017] font-normal">Sin alcohol, con todo el sabor.</span>{' '}
            Mocktails artesanales, sodas refrescantes y bebidas Hatsu. Disponibles todo el día.
          </InfoBox>

          <SectionLabel>Mocktails — $16.000</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1a1a1a] rounded overflow-hidden mb-6">
            {MOCKTAILS.map((b) => <BebidaRow key={b.name} b={b} />)}
          </div>

          <SectionLabel>Sodas Refrescantes — $14.000</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1a1a1a] rounded overflow-hidden mb-6">
            {SODAS_REFRESCANTES.map((b) => <BebidaRow key={b.name} b={b} />)}
          </div>

          <SectionLabel>Sodas Hatsu — $8.000</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1a1a1a] rounded overflow-hidden mb-6">
            {SODAS_HATSU.map((b) => <BebidaRow key={b.name} b={b} />)}
          </div>

          <SectionLabel>Té Hatsu — $9.500</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1a1a1a] rounded overflow-hidden mb-6">
            {TE_HATSU.map((b) => <BebidaRow key={b.name} b={b} />)}
          </div>

          <SectionLabel>Bebidas</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1a1a1a] rounded overflow-hidden">
            {BEBIDAS.map((b) => <BebidaRow key={b.name} b={b} />)}
          </div>
        </div>
      )}
    </section>
  )
}
