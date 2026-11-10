import { BreedType } from '../types';

export type AppRoute =
  | 'home'
  | 'breed'
  | 'breeds-index'
  | 'contact'
  | 'testimonials'
  | 'health'
  | 'philosophy'
  | 'policy'
  | 'admin';

export interface RouteInfo {
  route: AppRoute;
  breed?: BreedType;
  path: string;
}

export const BREED_SLUGS: Record<string, BreedType> = {
  'maine-coon': 'Maine Coon',
  'mainecoon': 'Maine Coon',
  'british-shorthair': 'British Shorthair',
  'britishshorthair': 'British Shorthair',
  'british': 'British Shorthair',
  'ragdoll': 'Ragdoll',
  'sphynx': 'Sphynx',
};

export const BREED_TO_SLUG: Record<BreedType, string> = {
  'Maine Coon': 'maine-coon',
  'British Shorthair': 'british-shorthair',
  'Ragdoll': 'ragdoll',
  'Sphynx': 'sphynx',
};

export const getRouteFromPathname = (pathname: string = window.location.pathname): RouteInfo => {
  // Normalize pathname: remove trailing slash, lowercase
  const clean = pathname.toLowerCase().replace(/\/+$/, '') || '/';

  // Check breed paths (both /maine-coon and /raza/maine-coon)
  const breedMatch = clean.match(/^\/(?:raza\/)?([a-z0-9-]+)$/);
  if (breedMatch) {
    const slug = breedMatch[1];
    if (BREED_SLUGS[slug]) {
      return {
        route: 'breed',
        breed: BREED_SLUGS[slug],
        path: `/${BREED_TO_SLUG[BREED_SLUGS[slug]]}`,
      };
    }
  }

  if (clean === '/razas' || clean === '/nuestras-razas') {
    return { route: 'breeds-index', path: '/razas' };
  }
  if (clean === '/contacto' || clean === '/contactar') {
    return { route: 'contact', path: '/contacto' };
  }
  if (clean === '/opiniones' || clean === '/testimonios' || clean === '/reviews') {
    return { route: 'testimonials', path: '/opiniones' };
  }
  if (clean === '/garantia-salud' || clean === '/salud' || clean === '/pedigree') {
    return { route: 'health', path: '/garantia-salud' };
  }
  if (clean === '/filosofia' || clean === '/sobre-nosotros' || clean === '/nosotros') {
    return { route: 'philosophy', path: '/filosofia' };
  }
  if (clean === '/politica-adopcion' || clean === '/envio-y-entrega' || clean === '/entrega') {
    return { route: 'policy', path: '/politica-adopcion' };
  }
  if (clean === '/admin' || clean === '/control-panel') {
    return { route: 'admin', path: '/admin' };
  }

  return { route: 'home', path: '/' };
};

export const updatePageSeo = (routeInfo: RouteInfo) => {
  if (typeof document === 'undefined') return;

  let title = 'criaderograciadivina | Gatitos de Raza Premium en España';
  let description =
    'criaderograciadivina: criadero ético de élite especializado en Maine Coon (700 €), British Shorthair (650 €), Ragdoll (600 €) y Sphynx (600 €). Vacunados, microchip y garantía genética.';

  if (routeInfo.route === 'breed' && routeInfo.breed) {
    const breed = routeInfo.breed;
    if (breed === 'Maine Coon') {
      title = 'Gatitos Maine Coon de Raza Pura (700 €) | criaderograciadivina';
      description =
        'Gatitos Maine Coon en adopción desde 700 €. Gigantes gentiles con pedigrí oficial WCF/FIFe, vacunados, microchip, testados HCM negativo y envío climatizado a toda España.';
    } else if (breed === 'British Shorthair') {
      title = 'Gatitos British Shorthair de Raza Pura (650 €) | criaderograciadivina';
      description =
        'Gatitos British Shorthair auténticos (650 €). Manto denso tacto peluche, carácter sereno y equilibrado. Vacunados, con microchip, garantía de 2 años y entrega a domicilio.';
    } else if (breed === 'Ragdoll') {
      title = 'Gatitos Ragdoll de Raza Pura (600 €) | criaderograciadivina';
      description =
        'Gatitos Ragdoll de pura raza (600 €). Impresionantes ojos azules y docilidad absoluta. Entrega con pasaporte, microchip, vacunas al día y garantía genética por escrito.';
    } else if (breed === 'Sphynx') {
      title = 'Gatitos Sphynx Egipcios sin Pelo (600 €) | criaderograciadivina';
      description =
        'Gatitos Sphynx de alta cuna (600 €). Piel cálida de melocotón, extraordinariamente cariñosos y sociables. Vacunados, microchip y garantía sanitaria oficial de 2 años.';
    }
  } else if (routeInfo.route === 'contact') {
    title = 'Contacto y Citas Oficiales | criaderograciadivina';
    description =
      'Contacte con criaderograciadivina por WhatsApp (+34 632 96 82 08) o email (Criaderograciadivina@gmail.com). Visitas concertadas y asesoramiento de adopción.';
  } else if (routeInfo.route === 'testimonials') {
    title = 'Opiniones y Reseñas de Adoptantes Verificados | criaderograciadivina';
    description =
      'Opiniones 100% verificadas de familias que han adoptado gatitos Maine Coon, British Shorthair, Ragdoll y Sphynx con criaderograciadivina en toda España.';
  } else if (routeInfo.route === 'health') {
    title = 'Garantía Sanitaria, Vacunaciones y Pedigrí | criaderograciadivina';
    description =
      'Conozca nuestro protocolo veterinario: reproductores testados negativos por ADN (HCM, PKD, FIV/FeLV), garantía genética de 2 años, microchip y pedigrí federado.';
  } else if (routeInfo.route === 'philosophy') {
    title = 'Nuestra Filosofía y Crianza Ética Familiar | criaderograciadivina';
    description =
      'Descubra cómo criamos a nuestros gatitos en un entorno 100% familiar, con amor, socialización temprana y máxima dedicación veterinaria.';
  } else if (routeInfo.route === 'policy') {
    title = 'Condiciones de Adopción y Envío Climatizado | criaderograciadivina';
    description =
      'Información sobre el proceso de reserva, contrato de adopción oficial y entregas seguras mediante transporte veterinario climatizado a cualquier ciudad de España.';
  } else if (routeInfo.route === 'admin') {
    title = 'Panel de Administración | criaderograciadivina';
    description = 'Acceso administrativo a la gestión de camadas y solicitudes.';
  }

  document.title = title;

  // Update meta description
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', description);
  }

  // Update Open Graph tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', title);
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', description);
  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) ogUrl.setAttribute('content', window.location.href);
};

export const navigateTo = (path: string, options: { replace?: boolean; scroll?: boolean } = {}) => {
  const { replace = false, scroll = true } = options;
  if (replace) {
    window.history.replaceState(null, '', path);
  } else {
    window.history.pushState(null, '', path);
  }
  // Dispatch custom event so listeners know URL changed
  window.dispatchEvent(new Event('app:navigate'));
  if (scroll) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};
