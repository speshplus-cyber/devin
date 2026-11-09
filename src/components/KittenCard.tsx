import React, { useState } from 'react';
import { Kitten } from '../types';
import { ShieldCheck, Mail, ChevronRight, Sparkles } from 'lucide-react';

interface KittenCardProps {
  kitten: Kitten;
  onSelect: (kitten: Kitten) => void;
  onEmailInquiry: (kitten: Kitten) => void;
  onQuickReserve: (kitten: Kitten) => void;
}

export const KittenCard: React.FC<KittenCardProps> = ({
  kitten,
  onSelect,
  onEmailInquiry,
  onQuickReserve,
}) => {
  const [imgError, setImgError] = useState(false);

  // Red and white status badge styling
  const getStatusBadge = () => {
    switch (kitten.status) {
      case 'Disponible':
        return {
          bg: 'bg-[#b91c1c] text-white',
          border: 'border-[#991b1b]',
          label: 'Disponible',
        };
      case 'En Adopción':
        return {
          bg: 'bg-[#991b1b] text-white',
          border: 'border-[#7f1d1d]',
          label: 'En Adopción',
        };
      case 'Reservado':
        return {
          bg: 'bg-neutral-100 text-neutral-600',
          border: 'border-neutral-200',
          label: 'Reservado',
        };
      default:
        return {
          bg: 'bg-[#b91c1c] text-white',
          border: 'border-[#b91c1c]',
          label: kitten.status,
        };
    }
  };

  const status = getStatusBadge();

  return (
    <article className="group bg-white rounded-2xl border border-red-100 overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(185,28,28,0.08)]">
      {/* 4:5 Aspect Ratio Image Container with hover zoom */}
      <div
        onClick={() => onSelect(kitten)}
        className="relative aspect-[4/5] overflow-hidden bg-red-50/40 cursor-pointer"
      >
        {!imgError ? (
          <img
            src={kitten.images[0]}
            alt={`Cachorro ${kitten.name} raza ${kitten.breed}`}
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-red-50 text-[#b91c1c]">
            <Sparkles className="w-10 h-10 mb-2 opacity-40 text-[#b91c1c]" />
            <span className="font-serif font-semibold text-lg">{kitten.name}</span>
            <span className="text-xs text-neutral-600 mt-1">{kitten.breed}</span>
          </div>
        )}

        {/* Gradient Scrim for subtle contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/15 opacity-70 group-hover:opacity-50 transition-opacity pointer-events-none" />

        {/* Status Badge in upper corner */}
        <div className="absolute top-3 left-3 z-10">
          <span
            className={`inline-flex items-center px-2.5 py-1 text-[11px] font-semibold tracking-wide rounded-full border shadow-sm ${status.bg} ${status.border}`}
          >
            {status.label}
          </span>
        </div>

        {/* Breed tag */}
        <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5">
          <span className="px-2.5 py-1 text-[11px] font-semibold text-[#b91c1c] bg-white/95 backdrop-blur-sm rounded-full border border-red-100 shadow-xs">
            {kitten.breed}
          </span>
        </div>

        {/* Bottom overlay with quick name and gender */}
        <div className="absolute bottom-3 left-3 right-3 z-10 flex items-end justify-between text-white">
          <div>
            <h3 className="font-serif text-2xl font-semibold tracking-tight text-white drop-shadow-sm">
              {kitten.name}
            </h3>
            <p className="text-xs text-white/95 drop-shadow-sm font-medium">
              {kitten.gender} · {kitten.ageWeeks} semanas
            </p>
          </div>
          <div className="text-right">
            <span className="text-sm font-bold text-white drop-shadow-sm tabular-nums">
              {kitten.price}
            </span>
          </div>
        </div>
      </div>

      {/* Card Content & Technical Sheet */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          {/* Coat & Eye Color */}
          <div className="text-xs text-neutral-600 space-y-1">
            <div className="flex items-center justify-between">
              <span className="font-medium text-neutral-900">Manto:</span>
              <span className="truncate max-w-[180px] text-right">{kitten.colorManto}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium text-neutral-900">Ojos:</span>
              <span>{kitten.eyeColor}</span>
            </div>
          </div>

          {/* Quick Veterinary / Pedigree Trust Line */}
          <div className="pt-2 border-t border-red-100 flex items-center gap-1.5 text-[11px] text-[#b91c1c] font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-[#b91c1c] shrink-0" />
            <span className="truncate">HCM/PKD Libre · Microchip & Vacunación</span>
          </div>

          {/* Lineage mention */}
          <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
            Hijo de <span className="font-medium text-neutral-900">{kitten.sire.name}</span>. {kitten.description}
          </p>
        </div>

        {/* Action Buttons: Exclusively Email-driven */}
        <div className="pt-4 mt-2 border-t border-red-100 grid grid-cols-2 gap-2">
          <button
            onClick={() => onSelect(kitten)}
            className="flex items-center justify-center gap-1 py-2 px-3 text-xs font-semibold text-[#b91c1c] bg-red-50 hover:bg-red-100 rounded-lg transition-colors cursor-pointer border border-red-100"
          >
            <span>Ver Ficha</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>

          {kitten.status === 'Disponible' || kitten.status === 'En Adopción' ? (
            <button
              onClick={() => onEmailInquiry(kitten)}
              className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-white bg-[#b91c1c] hover:bg-[#991b1b] rounded-lg transition-colors shadow-sm cursor-pointer"
              title="Solicitar adopción por email a Criaderograciadivina@gmail.com"
            >
              <Mail className="w-3.5 h-3.5 text-white" />
              <span>Adoptar (600 €)</span>
            </button>
          ) : (
            <button
              onClick={() => onQuickReserve(kitten)}
              className="flex items-center justify-center gap-1 py-2 px-3 text-xs font-semibold text-neutral-600 bg-neutral-50 border border-neutral-200 rounded-lg hover:border-red-300 transition-colors cursor-pointer"
            >
              <span>Camada Futura</span>
            </button>
          )}
        </div>
      </div>
    </article>
  );
};
