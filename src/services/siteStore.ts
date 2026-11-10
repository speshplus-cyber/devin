import { Kitten, Litter, Testimonial, SiteSettings } from '../types';
import { KITTENS_DATA, LITTERS_DATA, TESTIMONIALS_DATA, DEFAULT_SITE_SETTINGS } from '../data/catsData';

export interface AdoptionLead {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  city: string;
  breed: string;
  kittenName?: string;
  housingType: string;
  experience: string;
  otherPets: string;
  notes: string;
  submittedAt: string;
  status: 'Nuevo' | 'Contactado' | 'Aprobado' | 'Archivado';
}

const STORAGE_KEYS = {
  KITTENS: 'gracia_divina_kittens_v8',
  LITTERS: 'gracia_divina_litters_v8',
  TESTIMONIALS: 'gracia_divina_testimonials_v9',
  SETTINGS: 'gracia_divina_settings_v8',
  LEADS: 'gracia_divina_leads_v8',
};

// Purge any legacy cached data keys from earlier builds
if (typeof window !== 'undefined' && window.localStorage) {
  try {
    const legacyKeys = [
      'gracia_divina_kittens',
      'gracia_divina_kittens_v1',
      'gracia_divina_kittens_v2',
      'gracia_divina_kittens_v3',
      'gracia_divina_kittens_v4',
      'gracia_divina_kittens_v5',
      'gracia_divina_kittens_v6',
      'gracia_divina_kittens_v7',
      'gracia_divina_litters_v1',
      'gracia_divina_litters_v2',
      'gracia_divina_litters_v3',
      'gracia_divina_litters_v4',
      'gracia_divina_litters_v5',
      'gracia_divina_litters_v6',
      'gracia_divina_litters_v7',
      'gracia_divina_settings_v7',
      'gracia_divina_testimonials',
      'gracia_divina_testimonials_v1',
      'gracia_divina_testimonials_v2',
      'gracia_divina_testimonials_v3',
      'gracia_divina_testimonials_v4',
      'gracia_divina_testimonials_v5',
      'gracia_divina_testimonials_v6',
      'gracia_divina_testimonials_v7',
      'gracia_divina_testimonials_v8',
    ];
    legacyKeys.forEach((key) => {
      try {
        localStorage.removeItem(key);
      } catch (_) {}
    });
  } catch (_) {}
}

export const getStoredKittens = (): Kitten[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.KITTENS);
    if (raw) {
      const parsed = JSON.parse(raw);
      // Ensure the stored kittens list is valid and contains the 55 authentic kittens
      if (Array.isArray(parsed) && parsed.length === KITTENS_DATA.length) {
        return parsed;
      }
    }
  } catch (e) {
    console.error('Error loading kittens from storage:', e);
  }
  // Default to the 55 verified kittens and cache them
  try {
    localStorage.setItem(STORAGE_KEYS.KITTENS, JSON.stringify(KITTENS_DATA));
  } catch (_) {}
  return KITTENS_DATA;
};

export const saveStoredKittens = (kittens: Kitten[]): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.KITTENS, JSON.stringify(kittens));
  } catch (e) {
    console.error('Error saving kittens to storage:', e);
  }
};

export const getStoredLitters = (): Litter[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.LITTERS);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error('Error loading litters from storage:', e);
  }
  return LITTERS_DATA;
};

export const saveStoredLitters = (litters: Litter[]): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.LITTERS, JSON.stringify(litters));
  } catch (e) {
    console.error('Error saving litters to storage:', e);
  }
};

export const getStoredTestimonials = (): Testimonial[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.TESTIMONIALS);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error('Error loading testimonials from storage:', e);
  }
  return TESTIMONIALS_DATA;
};

export const saveStoredTestimonials = (testimonials: Testimonial[]): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.TESTIMONIALS, JSON.stringify(testimonials));
  } catch (e) {
    console.error('Error saving testimonials to storage:', e);
  }
};

export const getStoredSettings = (): SiteSettings => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.SETTINGS);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error('Error loading settings from storage:', e);
  }
  return DEFAULT_SITE_SETTINGS;
};

export const saveStoredSettings = (settings: SiteSettings): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
  } catch (e) {
    console.error('Error saving settings to storage:', e);
  }
};

export const getStoredLeads = (): AdoptionLead[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.LEADS);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error('Error loading leads from storage:', e);
  }
  return [];
};

export const addStoredLead = (lead: Omit<AdoptionLead, 'id' | 'submittedAt' | 'status'>): AdoptionLead => {
  const newLead: AdoptionLead = {
    ...lead,
    id: `lead-${Date.now()}`,
    submittedAt: new Date().toLocaleString('es-ES', { dateStyle: 'short', timeStyle: 'short' }),
    status: 'Nuevo',
  };
  try {
    const existing = getStoredLeads();
    const updated = [newLead, ...existing];
    localStorage.setItem(STORAGE_KEYS.LEADS, JSON.stringify(updated));
  } catch (e) {
    console.error('Error adding lead:', e);
  }
  return newLead;
};

export const updateStoredLeadStatus = (id: string, status: AdoptionLead['status']): void => {
  try {
    const leads = getStoredLeads().map((l) => (l.id === id ? { ...l, status } : l));
    localStorage.setItem(STORAGE_KEYS.LEADS, JSON.stringify(leads));
  } catch (e) {
    console.error('Error updating lead status:', e);
  }
};

export const deleteStoredLead = (id: string): void => {
  try {
    const leads = getStoredLeads().filter((l) => l.id !== id);
    localStorage.setItem(STORAGE_KEYS.LEADS, JSON.stringify(leads));
  } catch (e) {
    console.error('Error deleting lead:', e);
  }
};

export const resetStoreToDefaults = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEYS.KITTENS);
    localStorage.removeItem(STORAGE_KEYS.LITTERS);
    localStorage.removeItem(STORAGE_KEYS.TESTIMONIALS);
    localStorage.removeItem(STORAGE_KEYS.SETTINGS);
  } catch (e) {
    console.error('Error resetting store:', e);
  }
};
