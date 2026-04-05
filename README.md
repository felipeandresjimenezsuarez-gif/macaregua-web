# Macaregua — Restaurante · Pizza · Café

Sitio web oficial de Restaurante Macaregua, Girón, Santander.
Stack: **Next.js 14 (App Router) + Tailwind CSS + TypeScript**

---

## Instalación desde cero

### 1. Prerrequisitos
```bash
node -v   # Necesitas v18.17+ o v20+
git -v
```
Si no tienes Node 20:
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
nvm install 20 && nvm use 20
```

### 2. Crear el proyecto
```bash
npx create-next-app@latest macaregua \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*"

cd macaregua
```

### 3. Instalar dependencias adicionales
```bash
npm install framer-motion
```

### 4. Copiar archivos
Reemplaza los archivos generados con los de este proyecto:
```
src/
  app/
    page.tsx          ← página principal
    layout.tsx        ← fuentes + metadata SEO + JSON-LD
    globals.css       ← variables CSS + animaciones
  components/
    Nav.tsx
    Hero.tsx
    MenuSection.tsx
    StatsBar.tsx
    sections.tsx      ← About, GMB, WhatsApp, Reviews, Footer, Float
    ScrollReveal.tsx
tailwind.config.ts
```

### 5. Imágenes
Copia la carpeta `/images` del proyecto actual a `/public/images`:
```
public/
  images/
    LOGO_macaregua_WHITE.png   ← logo blanco para fondo oscuro
    LOGO_macaregua.png         ← logo oscuro para fondo claro
    hero-bandeja-paisa.png
    hero-cazuela.png
    hero-caldo-arepa.png
    hero-sancocho.png
    gallery-pollo-plancha.png
    plato-almuerzo.png
    plato-bandeja.png
    plato-chuleta.png
    plato-lasagna.png
    plato-hamburguesa.png
    plato-pizza1.png
    plato-picada1.png
    plato-picada2.png
    plato-picada3.png
    menu/
      menu-bandeja.jpg
      menu-pollo-plancha.jpg
      almuerzo-bandeja-paisa.jpg
      almuerzo-arroz-carnes.jpg
      almuerzo-fricasé.jpg
      cena-cazuela-mariscos.jpg
      desayuno-caldo-huevo.jpg
```

### 6. Correr en desarrollo
```bash
npm run dev
```
Abre http://localhost:3000

### 7. Deploy a Vercel
```bash
npm run build   # verificar que compila sin errores
vercel --prod   # deploy directo
```

---

## Estructura del proyecto

```
macaregua/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Página principal
│   │   ├── layout.tsx        # Fuentes + SEO metadata + JSON-LD
│   │   └── globals.css       # Variables + animaciones CSS
│   └── components/
│       ├── Nav.tsx           # Navbar sticky con logo y WA CTA
│       ├── Hero.tsx          # Hero con carousel de imágenes
│       ├── StatsBar.tsx      # Barra de estadísticas
│       ├── MenuSection.tsx   # Menú con tabs (Almuerzo, Desayuno...)
│       ├── sections.tsx      # About, GMB, WhatsApp, Reviews, Footer, Float
│       ├── ScrollReveal.tsx  # IntersectionObserver para animaciones
│       └── index.ts          # Re-exports
├── public/
│   └── images/               # Todas las imágenes del restaurante
├── tailwind.config.ts
└── README.md
```

---

## Siguiente fase (Fase 2)

- [ ] Integrar **Sanity CMS** para que el cliente edite precios y menú sin tocar código
- [ ] Agregar **Google Analytics 4** + **Meta Pixel**
- [ ] Implementar **schema JSON-LD** completo para SEO local
- [ ] Formulario de **reservas** con Resend (email transaccional)
- [ ] Sección **Pizzas** y **A la Carta** con precios reales del POS
- [ ] Galería con **lightbox** para las fotos de los platos
- [ ] Optimización de **Core Web Vitals** (LCP, CLS, FID)

---

## Variables de entorno (Fase 2)
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
RESEND_API_KEY=
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_META_PIXEL_ID=
NEXT_PUBLIC_WA_NUMBER=573052015683
```

---

## Contacto técnico
Desarrollado por Felipe Jiménez · Bucaramanga, Santander


## 🚀 Deployment Update
Fixed Next.js 14 TypeScript configuration for proper Vercel deployment.
tsconfig.json updated with correct compiler options.
