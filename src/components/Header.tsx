import React, { useState } from 'react';
import { Menu, X, Mail, ShieldCheck, Star, Sliders, ChevronRight } from 'lucide-react';
import { CatteryLogo } from './CatteryLogo';

interface HeaderProps {
  currentView: string;
  announcementText?: string;
  onNavigate: (view: string) => void;
  onOpenAdoptionModal: () => void;
  onOpenEmail: (message?: string) => void;
  onOpenAdmin: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  announcementText = 'Criadero Ético Federado WCF & FIFe · Camadas Primavera 2026 Abiertas para Reserva',
  onNavigate,
  onOpenAdoptionModal,
  onOpenEmail,
  onOpenAdmin,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const menuSections = [
    { id: 'catalog', label: 'Inicio & Cachorros', desc: 'Explorar cachorros disponibles y camadas (600 €)' },
    { id: 'breeds', label: 'Nuestras 9 Razas', desc: 'Maine Coon, Bengalí, Siberiano, Ragdoll, British, Persa...' },
    { id: 'testimonials', label: 'Testimonios & Opiniones', desc: 'Experiencias reales de familias en toda España (5.0 ★)' },
    { id: 'health', label: 'Garantías & Salud', desc: '2 Años de garantía genética, vacunas, chip y pedigrí oficial' },
    { id: 'philosophy', label: 'Sobre Nosotros', desc: 'Crianza ética y familiar libre de jaulas en España' },
    { id: 'policy', label: 'Políticas & Contrato', desc: 'Condiciones de adopción, reserva y protección de datos' },
    { id: 'contact', label: 'Contacto & Cita Previa', desc: 'Visitas concertadas y atención por correo electrónico' },
  ];

  const handleNavClick = (viewId: string) => {
    onNavigate(viewId);
    setDrawerOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white border-b border-red-100 transition-all shadow-xs">
        {/* Top Announcement Bar in Red & White */}
        <div className="bg-[#b91c1c] text-white px-4 py-1.5 text-xs font-semibold text-center flex items-center justify-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-red-200" />
          <span>{announcementText}</span>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Wordmark (Gracia Divina in Red and White theme) */}
          <button
            onClick={() => handleNavClick('catalog')}
            className="group flex items-center gap-3 focus:outline-none cursor-pointer select-none"
          >
            <div className="transition-transform group-hover:scale-105">
              <CatteryLogo size={46} className="w-11 h-11 sm:w-12 sm:h-12" />
            </div>
            <div className="flex flex-col text-left">
              <div className="flex items-center text-2xl sm:text-3xl tracking-tight leading-none">
                <span className="font-serif font-bold text-[#111827]">Gracia</span>
                <span className="font-serif font-bold text-[#b91c1c] ml-1.5">Divina</span>
              </div>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-neutral-500 mt-0.5 hidden sm:block">
                Criadero Felino de Alta Cuna
              </span>
            </div>
          </button>

          {/* Quick Nav Chips for Desktop in Red & White */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-neutral-700">
            <button
              onClick={() => handleNavClick('catalog')}
              className={`hover:text-[#b91c1c] transition-colors cursor-pointer ${
                currentView === 'catalog' ? 'text-[#b91c1c] font-bold' : ''
              }`}
            >
              Cachorros (600 €)
            </button>
            <button
              onClick={() => handleNavClick('breeds')}
              className={`hover:text-[#b91c1c] transition-colors cursor-pointer ${
                currentView === 'breeds' ? 'text-[#b91c1c] font-bold' : ''
              }`}
            >
              Razas
            </button>
            <button
              onClick={() => handleNavClick('testimonials')}
              className={`hover:text-[#b91c1c] transition-colors cursor-pointer flex items-center gap-1.5 ${
                currentView === 'testimonials' ? 'text-[#b91c1c] font-bold' : ''
              }`}
            >
              <Star className="w-3.5 h-3.5 fill-[#b91c1c] text-[#b91c1c]" />
              <span>Testimonios</span>
            </button>
            <button
              onClick={() => handleNavClick('health')}
              className={`hover:text-[#b91c1c] transition-colors cursor-pointer ${
                currentView === 'health' ? 'text-[#b91c1c] font-bold' : ''
              }`}
            >
              Garantías
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`hover:text-[#b91c1c] transition-colors cursor-pointer ${
                currentView === 'contact' ? 'text-[#b91c1c] font-bold' : ''
              }`}
            >
              Contacto
            </button>
          </nav>

