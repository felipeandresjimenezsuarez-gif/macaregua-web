# 🍽️ Macaregua — Análisis del Proyecto y Plan de Acción

**Fecha:** Abril 4, 2026
**Estado:** Retoma de Proyecto
**Objetivo:** Lanzar versión mejorada de página web (PC + Móvil)

---

## 📋 ESTADO ACTUAL DEL PROYECTO

### ✅ Fortalezas Existentes

1. **Stack Técnico Moderno y Optimizado**
   - Next.js 14 (App Router) + TypeScript
   - Tailwind CSS para estilos escalables
   - Framer Motion para animaciones
   - Google Fonts optimizadas (Merriweather + DM Sans)
   - SEO base con metadata y JSON-LD Schema

2. **Diseño y UX**
   - Interfaz elegante con tema oscuro (oro + gris)
   - Heroico con carousel de imágenes automático
   - Navegación sticky inteligente
   - Animaciones suaves y profesionales
   - Botones CTA bien posicionados (WhatsApp, Menú, Reservas)

3. **Componentes Funcionales**
   - Nav (navegación responsiva con logo)
   - Hero (carousel de imágenes, CTAs)
   - Stats Bar (estadísticas del restaurante)
   - Menu Section (tabs de menú)
   - About, GMB, Reviews, WhatsApp Sections
   - Footer y WhatsApp flotante

4. **Mobile-First Approach**
   - Responsive desde el inicio
   - Menú colapsable para móviles
   - Botones táctiles adecuados
   - Imágenes optimizadas

---

## 🔍 AUDITORÍA DE OPORTUNIDADES DE MEJORA

### 1. **Performance & Core Web Vitals** (CRÍTICO)
**Impacto:** Alto en conversión y SEO

- [ ] Optimizar imágenes héroe (actualmente > 600KB)
- [ ] Implementar lazy loading para imágenes de galería
- [ ] Minificar CSS/JS bundle
- [ ] Agregar service worker para caché
- [ ] Usar WebP en lugar de PNG donde sea posible
- [ ] Implementar font subsetting (solo caracteres latinos)

**Métricas actuales a mejorar:**
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

### 2. **Galería de Productos** (ALTA PRIORIDAD)
**Impacto:** Aumenta domicilios en 25-40%

- [ ] Crear grid de galería con fotos de platos
- [ ] Lightbox/modal para ver foto en grande
- [ ] Integrar fotos de la carpeta "fotografias comida ALMUERZOS"
- [ ] Agregar descripción de platos + precios
- [ ] Tags de categorías (Almuerzo, Pizza, Desayuno, A la Carta)

### 3. **Menú Interactivo** (MEDIA PRIORIDAD)
**Impacto:** Facilita pedidos y reduce llamadas

- [ ] Menú detallado con precios actualizados
- [ ] Búsqueda de platos
- [ ] Filtros por categoría
- [ ] Precios dinámicos desde CMS (Fase 2)

### 4. **Integración de Sistemas** (MEDIA-BAJA)
**Impacto:** Automatización de conversiones

- [ ] Google Analytics 4 (para seguimiento de conversiones)
- [ ] Meta Pixel (para retargeting)
- [ ] Google Maps embebido con ubicación
- [ ] Integración con POS para precios en tiempo real
- [ ] Formulario de reservas con email confirmación

### 5. **Contenido y Copy** (BAJA)
**Impacto:** Mejora SEO local y confianza

- [ ] Mejorar descripciones SEO
- [ ] Agregar testimonios/reviews destacados
- [ ] FAQ sobre domicilios
- [ ] Blog con recetas/historia de la marca (Fase 2)

### 6. **Experiencia Móvil** (REVISIÓN)
**Impacto:** 70%+ del tráfico es móvil

- [ ] Testear en dispositivos reales (iPhone 12/13, Samsung S21)
- [ ] Mejorar tamaño de botones táctiles en móvil
- [ ] Revisar legibilidad en pantallas pequeñas
- [ ] Asegurar WhatsApp CTA siempre visible

---

## 🎯 PLAN DE ACCIÓN PRIORITARIO (FASE 1)

### Sprint 1: Foundation (Semana 1-2)
**Objetivo:** Base sólida + mejora de performance

1. **Optimización de Imágenes**
   - Comprimir y convertir a WebP
   - Crear versiones responsive (srcset)
   - Agregar lazy loading con `next/image`

2. **Performance Audit**
   - Ejecutar Lighthouse
   - Implementar Code Splitting
   - Optimizar CSS crítico

3. **Setup Analytics**
   - Google Analytics 4
   - Meta Pixel
   - Conversión tracking

4. **Responsive Testing**
   - Testing en móviles reales
   - Ajustes de UI según feedback
   - Asegurar buttons/CTAs tactil-friendly

