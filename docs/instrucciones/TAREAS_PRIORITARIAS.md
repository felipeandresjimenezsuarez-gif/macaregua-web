# ✅ Checklist de Tareas Prioritarias - Macaregua Web

**Estado:** Retomando proyecto
**Objetivo:** Lanzar versión mejorada en 3-4 semanas
**Actualizado:** 2026-04-04

---

## 🎯 SPRINT 1: Preparación Base (Semana 1)

### Setup & Ambiente
- [ ] Instalar Node.js v20+ (si no tienes)
- [ ] Navegar a `/home/claude/macaregua`
- [ ] `npm install`
- [ ] `npm run dev` → Verificar que corre en `localhost:3000`
- [ ] Crear `.env.local` con variables base:
  ```env
  NEXT_PUBLIC_WA_NUMBER=573052015683
  NEXT_PUBLIC_PHONE=7676071905
  ```

### Revisión de Código Existente
- [ ] Leer `README.md` del proyecto
- [ ] Explorar estructura en VS Code
- [ ] Verificar componentes (Nav, Hero, MenuSection, sections)
- [ ] Testear navegación en desktop
- [ ] Testear en móvil (Chrome DevTools)

### Optimización de Imágenes
- [ ] Comprimir LOGO_macaregua_WHITE.png (>700KB actualmente)
  - [ ] Reducir a <200KB
  - [ ] Convertir a WebP si es posible
- [ ] Verificar imágenes hero-*.png
  - [ ] Cada una debe ser <300KB
  - [ ] Crear versión WebP
- [ ] Organizar carpeta `/public/images/`:
  - [ ] `/public/images/hero/` (imágenes carousel)
  - [ ] `/public/images/menu/` (fotos de platos)
  - [ ] `/public/images/gallery/` (galería de productos)

### Analytics Setup
- [ ] Crear cuenta Google Analytics 4 (si no existe)
  - [ ] Obtener GA_ID: `G-XXXXXXXXXX`
  - [ ] Agregar a `.env.local`
- [ ] Crear Meta Pixel para retargeting
  - [ ] Obtener PIXEL_ID
  - [ ] Agregar a `.env.local`
- [ ] (Opcional) Integrar inicialmente en layout.tsx

---

## 🎨 SPRINT 2: Galería y Menú Mejorado (Semana 2)

### Procesar Fotos de Comida
- [ ] Ir a carpeta `fotografias comida ALMUERZOS/`
- [ ] Seleccionar 12-15 fotos mejores
- [ ] Para cada foto:
  - [ ] Comprimir a <300KB
  - [ ] Convertir a WebP
  - [ ] Copiar a `/public/images/gallery/`
  - [ ] Nombrar consistentemente: `almuerzo-bandeja-paisa.webp`, etc.
- [ ] Crear referencia: `src/data/gallery-metadata.ts`
  ```typescript
  export const GALLERY_IMAGES = [
    {
      src: '/images/gallery/almuerzo-bandeja-paisa.webp',
      alt: 'Almuerzo Bandeja Paisa',
      category: 'Almuerzos',
      price: '$25.000'
    },
    // ... más
  ]
  ```

### Crear Componente Gallery
- [ ] Crear `src/components/GallerySection.tsx`
- [ ] Grid responsive (1 col móvil, 3 cols desktop)
- [ ] Lightbox/modal para ver foto en grande
  - [ ] Opción A: Usar `next/image` + modal nativo
  - [ ] Opción B: Integrar librería (ej: `photoswipe`)
- [ ] Animaciones scroll-reveal
- [ ] CTA "Ordenar" debajo de cada foto

### Mejorar MenuSection
- [ ] Completar datos de ALMUERZOS (verificar precios)
- [ ] Completar datos de DESAYUNOS (verificar precios)
- [ ] Crear categoría PIZZAS
  ```typescript
  const PIZZAS = [
    { name: 'Pizza Margarita', price: '$15.000', ... },
    // ... más pizzas
  ]
  ```
- [ ] Crear categoría A_LA_CARTA
- [ ] Agregar imágenes a cada plato (de la galería)
- [ ] Testear tabs en móvil
- [ ] Hacer tabs scrolleable en móvil (si no caben)

### Sección Reviews/Testimonios
- [ ] Obtener últimas 5 reviews de Google
- [ ] Crear `src/data/testimonios.ts`
- [ ] Mostrar en `ReviewsSection`
- [ ] Agregar foto + nombre del cliente (si es público)
- [ ] Link a perfil Google

---

## 🔧 SPRINT 3: Conversiones y Integraciones (Semana 3)

### Google Maps Embebido
- [ ] Obtener API key Google Maps
- [ ] En `GMBSection`:
  - [ ] Reemplazar mapa ficticio por embed real
  - [ ] Ubicación: Vía Chimita Km 1, Girón, Santander
  - [ ] Zoom: 15
  - [ ] Marcador dinámico con ubicación

### Formulario de Reservas (Básico)
- [ ] Crear `src/components/ReservasForm.tsx`
- [ ] Campos:
  - [ ] Nombre (required)
  - [ ] Teléfono (required)
  - [ ] Email (required)
  - [ ] Fecha (required)
  - [ ] Hora (required)
  - [ ] # de personas (required)
  - [ ] Notas (optional)
