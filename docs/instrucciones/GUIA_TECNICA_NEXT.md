# 🔧 Guía Técnica - Macaregua Next.js

## Inicio Rápido para Retomar el Proyecto

### 1. Setup del Ambiente

```bash
# Navegar a la carpeta del proyecto
cd /path/to/home/claude/macaregua

# Instalar dependencias
npm install

# Instalar dependencias adicionales recomendadas
npm install framer-motion react-hook-form zod zustand

# Iniciar servidor de desarrollo
npm run dev

# Abre http://localhost:3000
```

---

## 📂 Estructura de Carpetas Actual

```
macaregua/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Página principal (HOME)
│   │   ├── layout.tsx            # Root layout + SEO metadata
│   │   └── globals.css           # Estilos base + variables CSS
│   ├── components/
│   │   ├── Nav.tsx               # Navbar sticky
│   │   ├── Hero.tsx              # Hero con carousel
│   │   ├── MenuSection.tsx       # Menú con tabs (ALMUERZOS, DESAYUNOS)
│   │   ├── StatsBar.tsx          # Stats bar
│   │   ├── sections.tsx          # About, GMB, WhatsApp, Reviews, Footer
│   │   ├── ScrollReveal.tsx      # IntersectionObserver para animaciones
│   │   └── index.ts              # Re-exports
│   └── data/                     # (CREAR) Archivos de datos
│       ├── menu.ts
│       ├── testimonios.ts
│       └── stats.ts
├── public/
│   └── images/
│       ├── LOGO_macaregua_WHITE.png
│       ├── LOGO_macaregua.png
│       ├── hero-*.png
│       ├── plato-*.png
│       ├── gallery/              # (CREAR) Fotos de galería
│       └── menu/                 # Fotos de menú
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🎨 Sistema de Diseño

### Colores Principales
```css
--gold:         #D4A017  (oro principal)
--gold-light:   #f0c040  (oro claro)
--bg-primary:   #0d0d0d  (fondo principal)
--bg-secondary: #111111  (fondo secundario)
--text-primary: #f0f0f0  (texto principal)
--text-muted:   #888888  (texto atenuado)
--wa-green:     #25D366  (WhatsApp)
```

### Tipografía
```
Headings:   Merriweather (serif) - peso 300/400/700
Body:       DM Sans (sans) - peso 300/400/500
```

### Clases de Botones
```html
<!-- Botón oro principal -->
<a href="#" class="btn-gold">Texto</a>

<!-- Botón outline -->
<button class="btn-outline">Texto</button>

<!-- Botón WhatsApp -->
<a href="https://wa.me/573052015683" class="btn-wa">Pedir</a>
```

---

## 🔄 Componentes Existentes

### Nav.tsx - Navegación Sticky
**Props:** Ninguno (usa hardcoded)
**Features:**
- Logo dinámico (blanco en fondo oscuro)
- Links a secciones (Menú, Galería, Nosotros, Contacto)
- CTA WhatsApp con animación bounce
- Responsivo (hidden en móvil)

**Customización:**
```typescript
const WA_NUMBER = '573052015683'  // Cambiar número
const TABS = ['#menu', '#galeria', '#nosotros', '#contacto']
```

### Hero.tsx - Sección Hero
**Features:**
- Carousel automático de imágenes (4 imágenes)
- Animations al cargar
- 3 CTAs (Menú, Llamar, Domicilio)
- Indicadores de carousel interactivos

**Cambiar imágenes del carousel:**
```typescript
const HERO_IMAGES = [
  { src: '/images/hero-bandeja-paisa.png', alt: 'Bandeja Paisa' },
  // ... agregar más
]
```

### MenuSection.tsx - Menú con Tabs
**Features:**
- 5 tabs: Almuerzo, Desayuno, A la Carta, Pizzas, Bebidas
- Grilla responsive de platos
- Precios + descripción
- Botón "Ordenar por WhatsApp" por plato
- Platos destacados con marca "featured"

**Agregar nuevo plato:**
```typescript
const ALMUERZOS = [
  {
    name: 'Nombre del plato',
    desc: 'Descripción',
    price: '$20.000',
    featured: false,
    img: '/images/plato-nombre.png',
  },
  // ... más platos
]
```

**Agregar nueva categoría:**
1. Crear array (ej: `const PIZZAS = [...]`)
2. Agregar a TABS: `const TABS = [..., 'Pizzas']`
3. Agregar en el render:
```typescript
{active === 3 && (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {PIZZAS.map(plato => (...))}
  </div>
)}
```

### sections.tsx - About, GMB, WhatsApp, Reviews, Footer
**Componentes:**
- `AboutSection()` - "Quiénes somos" con stats
- `GMBSection()` - Card de Google Maps + info
- `WhatsAppSection()` - CTA grande de WhatsApp
- `ReviewsSection()` - Testimonios (hardcoded)
- `Footer()` - Footer simple
- `WhatsAppFloat()` - Botón flotante WhatsApp (inferior derecha)

---

## 🌄 Trabajar con Imágenes

### Reglas Next.js Image
1. **Siempre usa `Image` de 'next/image'** (no `<img>`)
2. **Especifica `width` y `height`**
3. **Usa `priority` para imágenes críticas** (hero, logo)
4. **Lazy load por defecto** (otros)

### Ejemplo correcto:
```typescript
import Image from 'next/image'

