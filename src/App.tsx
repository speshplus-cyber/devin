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
import { PhilosophyView } from './views/PhilosophyView';
import { HealthPedigreeView } from './views/HealthPedigreeView';
import { TestimonialsView } from './views/TestimonialsView';
import { ContactView } from './views/ContactView';
import { PolicyView } from './views/PolicyView';
import { AdminPanelView } from './views/AdminPanelView';
import { AdminLoginView } from './views/AdminLoginView';
import { isAuthenticated, getCurrentUser, logout, AdminSession } from './services/authService';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('catalog');
  const [selectedKitten, setSelectedKitten] = useState<Kitten | null>(null);
  const [adoptionModalOpen, setAdoptionModalOpen] = useState(false);
  const [adoptionTargetKitten, setAdoptionTargetKitten] = useState<Kitten | null>(null);

  // Authentication state for protected administrative area
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(() => isAuthenticated());
  const [adminSession, setAdminSession] = useState<AdminSession | null>(() => getCurrentUser());

  // Live editable state loaded from persistence service
  const [kittens, setKittens] = useState<Kitten[]>(() => getStoredKittens());
  const [litters, setLitters] = useState<Litter[]>(() => getStoredLitters());
  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => getStoredTestimonials());
  const [settings, setSettings] = useState<SiteSettings>(() => getStoredSettings());
  const [leads, setLeads] = useState<AdoptionLead[]>(() => getStoredLeads());

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
    const subject = encodeURIComponent(customSubject || 'Consulta de Adopción - Criadero Gracia Divina');
    const body = encodeURIComponent(
      customMessage ||
        'Hola Criadero Gracia Divina,\n\nHe visitado su página web y me gustaría recibir información sobre los cachorros disponibles (precio 600 €) y próximas camadas.\n\nAtentamente,'
    );
    window.open(`mailto:${emailTo}?subject=${subject}&body=${body}`, '_blank');
  };

  const handleKittenEmailInquiry = (kitten: Kitten) => {
    const subject = `Interés en Cachorro: ${kitten.name} (${kitten.breed}) - 600 €`;
    const message =
      `Hola Criadero Gracia Divina,\n\n` +
      `Estoy muy interesado/a en la adopción del cachorro ${kitten.name} (${kitten.breed}, color ${kitten.colorManto}, precio ${kitten.price}).\n\n` +
      `¿Podrían indicarme si sigue disponible y los pasos para la reserva y visita concertada?\n\n` +
      `Un cordial saludo,`;
    handleOpenEmail(message, subject);
  };

  // WhatsApp concierge helper for clients who prefer WhatsApp
  const handleOpenWhatsApp = (customMessage?: string) => {
    const defaultMsg = selectedKitten
      ? `Hola, estoy interesado/a en la adopción del cachorro ${selectedKitten.name} (${selectedKitten.breed}, precio 600 €). ¿Podrían facilitarme más detalles, fotos o vídeos?`
      : 'Hola, he visitado su página web y me gustaría recibir información sobre los cachorros disponibles (precio 600 €) y próximas camadas.';
    const text = encodeURIComponent(customMessage || defaultMsg);
    const cleanNumber = (settings.whatsappNumber || '34692881430').replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanNumber}?text=${text}`, '_blank');
  };

  const handleOpenAdoptionWithKitten = (kitten?: Kitten) => {
    setAdoptionTargetKitten(kitten || null);
    setSelectedKitten(null); // close detail modal if open
    setAdoptionModalOpen(true);
  };

  const handleNavigateToBreeds = () => {
    setCurrentView('breeds');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFilterBreedFromMonograph = (_breed: BreedType) => {
    setCurrentView('catalog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // If in admin view, verify authentication before rendering the Control Panel
  if (currentView === 'admin') {
    if (!isAdminAuthenticated) {
      return (
        <AdminLoginView
          onLoginSuccess={(session) => {
            setIsAdminAuthenticated(true);
            setAdminSession(session);
          }}
          onBackToWebsite={() => {
            setCurrentView('catalog');
            window.scrollTo({ top: 0, behavior: 'smooth' });
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
          setCurrentView('catalog');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onLogout={() => {
          logout();
          setIsAdminAuthenticated(false);
          setAdminSession(null);
          setCurrentView('catalog');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#111827]">
      {/* Top Navigation Bar with strict 3-zone contract */}
      <Header
        currentView={currentView}
        announcementText={settings.announcementText}
        onNavigate={setCurrentView}
        onOpenAdoptionModal={() => handleOpenAdoptionWithKitten()}
        onOpenEmail={handleOpenEmail}
        onOpenAdmin={() => {
          setCurrentView('admin');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Main View Display */}
      <main className="flex-1">
        {currentView === 'catalog' && (
          <CatalogView
            kittens={kittens}
            litters={litters}
            testimonials={testimonials}
            settings={settings}
            onSelectKitten={(k) => setSelectedKitten(k)}
            onEmailInquiry={handleKittenEmailInquiry}
            onOpenAdoptionModal={handleOpenAdoptionWithKitten}
            onNavigateToBreeds={handleNavigateToBreeds}
            onNavigateToPolicy={() => {
              setCurrentView('policy');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateToContact={() => {
              setCurrentView('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateToTestimonials={() => {
              setCurrentView('testimonials');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentView === 'breeds' && (
          <BreedsView
            onFilterBreed={handleFilterBreedFromMonograph}
            onOpenAdoptionModal={() => handleOpenAdoptionWithKitten()}
          />
        )}

        {currentView === 'philosophy' && (
          <PhilosophyView
            onOpenAdoptionModal={() => handleOpenAdoptionWithKitten()}
            onExploreKittens={() => {
              setCurrentView('catalog');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentView === 'health' && (
          <HealthPedigreeView
            onOpenAdoptionModal={() => handleOpenAdoptionWithKitten()}
            onOpenEmail={handleOpenEmail}
          />
        )}

        {currentView === 'testimonials' && (
          <TestimonialsView
            testimonials={testimonials}
            onOpenAdoptionModal={() => handleOpenAdoptionWithKitten()}
            onOpenEmail={handleOpenEmail}
          />
        )}

        {currentView === 'policy' && (
          <PolicyView
            onOpenAdoptionModal={() => handleOpenAdoptionWithKitten()}
          />
        )}

        {currentView === 'contact' && (
          <ContactView
            onOpenEmail={handleOpenEmail}
            onOpenAdoptionModal={() => handleOpenAdoptionWithKitten()}
          />
        )}
      </main>

      {/* Bottom Footer */}
      <Footer
        onNavigate={setCurrentView}
        onOpenAdoptionModal={() => handleOpenAdoptionWithKitten()}
        onOpenEmail={handleOpenEmail}
        onOpenAdmin={() => {
          setCurrentView('admin');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Contextual Floating WhatsApp Button for Clients who prefer WhatsApp */}
      <WhatsAppFloatingButton
        onClick={() => handleOpenWhatsApp()}
        selectedKittenName={selectedKitten?.name}
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
        onClose={() => setAdoptionModalOpen(false)}
        selectedKitten={adoptionTargetKitten}
        onSuccess={() => {
          refreshLeads();
        }}
      />
    </div>
  );
}