### Sprint 2: Gallery & Showcase (Semana 2-3)
**Objetivo:** Mostrar comida + aumentar apetito del cliente

1. **Galería de Productos**
   - Integrar fotos de "fotografias comida ALMUERZOS"
   - Crear componente Gallery con grid responsive
   - Implementar lightbox modal
   - Agregar descripciones + precios

2. **Menu Section Enhancement**
   - Tabs mejorados (Almuerzo, Desayuno, Cena, Pizza, A la Carta)
   - Precios visibles
   - CTAs a WhatsApp para cada categoría

3. **Social Proof**
   - Integrar Google Reviews
   - Sección de testimonios
   - Rating visible en header

### Sprint 3: Conversions & Automation (Semana 3-4)
**Objetivo:** Facilitar pedidos y reservas

1. **Integración Google Maps**
   - Ubicación embebida
   - Horarios
   - Link a direcciones

2. **Formulario de Reservas**
   - Campo: nombre, teléfono, fecha, hora, #personas
   - Integración email (Resend)
   - Confirmación automática

3. **WhatsApp Automático**
   - CTA contextual por sección (menú, galería, etc)
   - Mensajes pre-rellenados
   - FAQ vía WhatsApp (Fase 2)

---

## 📊 MÉTRICAS DE ÉXITO

### Fase 1 (Lanzamiento)
- [ ] Score Lighthouse: 85+ en Performance
- [ ] LCP < 2.5s
- [ ] Mobile First Index ready
- [ ] 100% responsive (testeado en 5+ dispositivos)

### Fase 2 (Optimización - 2 semanas después)
- [ ] CTR en "Ver Menú" +30%
- [ ] Domicilios vía WhatsApp +25%
- [ ] Tasa bounce -15%
- [ ] Tiempo promedio en sitio +40%

---

## 🗓️ CRONOGRAMA ESTIMADO

```
Semana 1:  Performance + Setup Analytics         [4-5 días]
Semana 2:  Gallery + Menu Enhancement          [4-5 días]
Semana 3:  Conversions + Forms + Testing       [4-5 días]
Semana 4:  Polish + Deploy + Monitoring        [2-3 días]

TOTAL: 3-4 semanas para versión 1.0
```

---

## 🛠️ STACK RECOMENDADO (Sin cambios)

- ✅ **Next.js 14** (App Router)
- ✅ **TypeScript** (Type safety)
- ✅ **Tailwind CSS** (Utilidades)
- ✅ **Framer Motion** (Animaciones)
- 📦 **Agregamos en Fase 1:**
  - `next-image-loader` (optimización)
  - `zustand` (estado global si es necesario)
  - `react-hook-form` + `zod` (formularios)

- 📦 **Agregamos en Fase 2:**
  - `sanity.io` (CMS)
  - `resend` (emails transaccionales)
  - `googleapis` (Google Analytics 4, Drive)

---

## 🚀 PRÓXIMOS PASOS INMEDIATOS

1. **Preparar assets:**
   - Procesar fotos de comida (300+ fotos)
   - Crear mini gallery de 12-15 platos estrella
   - Obtener precios actualizados del POS

2. **Preparar ambiente:**
   - Instalar dependencies locales
   - Setup del proyecto en dev
   - Testing en localhost

3. **Crear estructura de carpetas:**
   - `/public/images/gallery` (fotos de platos)
   - `/public/images/menu` (cartas)
   - `/src/data` (menú, precios, testimonios)

---

## 💡 RECOMENDACIONES ESTRATÉGICAS

### Para aumentar Domicilios (tu KPI #1)
1. **Hacerlo visible:** Botón WhatsApp flotante + en hero
2. **Mostrar menú:** Fotos de platos atractivas
3. **Reducir fricción:** Link directo a WhatsApp con mensaje pre-llenado
4. **Social proof:** Reviews y fotos de clientes
5. **Urgencia:** "Abierto hasta las 11 PM" visible

### Para mejorar Conversión
1. **Velocidad:** Cada 100ms extra = -1% conversión
2. **Mobile first:** 70% del tráfico es móvil
3. **Imágenes de comida:** Disparan apetito visual
4. **CTAs claros:** No ambigüedad
5. **Testear constantemente:** A/B en botones, colores, posición

---

## ⚙️ CONFIGURACIÓN TÉCNICA RECOMENDADA

### `.env.local` (Fase 1)
```env
NEXT_PUBLIC_WA_NUMBER=573052015683
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=XXXXXXXXXX
```

### `package.json` scripts recomendados
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "analyze": "ANALYZE=true next build"
  }
}
```

---

## 📞 Contacto & Soporte

**Proyecto:** Macaregua Restaurante
**Stack:** Next.js 14 + TypeScript + Tailwind
**Responsable:** Felipe Jiménez
**Última actualización:** 2026-04-04
