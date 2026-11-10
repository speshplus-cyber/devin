import React, { useState } from 'react';
import { BreedType, Kitten, Testimonial, SiteSettings } from '../types';
import { BREEDS_DATA, FAQ_DATA } from '../data/catsData';
import {
  ShieldCheck,
  CheckCircle,
  Heart,
  Truck,
  Award,
  Calendar,
  Sparkles,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Star,
  MapPin,
  Clock,
  Phone,
  HelpCircle,
  Eye,
  Info,
} from 'lucide-react';
import { BREED_TO_SLUG } from '../services/router';

interface BreedLandingViewProps {
  breed: BreedType;
  kittens: Kitten[];
  testimonials: Testimonial[];
  settings: SiteSettings;
  onSelectKitten: (kitten: Kitten) => void;
  onOpenAdoptionModal: (kitten?: Kitten) => void;
  onNavigateHome: () => void;
  onNavigateBreed: (breed: BreedType) => void;
}

export const BreedLandingView: React.FC<BreedLandingViewProps> = ({
  breed,
  kittens,
  testimonials,
  settings,
  onSelectKitten,
  onOpenAdoptionModal,
  onNavigateHome,
  onNavigateBreed,
}) => {
  const [selectedGenderFilter, setSelectedGenderFilter] = useState<'Todos' | 'Macho' | 'Hembra'>('Todos');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number>(0);

  const normalizeStr = (str: string) =>
    str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();

  // Find breed info
  const breedInfo = BREEDS_DATA.find((b) => b.id === breed) || BREEDS_DATA[0];

  // Filter kittens for this breed
  const breedKittens = kittens.filter(
    (k) => normalizeStr(k.breed) === normalizeStr(breed)
  );

  // Apply gender filter
  const displayedKittens = breedKittens.filter((k) => {
    if (selectedGenderFilter === 'Todos') return true;
    return k.gender === selectedGenderFilter;
  });

  // Filter testimonials for this breed (or fall back to all if fewer than 2)
  const breedTestimonials = testimonials.filter(
    (t) => normalizeStr(t.breed) === normalizeStr(breed)
  );
  const displayedTestimonials = breedTestimonials.length >= 2 ? breedTestimonials : testimonials.slice(0, 3);

  // Determine standard price for this breed
  const breedPrice =
    breed === 'Maine Coon'
      ? '700 €'
      : breed === 'British Shorthair'
      ? '650 €'
      : '600 €';

  // WhatsApp concierge number
  const cleanNumber = (settings.whatsappNumber || '34632968208').replace(/[^0-9]/g, '');

  const handleOpenBreedWhatsApp = () => {
    const text = encodeURIComponent(`¡Hola! Me interesa la adopción de un gatito ${breed}.`);
    window.open(`https://wa.me/${cleanNumber}?text=${text}`, '_blank');
  };

  const handleKittenWhatsApp = (kitten: Kitten, e: React.MouseEvent) => {
    e.stopPropagation();
    const text = encodeURIComponent(`¡Hola! Me interesa la adopción del gatito ${kitten.name}.`);
    window.open(`https://wa.me/${cleanNumber}?text=${text}`, '_blank');
  };

  const galleryImages = [breedInfo.heroImage, ...(breedInfo.gallery || [])].filter(
    (img, idx, arr) => arr.indexOf(img) === idx
  );

  // Breed-specific FAQs
  const breedFaqs = [
    {
      question: `¿Cuál es el precio y qué incluye la adopción de un gatito ${breed}?`,
      answer: `El precio de adopción para nuestros cachorros ${breed} es de ${breedPrice} (precio final transparente). Incluye: cartilla sanitaria veterinaria oficial, microchip ya implantado a su nombre, vacunación completa acorde a su edad (trivalente felina), desparasitación interna y externa, contrato de garantía vírica y genética de 2 años por escrito, pedigrí oficial de raza y kit de bienvenida con su alimento de adaptación.`,
    },
    {
      question: `¿Cómo es el carácter y la convivencia del ${breed}?`,
      answer: `El ${breed} es reconocido mundialmente por su carácter sumamente afectuoso y equilibrado. En criaderograciadivina criamos a cada camada en nuestro propio salón familiar con niños y estímulos cotidianos, logrando cachorros totalmente socializados, seguros de sí mismos y acostumbrados al uso del arenero y rascador desde el primer día.`,
    },
    {
      question: `¿Cómo se realiza el envío o entrega en mi ciudad?`,
      answer: `Disponemos de servicio de transporte especializado climatizado para mascotas con entrega directa puerta a puerta en cualquier ciudad y provincia de España. También ofrecemos videollamadas en directo para que conozcas a tu cachorro antes de la entrega o citas concertadas para recogida.`,
    },
    {
      question: `¿Están testados los progenitores de los cachorros de ${breed}?`,
      answer: `Sí, todos nuestros reproductores están testados y certificados negativos mediante ADN y ecocardiografías para las patologías específicas de la raza (HCM, PKD, SMA) y son libres de Leucemia Felina (FeLV) e Inmunodeficiencia (FIV). Entregamos copias de las garantías genéticas con el contrato.`,
    },
    {
      question: `¿Cómo puedo formalizar la reserva de mi gatito?`,
      answer: `Puedes pulsar directamente en el botón de WhatsApp o completar el formulario de solicitud online. Te confirmaremos la disponibilidad del gatito seleccionado, te enviaremos vídeos actualizados y coordinaremos los detalles de reserva y entrega.`,
    },
  ];

  return (
    <div className="bg-white text-[#111827]">
      {/* Breadcrumb Navigation */}
      <div className="border-b border-red-100 bg-red-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-xs text-neutral-600" aria-label="Breadcrumb">
            <button
              onClick={onNavigateHome}
              className="hover:text-[#b91c1c] transition-colors cursor-pointer flex items-center gap-1"
            >
              <span>Inicio</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
            <span className="text-neutral-500">Razas Exclusivas</span>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
            <span className="font-bold text-[#b91c1c]">{breed}</span>
          </nav>
        </div>
      </div>

      {/* Main Breed Hero (Optimized for High Quality Score & Google Ads) */}
      <section className="py-8 sm:py-12 border-b border-red-100 bg-gradient-to-b from-red-50/30 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Headline, Trust Badges, CTAs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-100 text-[#b91c1c] text-xs font-bold uppercase tracking-wider border border-red-200">
                <Sparkles className="w-3.5 h-3.5 text-[#b91c1c]" />
                <span>Criadero Ético WCF / FIFe · Camadas 2026</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight">
                Gatitos <span className="text-[#b91c1c]">{breed}</span> de Raza Pura en España
              </h1>

              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
                {breedInfo.shortDesc} Seleccionamos reproductores de linajes campeones internacionales, criados con amor en familia con <strong className="text-[#111827]">garantía genética por escrito de 2 años</strong>, microchip, cartilla sanitaria oficial y entrega a domicilio.
              </p>

              {/* Price Highlight Banner */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-red-50 to-orange-50/50 border border-red-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#b91c1c] block">
                    Tarifa Oficial Transparente
                  </span>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="font-serif text-3xl sm:text-4xl font-extrabold text-[#b91c1c]">
                      {breedPrice}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-neutral-600">
                      Precio final por cachorro · Sin costes ocultos
                    </span>
                  </div>
                  <p className="text-xs text-neutral-500 mt-1">
                    Incluye Microchip + Trivalente + Pasaporte Oficial + Pedigrí + Kit de Inicio
                  </p>
                </div>

                <div className="shrink-0 flex sm:flex-col items-center sm:items-end gap-1">
                  <span className="px-3 py-1 text-xs font-bold bg-[#111827] text-white rounded-full">
                    {breedKittens.length} Gatitos Disponibles
                  </span>
                  <span className="text-[11px] text-neutral-500">Listos para reserva</span>
                </div>
              </div>

              {/* Trust Value Pillars */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-xl bg-white border border-red-100 shadow-xs text-center space-y-1">
                  <ShieldCheck className="w-5 h-5 text-[#b91c1c] mx-auto" />
                  <span className="text-xs font-bold text-[#111827] block">Garantía 2 Años</span>
                  <span className="text-[10px] text-neutral-500 block leading-tight">Por escrito en contrato</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-red-100 shadow-xs text-center space-y-1">
                  <CheckCircle className="w-5 h-5 text-[#b91c1c] mx-auto" />
                  <span className="text-xs font-bold text-[#111827] block">Vacunas + Chip</span>
                  <span className="text-[10px] text-neutral-500 block leading-tight">Cartilla oficial veterinaria</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-red-100 shadow-xs text-center space-y-1">
                  <Truck className="w-5 h-5 text-[#b91c1c] mx-auto" />
                  <span className="text-xs font-bold text-[#111827] block">Envío Nacional</span>
                  <span className="text-[10px] text-neutral-500 block leading-tight">Transporte climatizado</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-red-100 shadow-xs text-center space-y-1">
                  <Award className="w-5 h-5 text-[#b91c1c] mx-auto" />
                  <span className="text-xs font-bold text-[#111827] block">Pedigrí Oficial</span>
                  <span className="text-[10px] text-neutral-500 block leading-tight">WCF & FIFe Oficial</span>
                </div>
              </div>

              {/* Primary Dual Call to Action */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  onClick={handleOpenBreedWhatsApp}
                  className="px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm sm:text-base rounded-xl shadow-md transition-all hover:scale-[1.02] flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8zm8.4-18.2A11.8 11.8 0 0 0 1.8 17.9L.1 24l6.3-1.6A11.8 11.8 0 0 0 23.8 12c0-3.2-1.2-6.1-3.4-8.4z" />
                  </svg>
                  <span>Consultar por WhatsApp (+34 632 96 82 08)</span>
                </button>

                <button
                  onClick={() => onOpenAdoptionModal()}
                  className="px-6 py-3.5 bg-[#b91c1c] hover:bg-[#991b1b] text-white font-bold text-sm sm:text-base rounded-xl shadow-md transition-all hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  <span>Solicitar Adopción Online ({breedPrice})</span>
                </button>
              </div>

              <div className="flex items-center gap-4 text-xs text-neutral-500">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#b91c1c]" /> Respuesta en menos de 15 minutos por WhatsApp
                </span>
                <span>·</span>
                <span>Fotos y vídeos en directo disponibles</span>
              </div>
            </div>

            {/* Right Column: Hero Visual & Interactive Photo Switcher */}
            <div className="lg:col-span-5 space-y-3">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border-2 border-red-100 bg-neutral-900 group">
                <img
                  src={galleryImages[activeGalleryIndex] || breedInfo.heroImage}
                  alt={`Cachorro ${breed} de criadero de élite`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 flex flex-col gap-1">
                  <span className="px-3 py-1 text-xs font-bold bg-[#b91c1c] text-white rounded-full shadow-md">
                    {breed}
                  </span>
                  <span className="px-2.5 py-0.5 text-[11px] font-semibold bg-white/95 text-[#111827] rounded-full shadow-sm">
                    {breedInfo.standardFed}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 bg-[#111827]/85 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-bold">
                  {breedPrice}
                </div>
              </div>

              {/* Gallery Miniatures */}
              {galleryImages.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {galleryImages.slice(0, 4).map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveGalleryIndex(idx)}
                      className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                        activeGalleryIndex === idx
                          ? 'border-[#b91c1c] ring-2 ring-red-300 scale-95'
                          : 'border-red-100 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`${breed} preview ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Available Kittens Grid for THIS Breed */}
      <section id="gatitos-disponibles" className="py-12 sm:py-16 bg-white border-b border-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#b91c1c]">
                Camadas Actuales 2026
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#111827] mt-1">
                Gatitos {breed} Disponibles ({displayedKittens.length})
              </h2>
              <p className="text-sm text-neutral-600 mt-1 max-w-2xl">
                Fotos 100% reales de cada cachorro de nuestra camada actual. Toca cualquier gatito para ver su ficha completa o contacta directamente por WhatsApp para reservarlo.
              </p>
            </div>

            {/* Gender Filter Buttons */}
            <div className="flex items-center gap-2 bg-red-50 p-1.5 rounded-xl border border-red-100 shrink-0 self-start md:self-auto">
              {(['Todos', 'Macho', 'Hembra'] as const).map((gender) => (
                <button
                  key={gender}
                  onClick={() => setSelectedGenderFilter(gender)}
                  className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    selectedGenderFilter === gender
                      ? 'bg-[#b91c1c] text-white shadow-xs'
                      : 'text-neutral-700 hover:text-[#b91c1c]'
                  }`}
                >
                  {gender}
                </button>
              ))}
            </div>
          </div>

          {/* Kitten Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedKittens.map((kitten) => {
              const photo = kitten.images && kitten.images.length > 0 ? kitten.images[0] : breedInfo.heroImage;
              return (
                <div
                  key={kitten.id}
                  onClick={() => onSelectKitten(kitten)}
                  className="bg-white rounded-2xl border border-red-100 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                      <img
                        src={photo}
                        alt={`Gatito ${kitten.breed} ${kitten.name}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 text-[11px] font-bold bg-[#111827]/85 backdrop-blur-xs text-white rounded-md">
                        {kitten.breed}
                      </span>
                      <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 text-[11px] font-bold bg-green-600 text-white rounded-md shadow-xs">
                        {kitten.status}
                      </span>
                      <span className="absolute bottom-2.5 right-2.5 px-2.5 py-1 text-xs font-extrabold bg-[#b91c1c] text-white rounded-md shadow-sm">
                        {kitten.price || breedPrice}
                      </span>
                    </div>

                    {/* Body Info */}
                    <div className="p-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-serif text-lg font-bold text-[#111827] group-hover:text-[#b91c1c] transition-colors">
                          {kitten.name}
                        </h3>
                        <span
                          className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                            kitten.gender === 'Hembra'
                              ? 'bg-pink-100 text-pink-700'
                              : 'bg-blue-100 text-blue-700'
                          }`}
                        >
                          {kitten.gender}
                        </span>
                      </div>

                      <div className="text-xs text-neutral-600 space-y-1 pt-1 border-t border-neutral-100">
                        <div className="flex items-center justify-between">
                          <span className="text-neutral-400">Color:</span>
                          <span className="font-semibold text-neutral-800">{kitten.colorManto || 'Color clásico'}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-neutral-400">Ojos:</span>
                          <span className="font-semibold text-neutral-800">{kitten.eyeColor || 'Expresivos'}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-neutral-400">Entrega:</span>
                          <span className="font-semibold text-green-700">Inmediata</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions Strip */}
                  <div className="p-4 pt-0 space-y-2">
                    <button
                      onClick={(e) => handleKittenWhatsApp(kitten, e)}
                      className="w-full py-2.5 px-3 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                        <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8zm8.4-18.2A11.8 11.8 0 0 0 1.8 17.9L.1 24l6.3-1.6A11.8 11.8 0 0 0 23.8 12c0-3.2-1.2-6.1-3.4-8.4z" />
                      </svg>
                      <span>Preguntar por {kitten.name}</span>
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenAdoptionModal(kitten);
                      }}
                      className="w-full py-2 px-3 bg-red-50 hover:bg-red-100 text-[#b91c1c] text-xs font-semibold rounded-xl border border-red-200 transition-colors flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <span>Solicitar Reserva</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Breed Characteristics & Standards */}
      <section className="py-12 sm:py-16 bg-neutral-50/70 border-b border-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#b91c1c]">
              Morfología & Temperamento Oficial
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#111827]">
              Conoce el Estándar de la Raza {breed}
            </h2>
            <p className="text-sm sm:text-base text-neutral-600">
              {breedInfo.overview}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-red-100 shadow-xs space-y-2">
              <span className="text-xs font-bold uppercase text-[#b91c1c] block">Origen & Estándar</span>
              <h3 className="font-bold text-base text-[#111827]">{breedInfo.origin}</h3>
              <p className="text-xs text-neutral-600">{breedInfo.standardFed}</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-red-100 shadow-xs space-y-2">
              <span className="text-xs font-bold uppercase text-[#b91c1c] block">Peso & Talla Adulto</span>
              <h3 className="font-bold text-base text-[#111827]">{breedInfo.averageWeight}</h3>
              <p className="text-xs text-neutral-600">Desarrollo armónico de musculatura</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-red-100 shadow-xs space-y-2">
              <span className="text-xs font-bold uppercase text-[#b91c1c] block">Esperanza de Vida</span>
              <h3 className="font-bold text-base text-[#111827]">{breedInfo.lifeSpan}</h3>
              <p className="text-xs text-neutral-600">Con alimentación premium y control veterinario</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-red-100 shadow-xs space-y-2">
              <span className="text-xs font-bold uppercase text-[#b91c1c] block">Cuidado del Manto</span>
              <h3 className="font-bold text-base text-[#111827]">Higiene Sencilla</h3>
              <p className="text-xs text-neutral-600">{breedInfo.coatCare}</p>
            </div>
          </div>

          {/* Traits checklist & Ideal Home */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-red-100 shadow-xs space-y-4">
              <h3 className="font-serif text-xl font-bold text-[#111827] flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#b91c1c]" />
                <span>Rasgos de Personalidad Distintivos</span>
              </h3>
              <ul className="space-y-3">
                {breedInfo.characterTraits.map((trait, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-neutral-700">
                    <CheckCircle className="w-4 h-4 text-[#b91c1c] shrink-0 mt-0.5" />
                    <span>{trait}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-red-100 shadow-xs space-y-4">
              <h3 className="font-serif text-xl font-bold text-[#111827] flex items-center gap-2">
                <Heart className="w-5 h-5 text-[#b91c1c]" />
                <span>Hogar y Familia Recomendada</span>
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                {breedInfo.idealFor}
              </p>
              <div className="p-4 rounded-xl bg-red-50/60 border border-red-100 space-y-2">
                <span className="text-xs font-bold text-[#b91c1c] uppercase tracking-wide block">
                  Nuestro Compromiso Ético de Crianza
                </span>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Todos nuestros cachorros de {breed} crecen libres dentro de nuestro hogar, sin jaulas ni aislamientos, interactuando a diario con nosotros para garantizar una integración amorosa y sin miedos en tu hogar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Adopter Testimonials for THIS Breed */}
      <section className="py-12 sm:py-16 bg-white border-b border-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#b91c1c]">
              Opiniones Verificadas en España
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#111827]">
              Familias que Adoptaron un {breed} con Nosotros
            </h2>
            <p className="text-sm text-neutral-600">
              Reseñas reales de adoptantes con entrega en Madrid, Barcelona, Valencia, Sevilla y resto de España.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedTestimonials.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-2xl border border-red-100 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow relative"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#991b1b] to-[#7f1d1d] text-white font-bold text-xs flex items-center justify-center shrink-0 border border-red-100 shadow-xs">
                        {t.avatar || (t.adopterName || t.author || 'FA').substring(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-[#111827]">{t.adopterName || t.author}</h4>
                        <p className="text-xs text-neutral-500 flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[#b91c1c]" />
                          <span>{t.city || t.location}</span>
                        </p>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 text-[10px] font-semibold bg-red-50 text-[#b91c1c] rounded-full border border-red-200 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-[#b91c1c]" />
                      <span>Verificado</span>
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-[#b91c1c]">
                    {[...Array(t.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#b91c1c]" />
                    ))}
                    <span className="text-[11px] font-bold text-[#b91c1c] ml-1">5.0 / 5.0</span>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-700 italic leading-relaxed">
                    «{t.text}»
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-red-100 flex items-center justify-between text-xs">
                  <span className="text-neutral-500">
                    Gatito: <strong className="text-[#111827]">{t.catName || t.kittenName}</strong>
                  </span>
                  <span className="text-[11px] font-semibold text-[#b91c1c] bg-red-50 px-2 py-0.5 rounded-full border border-red-200">
                    {t.breed}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Simple Adoption Process */}
      <section className="py-12 sm:py-16 bg-neutral-50/60 border-b border-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#b91c1c]">
              Proceso Transparente y Seguro
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#111827]">
              Cómo Adoptar tu Gatito {breed} en 4 Pasos
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-red-100 shadow-xs space-y-3 relative">
              <span className="w-8 h-8 rounded-full bg-red-100 text-[#b91c1c] font-extrabold text-sm flex items-center justify-center">
                1
              </span>
              <h3 className="font-bold text-base text-[#111827]">Elige tu Cachorro</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Revisa las fotos y ficha de los gatitos disponibles de {breed}. Elige el cachorro que enamore a tu familia.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-red-100 shadow-xs space-y-3 relative">
              <span className="w-8 h-8 rounded-full bg-red-100 text-[#b91c1c] font-extrabold text-sm flex items-center justify-center">
                2
              </span>
              <h3 className="font-bold text-base text-[#111827]">Contacto Directo</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Escríbenos por WhatsApp al +34 632 96 82 08 o rellena el formulario. Te responderemos al instante con más fotos y vídeos.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-red-100 shadow-xs space-y-3 relative">
              <span className="w-8 h-8 rounded-full bg-red-100 text-[#b91c1c] font-extrabold text-sm flex items-center justify-center">
                3
              </span>
              <h3 className="font-bold text-base text-[#111827]">Reserva Oficial</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Formalizamos el contrato de adopción y garantía por escrito para que el gatito quede reservado exclusivamente para ti.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-red-100 shadow-xs space-y-3 relative">
              <span className="w-8 h-8 rounded-full bg-red-100 text-[#b91c1c] font-extrabold text-sm flex items-center justify-center">
                4
              </span>
              <h3 className="font-bold text-base text-[#111827]">Entrega en Casa</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Recibe a tu gatito con transporte especializado climatizado en tu puerta o recógelo mediante cita concertada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions for this Breed */}
      <section className="py-12 sm:py-16 bg-white border-b border-red-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#b91c1c]">
              Resolvemos tus Dudas
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#111827]">
              Preguntas Frecuentes sobre el {breed}
            </h2>
          </div>

          <div className="space-y-3">
            {breedFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-red-100 overflow-hidden shadow-xs transition-colors"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left font-bold text-sm sm:text-base text-[#111827] flex items-center justify-between gap-4 cursor-pointer hover:text-[#b91c1c]"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#b91c1c] shrink-0 transition-transform duration-200 ${
                      openFaqIndex === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaqIndex === idx && (
                  <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-red-50 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Other Breeds Bar */}
      <section className="py-8 bg-neutral-50/80 border-b border-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#b91c1c] block">
                Nuestras Otras Razas de Élite
              </span>
              <p className="text-sm font-semibold text-[#111827]">
                ¿Quieres comparar con otra raza felina antes de decidir?
              </p>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {(['Maine Coon', 'British Shorthair', 'Ragdoll', 'Sphynx'] as BreedType[])
                .filter((b) => b !== breed)
                .map((otherBreed) => (
                  <button
                    key={otherBreed}
                    onClick={() => onNavigateBreed(otherBreed)}
                    className="px-4 py-2 rounded-full bg-white text-xs font-bold text-[#111827] hover:bg-[#b91c1c] hover:text-white border border-red-200 transition-colors shadow-xs shrink-0 cursor-pointer flex items-center gap-1.5"
                  >
                    <span>{otherBreed}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final High-Converting Call to Action Banner */}
      <section className="py-14 sm:py-20 bg-gradient-to-br from-[#450a0a] via-[#7f1d1d] to-[#991b1b] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-amber-200 text-xs font-bold uppercase tracking-wider border border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Reserva Abierta · Camada de {breed}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight">
            Haz Realidad la Adopción de tu {breed}
          </h2>

          <p className="text-sm sm:text-base text-red-100 max-w-2xl mx-auto leading-relaxed">
            Ponte en contacto ahora con nuestro criadero. Te enviaremos vídeos en directo del cachorro seleccionado y te guiaremos paso a paso hasta que llegue a tus brazos.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleOpenBreedWhatsApp}
              className="w-full sm:w-auto px-8 py-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-base rounded-xl shadow-xl transition-transform hover:scale-105 flex items-center justify-center gap-3 cursor-pointer"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8zm8.4-18.2A11.8 11.8 0 0 0 1.8 17.9L.1 24l6.3-1.6A11.8 11.8 0 0 0 23.8 12c0-3.2-1.2-6.1-3.4-8.4z" />
              </svg>
              <span>Escríbenos por WhatsApp (+34 632 96 82 08)</span>
            </button>

            <button
              onClick={() => onOpenAdoptionModal()}
              className="w-full sm:w-auto px-8 py-4 bg-white text-[#b91c1c] hover:bg-red-50 font-extrabold text-base rounded-xl shadow-xl transition-transform hover:scale-105 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Heart className="w-5 h-5 fill-[#b91c1c]" />
              <span>Solicitar Adopción ({breedPrice})</span>
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-red-200/90 pt-2">
            <span>✓ Garantía oficial de 2 años</span>
            <span>✓ Vacunado y con microchip</span>
            <span>✓ Entrega a domicilio en toda España</span>
            <span>✓ Pasaporte y pedigrí de raza pura</span>
          </div>
        </div>
      </section>
    </div>
  );
};
