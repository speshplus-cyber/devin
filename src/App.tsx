/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Kitten, Litter, Testimonial, SiteSettings, BreedType } from './types';
import {
  getStoredKittens,
  saveStoredKittens,
  getStoredLitters,
  saveStoredLitters,
  getStoredTestimonials,
  saveStoredTestimonials,
  getStoredSettings,
  saveStoredSettings,
  getStoredLeads,
  updateStoredLeadStatus,
  deleteStoredLead,
  resetStoreToDefaults,
  AdoptionLead,
} from './services/siteStore';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { KittenModal } from './components/KittenModal';
import { AdoptionFormModal } from './components/AdoptionFormModal';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { CatalogView } from './views/CatalogView';
import { BreedsView } from './views/BreedsView';
import { BreedLandingView } from './views/BreedLandingView';
import { PhilosophyView } from './views/PhilosophyView';
import { HealthPedigreeView } from './views/HealthPedigreeView';
import { TestimonialsView } from './views/TestimonialsView';
import { ContactView } from './views/ContactView';
import { PolicyView } from './views/PolicyView';
import { AdminPanelView } from './views/AdminPanelView';
import { AdminLoginView } from './views/AdminLoginView';
import { isAuthenticated, getCurrentUser, logout, AdminSession } from './services/authService';
import {
  getRouteFromPathname,
  updatePageSeo,
  navigateTo,
  RouteInfo,
  BREED_TO_SLUG,
} from './services/router';

