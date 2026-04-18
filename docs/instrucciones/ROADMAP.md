# 🗺️ Hoja de Ruta — Restaurante Macaregua Web

> Proyecto: Sitio web de Restaurante Macaregua · Girón, Santander, Vía Chimita Km 1
> Repositorio: https://github.com/felipeandresjimenezsuarez-gif/macaregua-web
> Sitio en producción: https://macaregua-web.vercel.app
> Última actualización: Abril 2026

---

## ✅ FASE 1 — Fundamentos (Completada)

### Sitio base
- [x] Diseño oscuro premium con paleta dorada (#D4A017) y tipografía serif
- [x] Hero con imágenes reales del restaurante y carousel
- [x] Barra de stats: 4.4★ Google Reviews · 83 reseñas · 11 PM · Km 1
- [x] Navegación fija con links a secciones
- [x] Botón "Pedir por WhatsApp" prominente en header
- [x] Footer con datos de contacto y ubicación

### Menú completo
- [x] 5 categorías con tabs: Desayuno, A la Carta, Almuerzo, Pizzas, Bebidas
- [x] Fotos reales del restaurante en cada plato (convertidas desde PNG originales)
- [x] Thumbnails 56×56 que llenan el espacio sin letterboxing
- [x] Cards de almuerzo con imagen portrait de altura fija
- [x] Íconos temáticos para Pizzas (pizza ámbar) y Bebidas (por categoría)
- [x] Precios con IVA incluido
- [x] Botón "Ordenar" → WhatsApp directo con nombre del plato pre-cargado

### Sección Instagram
- [x] Grid 2×3 con fotos reales del restaurante como previews
- [x] Badge "REEL" en cada card
- [x] Hover con botón play y overlay
- [x] Click abre el reel real en Instagram
- [x] 6 URLs de reels de @restaurante_macaregua mapeadas correctamente

### Infraestructura
- [x] Desplegado en Vercel con auto-deploy desde GitHub
- [x] Dominio temporal: macaregua-web.vercel.app
- [x] Imágenes optimizadas (PNG → JPG, max 800px, quality 85)
- [x] Next.js 14 + TypeScript + Tailwind CSS

---

## 🔄 FASE 2 — Crecimiento Local (Próximo)

### Prioridad ALTA

#### 1. Dominio personalizado
- Comprar `macaregua.co` o `restaurantemacaregua.co` (~$20.000 COP/año en Namecheap)
- Conectar a Vercel: Dashboard → Settings → Domains → Add Domain
- Tiempo estimado: 1 sesión

#### 2. Google Business Profile
- Reclamar/crear perfil en business.google.com
- Datos clave: nombre exacto, dirección "Vía Chimita Km 1, Girón, Santander", horario, WhatsApp
- Subir fotos del restaurante (mínimo 10 fotos variadas)
- Esto hace que aparezca en Google Maps y búsquedas locales como "restaurante Girón"
- Tiempo estimado: 2-3 horas (manual)

#### 3. SEO local — Schema JSON-LD
- Agregar marcado estructurado de restaurante en `layout.tsx`
- Incluye: nombre, dirección, horario, menú, precio, imagen, coordenadas GPS
- Le dice explícitamente a Google que es un restaurante en Girón, Santander
- Tiempo estimado: 1 sesión con Claude

```json
// Ejemplo del schema a implementar:
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Restaurante Macaregua",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Vía Chimita Km 1",
    "addressLocality": "Girón",
    "addressRegion": "Santander",
    "addressCountry": "CO"
  },
  "telephone": "+573052015683",
  "openingHours": "Mo-Sa 06:30-22:30",
  "servesCuisine": "Colombian",
  "priceRange": "$"
}
```

### Prioridad MEDIA

#### 4. Menú dinámico por horario
Mostrar la categoría activa según la hora del día para evitar pedidos fuera de horario:
- **Mañana 6:30–11:00** → Tab activo: Desayuno (caldos, bandejas)
- **Mediodía 11:00–15:30** → Tab activo: Almuerzo (corriente, ejecutivo)
- **Tarde-Noche 15:30–22:30** → Tab activo: A la Carta / Pizzas
- Implementar con `new Date().getHours()` en el `useEffect` de MenuSection
- Tiempo estimado: 1 sesión con Claude

#### 5. Sección de Ubicación / Cómo llegar
- Mapa embebido de Google Maps apuntando a Vía Chimita Km 1
- Instrucciones de cómo llegar desde Bucaramanga y desde Girón centro
- Énfasis visual en la ubicación para atraer tráfico local del área
- Tiempo estimado: 1 sesión con Claude

#### 6. Galería de fotos ampliada
- Usar las fotografías del restaurante disponibles en `fotografias comida ALMUERZOS/`
- Crear sección Galería con grid masonry o carousel
- Tiempo estimado: 1 sesión con Claude

---

## 📈 FASE 3 — Marketing Digital (Mediano plazo)

### Estrategia de contenido
- **Flujo principal**: Reel en Instagram → aparece en el sitio web → WhatsApp para ordenar
- Publicar mínimo 3 reels por semana (rotando: desayuno, almuerzo, pizza/noche)
- Usar los hashtags: #GirónSantander #RestauranteGirón #ComidaColombiana #Macaregua

### Publicidad local (Meta Ads)
- Segmentación: radio de 15 km desde Girón, Santander
- Objetivo: tráfico al sitio web o mensajes por WhatsApp
- Presupuesto inicial sugerido: $50.000–$100.000 COP/día durante 2 semanas de prueba

### Google Ads local
- Anuncios en búsquedas: "restaurante Girón", "almuerzo ejecutivo Girón", "pizza Girón"
- Solo aparecer en búsquedas de Girón y municipios cercanos
- Presupuesto sugerido: $30.000–$80.000 COP/día

### Integración de reseñas
- Mostrar reseñas reales de Google en la web
- Agregar botón "Dejar reseña en Google" (link directo al perfil de Google Business)

---

## 🔮 FASE 4 — Funcionalidades Avanzadas (Largo plazo)

### Sistema de pedidos
- Formulario de pedido en línea con opciones de menú
- Integración con WhatsApp Business API (confirmación automática)
- Sistema de domicilios con tracking básico

### Programa de fidelización
- Página de "Clientes frecuentes" con registro
- Promociones especiales por WhatsApp a clientes registrados

### Analytics
- Google Analytics 4 configurado
- Eventos de conversión: click en WhatsApp, click en llamar, visita al menú
- Reporte mensual de visitas y comportamiento

---

## 📁 Estructura del proyecto

```
C:\Users\usuario\Desktop\macaregua-web\   ← Proyecto en tu PC (GitHub)
C:\Users\usuario\Desktop\macaregua\       ← Carpeta raíz con recursos
  └── fotografias comida ALMUERZOS\
      └── FOTOGRAFIAS NUEVAS\             ← Fotos originales del restaurante (PNG)

GitHub: felipeandresjimenezsuarez-gif/macaregua-web
Vercel: macaregua-web.vercel.app (auto-deploy al hacer git push)
```

## 🔑 Datos importantes para retomar

| Dato | Valor |
|------|-------|
| WhatsApp pedidos | +57 305 201 5683 |
| Instagram | @restaurante_macaregua |
| Ubicación | Vía Chimita Km 1, Girón, Santander |
| Horario | Lunes–Sábado, 6:30 AM – 10:30 PM |
| Framework | Next.js 14, TypeScript, Tailwind CSS |
| Deploy | Vercel (auto desde GitHub main) |
| Tag estable | v1.0.0 |

---

## 💻 Comandos para retomar desarrollo

```bash
# En PowerShell, desde C:\Users\usuario\Desktop\macaregua-web

# Ver estado del proyecto
git status
git log --oneline -5

# Instalar dependencias (solo la primera vez)
npm install

# Correr en local para ver cambios antes de publicar
npm run dev        # Abre en http://localhost:3000

# Publicar cambios
git add src/components/ArchivoModificado.tsx
git commit -m "Descripción del cambio"
git push origin main   # Vercel despliega automáticamente en ~1 minuto
```

---

*Este archivo se actualiza al final de cada sesión de trabajo.*
