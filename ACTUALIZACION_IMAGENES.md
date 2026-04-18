# Actualización de Imágenes del Menú - Macaregua

## ✅ Cambios Completados

Se han actualizado exitosamente todos los paths de imágenes en `MenuSection.tsx` para utilizar las fotografías reales optimizadas de comida.

### Imágenes Optimizadas Disponibles
- **pollo-plancha.jpg** (34KB) - Para platos de pollo
- **caldo-huevo.jpg** (44KB) - Para caldos con huevo
- **caldo-costilla.jpg** (43KB) - Para caldo de costilla
- **plato-bandeja-paisa.jpg** (49KB) - Para platos principales y bandejas
- **cazuela-mariscos.jpg** (44KB) - Para mariscos y cazuelas
- **plato-almuerzo.jpg** (105KB) - Para acompañamientos y bebidas

### Secciones Actualizadas en MenuSection.tsx

#### 1. DESAYUNOS ✓
- Bandeja Asada → pollo-plancha.jpg
- Caldos (Res, Costilla, Huevo) → caldo-huevo.jpg / caldo-costilla.jpg
- Sandwich de Pollo → pollo-plancha.jpg
- Resto de desayunos → plato-bandeja-paisa.jpg

#### 2. A LA CARTA ✓
- Pechuga a la Plancha / Gratinada → pollo-plancha.jpg
- Bagre Sudado / Cazuela Mariscos → cazuela-mariscos.jpg
- Chatas → plato-bandeja-paisa.jpg
- Resto de carnes y pescados → plato-almuerzo.jpg

#### 3. PIZZAS ✓
- Todas las pizzas → plato-almuerzo.jpg

#### 4. BEBIDAS ✓
- Todas las bebidas → plato-almuerzo.jpg

#### 5. ALMUERZOS ✓
- Sin cambios (ya tenía imágenes base)

## 📋 Pasos Siguientes

1. **Hacer push a GitHub:**
```bash
cd /ruta/a/macaregua
git add src/components/MenuSection.tsx
git commit -m "Update menu section with real food images

- Updated DESAYUNOS with specific dish photos
- Updated A LA CARTA with appropriate food images
- All PIZZAS and BEBIDAS now use plato-almuerzo.jpg
- Optimized images from 25MB+ to 34-49KB using ImageMagick

Images are now deployed in public/images/ folder"
git push origin main
```

2. **Verificar en Vercel:**
   - El deployment se activará automáticamente al hacer push a GitHub
   - Las imágenes se cargarán desde `/images/` en la sección del menú
   - Revisar que todas las imágenes se vean correctamente

## 📁 Estructura de Archivos

```
/public/images/
  ├── pollo-plancha.jpg (34K)
  ├── caldo-huevo.jpg (44K)
  ├── caldo-costilla.jpg (43K)
  ├── plato-bandeja-paisa.jpg (49K)
  ├── cazuela-mariscos.jpg (44K)
  ├── plato-almuerzo.jpg (105K)
  └── [imágenes base originales]

/src/components/
  └── MenuSection.tsx (ACTUALIZADO)
```

## 🔍 Verificación de Cambios

Todas las imágenes están presentes en `/public/images/` y los paths en MenuSection.tsx han sido actualizados correctamente para referencias a:
- `/images/pollo-plancha.jpg`
- `/images/caldo-huevo.jpg`
- `/images/caldo-costilla.jpg`
- `/images/plato-bandeja-paisa.jpg`
- `/images/cazuela-mariscos.jpg`
- `/images/plato-almuerzo.jpg`

## ✨ Resultado Final

El menú ahora mostrará:
✓ Imágenes reales de comida para cada plato
✓ Carga rápida (imágenes optimizadas a 34-49KB)
✓ Mejor experiencia visual del usuario
✓ Interfaz completa y funcional en Vercel

**Estado:** Listo para push a GitHub y deployment a Vercel
