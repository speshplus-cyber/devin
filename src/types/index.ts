export type BreedType =
  | 'Maine Coon'
  | 'British Shorthair'
  | 'Ragdoll'
  | 'Sphynx';

export type KittenStatus = 'Disponible' | 'En Adopción' | 'Reservado';

export interface Kitten {
  id: string;
  name: string;
  pedigreeName: string;
  breed: BreedType;
  gender: 'Macho' | 'Hembra';
  birthDate: string;
  ageWeeks: number;
  colorManto: string;
  eyeColor: string;
  status: KittenStatus;
  price: string;
  featured: boolean;
  images: string[];
  description: string;
  temperament: string[];
  sire: {
    name: string;
    title: string;
    breed: string;
    color: string;
  };
  dam: {
    name: string;
    title: string;
    breed: string;
    color: string;
  };
  healthTests: {
    hcm: 'Negativo / Libre' | 'Libre por progenitores';
    pkd: 'Negativo / Libre' | 'Libre por progenitores';
    fivFelv: 'Negativo';
    sma: 'Libre N/N';
    microchip: boolean;
    vaccines: string;
    dewormed: boolean;
    passport: boolean;
  };
}

export interface BreedInfo {
  id: BreedType;
  name: string;
  origin: string;
  shortDesc: string;
  heroImage: string;
  gallery: string[];
  standardFed: string;
  averageWeight: string;
  lifeSpan: string;
  characterTraits: string[];
  coatCare: string;
  idealFor: string;
  overview: string;
}

export interface Litter {
  id: string;
  code: string;
  litterName: string;
  breed: BreedType;
  birthDate: string;
  readyDate: string;
  sire: string;
  dam: string;
  kittensCount: number;
  availableCount: number;
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  adopterName: string;
  city: string;
  catName: string;
  breed: BreedType | string;
  adoptionYear: string;
  rating: number;
  image: string;
  text: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Salud & Garantías' | 'Proceso de Reserva' | 'Cuidados & Adaptación';
}

export interface SiteSettings {
  siteTitle: string;
  siteSubtitle: string;
  announcementText: string;
  heroHeadline: string;
  heroSubtitle: string;
  contactEmail: string;
  whatsappNumber: string;
  catteryLocation: string;
  defaultPrice: string;
  wcfAffiliation: string;
  asfeAffiliation: string;
}

