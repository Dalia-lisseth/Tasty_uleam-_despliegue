# 🍴 Tasty Uleam - Plataforma de Comidas Universitaria

Sistema web moderno para gestión de comidas, pedidos y reservas en diferentes sedes universitarias.

## ✨ Características

- 🔐 Autenticación con **Supabase**
- 🍽️ Gestión de menús por sede
- 🛒 Sistema de pedidos online
- 📅 Sistema de reservas
- 👨‍💼 Panel de administración
- 📱 Interfaz responsive
- ⚡ Desarrollado con React 19 + TypeScript + Vite

## 🚀 Inicio Rápido

### Requisitos
- Node.js 18+ instalado
- npm o yarn

### Instalación

```bash
# Clonar o entrar al proyecto
cd prototipo

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:5176](http://localhost:5176) en tu navegador.

## 🔧 Configuración de Supabase (IMPORTANTE)

Para que la base de datos funcione, debes configurar Supabase:

1. **Lee la guía completa**: [`CONFIGURACION_BASE_DATOS.md`](./CONFIGURACION_BASE_DATOS.md)
2. Crea un proyecto en [Supabase](https://supabase.com/)
3. Ejecuta el SQL de configuración
4. Obtén tus credenciales
5. Actualiza el archivo `.env.local`

### Archivo `.env.local` de ejemplo

```env
VITE_SUPABASE_URL=https://tu-proyecto.supabase.co
VITE_SUPABASE_ANON_KEY=tu-anon-key-aqui
```

## 📖 Guías Disponibles

- **[RESUMEN.txt](./RESUMEN.txt)** - Resumen visual del estado del proyecto
- **[INSTRUCCIONES.md](./INSTRUCCIONES.md)** - Paso a paso para ejecutar
- **[CONFIGURACION_BASE_DATOS.md](./CONFIGURACION_BASE_DATOS.md)** - Guía completa de Supabase

## 📁 Estructura del Proyecto

```
src/
├── api/              # Conexiones a APIs
├── assets/           # Imágenes y recursos
├── componets/        # Componentes React
├── config/           # Configuración (Supabase)
├── services/         # Servicios (Auth, Menu, Pedidos, Reservas)
├── styles/           # CSS estilos
├── types/            # Tipos TypeScript
├── vistas/           # Páginas principales
├── App.tsx           # Componente principal
└── main.tsx          # Entrada de la aplicación
```

## 📱 Rutas Disponibles

| Ruta | Descripción |
|------|-------------|
| `/` | Página de inicio con sedes |
| `/registro` | Registro de usuarios |
| `/login` | Inicio de sesión |
| `/sede/:sedeId` | Detalle de sede con menú |
| `/admin/login` | Login del administrador |
| `/admin/panel` | Panel de administración |

## 🎯 Credenciales de Admin (por defecto)

```
Email: admin@tastyuleam.com
Contraseña: admin123
```

## 🛠️ Comandos Disponibles

```bash
# Desarrollo con hot reload
npm run dev

# Compilar para producción
npm run build

# Preview del build
npm run preview

# Linting
npm run lint
```

## 📦 Dependencias Principales

- **React** 19.2.0
- **React Router** 7.12.0
- **Supabase JS** 12.7.0 ⭐ Nueva
- **TypeScript** 5.9.3
- **Vite** 7.3.1

## 🎨 Estilos

El proyecto utiliza CSS personalizado con estilos modernos:
- Diseño responsive
- Paleta de colores moderna
- Animaciones suaves
- Bootstrap grid integrado (parcial)

## 🔐 Seguridad

⚠️ **IMPORTANTE**: 
- No incluyas el archivo `.env.local` en Git
- Las credenciales de Supabase son sensibles
- Para producción, implementa reglas de seguridad en Supabase

## 🐛 Troubleshooting

### El proyecto no compila
```bash
npm install
npm run build
```

### Supabase no funciona
- Verifica que `.env.local` tenga las credenciales correctas
- Abre la consola (F12) para ver errores
- Confirma que las tablas están creadas en Supabase

### Hot reload no funciona
```bash
# Reinicia el servidor
npm run dev
```

## 📝 Licencia

Este proyecto es parte del sistema Tasty Uleam.

## 👨‍💻 Desarrollo

Desarrollado con ❤️ usando React, TypeScript y Supabase.

---

**¿Necesitas ayuda?** Lee las guías en la carpeta del proyecto:
- `RESUMEN.txt` - Estado general
- `INSTRUCCIONES.md` - Paso a paso
- `CONFIGURACION_BASE_DATOS.md` - Supabase en detalle
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