- [ ] Validación con `zod` o `react-hook-form`
- [ ] Submit: enviar email a restaurante
  - [ ] Opción A: Usar Resend (free, recomendado)
  - [ ] Opción B: Usar API propia
- [ ] Confirmación visual al usuario
- [ ] Agregar a sección "Reservas"

### WhatsApp CTA Mejorado
- [ ] Botón flotante en esquina (visible siempre)
- [ ] Mensajes contextuales según sección:
  - [ ] Hero: "Hola, quiero hacer un pedido"
  - [ ] Menú: "Quiero ordenar [nombre del plato]"
  - [ ] Galería: "Quiero ese plato"
  - [ ] Reservas: "Quiero reservar"
- [ ] Agregar emoji (🍽️🍕🥗)

### Testing Completo
- [ ] Responsive en 5+ dispositivos:
  - [ ] iPhone 12 (375px)
  - [ ] iPhone 14 Pro (390px)
  - [ ] Android 360px
  - [ ] iPad (768px)
  - [ ] Desktop (1920px)
- [ ] Lighthouse audit → Score 85+
- [ ] Performance:
  - [ ] LCP < 2.5s
  - [ ] FID < 100ms
  - [ ] CLS < 0.1
- [ ] Enlaces y CTAs funcionales
- [ ] WhatsApp y tel: links funcionan en móvil

---

## 📦 SPRINT 4: Polish & Deploy (Semana 4)

### SEO Final
- [ ] Metadata en layout.tsx actualizada
- [ ] Open Graph images correctas
- [ ] Schema JSON-LD completo
- [ ] Sitemap.xml automático (Next.js genera)
- [ ] robots.txt

### Animaciones y UX
- [ ] Scroll-reveal en todas las secciones
- [ ] Transiciones suaves
- [ ] Loading states en formularios
- [ ] Error handling visible
- [ ] Mensajes de éxito claros

### Build y Minificación
- [ ] `npm run build` sin errores
- [ ] Revisar bundle size: `npm run analyze`
- [ ] No debe exceder 300KB main bundle

### Deploy a Vercel
- [ ] Crear cuenta Vercel (si no existe)
- [ ] Conectar repo GitHub
- [ ] Deploy automático en push a main
- [ ] Verificar en `https://macaregua.vercel.app/`
- [ ] Configurar dominio `macaregua.com`
  - [ ] Apuntar DNS a Vercel
  - [ ] SSL automático

### Monitoreo Inicial
- [ ] Google Analytics funcionando
- [ ] Meta Pixel tracking
- [ ] Verificar conversiones en dashboard
- [ ] Test: hacer un "pedido" de prueba
- [ ] Verificar que llega email/WhatsApp

---

## 🎯 Tareas Opcionales (Fase 2)

- [ ] Integrar Sanity CMS para editar menú sin código
- [ ] Sincronizar precios con POS automáticamente
- [ ] Blog / Recetas (aumenta SEO)
- [ ] Promociones dinámicas ("Hoy: Pizza + Gaseosa = $25.000")
- [ ] Sistema de loyalidad / puntos
- [ ] App mobile con React Native
- [ ] Chat bot WhatsApp automático (Twilio)

---

## 📋 Datos a Obtener AHORA

Necesitas conseguir/confirmar:

- [ ] **Fotos:** Seleccionar mejores 15 de "fotografias comida ALMUERZOS/"
- [ ] **Menú Actual:** Precios de Almuerzos, Desayunos, Pizzas, A la Carta
- [ ] **Horarios:** Confirmar horas de operación (dice hasta 11 PM)
- [ ] **Ubicación:** Exacta en Google Maps (Vía Chimita Km 1)
- [ ] **Teléfono:** Confirmar número principal (767 60 719)
- [ ] **WhatsApp:** Número para pedidos (573052015683)
- [ ] **Email:** Para reservas/contacto
- [ ] **Reviews:** Últimas 5 reviews de Google
- [ ] **Logo:** Versión en alta resolución (.ai / vectorizado)

---

## 📊 Métricas a Seguir

Después del deploy, medir:

```
Semana 1 (Post-launch):
- [ ] Tráfico total / sesiones
- [ ] Tasa de bounce
- [ ] Tiempo promedio en sitio
- [ ] CTR en "Pedir por WhatsApp"
- [ ] Performance score Lighthouse

Semana 4 (Optimización):
- [ ] Comparar métrica vs baseline
- [ ] Identificar secciones con mayor engagement
- [ ] Revisar dónde se pierden usuarios (funnel analysis)
- [ ] A/B test en botones/colores (si es posible)
```

---

## 🚨 Puntos Críticos

⚠️ **NO OLVIDAR:**
1. Comprimir imágenes ANTES de subir (no subir PNG de 700KB)
2. Testear WhatsApp links en móvil real (no solo DevTools)
3. Verificar que formularios envíen emails realmente
4. Revisar velocidad en conexión 4G (simular en DevTools)
5. Hacer backup del proyecto en Git

---

## 📞 Recursos Rápidos

- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind:** https://tailwindcss.com
- **Google Analytics:** https://analytics.google.com
- **Vercel Deploy:** https://vercel.com
- **Resend (Email):** https://resend.com
- **Compresión imágenes:** https://tinypng.com o https://squoosh.app

---

**Última actualización:** 2026-04-04
**Proyectista:** Felipe Jiménez
**Objetivo:** Lanzar en 3-4 semanas
