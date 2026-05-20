# Instrucciones para Push a GitHub

## 📌 Problema Identificado

El entorno de sandbox tiene un problema con git en el directorio del proyecto montado. Para desplegar los cambios, sigue estos pasos:

## ✅ Opción 1: Push Manual (Recomendado)

### En tu computadora (Windows/Mac/Linux):

```bash
# 1. Navega al directorio del proyecto
cd "C:\Users\usuario\Desktop\01_AGENCIA_CORE\01_PROYECTOS_ACTIVOS\macaregua"

# 2. Verifica el estado actual
git status

# 3. Agrega el archivo actualizado
git add src/components/MenuSection.tsx

# 4. Haz commit con mensaje descriptivo
git commit -m "Update menu section with real food images

- Updated DESAYUNOS with specific dish photos (pollo-plancha, caldos)
- Updated A LA CARTA with appropriate food images (pollo, cazuelas)
- All PIZZAS and BEBIDAS now use plato-almuerzo.jpg
- Optimized images from 25MB+ to 34-49KB
- Images deployed in public/images/ folder"

# 5. Haz push a GitHub
git push origin main
# o si tu rama principal es 'master':
# git push origin master

# 6. Verifica en Vercel que el deployment se activó automáticamente
```

## 📋 Cambios Realizados

El archivo `src/components/MenuSection.tsx` ha sido actualizado con estos cambios en los arrays de datos:

### DESAYUNOS
```javascript
// Antes: /images/plato-almuerzo.jpg, /images/hero-bandeja-paisa.jpg, etc.
// Ahora: /images/pollo-plancha.jpg, /images/caldo-huevo.jpg, etc.
```

### A LA CARTA
```javascript
// Pechuga → /images/pollo-plancha.jpg
// Cazuela Mariscos → /images/cazuela-mariscos.jpg
// Chatas → /images/plato-bandeja-paisa.jpg
// Resto → /images/plato-almuerzo.jpg
```

### PIZZAS
```javascript
// Todas → /images/plato-almuerzo.jpg
```

### BEBIDAS
```javascript
// Todas → /images/plato-almuerzo.jpg
```

## 📁 Archivos Disponibles

El archivo actualizado está en tu carpeta del proyecto:
- `src/components/MenuSection.tsx` ← **ACTUALIZADO**

Todas las imágenes están en:
- `public/images/pollo-plancha.jpg` (34KB)
- `public/images/caldo-huevo.jpg` (44KB)
- `public/images/caldo-costilla.jpg` (43KB)
- `public/images/plato-bandeja-paisa.jpg` (49KB)
- `public/images/cazuela-mariscos.jpg` (44KB)
- `public/images/plato-almuerzo.jpg` (105KB)

## 🎯 Verificación Final

Después de hacer push:

1. **GitHub**: Verifica que el commit apareció en tu repositorio
   ```
   https://github.com/tuusuario/macaregua/commits/main
   ```

2. **Vercel**: El deployment debería activarse automáticamente
   - Entra a tu dashboard de Vercel
   - Verifica que el deployment en progreso se completó
   - Revisa la URL de tu sitio (ejemplo: macaregua.vercel.app)

3. **En el sitio**:
   - Ve a la sección de Menú
   - Abre cada pestaña (Desayuno, A la Carta, Almuerzo, Pizzas, Bebidas)
   - Verifica que las imágenes se cargan correctamente

## ⚠️ Si tienes problemas

Si el push no funciona, verifica:

```bash
# Ver rama actual
git branch

# Ver remoto configurado
git remote -v

# Configurar remoto si es necesario
git remote add origin https://github.com/tuusuario/macaregua.git
# o
git remote set-url origin https://github.com/tuusuario/macaregua.git

# Intentar push nuevamente
git push -u origin main
```

## 📞 Soporte

- GitHub Docs: https://docs.github.com/en/github/using-git/pushing-commits-to-a-remote-repository
- Vercel Auto Deploy: https://vercel.com/docs/git-integrations

---

**Status**: Cambios completados ✓ | Listo para push a GitHub ✓
