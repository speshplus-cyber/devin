# Criadero Gracia Divina — Plataforma Web & CMS Administrativo

Sitio web oficial y panel de control para el criadero felino de élite **Gracia Divina**, especializado en Maine Coon, British Shorthair, Ragdoll y Sphynx. Incluye catálogo interactivo, cálculo de afinidad genética, pasarela de reserva y adopción, y un panel de administración (CMS) con autenticación protegida.

---

## 🚀 Despliegue en Vercel (Hosting en la Nube)

Este proyecto está 100% preparado y optimizado para **Vercel** con detección automática de Vite y enrutamiento SPA mediante `vercel.json`.

### Opción 1: Despliegue Automático desde GitHub (Recomendado)
1. Ve al panel de [Vercel Dashboard](https://vercel.com/new).
2. Conecta tu cuenta de GitHub y pulsa en **"Import"** sobre el repositorio `queenlambo6-wq/devin`.
3. Vercel detectará automáticamente:
   - **Framework:** `Vite`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Pulsa **Deploy**. En menos de 1 minuto tendrás tu dominio activo `https://devin-xxx.vercel.app`.

### Opción 2: Despliegue Directo con Vercel CLI
Desde la raíz del proyecto, ejecuta:
```bash
npx vercel
```
Para desplegar directamente a producción:
```bash
npx vercel --prod
```

---

## 🛠️ Desarrollo Local

### Requisitos Previos
- **Node.js**: v18 o superior
- **npm**: v9 o superior

### Instalación y Ejecución
```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo (puerto 3000)
npm run dev

# 3. Compilar para producción
npm run build

# 4. Previsualizar la compilación de producción
npm run preview
```

---

## 🔐 Panel de Administración (CMS)

El panel administrativo está protegido por una pasarela de inicio de sesión (`AdminLoginView`).

### Credenciales Oficiales de Acceso
- **Email 1:** `admin@criaderograciadivina.com`
- **Email 2:** `Criaderograciadivina@gmail.com`
- **Contraseña Inicial:** `GraciaDivina2026!`

### Funcionalidades del CMS
- **Escritorio & Analítica:** Métricas de visitas, adopciones y solicitudes pendientes.
- **Gestión de Ejemplares:** Alta, edición, filtrado y subida de fotos de cachorros.
- **Gestión de Camadas:** Publicación de camadas activas y previstas.
- **Testimonios:** Administración de reseñas de familias adoptantes.
- **Solicitudes de Adopción (Leads):** Seguimiento y gestión de formularios recibidos.
- **Ajustes Globales:** Modificación de teléfonos, WhatsApp, tarifas y políticas del criadero.
- **Seguridad & Accesos:** Cambio de contraseña y gestión de administradores autorizados.

---

## 📁 Estructura del Proyecto

```text
devin/
├── public/                 # Archivos estáticos y fotografías de alta resolución
│   ├── images/             # Logotipos y sellos oficiales de pedigrí
│   ├── photos/             # Catálogo fotográfico de cachorros
│   └── testimonials/       # Fotografías de adoptantes
├── src/
│   ├── components/         # Componentes UI (Header, Footer, Modales, WhatsApp)
│   ├── data/               # Datos iniciales (razas, camadas, testimonios)
│   ├── services/
│   │   ├── authService.ts  # Autenticación, sesiones y roles de administradores
│   │   └── siteStore.ts    # Persistencia de estado y base de datos local
│   ├── types/              # Definiciones TypeScript
│   ├── views/              # Vistas principales (Catálogo, Razas, Admin, etc.)
│   ├── App.tsx             # Enrutador principal de vistas
│   └── main.tsx            # Punto de entrada de React 19
├── vercel.json             # Configuración de despliegue para Vercel
├── .vercelignore          # Archivos excluidos en el despliegue
├── vite.config.ts          # Configuración del empaquetador Vite
└── package.json            # Dependencias y scripts de construcción
```

---

## 📄 Licencia y Derechos

© 2026 Criadero Gracia Divina. Todos los derechos reservados.
