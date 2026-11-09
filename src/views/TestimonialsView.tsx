import React from 'react';
import { Testimonial } from '../types';
import { Star, Heart, Mail, MapPin, CheckCircle, Quote, Sparkles } from 'lucide-react';

interface TestimonialsViewProps {
  testimonials: Testimonial[];
  onOpenAdoptionModal: () => void;
  onOpenEmail: (message?: string) => void;
}

export const TestimonialsView: React.FC<TestimonialsViewProps> = ({
  testimonials,
  onOpenAdoptionModal,
  onOpenEmail,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 pb-20 bg-white">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#b91c1c] text-white text-xs font-semibold tracking-wider uppercase">
          <Star className="w-3.5 h-3.5 fill-white text-white" />
          <span>OPINIONES Y EXPERIENCIAS REALES · VALORACIÓN 5.0 ★</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#111827]">
          Experiencias Reales de Familias Adoptantes
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
          Nuestra mayor satisfacción es ver cómo nuestros cachorros llenan de alegría y armonía hogares en toda España. Estas son algunas de las opiniones compartidas por nuestras familias con sus gatitos en brazos.
        </p>
      </div>

      {/* Highlights Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-red-50/50 rounded-2xl border border-red-100 text-center">
        <div>
          <span className="font-serif text-3xl font-bold text-[#b91c1c] block">5.0 ★</span>
          <span className="text-xs text-neutral-600 font-medium">Calificación Media</span>
        </div>
        <div>
          <span className="font-serif text-3xl font-bold text-[#b91c1c] block">100%</span>
          <span className="text-xs text-neutral-600 font-medium">Familias Satisfechas</span>
        </div>
        <div>
          <span className="font-serif text-3xl font-bold text-[#b91c1c] block">2 Años</span>
          <span className="text-xs text-neutral-600 font-medium">Garantía Genética</span>
        </div>
        <div>
          <span className="font-serif text-3xl font-bold text-[#b91c1c] block">600 €</span>
          <span className="text-xs text-neutral-600 font-medium">Tarifa Transparente</span>
        </div>
      </div>

      {/* Testimonials Grid with Photos of People Carrying their Kittens */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="bg-white rounded-2xl border border-red-100 p-6 flex flex-col justify-between shadow-xs hover:shadow-lg transition-all duration-300 relative group"
          >
            <div className="space-y-4">
              {/* Photo & Badge */}
              <div className="relative aspect-[16/11] rounded-xl overflow-hidden bg-neutral-100 border border-red-100">
                <img
                  src={t.image}
                  alt={`${t.adopterName} con ${t.catName}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute bottom-2.5 left-2.5 px-3 py-1 text-[11px] font-bold bg-[#111827]/85 backdrop-blur-xs text-white rounded-md uppercase tracking-wider">
                  {t.catName}
                </span>
                <span className="absolute top-2.5 right-2.5 px-2.5 py-1 text-[10px] font-semibold bg-white/95 text-[#b91c1c] rounded-full shadow-xs flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-[#b91c1c]" />
                  <span>Adoptante Verificado</span>
                </span>
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 text-[#b91c1c]">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#b91c1c]" />
                ))}
              </div>

              {/* Testimonial Quote */}
              <p className="text-xs sm:text-sm text-neutral-700 italic leading-relaxed">
                "{t.text}"
              </p>
            </div>

            {/* Adopter Info Strip */}
            <div className="pt-4 mt-4 border-t border-red-100 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-xs sm:text-sm text-[#111827]">{t.adopterName}</h4>
                <div className="flex items-center gap-1 text-[11px] text-neutral-500">
                  <MapPin className="w-3 h-3 text-[#b91c1c]" />
                  <span>{t.city} (Adopción {t.adoptionYear || '2025'})</span>
                </div>
              </div>
              <span className="text-[11px] font-semibold text-[#b91c1c] bg-red-50 px-2.5 py-1 rounded-full border border-red-200">
                {t.breed}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Trust Community Box */}
      <div className="bg-gradient-to-br from-[#991b1b] via-[#7f1d1d] to-[#450a0a] text-white rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-5 shadow-lg">
        <Heart className="w-10 h-10 text-white mx-auto fill-white/20" />
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
          ¿Desea dar la bienvenida a un cachorro en su hogar?
        </h3>
        <p className="text-xs sm:text-sm text-red-100 leading-relaxed max-w-xl mx-auto font-light">
          Consulte la disponibilidad de camadas y cachorros por correo electrónico. Estaremos encantados de asesorarle y acompañarle en cada etapa de la adopción.
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
          <button
            onClick={() => onOpenEmail('Hola, he revisado los testimonios y me gustaría consultar sobre la adopción de un cachorro.')}
            className="flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#b91c1c] bg-white hover:bg-red-50 rounded-full transition-colors cursor-pointer shadow-md"
          >
            <Mail className="w-4 h-4 text-[#b91c1c]" />
            <span>Consultar por Email (Criaderograciadivina@gmail.com)</span>
          </button>
          <button
            onClick={onOpenAdoptionModal}
            className="px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-transparent hover:bg-white/10 border border-white/40 rounded-full transition-colors cursor-pointer"
          >
            Formulario de Adopción (600 €)
          </button>
        </div>
      </div>
    </div>
  );
};