<Image
  src="/images/plato-bandeja.png"
  alt="Bandeja de Macaregua"
  width={400}
  height={300}
  className="object-cover rounded"
/>
```

### Optimizar imágenes antes de subirlas
```bash
# Convertir PNG a WebP (en Mac/Linux)
cwebp -q 80 imagen.png -o imagen.webp

# O usar ImageMagick
convert imagen.png -quality 80 imagen.webp
```

---

## 📐 Animaciones Disponibles

### CSS Animations (globals.css)
```css
@keyframes fadeUp {}      /* Fade + translate Y */
@keyframes fadeIn {}      /* Solo fade */
@keyframes slideLeft {}   /* Slide desde derecha */
@keyframes waBounce {}    /* Bounce (botón WA) */
@keyframes borderGlow {}  /* Glow border */
@keyframes mapPing {}     /* Ping (ubicación) */
```

### Clases de utilidad
```html
<!-- Fade up delay 100ms -->
<div class="animate-fade-up delay-100">Contenido</div>

<!-- Slide left con delay -->
<div class="animate-slide-left delay-300">Contenido</div>

<!-- Glow infinito -->
<div class="animate-border-glow">Contenido</div>
```

### ScrollReveal (IntersectionObserver)
El componente `ScrollReveal.tsx` agrega clase `.visible` cuando entra en viewport.

```typescript
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  return (
    <div className="reveal">
      {/* Contenido — se anima cuando entra en viewport */}
    </div>
  )
}
```

---

## 🔗 Links Internos y Externos

### Scroll suave a secciones
```html
<!-- En Nav o Hero -->
<a href="#menu">Ir al Menú</a>

<!-- En la sección -->
<section id="menu">
  {/* Contenido */}
</section>
```

### Links a WhatsApp
```typescript
const WA_NUMBER = '573052015683'
const WA_MESSAGE = encodeURIComponent('Hola, quiero ordenar...')
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`

<a href={WA_URL} target="_blank">Ordenar</a>
```

### Links a teléfono
```html
<a href="tel:7676071905">Llamar</a>
```

---

## 🚀 Deploy a Vercel

### 1. Crear cuenta en Vercel
```bash
npm install -g vercel
vercel login
```

### 2. Deploy (primera vez)
```bash
cd macaregua
vercel --prod
```

### 3. Configurar dominio
- En Vercel dashboard → Settings → Domains
- Apuntar DNS del dominio `macaregua.com` a Vercel

### 4. Deploy automático (recomendado)
```bash
git push origin main  # Auto-deploya en Vercel
```

---

## 📊 Variables de Entorno

### .env.local (crear en raíz del proyecto)
```env
# Contacto
NEXT_PUBLIC_WA_NUMBER=573052015683
NEXT_PUBLIC_PHONE=7676071905

# Analytics (Fase 2)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=XXXXXXXXXX

# Email (Fase 2)
RESEND_API_KEY=re_xxxxx

# CMS (Fase 2)
NEXT_PUBLIC_SANITY_PROJECT_ID=xxxxx
NEXT_PUBLIC_SANITY_DATASET=production
```

---

## 🧪 Testing & QA

### Lighthouse audit
```bash
npm run build
```

Abrir DevTools → Lighthouse → Audit

### Responsive test
```bash
# En Chrome DevTools
Cmd+Shift+M  # Toggle device toolbar
```

Testear en:
- iPhone 12 (375px)
- iPhone 14 Pro (390px)
- Samsung Galaxy S21 (360px)
- iPad (768px)
- Desktop (1920px)

### Performance metrics
```bash
npm install -D next-speed-insights

# En package.json
"scripts": {
  "analyze": "ANALYZE=true next build"
}

npm run analyze
```

---

## 🐛 Debugging

### Console logs
```typescript
'use client'
useEffect(() => {
  console.log('Component mounted')
}, [])
```

### Network requests (DevTools)
F12 → Network → Filtrar por XHR/Fetch

### CSS issues
- Abrir DevTools → Elements → Inspect elemento
- Revisar estilos applicados

---

## 📝 Notas importantes

1. **'use client'** solo donde se necesite (useState, useEffect, etc.)
2. **Siempre** importar Image desde 'next/image'
3. **Responsive first**: mobile en Tailwind va sin prefijo (sm:, md:, lg:)
4. **Animations**: evitar mucho movement para no saturar móvil
5. **Performance**: comprimir imágenes antes de subir

---

## 🔗 URLs Importantes

- **Documentación Next.js:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Framer Motion:** https://www.framer.com/motion/
- **Vercel Deploy:** https://vercel.com/docs
- **Google Fonts:** https://fonts.google.com

---

**Última actualización:** 2026-04-04
**Desenvolvedor:** Felipe Jiménez
