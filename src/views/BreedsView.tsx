import React, { useState, useEffect } from 'react';
import { BreedType, Kitten } from '../types';
import { BREEDS_DATA } from '../data/catsData';
import { ChevronRight, Check, Sparkles } from 'lucide-react';

interface BreedsViewProps {
  kittens?: Kitten[];
  initialBreed?: BreedType;
  onFilterBreed: (breed: BreedType) => void;
  onSelectKitten?: (kitten: Kitten) => void;
  onAdoptKitten?: (kitten: Kitten) => void;
  onOpenAdoptionModal: () => void;
}

export const BreedsView: React.FC<BreedsViewProps> = ({
  kittens = [],
  initialBreed,
  onFilterBreed,
  onSelectKitten,
  onAdoptKitten,
  onOpenAdoptionModal,
}) => {
  const [selectedBreedId, setSelectedBreedId] = useState<BreedType>(initialBreed || 'Maine Coon');

  useEffect(() => {
    if (initialBreed) {
      setSelectedBreedId(initialBreed);
    }
  }, [initialBreed]);

  const normalizeStr = (str: string) =>
    str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();

  const currentBreed = BREEDS_DATA.find((b) => b.id === selectedBreedId) || BREEDS_DATA[0];

  const currentBreedKittens = kittens.filter(
    (k) => normalizeStr(k.breed) === normalizeStr(currentBreed.id)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 pb-16 bg-white">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-[#b91c1c]">
          Estándares Oficiales WCF & FIFe
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#111827]">
          Nuestras Razas de Exposición y Compañía
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
          Seleccionamos reproductores de las mejores líneas de sangre de Europa y América para preservar el estándar morfológico impecable, la salud genética y el temperamento dócil que distingue a cada raza.
        </p>
      </div>

      {/* Breed Tabs */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2">
        {BREEDS_DATA.map((breed) => {
          const isActive = selectedBreedId === breed.id;
          const breedCount = kittens.filter(
            (k) => normalizeStr(k.breed) === normalizeStr(breed.id)
          ).length;
          return (
            <button
              key={breed.id}
              onClick={() => setSelectedBreedId(breed.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all shrink-0 cursor-pointer ${
                isActive
                  ? 'bg-[#b91c1c] text-white shadow-md scale-105'
                  : 'bg-red-50 text-[#b91c1c] hover:bg-red-100 border border-red-100'
              }`}
            >
              {breed.name} {breedCount > 0 ? `(${breedCount})` : ''}
            </button>
          );
        })}
      </div>

      {/* Main Breed Showcase Card */}
      <div className="bg-white rounded-2xl border border-red-100 shadow-sm overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column: Hero Image & Gallery (5 cols) */}
          <div className="lg:col-span-5 bg-[#450a0a] p-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-red-900/60 shadow-inner">
                <img
                  src={currentBreed.heroImage}
                  alt={currentBreed.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#b91c1c] text-white border border-red-400/40">
                    {currentBreed.standardFed}
                  </span>
                </div>
              </div>

              {/* Gallery Miniatures */}
              <div className="grid grid-cols-4 gap-2">
                {currentBreed.gallery.map((img, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-lg overflow-hidden border border-red-900/60 bg-black/40"
                  >
                    <img
                      src={img}
                      alt={`${currentBreed.name} galería ${i + 1}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-red-900/60 flex items-center justify-between text-xs text-red-200">
              <span>Origen: <strong className="text-white">{currentBreed.origin}</strong></span>
              <span>Esperanza de vida: <strong className="text-white">{currentBreed.lifeSpan}</strong></span>
            </div>
          </div>

          {/* Right Column: Detailed Monograph (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6 bg-white">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#b91c1c]">
                  Monografía de la Raza
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#111827] mt-1">
                  {currentBreed.name}
                </h2>
                <p className="text-sm font-medium text-[#b91c1c] mt-1">
                  {currentBreed.shortDesc}
                </p>
              </div>

              <p className="text-sm text-neutral-600 leading-relaxed">
                {currentBreed.overview}
              </p>

              {/* Specification Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-red-50/40 rounded-xl border border-red-100">
                  <span className="text-[11px] uppercase font-bold text-[#b91c1c] block">
                    Peso Promedio Adulto
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-[#111827] mt-1">
                    {currentBreed.averageWeight}
                  </p>
                </div>
                <div className="p-4 bg-red-50/40 rounded-xl border border-red-100">
                  <span className="text-[11px] uppercase font-bold text-[#b91c1c] block">
                    Cuidado del Manto
                  </span>
                  <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                    {currentBreed.coatCare}
                  </p>
                </div>
              </div>

              {/* Character & Temperament Checklist */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#b91c1c]">
                  Rasgos de Temperamento
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentBreed.characterTraits.map((trait, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-neutral-800">
                      <span className="w-4 h-4 rounded-full bg-red-100 text-[#b91c1c] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#b91c1c]" />
                      </span>
                      <span>{trait}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ideal Family Match */}
              <div className="p-4 bg-red-50/40 rounded-xl border border-red-100 space-y-1">
                <span className="text-[11px] uppercase font-bold text-[#b91c1c] block">
                  Perfil de Hogar Ideal
                </span>
                <p className="text-xs sm:text-sm text-neutral-600">
                  {currentBreed.idealFor}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-6 border-t border-red-100 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => onFilterBreed(currentBreed.id)}
                className="w-full sm:flex-1 flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-semibold text-white bg-[#b91c1c] hover:bg-[#991b1b] rounded-lg transition-colors shadow-sm cursor-pointer"
              >
                <span>Ver los {currentBreedKittens.length} Cachorros de {currentBreed.name}</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenAdoptionModal}
                className="w-full sm:flex-1 py-3 px-4 text-xs sm:text-sm font-semibold text-[#b91c1c] bg-red-50 hover:bg-red-100 border border-red-100 rounded-lg transition-colors cursor-pointer"
              >
                Solicitar Información de Próximas Camadas
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dedicated Kittens Showcase for this Breed */}
      <div className="space-y-6 pt-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 border-b border-red-100 pb-4">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#b91c1c]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Gatitos de Raza {currentBreed.name}</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#111827] mt-1">
              Cachorros Disponibles ({currentBreedKittens.length})
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600">
              Todos los gatitos {currentBreed.name} cuentan con pedigrí oficial, vacunación completa y garantía de salud.
            </p>
          </div>
          <button
            onClick={() => onFilterBreed(currentBreed.id)}
            className="text-xs font-bold text-[#b91c1c] hover:underline flex items-center gap-1 cursor-pointer shrink-0"
          >
            Filtrar en catálogo general →
          </button>
        </div>

        {currentBreedKittens.length === 0 ? (
          <div className="p-8 text-center bg-red-50/50 rounded-xl border border-red-100 text-sm text-neutral-600">
            Actualmente no hay cachorros de {currentBreed.name} en entrega inmediata. Contáctanos para consultar próximas camadas.
          </div>
        ) : (
          <div className="kgrid">
            {currentBreedKittens.map((kitten) => {
              const mainPhoto =
                kitten.images && kitten.images.length > 0 ? kitten.images[0] : currentBreed.heroImage;
              return (
                <article
                  key={kitten.id}
                  className="kmini"
                  data-breed={kitten.breed.toLowerCase()}
                  data-sex={kitten.gender === 'Hembra' ? 'F' : 'M'}
                >
                  <div
                    className="kmini-img cursor-pointer"
                    onClick={() => onSelectKitten && onSelectKitten(kitten)}
                  >
                    <img
                      src={mainPhoto}
                      alt={`Gatito ${kitten.breed} ${kitten.name}`}
                      loading="lazy"
                    />
                    <span className="tag">{kitten.breed}</span>
                  </div>
                  <div className="kmini-body">
                    <div className="kmini-top">
                      <h3>{kitten.name}</h3>
                      <span className="price">{kitten.price || '600 €'}</span>
                    </div>
                    <div className="kmini-meta">
                      <span className={`sex sex-${kitten.gender === 'Hembra' ? 'F' : 'M'}`}>
                        {kitten.gender}
                      </span>
                      <span className="avail">● {kitten.status}</span>
                    </div>
                    <div className="kmini-btns">
                      <button
                        type="button"
                        className="btn btn-green btn-sm"
                        onClick={() => onSelectKitten && onSelectKitten(kitten)}
                      >
                        Ver detalles
                      </button>
                      <button
                        type="button"
                        className="btn btn-gold btn-sm"
                        onClick={() =>
                          onAdoptKitten ? onAdoptKitten(kitten) : onOpenAdoptionModal()
                        }
                      >
                        Adoptar
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