          {/* Right Side: Email CTA, Admin Button & Signature Hamburger Menu Icon */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:Criaderograciadivina@gmail.com"
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#b91c1c] hover:text-white bg-red-50 hover:bg-[#b91c1c] rounded-full transition-all border border-red-200"
              title="Contacto por email"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Criaderograciadivina@gmail.com</span>
            </a>

            <button
              onClick={onOpenAdmin}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-neutral-700 hover:text-white bg-neutral-100 hover:bg-[#b91c1c] rounded-full transition-colors border border-neutral-200 cursor-pointer"
              title="Panel de control CMS"
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Admin</span>
            </button>

            {/* Signature Hamburger Menu Button */}
            <button
              onClick={() => setDrawerOpen(true)}
              className="p-2.5 rounded-lg text-[#111827] hover:text-[#b91c1c] hover:bg-red-50 transition-colors cursor-pointer flex items-center justify-center focus:outline-none"
              aria-label="Abrir menú de navegación"
            >
              <Menu className="w-7 h-7 stroke-[2]" />
            </button>
          </div>
        </div>
      </header>

      {/* Slide-in Full Screen / Drawer Menu in Regal Red & White */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setDrawerOpen(false)}
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-[#450a0a] text-white shadow-2xl flex flex-col justify-between p-6 sm:p-8 animate-in slide-in-from-right duration-300 border-l border-red-900">
              {/* Drawer Top */}
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-red-900/80 pb-5">
                  <div className="flex items-center gap-3">
                    <CatteryLogo size={38} className="w-9 h-9" />
                    <div className="flex flex-col text-left">
                      <div className="flex items-center text-2xl tracking-tight leading-none">
                        <span className="font-serif font-bold text-white">Gracia</span>
                        <span className="font-serif font-bold text-red-200 ml-1.5">Divina</span>
                      </div>
                      <span className="text-[10px] tracking-wider uppercase text-red-200/80 mt-0.5">
                        Criadero Felino
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setDrawerOpen(false)}
                    className="p-2 text-red-200 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                    aria-label="Cerrar menú"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Nav Links List in Red and White */}
                <nav className="space-y-2 max-h-[55vh] overflow-y-auto pr-1">
                  {menuSections.map((item) => {
                    const isActive = currentView === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleNavClick(item.id)}
                        className={`w-full group text-left px-4 py-3 rounded-xl transition-all cursor-pointer flex items-center justify-between ${
                          isActive
                            ? 'bg-white text-[#b91c1c] font-bold shadow-md'
                            : 'hover:bg-red-900/60 text-white'
                        }`}
                      >
                        <div>
                          <div className={`font-serif text-lg tracking-wide ${isActive ? 'text-[#b91c1c]' : 'text-white'}`}>
                            {item.label}
                          </div>
                          <div className={`text-xs mt-0.5 ${isActive ? 'text-neutral-600' : 'text-red-200/80'}`}>
                            {item.desc}
                          </div>
                        </div>
                        <ChevronRight
                          className={`w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 ${
                            isActive ? 'text-[#b91c1c]' : 'text-red-300'
                          }`}
                        />
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Drawer Bottom Contact & Action */}
              <div className="pt-6 border-t border-red-900/80 space-y-3">
                <div className="p-3.5 bg-black/20 rounded-xl border border-red-900/60 text-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-red-200 font-semibold">
                    <Mail className="w-4 h-4 text-white" />
                    <span>Adopciones Oficiales por Correo</span>
                  </div>
                  <a
                    href="mailto:Criaderograciadivina@gmail.com"
                    className="text-white hover:underline font-mono text-xs block font-bold"
                  >
                    Criaderograciadivina@gmail.com
                  </a>
                  <p className="text-red-200/90 text-[11px]">
                    Tarifa fija con vacunas, microchip y garantía: <strong className="text-white">600 €</strong>
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      setDrawerOpen(false);
                      onOpenAdoptionModal();
                    }}
                    className="w-full py-3 px-3 text-xs font-bold uppercase tracking-wider text-[#b91c1c] bg-white hover:bg-red-50 rounded-full transition-colors cursor-pointer text-center shadow-sm"
                  >
                    Solicitar Adopción
                  </button>
                  <button
                    onClick={() => {
                      setDrawerOpen(false);
                      onOpenAdmin();
                    }}
                    className="w-full py-3 px-3 text-xs font-bold uppercase tracking-wider text-white bg-red-950 hover:bg-black rounded-full transition-colors cursor-pointer text-center border border-red-800"
                  >
                    Panel Admin
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