export default function App() {
  const [routeInfo, setRouteInfo] = useState<RouteInfo>(() => getRouteFromPathname());
  const [selectedBreedFilter, setSelectedBreedFilter] = useState<string>('Todas');
  const [selectedKitten, setSelectedKitten] = useState<Kitten | null>(null);
  const [adoptionModalOpen, setAdoptionModalOpen] = useState(false);
  const [adoptionTargetKitten, setAdoptionTargetKitten] = useState<Kitten | null>(null);
  const [adoptionTargetBreed, setAdoptionTargetBreed] = useState<BreedType | undefined>(undefined);

  // Authentication state for protected administrative area
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(() => isAuthenticated());
  const [adminSession, setAdminSession] = useState<AdminSession | null>(() => getCurrentUser());

  // Live editable state loaded from persistence service
  const [kittens, setKittens] = useState<Kitten[]>(() => getStoredKittens());
  const [litters, setLitters] = useState<Litter[]>(() => getStoredLitters());
  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => getStoredTestimonials());
  const [settings, setSettings] = useState<SiteSettings>(() => getStoredSettings());
  const [leads, setLeads] = useState<AdoptionLead[]>(() => getStoredLeads());

  // URL route synchronization listener
  useEffect(() => {
    const handleLocationChange = () => {
      const current = getRouteFromPathname();
      setRouteInfo(current);
      updatePageSeo(current);
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('app:navigate', handleLocationChange);

    // Apply initial SEO on mount
    updatePageSeo(routeInfo);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('app:navigate', handleLocationChange);
    };
  }, []);

  // Reload leads when returning to view or after submission
  const refreshLeads = () => {
    setLeads(getStoredLeads());
  };

  // State update handlers that write directly to persistent storage
  const handleUpdateKittens = (newKittens: Kitten[]) => {
    setKittens(newKittens);
    saveStoredKittens(newKittens);
  };

  const handleUpdateLitters = (newLitters: Litter[]) => {
    setLitters(newLitters);
    saveStoredLitters(newLitters);
  };

  const handleUpdateTestimonials = (newTestimonials: Testimonial[]) => {
    setTestimonials(newTestimonials);
    saveStoredTestimonials(newTestimonials);
  };

  const handleUpdateSettings = (newSettings: SiteSettings) => {
    setSettings(newSettings);
    saveStoredSettings(newSettings);
  };

  const handleUpdateLeadStatus = (leadId: string, status: AdoptionLead['status']) => {
    updateStoredLeadStatus(leadId, status);
    refreshLeads();
  };

  const handleDeleteLead = (leadId: string) => {
    deleteStoredLead(leadId);
    refreshLeads();
  };

  const handleResetDefaults = () => {
    resetStoreToDefaults();
    setKittens(getStoredKittens());
    setLitters(getStoredLitters());
    setTestimonials(getStoredTestimonials());
    setSettings(getStoredSettings());
    refreshLeads();
  };

  // Official Email Concierge helper (exclusively using Criaderograciadivina@gmail.com)
  const handleOpenEmail = (customMessage?: string, customSubject?: string) => {
    const emailTo = settings.contactEmail || 'Criaderograciadivina@gmail.com';
    const subject = encodeURIComponent(customSubject || 'Consulta de Adopción - criaderograciadivina');
    const body = encodeURIComponent(
      customMessage ||
        'Hola criaderograciadivina,\n\nHe visitado su página web y me gustaría recibir información sobre los cachorros disponibles y próximas camadas.\n\nAtentamente,'
    );
    window.open(`mailto:${emailTo}?subject=${subject}&body=${body}`, '_blank');
  };

  const handleKittenEmailInquiry = (kitten: Kitten) => {
    const subject = `Interés en Cachorro: ${kitten.name} (${kitten.breed}) - ${kitten.price}`;
    const message =
      `Hola criaderograciadivina,\n\n` +
      `Estoy muy interesado/a en la adopción del cachorro ${kitten.name} (${kitten.breed}, color ${kitten.colorManto}, precio ${kitten.price}).\n\n` +
      `¿Podrían indicarme si sigue disponible y los pasos para la reserva?\n\n` +
      `Un cordial saludo,`;
    handleOpenEmail(message, subject);
  };

  // WhatsApp concierge helper for clients who prefer WhatsApp
  const handleOpenWhatsApp = (customMessage?: string) => {
    const defaultMsg = selectedKitten
      ? `¡Hola! Me interesa la adopción del gatito ${selectedKitten.name}.`
      : routeInfo.route === 'breed' && routeInfo.breed
      ? `¡Hola! Me interesa la adopción de un gatito ${routeInfo.breed}.`
      : '¡Hola! Me gustaría información para la adopción de un gatito.';
    const text = encodeURIComponent(customMessage || defaultMsg);
    const cleanNumber = (settings.whatsappNumber || '34632968208').replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanNumber}?text=${text}`, '_blank');
  };

  const handleOpenAdoptionWithKitten = (kitten?: Kitten, targetBreed?: BreedType) => {
    setAdoptionTargetKitten(kitten || null);
    setAdoptionTargetBreed(targetBreed || (kitten ? (kitten.breed as BreedType) : undefined));
    setSelectedKitten(null); // close detail modal if open
    setAdoptionModalOpen(true);
  };

  // Central Navigation Handler (updates URL and document title)
  const handleNavigate = (pathOrView: string) => {
    let targetPath = pathOrView;
    if (pathOrView === 'catalog' || pathOrView === 'home') targetPath = '/';
    else if (pathOrView === 'breeds' || pathOrView === 'breeds-index') targetPath = '/razas';
    else if (pathOrView === 'contact') targetPath = '/contacto';
    else if (pathOrView === 'testimonials') targetPath = '/opiniones';
    else if (pathOrView === 'health') targetPath = '/garantia-salud';
    else if (pathOrView === 'philosophy') targetPath = '/filosofia';
    else if (pathOrView === 'policy') targetPath = '/politica-adopcion';
    else if (pathOrView === 'admin') targetPath = '/admin';

    navigateTo(targetPath);
  };

  const handleNavigateBreed = (breed: BreedType) => {
    const slug = BREED_TO_SLUG[breed] || 'maine-coon';
    navigateTo(`/${slug}`);
  };

  // If in admin view, verify authentication before rendering the Control Panel
  if (routeInfo.route === 'admin') {
    if (!isAdminAuthenticated) {
      return (
        <AdminLoginView
          onLoginSuccess={(session) => {
            setIsAdminAuthenticated(true);
            setAdminSession(session);
          }}
          onBackToWebsite={() => {
            handleNavigate('/');
          }}
        />
      );
    }

    return (
      <AdminPanelView
        kittens={kittens}
        litters={litters}
        testimonials={testimonials}
        settings={settings}
        leads={leads}
        currentUser={adminSession}
        onUpdateKittens={handleUpdateKittens}
        onUpdateLitters={handleUpdateLitters}
        onUpdateTestimonials={handleUpdateTestimonials}
        onUpdateSettings={handleUpdateSettings}
        onUpdateLeadStatus={handleUpdateLeadStatus}
        onDeleteLead={handleDeleteLead}
        onResetDefaults={handleResetDefaults}
        onExitAdmin={() => {
          handleNavigate('/');
        }}
        onLogout={() => {
          logout();
          setIsAdminAuthenticated(false);
          setAdminSession(null);
          handleNavigate('/');
        }}
      />
    );
  }

  const currentViewId =
    routeInfo.route === 'breed' && routeInfo.breed
      ? `breed-${BREED_TO_SLUG[routeInfo.breed]}`
      : routeInfo.route === 'home'
      ? 'catalog'
      : routeInfo.route;

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#111827]">
      {/* Top Navigation Bar with real clean URLs */}
      <Header
        currentView={currentViewId}
        announcementText={settings.announcementText}
        onNavigate={handleNavigate}
        onSelectBreed={handleNavigateBreed}
        onOpenAdoptionModal={() => handleOpenAdoptionWithKitten(undefined, routeInfo.breed)}
        onOpenEmail={handleOpenEmail}
        onOpenAdmin={() => {
          handleNavigate('/admin');
        }}
      />

      {/* Main View Display: Dedicated Route Pages */}
      <main className="flex-1">
        {/* Dedicated Google Ads Landing Page for a Specific Breed */}
        {routeInfo.route === 'breed' && routeInfo.breed && (
          <BreedLandingView
            breed={routeInfo.breed}
            kittens={kittens}
            testimonials={testimonials}
            settings={settings}
            onSelectKitten={(k) => setSelectedKitten(k)}
            onOpenAdoptionModal={(k) => handleOpenAdoptionWithKitten(k, routeInfo.breed)}
            onNavigateHome={() => handleNavigate('/')}
            onNavigateBreed={handleNavigateBreed}
          />
        )}

        {/* Main Cattery Home Page / Full Catalog */}
        {routeInfo.route === 'home' && (
          <CatalogView
            kittens={kittens}
            litters={litters}
            testimonials={testimonials}
            settings={settings}
            selectedBreed={selectedBreedFilter}
            onSelectBreed={setSelectedBreedFilter}
            onSelectKitten={(k) => setSelectedKitten(k)}
            onEmailInquiry={handleKittenEmailInquiry}
            onOpenAdoptionModal={(k) => handleOpenAdoptionWithKitten(k)}
            onNavigateToBreeds={() => handleNavigate('/razas')}
            onNavigateToBreedPage={handleNavigateBreed}
            onNavigateToPolicy={() => handleNavigate('/politica-adopcion')}
            onNavigateToContact={() => handleNavigate('/contacto')}
            onNavigateToTestimonials={() => handleNavigate('/opiniones')}
          />
        )}

        {/* General Breeds Directory */}
        {routeInfo.route === 'breeds-index' && (
          <BreedsView
            kittens={kittens}
            initialBreed={selectedBreedFilter !== 'Todas' ? (selectedBreedFilter as BreedType) : 'Maine Coon'}
            onFilterBreed={(breed) => handleNavigateBreed(breed)}
            onSelectKitten={(k) => setSelectedKitten(k)}
            onAdoptKitten={(k) => handleOpenAdoptionWithKitten(k)}
            onOpenAdoptionModal={() => handleOpenAdoptionWithKitten()}
          />
        )}

        {/* Dedicated Philosophy & About Page */}
        {routeInfo.route === 'philosophy' && (
          <PhilosophyView
            onOpenAdoptionModal={() => handleOpenAdoptionWithKitten()}
            onExploreKittens={() => handleNavigate('/')}
          />
        )}

        {/* Dedicated Health, Testing & Pedigree Page */}
        {routeInfo.route === 'health' && (
          <HealthPedigreeView
            onOpenAdoptionModal={() => handleOpenAdoptionWithKitten()}
            onOpenEmail={handleOpenEmail}
          />
        )}

        {/* Dedicated Verified Testimonials Page */}
        {routeInfo.route === 'testimonials' && (
          <TestimonialsView
            testimonials={testimonials}
            onOpenAdoptionModal={() => handleOpenAdoptionWithKitten()}
            onOpenEmail={handleOpenEmail}
          />
        )}

        {/* Dedicated Adoption Terms & Climate Shipping Page */}
        {routeInfo.route === 'policy' && (
          <PolicyView
            onOpenAdoptionModal={() => handleOpenAdoptionWithKitten()}
          />
        )}

        {/* Dedicated Contact & Scheduled Visit Page */}
        {routeInfo.route === 'contact' && (
          <ContactView
            onOpenEmail={handleOpenEmail}
            onOpenAdoptionModal={() => handleOpenAdoptionWithKitten()}
          />
        )}
      </main>

      {/* Bottom Footer with clean links */}
      <Footer
        onNavigate={handleNavigate}
        onSelectBreed={handleNavigateBreed}
        onOpenAdoptionModal={() => handleOpenAdoptionWithKitten(undefined, routeInfo.breed)}
        onOpenEmail={handleOpenEmail}
        onOpenAdmin={() => {
          handleNavigate('/admin');
        }}
      />

      {/* Contextual Floating WhatsApp Button */}
      <WhatsAppFloatingButton
        onClick={() => handleOpenWhatsApp()}
        selectedKittenName={selectedKitten?.name}
        phoneNumber={(settings.whatsappNumber || '34632968208').replace(/[^0-9]/g, '')}
      />

      {/* Kitten Details & Pedigree Modal */}
      <KittenModal
        kitten={selectedKitten}
        onClose={() => setSelectedKitten(null)}
        onAdoptRequest={(k) => handleOpenAdoptionWithKitten(k)}
        onEmailInquiry={handleKittenEmailInquiry}
      />

      {/* Adoption & Reservation Questionnaire Modal */}
      <AdoptionFormModal
        isOpen={adoptionModalOpen}
        onClose={() => {
          setAdoptionModalOpen(false);
          setAdoptionTargetKitten(null);
          setAdoptionTargetBreed(undefined);
        }}
        selectedKitten={adoptionTargetKitten}
        initialBreed={adoptionTargetBreed}
        onSuccess={() => {
          refreshLeads();
        }}
      />
    </div>
  );
}
