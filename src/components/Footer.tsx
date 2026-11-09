import React from 'react';
import { ShieldCheck, Heart, Award, Mail, MapPin, Sliders, Star } from 'lucide-react';
import { CatteryLogo } from './CatteryLogo';

interface FooterProps {
  onNavigate: (view: string) => void;
  onOpenAdoptionModal: () => void;
  onOpenEmail: (message?: string) => void;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenAdoptionModal,
  onOpenEmail,
  onOpenAdmin,
}) => {
  return (
    <footer className="bg-white text-neutral-800 pt-16 border-t-2 border-[#b91c1c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Trust Banner in Clean White & Red */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-12 border-b border-red-100">
          <div className="flex items-start gap-3 p-4 bg-red-50/40 rounded-xl border border-red-100">
            <ShieldCheck className="w-6 h-6 text-[#b91c1c] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-[#111827]">Pedigrí Oficial WCF & FIFe</h4>
              <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                Trazabilidad genealógica documentada de hasta 5 generaciones.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-red-50/40 rounded-xl border border-red-100">
            <Heart className="w-6 h-6 text-[#b91c1c] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-[#111827]">100% Crianza en Hogar</h4>
              <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                Convivencia familiar sin jaulas, socializados y mimados cada día.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-red-50/40 rounded-xl border border-red-100">
            <Award className="w-6 h-6 text-[#b91c1c] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-[#111827]">Garantía Genética 2 Años</h4>
              <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                Padres con test HCM, PKD, SMA y serología FIV/FeLV negativos por escrito.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-red-50/40 rounded-xl border border-red-100">
            <ShieldCheck className="w-6 h-6 text-[#b91c1c] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-[#111827]">Pasaporte & Microchip</h4>
              <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                Vacunación completa para su edad y alta en el registro oficial.
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="shrink-0 drop-shadow-xs">
                <CatteryLogo size={48} className="w-12 h-12" />
              </div>
              <div className="flex flex-col text-left">
                <div className="flex items-center text-2xl font-serif tracking-tight leading-none">
                  <span className="font-bold text-[#111827]">Gracia</span>
                  <span className="font-bold text-[#b91c1c] ml-1.5">Divina</span>
                </div>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-neutral-500 mt-1">
                  Criadero Felino de Alta Cuna
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-md font-light">
              Dedicados en cuerpo y alma a preservar la pureza, salud y nobleza de las mejores razas felinas en España. Nuestros cachorros nacen y crecen en nuestro salón familiar, rodeados de amor, caricias y juegos diarios.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="inline-block px-3 py-1 text-[11px] font-semibold text-[#b91c1c] bg-red-50 rounded-full border border-red-200">
                Afiliado WCF Nº 41289
              </span>
              <span className="inline-block px-3 py-1 text-[11px] font-semibold text-[#b91c1c] bg-red-50 rounded-full border border-red-200">
                Registro ASFE / FIFe Oficial
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#b91c1c]">Navegación</h5>
            <ul className="space-y-2 text-xs sm:text-sm text-neutral-600">
              <li>
                <button
                  onClick={() => onNavigate('catalog')}
                  className="hover:text-[#b91c1c] transition-colors cursor-pointer text-left"
                >
                  Cachorros Disponibles (600 €)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('breeds')}
                  className="hover:text-[#b91c1c] transition-colors cursor-pointer text-left"
                >
                  Nuestras 9 Razas
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('testimonials')}
                  className="hover:text-[#b91c1c] transition-colors cursor-pointer flex items-center gap-1.5 text-left"
                >
                  <Star className="w-3.5 h-3.5 fill-[#b91c1c] text-[#b91c1c]" />
                  <span>Testimonios & Familias</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('health')}
                  className="hover:text-[#b91c1c] transition-colors cursor-pointer text-left"
                >
                  Protocolo Veterinario & Pedigrí
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('policy')}
                  className="hover:text-[#b91c1c] transition-colors cursor-pointer text-left"
                >
                  Políticas de Adopción & Garantías
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#b91c1c] transition-colors cursor-pointer text-left"
                >
                  Contacto & Cita Previa
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details via Email */}
          <div className="md:col-span-4 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#b91c1c]">Contacto & Adopciones</h5>
            <div className="space-y-2.5 text-xs sm:text-sm text-neutral-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#b91c1c] shrink-0 mt-0.5" />
                <span>Sierra de Guadarrama, Madrid (España). Visitas concertadas previa cita.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#b91c1c] shrink-0" />
                <a
                  href="mailto:Criaderograciadivina@gmail.com"
                  className="hover:underline text-[#b91c1c] font-semibold font-mono"
                >
                  Criaderograciadivina@gmail.com
                </a>
              </div>
            </div>
            <div className="pt-3 flex flex-col sm:flex-row gap-2">
              <button
                onClick={onOpenAdoptionModal}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#b91c1c] hover:bg-[#991b1b] rounded-full transition-colors cursor-pointer shadow-xs text-center"
              >
                Solicitar Adopción (600 €)
              </button>
              <button
                onClick={onOpenAdmin}
                className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-full transition-colors cursor-pointer border border-neutral-200 flex items-center justify-center gap-1.5"
                title="Acceso al panel de administración CMS"
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Panel Admin</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Legal in soft neutral strip */}
      <div className="bg-neutral-50 border-t border-red-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© {new Date().getFullYear()} Criadero Gracia Divina. Todos los derechos reservados.</p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <button
              onClick={() => onNavigate('policy')}
              className="hover:text-[#b91c1c] underline cursor-pointer"
            >
              Políticas de Adopción & Garantías
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => onNavigate('policy')}
              className="hover:text-[#b91c1c] underline cursor-pointer"
            >
              Protección de Datos (RGPD)
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={onOpenAdmin}
              className="hover:text-[#b91c1c] underline cursor-pointer flex items-center gap-1"
            >
              <Sliders className="w-3 h-3 text-[#b91c1c]" />
              <span>Acceso Panel Control</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
