# Instrucciones para Push a GitHub

El código y las imágenes están completamente listos. Solo necesitas hacer el push desde tu máquina local.

## Opción 1: Push desde tu máquina local (RECOMENDADO)

Si tienes una copia local del repositorio en tu máquina:

```bash
# Ir a la carpeta del proyecto
cd C:\Users\usuario\Desktop\01_AGENCIA_CORE\01_PROYECTOS_ACTIVOS\macaregua

# Verificar el estado
git status

# Agregar todos los cambios
git add .

# Hacer commit
git commit -m "Add optimized images and update component references

- Optimized 7 food images (99% size reduction: 25MB → 100KB)
- Updated Hero carousel with real restaurant photography
- Updated MenuSection with correct image references
- Updated AboutSection image references
- All images converted to JPEG for web optimization
- Ready for production deployment"

# Hacer push a main
git push origin main
```

## Opción 2: Push desde GitHub Web (Si no tienes git local)

1. Ve a https://github.com/felipeandresjimenezsuarez/macaregua
2. Click en "Upload files"
3. Sube toda la carpeta `home/claude/macaregua/`

## Opción 3: Usar GitHub Desktop

1. Abre GitHub Desktop
2. Selecciona el repositorio de Macaregua
3. Verá los cambios automáticamente
4. Haz commit y push

---

## ✅ Verificación Post-Push

Una vez hagas push, Vercel debería:

1. **Detectar el cambio** (5-10 segundos)
2. **Iniciar build automático** (2-3 minutos)
3. **Deploy a producción** si todo es exitoso

### Para verificar el estado:

**En Vercel Dashboard:**
- Ve a https://vercel.com/felipeandresjimenezsuarez/macaregua
- Verifica que el build esté en estado "Ready" (verde)
- Haz click en el deployment para ver detalles

**En GitHub:**
- Verifica que el commit llegó a main: https://github.com/felipeandresjimenezsuarez/macaregua/commits/main

---

## 📁 Archivos Clave Que Se Enviarán

```
├── src/
│   ├── components/
│   │   ├── Hero.tsx (actualizado)
│   │   ├── MenuSection.tsx (actualizado)
│   │   ├── sections.tsx (actualizado)
│   │   └── [otros components]
│   ├── app/
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   └── globals.css
├── public/
│   └── images/
│       ├── hero-bandeja-paisa.jpg ✨ NUEVO
│       ├── hero-cazuela.jpg ✨ NUEVO
│       ├── hero-caldo-arepa.jpg ✨ NUEVO
│       ├── hero-sancocho.jpg ✨ NUEVO
│       ├── plato-almuerzo.jpg ✨ NUEVO
│       ├── plato-bandeja.jpg ✨ NUEVO
│       └── gallery-pollo-plancha.jpg ✨ NUEVO
└── [configuración]
```

---

## 🎯 Resultado Esperado

Después del push y deployment:

- ✅ Hero carousel con fotos reales
- ✅ Menú completamente funcional con imágenes
- ✅ Carga rápida (imágenes optimizadas)
- ✅ Responsive en móviles y desktop
- ✅ Listo para recibir pedidos por WhatsApp

---

## 💡 Alternativa: Si Todo Falla

Si tienes problemas con git, puedes:

1. Ir a Vercel → Settings → Git
2. Hacer un reconect del repositorio
3. Vercel hará un pull automático de la rama main

---

**¿Preguntas?** Revisa `CAMBIOS_REALIZADOS.md` para detalles técnicos
