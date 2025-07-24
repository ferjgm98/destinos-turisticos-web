# Prueba Técnica - Sistema de Gestión de Destinos Turísticos

## Descripción del Proyecto

Este proyecto es una app web desarrollada con NextJS para la gestión de destinos turisticos, incluyendo funcionalidad de likes en tiempo real.

## Demo

### Características principales:

- **CRUD completo** de destinos turísticos
- **Comunicación en tiempo real** con WebSockets (Socket.io)
- **Interfaz moderna** con Tailwind CSS
- **Gestión de estado** con React Query (@tanstack/react-query)
- **Formularios reactivos** con validaciones
- **Arquitectura escalable** con componentes modulares

## Configuración del Entorno

### 1. Clonar el repositorio

```bash
git clone <url-del-repositorio>
cd prueba-tecnica-turismo
```

### 2. Instalar dependencias

```bash
npm install
# o
yarn install
# o
pnpm install
# o
bun install
```

### 3. Configurar variables de entorno

Crea un archivo `.env.dev` en la raíz del proyecto con las siguientes variables:

```env
# API Base URL
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000

# Socket.io Server URL
NEXT_PUBLIC_SOCKET_URL=http://localhost:8000

# Environment
NODE_ENV=development
```

**Nota:** Ajusta las URLs según tu configuración del backend. Asegúrate de que el servidor de la API esté ejecutándose en el puerto especificado.

## Comandos Útiles

### Desarrollo

```bash
# Iniciar el servidor de desarrollo con Turbopack
npm run dev

# El proyecto estará disponible en http://localhost:3000
```

### Construcción y Producción

```bash
# Construir el proyecto para producción
npm run build

# Iniciar el servidor en modo producción (después de build)
npm run start
```

### Calidad de Código

```bash
# Ejecutar el linter para revisar el código
npm run lint
```

### Scripts de Base de Datos (si aplica)

```bash
# Ejecutar migraciones (configurar según tu backend)
npm run migrate

# Ejecutar pruebas (configurar según tus necesidades)
npm run test
```

## Tecnologías Utilizadas

- **Framework:** Next.js 15.4.3 con App Router
- **Frontend:** React 19.1.0, Tailwind CSS 4
- **Estado:** React Query (@tanstack/react-query)
- **Comunicación:** Socket.io Client
- **Validaciones:** Zod
- **Lenguaje:** TypeScript 5

## Funcionalidades

1. **Listado de Destinos:** Visualización en tiempo real de todos los destinos turísticos
2. **Agregar Destino:** Formulario para crear nuevos destinos turísticos
3. **Detalles del Destino:** Vista detallada de cada destino
4. **Actualizar Destino:** Edición de destinos existentes
5. **Comunicación en Tiempo Real:** Updates automáticos vía WebSockets
