import React, { useState } from 'react';
import { Kitten } from '../types';
import { X, ShieldCheck, Mail, Sparkles, Award } from 'lucide-react';

interface KittenModalProps {
  kitten: Kitten | null;
  onClose: () => void;
  onAdoptRequest: (kitten: Kitten) => void;
  onEmailInquiry: (kitten: Kitten) => void;
}

export const KittenModal: React.FC<KittenModalProps> = ({
  kitten,
  onClose,
  onAdoptRequest,
  onEmailInquiry,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!kitten) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="kitten-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/65 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
    >
      <div
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-red-100 overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-white/90 hover:bg-red-50 rounded-full text-neutral-800 border border-red-100 shadow-md transition-all hover:scale-105 cursor-pointer"
          aria-label="Cerrar ficha"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[85vh] overflow-y-auto">
          {/* Left Column: Image Gallery (5 cols) in Deep Crimson */}
          <div className="lg:col-span-5 bg-[#450a0a] p-4 sm:p-6 flex flex-col justify-between">
            {/* Active Image */}
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-black/40 border border-red-900/60 shadow-inner">
              <img
                src={kitten.images[activeImageIndex] || kitten.images[0]}
                alt={kitten.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-all duration-300"
              />
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#b91c1c] text-white border border-red-400/50 shadow-sm">
                  {kitten.status}
                </span>
              </div>
            </div>

            {/* Thumbnail navigation */}
            {kitten.images.length > 1 && (
              <div className="flex items-center gap-2 mt-4 overflow-x-auto pb-1">
                {kitten.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                      activeImageIndex === idx
                        ? 'border-white scale-105'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Miniatura ${idx + 1}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Price & Guarantee Badge */}
            <div className="mt-4 pt-4 border-t border-red-900/80 flex items-center justify-between text-white">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-red-200">Importe Adopción</span>
                <p className="font-serif text-2xl font-bold tabular-nums text-white">{kitten.price}</p>
              </div>
              <div className="text-right">
                <span className="inline-flex items-center gap-1 text-[11px] text-red-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-white" />
                  <span>Garantía 2 Años</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Complete Pedigree & Details (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-white">
            <div>
              {/* Header Title */}
              <div className="border-b border-red-100 pb-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#b91c1c] uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{kitten.breed} · Pedigrí Oficial</span>
                </div>
                <h2 id="kitten-modal-title" className="font-serif text-3xl sm:text-4xl font-bold text-[#111827] mt-1">
                  {kitten.name}
                </h2>
                <p className="text-xs text-neutral-500 italic mt-0.5 font-medium">
                  Nombre en Pedigrí: "{kitten.pedigreeName}"
                </p>
              </div>

              {/* Technical Specifications Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-4">
                <div className="p-3 bg-red-50/40 rounded-lg border border-red-100">
                  <span className="text-[11px] text-neutral-500 block">Sexo</span>
                  <span className="font-semibold text-xs sm:text-sm text-[#111827]">{kitten.gender}</span>
                </div>
                <div className="p-3 bg-red-50/40 rounded-lg border border-red-100">
                  <span className="text-[11px] text-neutral-500 block">Edad Actual</span>
                  <span className="font-semibold text-xs sm:text-sm text-[#111827]">{kitten.ageWeeks} semanas</span>
                </div>
                <div className="p-3 bg-red-50/40 rounded-lg border border-red-100">
                  <span className="text-[11px] text-neutral-500 block">Fecha Nacimiento</span>
                  <span className="font-semibold text-xs text-[#111827] truncate block">{kitten.birthDate}</span>
                </div>
                <div className="p-3 bg-red-50/40 rounded-lg border border-red-100 sm:col-span-2">
                  <span className="text-[11px] text-neutral-500 block">Color & Patrón del Manto</span>
                  <span className="font-semibold text-xs text-[#111827]">{kitten.colorManto}</span>
                </div>
                <div className="p-3 bg-red-50/40 rounded-lg border border-red-100">
                  <span className="text-[11px] text-neutral-500 block">Ojos</span>
                  <span className="font-semibold text-xs text-[#111827]">{kitten.eyeColor}</span>
                </div>
              </div>

              {/* Bio Description */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#b91c1c]">
                  Carácter & Socialización
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {kitten.description} Criado en nuestro entorno familiar bajo los pies de nuestros hijos, acostumbrado al contacto humano cariñoso, rascadores verticales y sonidos domésticos.
                </p>
                {/* Temperament Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {kitten.temperament.map((trait, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center px-2 py-0.5 text-[11px] font-medium text-[#b91c1c] bg-red-50 border border-red-100 rounded"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pedigree Lineage Tree */}
              <div className="mt-5 p-4 bg-red-50/30 rounded-xl border border-red-100 space-y-3">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#b91c1c] uppercase tracking-wider">
                  <Award className="w-4 h-4 text-[#b91c1c]" />
                  <span>Árbol Genealógico (Línea de Campeones)</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-2.5 bg-white rounded-lg border border-red-100">
                    <span className="text-[10px] uppercase font-bold text-[#b91c1c] block">Padre (Sire)</span>
                    <p className="font-semibold text-neutral-900">{kitten.sire.name}</p>
                    <p className="text-[11px] text-neutral-500">{kitten.sire.title} · {kitten.sire.color}</p>
                  </div>
                  <div className="p-2.5 bg-white rounded-lg border border-red-100">
                    <span className="text-[10px] uppercase font-bold text-[#b91c1c] block">Madre (Dam)</span>
                    <p className="font-semibold text-neutral-900">{kitten.dam.name}</p>
                    <p className="text-[11px] text-neutral-500">{kitten.dam.title} · {kitten.dam.color}</p>
                  </div>
                </div>
              </div>

              {/* Veterinary & Health Sheet */}
              <div className="mt-4 p-4 bg-white rounded-xl border border-red-100 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#b91c1c] uppercase tracking-wider flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-[#b91c1c]" />
                    Trazabilidad Veterinaria Garantizada
                  </span>
                  <span className="text-[11px] text-[#b91c1c] font-semibold">100% Libre</span>
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-neutral-600">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#b91c1c]" />
                    <span>HCM: <strong>{kitten.healthTests.hcm}</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#b91c1c]" />
                    <span>PKD: <strong>{kitten.healthTests.pkd}</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#b91c1c]" />
                    <span>FIV / FeLV: <strong>{kitten.healthTests.fivFelv}</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#b91c1c]" />
                    <span>Microchip ISO: <strong>Implantado</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5 col-span-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#b91c1c]" />
                    <span>Inmunización: <strong>{kitten.healthTests.vaccines}</strong></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions in Red & White - Email Driven */}
            <div className="pt-4 border-t border-red-100 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => onEmailInquiry(kitten)}
                className="w-full sm:flex-1 flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-semibold text-[#b91c1c] bg-red-50 hover:bg-red-100 border border-red-200 rounded-lg transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4 text-[#b91c1c]" />
                <span>Consultar por Email</span>
              </button>

              <button
                onClick={() => onAdoptRequest(kitten)}
                className="w-full sm:flex-1 flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-semibold text-white bg-[#b91c1c] hover:bg-[#991b1b] rounded-lg transition-colors shadow-sm cursor-pointer"
              >
                <span>Solicitar Adopción (600 €)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
