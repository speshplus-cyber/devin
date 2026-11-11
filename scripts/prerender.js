import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

if (!fs.existsSync(distDir)) {
  console.error('Dist directory does not exist. Run vite build first.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');

const routes = [
  {
    slug: 'maine-coon',
    title: 'Gatitos Maine Coon de Raza Pura (700 \u20AC) | criaderograciadivina',
    description: 'Gatitos Maine Coon en adopci\u00F3n desde 700 \u20AC. Gigantes gentiles con pedigr\u00ED oficial WCF/FIFe, vacunados, microchip, testados HCM negativo y env\u00EDo climatizado a toda Espa\u00F1a.',
  },
  {
    slug: 'british-shorthair',
    title: 'Gatitos British Shorthair de Raza Pura (650 \u20AC) | criaderograciadivina',
    description: 'Gatitos British Shorthair aut\u00E9nticos (650 \u20AC). Manto denso tacto peluche, car\u00E1cter sereno y equilibrado. Vacunados, con microchip, garant\u00EDa de 2 a\u00F1os y entrega a domicilio.',
  },
  {
    slug: 'ragdoll',
    title: 'Gatitos Ragdoll de Raza Pura (600 \u20AC) | criaderograciadivina',
    description: 'Gatitos Ragdoll de pura raza (600 \u20AC). Impresionantes ojos azules y docilidad absoluta. Entrega con pasaporte, microchip, vacunas al d\u00EDa y garant\u00EDa gen\u00E9tica por escrito.',
  },
  {
    slug: 'sphynx',
    title: 'Gatitos Sphynx Egipcios sin Pelo (600 \u20AC) | criaderograciadivina',
    description: 'Gatitos Sphynx de alta cuna (600 \u20AC). Piel c\u00E1lida de melocot\u00F3n, extraordinariamente cari\u00F1osos y sociables. Vacunados, microchip y garant\u00EDa sanitaria oficial de 2 a\u00F1os.',
  },
  {
    slug: 'razas',
    title: 'Nuestras Razas Felinas Exclusivas | criaderograciadivina',
    description: 'Criadero \u00E9tico de Maine Coon, British Shorthair, Ragdoll y Sphynx en Espa\u00F1a. Descubre los est\u00E1ndares y cachorros disponibles.',
  },
  {
    slug: 'contacto',
    title: 'Contacto y Citas Oficiales | criaderograciadivina',
    description: 'Contacte con criaderograciadivina por WhatsApp (+34 632 96 82 08) o email (Criaderograciadivina@gmail.com). Visitas concertadas y asesoramiento de adopci\u00F3n.',
  },
  {
    slug: 'opiniones',
    title: 'Opiniones y Rese\u00F1as de Adoptantes Verificados | criaderograciadivina',
    description: 'Opiniones 100% verificadas de familias que han adoptado gatitos Maine Coon, British Shorthair, Ragdoll y Sphynx con criaderograciadivina en toda Espa\u00F1a.',
  },
  {
    slug: 'garantia-salud',
    title: 'Garant\u00EDa Sanitaria, Vacunaciones y Pedigr\u00ED | criaderograciadivina',
    description: 'Conozca nuestro protocolo veterinario: reproductores testados negativos por ADN (HCM, PKD, FIV/FeLV), garant\u00EDa gen\u00E9tica de 2 a\u00F1os, microchip y pedigr\u00ED federado.',
  },
  {
    slug: 'filosofia',
    title: 'Nuestra Filosof\u00EDa y Crianza \u00C9tica Familiar | criaderograciadivina',
    description: 'Descubra c\u00F3mo criamos a nuestros gatitos en un entorno 100% familiar, con amor, socializaci\u00F3n temprana y m\u00E1xima dedicaci\u00F3n veterinaria.',
  },
  {
    slug: 'politica-adopcion',
    title: 'Condiciones de Adopci\u00F3n y Env\u00EDo Climatizado | criaderograciadivina',
    description: 'Informaci\u00F3n sobre el proceso de reserva, contrato de adopci\u00F3n oficial y entregas seguras mediante transporte veterinario climatizado a cualquier ciudad de Espa\u00F1a.',
  },
  {
    slug: 'admin',
    title: 'Panel de Administraci\u00F3n | criaderograciadivina',
    description: 'Acceso administrativo a la gesti\u00F3n de camadas y solicitudes.',
  },
];

console.log(`Generating pre-rendered static HTML files for ${routes.length} routes...`);

for (const route of routes) {
  let customHtml = baseHtml;

  // Replace title
  customHtml = customHtml.replace(
    /<title>.*?<\/title>/i,
    `<title>${route.title}</title>`
  );

  // Replace meta description
  customHtml = customHtml.replace(
    /<meta\s+name=["']description["']\s+content=["'].*?["']\s*\/?>/i,
    `<meta name="description" content="${route.description}" />`
  );

  // Replace og:title
  customHtml = customHtml.replace(
    /<meta\s+property=["']og:title["']\s+content=["'].*?["']\s*\/?>/i,
    `<meta property="og:title" content="${route.title}" />`
  );

  // Replace og:description
  customHtml = customHtml.replace(
    /<meta\s+property=["']og:description["']\s+content=["'].*?["']\s*\/?>/i,
    `<meta property="og:description" content="${route.description}" />`
  );

  // 1. Write as dist/<slug>.html (for cleanUrls support)
  const filePathHtml = path.join(distDir, `${route.slug}.html`);
  fs.writeFileSync(filePathHtml, customHtml, 'utf8');

  // 2. Write as dist/<slug>/index.html (for directory support)
  const dirPath = path.join(distDir, route.slug);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  fs.writeFileSync(path.join(dirPath, 'index.html'), customHtml, 'utf8');

  console.log(`✓ Generated ${route.slug}.html and ${route.slug}/index.html`);
}

console.log('All static pages generated successfully!');
