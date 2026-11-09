import React, { useState, useMemo } from 'react';
import { Kitten, SiteSettings, Litter, Testimonial } from '../types';
import { KittenCard } from '../components/KittenCard';
import { ShieldCheck, Heart, Award, Search, Sparkles, Calendar, Mail, FileText, Star, CheckCircle, ChevronRight } from 'lucide-react';

interface CatalogViewProps {
  kittens: Kitten[];
  litters: Litter[];
  testimonials: Testimonial[];
  settings: SiteSettings;
  onSelectKitten: (kitten: Kitten) => void;
  onEmailInquiry: (kitten: Kitten) => void;
  onOpenAdoptionModal: (kitten?: Kitten) => void;
  onNavigateToBreeds: () => void;
  onNavigateToPolicy?: () => void;
  onNavigateToContact?: () => void;
  onNavigateToTestimonials?: () => void;
}

export const CatalogView: React.FC<CatalogViewProps> = ({
  kittens,
  litters,
  testimonials,
  settings,
  onSelectKitten,
  onEmailInquiry,
  onOpenAdoptionModal,
  onNavigateToBreeds,
  onNavigateToPolicy,
  onNavigateToContact,
  onNavigateToTestimonials,
}) => {
  const [selectedBreed, setSelectedBreed] = useState<string>('Todas');
  const [selectedStatus, setSelectedStatus] = useState<string>('Todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'age-asc' | 'price-asc'>('featured');

  const breedsList = ['Todas', 'Maine Coon', 'British Shorthair', 'Ragdoll', 'Bengalí', 'Sphynx'];

  // 6 Signature Hero Breed Showcase Cards (Matching Screenshot layout)
  const heroBreedCards = [
    {
      id: 'Maine Coon',
      name: 'MAINE COON',
      image: '/photos/IMG_4505.jpeg',
    },
    {
      id: 'Bengalí',
      name: 'BENGALÍ',
      image: '/photos/IMG_4480.jpeg',
    },
    {
      id: 'Siberiano',
      name: 'SIBERIANO',
      image: '/photos/IMG_4510.jpeg',
    },
    {
      id: 'Ragdoll',
      name: 'RAGDOLL',
      image: '/photos/IMG_4611.jpeg',
    },
    {
      id: 'British Shorthair',
      name: 'BRITISH SHORTHAIR',
      image: '/photos/IMG_4684.jpeg',
    },
    {
      id: 'Persa',
      name: 'PERSA',
      image: '/photos/IMG_4587.jpeg',
    },
  ];

  const filteredKittens = useMemo(() => {
    return kittens.filter((kitten) => {
      // Breed filter
      if (selectedBreed !== 'Todas' && kitten.breed !== selectedBreed) {
        return false;
      }
      // Status filter
      if (selectedStatus !== 'Todos' && kitten.status !== selectedStatus) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchName = kitten.name.toLowerCase().includes(query);
        const matchBreed = kitten.breed.toLowerCase().includes(query);
        const matchColor = kitten.colorManto.toLowerCase().includes(query);
        const matchDesc = kitten.description.toLowerCase().includes(query);
        if (!matchName && !matchBreed && !matchColor && !matchDesc) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'featured') {
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      }
      if (sortBy === 'age-asc') {
        return a.ageWeeks - b.ageWeeks;
      }
      return 0;
    });
  }, [kittens, selectedBreed, selectedStatus, searchQuery, sortBy]);

  const handleHeroBreedClick = (breedName: string) => {
    if (breedsList.includes(breedName)) {
      setSelectedBreed(breedName);
    } else {
      setSelectedBreed('Todas');
    }
    const elem = document.getElementById('camadas-disponibles');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-16 pb-20 bg-white">
      {/* 
        ========================================================================
        HERO SECTION (GATITOSELITES.ES LAYOUT IN STRICT RED & WHITE PALETTE)
        Deep Regal Crimson Red background: #7f1d1d / #991b1b
        Left: Tag pill + "Gatitos de Raza Premium" (white) + Subtitle + 2 pill buttons
        Right: 2x3 grid of rounded breed cards with bottom-left tags
        ========================================================================
      */}
      <section className="bg-gradient-to-br from-[#991b1b] via-[#7f1d1d] to-[#450a0a] text-white pt-10 pb-14 sm:pt-14 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden relative shadow-md">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Headline, Pill Tag & Action Buttons */}
            <div className="lg:col-span-5 space-y-6">
              {/* Pill tag in Red & White */}
              <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/30 bg-white/10 text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-white shadow-xs">
                <span>GRACIA DIVINA — 9 RAZAS DISPONIBLES</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] text-balance">
                Gatitos de Raza{' '}
                <span className="text-white font-serif block sm:inline drop-shadow-sm">
                  Premium
                </span>
              </h1>

              {/* Subtitle paragraph */}
              <p className="text-sm sm:text-base text-red-100 leading-relaxed font-light max-w-lg">
                Criados con amor en un entorno familiar en España. Con garantía de salud, vacunados y listos para robarte el corazón.
              </p>

              {/* Two Pill Buttons: VER RAZAS (White) & CONTACTAR (Outline) */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  onClick={onNavigateToBreeds}
                  className="px-8 py-3.5 rounded-full bg-white hover:bg-red-50 text-[#b91c1c] text-xs sm:text-sm font-bold uppercase tracking-wider transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-md cursor-pointer"
                >
                  VER RAZAS
                </button>

                <button
                  onClick={onNavigateToContact || (() => onOpenAdoptionModal())}
                  className="px-8 py-3.5 rounded-full bg-transparent hover:bg-white/15 text-white border border-white/80 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  CONTACTAR
                </button>
              </div>

              {/* Subtle Trust Indicators in Red & White */}
              <div className="pt-4 flex items-center gap-4 text-xs text-red-200">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-white" />
                  <span>Garantía 2 Años</span>
                </span>
                <span>·</span>
                <span className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-white fill-white" />
                  <span>Tarifa Fija 600 €</span>
                </span>
                <span>·</span>
                <span className="flex items-center gap-1.5">
                  <Mail className="w-4 h-4 text-white" />
                  <span>Email Directo</span>
                </span>
              </div>
            </div>

            {/* Right Column: 2x3 Grid of Rounded Breed Cards */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-3.5 sm:gap-4">
                {heroBreedCards.map((card) => (
                  <div
                    key={card.name}
                    onClick={() => handleHeroBreedClick(card.id)}
                    className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/40 border border-white/20 shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-[1.02]"
                  >
                    <img
                      src={card.image}
                      alt={card.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                    {/* Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/20 opacity-70 group-hover:opacity-40 transition-opacity" />

                    {/* Bottom-left Pill Badge with Breed Name */}
                    <div className="absolute bottom-3 left-3 z-10">
                      <span className="inline-block px-3 py-1 rounded bg-[#450a0a]/90 backdrop-blur-xs text-white text-[10px] sm:text-[11px] font-bold tracking-wider uppercase border border-red-300/30 shadow-sm">
                        {card.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        TESTIMONIALS SECTION (FROM GATITOSELITES.ES IN RED & WHITE)
        Featured real client reviews from Madrid, Barcelona, Valencia, Sevilla, Bilbao
        ========================================================================
      */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-red-50/40 rounded-3xl border border-red-100 p-8 sm:p-12 space-y-10 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-red-100 pb-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#b91c1c] text-white text-xs font-semibold tracking-wider uppercase">
                <Star className="w-3.5 h-3.5 fill-white text-white" />
                <span>OPINIONES Y EXPERIENCIAS REALES · VALORACIÓN MEDIA 5.0 ★</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#111827]">
                Lo que dicen las familias que han adoptado con nosotros
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Familias en toda España que han recibido a su nuevo miembro en casa con todo el amor, garantías sanitarias por escrito y seguimiento afectuoso.
              </p>
            </div>

            {onNavigateToTestimonials && (
              <button
                onClick={onNavigateToTestimonials}
                className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#b91c1c] bg-white hover:bg-red-50 border border-red-200 transition-colors shadow-xs cursor-pointer flex items-center gap-1.5 self-start md:self-auto"
              >
                <span>Ver Todos los Testimonios</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#b91c1c]" />
              </button>
            )}
          </div>

          {/* Testimonial Cards Grid with Real Adopters Holding Kittens */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-2xl border border-red-100 p-5 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow relative overflow-hidden"
              >
                <div className="space-y-3.5">
                  {/* Photo of Adopter Carrying Kitten */}
                  <div className="relative aspect-[16/11] rounded-xl overflow-hidden bg-red-50 border border-red-100">
                    <img
                      src={t.image}
                      alt={`${t.adopterName} con ${t.catName}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <span className="absolute bottom-2 left-2 px-2.5 py-1 text-[11px] font-bold bg-[#111827]/85 backdrop-blur-xs text-white rounded-md">
                      {t.catName} ({t.breed})
                    </span>
                    <span className="absolute top-2 right-2 px-2 py-0.5 text-[10px] font-semibold bg-white text-[#b91c1c] rounded-full shadow-xs flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-[#b91c1c]" />
                      <span>Verificado</span>
                    </span>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-0.5 text-[#b91c1c]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#b91c1c]" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-xs sm:text-sm text-neutral-700 italic leading-relaxed">
                    "{t.text}"
                  </p>
                </div>

                {/* Bottom: Adopter & City */}
                <div className="pt-3.5 mt-3.5 border-t border-red-100 flex items-center justify-between text-xs">
                  <div>
                    <h4 className="font-bold text-[#111827]">
                      {t.adopterName}
                    </h4>
                    <p className="text-[11px] text-neutral-500">{t.city} (Adopción {t.adoptionYear || '2025'})</p>
                  </div>
                  <span className="text-[10px] font-semibold text-[#b91c1c] bg-red-50 border border-red-200 px-2 py-0.5 rounded-full">
                    Garantía 2 Años
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Banner Bar in Red & White */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-red-100 text-center">
            <div>
              <span className="font-serif text-2xl font-bold text-[#b91c1c] block">100%</span>
              <span className="text-xs text-neutral-600">Familias Satisfechas</span>
            </div>
            <div>
              <span className="font-serif text-2xl font-bold text-[#b91c1c] block">2 Años</span>
              <span className="text-xs text-neutral-600">Garantía Sanitaria por Escrito</span>
            </div>
            <div>
              <span className="font-serif text-2xl font-bold text-[#b91c1c] block">600 €</span>
              <span className="text-xs text-neutral-600">Precio Fijo sin Sorpresas</span>
            </div>
            <div>
              <span className="font-serif text-2xl font-bold text-[#b91c1c] block">&lt; 24h</span>
              <span className="text-xs text-neutral-600">Respuesta por Email</span>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        KITTENS CATALOG SECTION (Available Kittens - All 600 €)
        ========================================================================
      */}
      <section id="camadas-disponibles" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-red-100">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#b91c1c]">
              Catálogo de Ejemplares
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#111827] mt-1">
              Cachorros Disponibles (Tarifa Fija: {settings.defaultPrice || '600 €'})
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 mt-1">
              Fichas técnicas con fotografías reales y pedigrí documentado. Adopción gestionada vía email a <strong className="text-[#b91c1c]">{settings.contactEmail}</strong>.
            </p>
          </div>

          {/* Quick Counter */}
          <div className="text-xs text-neutral-600 font-medium">
            Mostrando <strong className="text-[#b91c1c] font-bold">{filteredKittens.length}</strong> de {kittens.length} cachorros
          </div>
        </div>

        {/* Filter Controls Bar in Red & White */}
        <div className="py-6 space-y-4">
          {/* Breed Chips */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-neutral-800 mr-2">Raza:</span>
            {breedsList.map((breed) => {
              const isActive = selectedBreed === breed;
              return (
                <button
                  key={breed}
                  onClick={() => setSelectedBreed(breed)}
                  className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#b91c1c] text-white shadow-sm font-semibold'
                      : 'bg-red-50 text-[#b91c1c] hover:bg-red-100 border border-red-100'
                  }`}
                >
                  {breed}
                </button>
              );
            })}
          </div>

          {/* Status, Search & Sorting Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 pt-2">
            {/* Search Input */}
            <div className="sm:col-span-5 relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por nombre, color del manto o temperamento..."
                className="w-full pl-9 pr-3.5 py-2 text-xs sm:text-sm bg-white rounded-lg border border-red-100 focus:outline-none focus:border-[#b91c1c] focus:ring-1 focus:ring-[#b91c1c] text-[#111827]"
              />
            </div>

            {/* Status Filter */}
            <div className="sm:col-span-4 flex items-center gap-1 p-1 bg-red-50/80 rounded-lg border border-red-100">
              {['Todos', 'Disponible', 'En Adopción', 'Reservado'].map((status) => (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={`flex-1 py-1.5 text-[11px] font-medium rounded-md transition-colors truncate cursor-pointer ${
                    selectedStatus === status
                      ? 'bg-white text-[#b91c1c] shadow-xs font-semibold'
                      : 'text-neutral-600 hover:text-[#b91c1c]'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="sm:col-span-3">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full py-2 px-3 text-xs bg-white rounded-lg border border-red-100 focus:outline-none focus:border-[#b91c1c] text-[#111827]"
              >
                <option value="featured">Destacados Primero</option>
                <option value="age-asc">Edad (Menor a Mayor)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Kittens Grid */}
        {filteredKittens.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredKittens.map((kitten) => (
              <KittenCard
                key={kitten.id}
                kitten={kitten}
                onSelect={onSelectKitten}
                onEmailInquiry={onEmailInquiry}
                onQuickReserve={() => onOpenAdoptionModal(kitten)}
              />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center bg-white rounded-xl border border-red-100 p-8 space-y-4">
            <Sparkles className="w-10 h-10 text-[#b91c1c] mx-auto opacity-60" />
            <h3 className="font-serif text-xl font-semibold text-[#111827]">
              No se encontraron cachorros con los filtros seleccionados
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 max-w-md mx-auto">
              Pruebe a cambiar los criterios de búsqueda o contacte con nosotros directamente a través de nuestro correo oficial {settings.contactEmail}.
            </p>
            <button
              onClick={() => {
                setSelectedBreed('Todas');
                setSelectedStatus('Todos');
                setSearchQuery('');
              }}
              className="px-4 py-2 text-xs font-semibold text-[#b91c1c] bg-red-50 hover:bg-red-100 rounded-lg cursor-pointer"
            >
              Restablecer Filtros
            </button>
          </div>
        )}
      </section>

      {/* 
        ========================================================================
        LITTERS SECTION in Red & White
        ========================================================================
      */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-red-100 pt-12">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#b91c1c]">
              Planificación Reproductiva
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#111827] mt-1">
              Camadas Actuales y Próximas Entregas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {litters.map((litter) => (
              <div
                key={litter.id}
                className="bg-white rounded-xl border border-red-100 p-5 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div className="space-y-3">
                  <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-red-50">
                    <img
                      src={litter.image}
                      alt={litter.litterName}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 text-[11px] font-semibold bg-[#b91c1c] text-white rounded-full">
                      {litter.breed}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] text-[#b91c1c] font-semibold uppercase tracking-wider">
                      {litter.code}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#111827] mt-0.5">
                      {litter.litterName}
                    </h3>
                  </div>

                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {litter.description}
                  </p>

                  <div className="pt-2 border-t border-red-100 text-xs space-y-1 text-neutral-600">
                    <div className="flex justify-between">
                      <span>Nacimiento:</span>
                      <strong className="text-neutral-900">{litter.birthDate}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Entrega estimada:</span>
                      <strong className="text-[#b91c1c] font-semibold">{litter.readyDate}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Cachorros disponibles:</span>
                      <strong className="text-neutral-900">{litter.availableCount} de {litter.kittensCount}</strong>
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-3 border-t border-red-100">
                  <button
                    onClick={() => onOpenAdoptionModal()}
                    className="w-full py-2.5 text-xs font-semibold text-white bg-[#b91c1c] hover:bg-[#991b1b] rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Reservar de esta Camada por Email (600 €)</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        VETERINARY & LEGAL GUARANTEES STRIP in Red & White
        ========================================================================
      */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-red-50/50 rounded-2xl border border-red-100 p-8 sm:p-10">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#b91c1c]">
              Rigor & Transparencia
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#111827] mt-1">
              Lo que Siempre Incluye la Adopción (Tarifa Fija: {settings.defaultPrice || '600 €'})
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-2">
              Cada ejemplar se entrega con la máxima protección legal, sanitaria y bienestar afectivo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-5 rounded-xl border border-red-100 space-y-2 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-[#b91c1c]">
                <ShieldCheck className="w-5 h-5 text-[#b91c1c]" />
              </div>
              <h3 className="font-serif font-bold text-sm text-[#111827]">Garantía Sanitaria 2 Años</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Protección contractual frente a patologías genéticas hereditarias (HCM, PKD, SMA) y víricas.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-red-100 space-y-2 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-[#b91c1c]">
                <Award className="w-5 h-5 text-[#b91c1c]" />
              </div>
              <h3 className="font-serif font-bold text-sm text-[#111827]">Pedigrí Oficial Federado</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Certificado genealógico de hasta 5 generaciones emitido por clubs oficiales WCF o ASFE/FIFe.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-red-100 space-y-2 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-[#b91c1c]">
                <Heart className="w-5 h-5 text-[#b91c1c]" />
              </div>
              <h3 className="font-serif font-bold text-sm text-[#111827]">100% Crianza en Hogar</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Sin jaulas ni aislamiento. Criados con niños y rascadores, listos para integrarse en su familia.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-red-100 space-y-2 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-[#b91c1c]">
                <ShieldCheck className="w-5 h-5 text-[#b91c1c]" />
              </div>
              <h3 className="font-serif font-bold text-sm text-[#111827]">Pasaporte & Welcome Pack</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Microchip oficial, vacunas completas para su edad, manta olfativa y alimento super premium.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
