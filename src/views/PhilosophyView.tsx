import React from 'react';
import { Heart, Sparkles, Home, Award } from 'lucide-react';

interface PhilosophyViewProps {
  onOpenAdoptionModal: () => void;
  onExploreKittens: () => void;
}

export const PhilosophyView: React.FC<PhilosophyViewProps> = ({
  onOpenAdoptionModal,
  onExploreKittens,
}) => {
  const principles = [
    {
      title: 'Hogar 100% Libre de Jaulas',
      icon: Home,
      desc: 'Nuestros gatos y gatitos no conocen el confinamiento. Viven, duermen, juegan y exploran con libertad en nuestro hogar en la Sierra de Madrid, compartiendo sofás, camas y espacios de juego enriquecidos.',
    },
    {
      title: 'Socialización Afectiva Temprana',
      icon: Heart,
      desc: 'Desde sus primeros días de vida reciben caricias, mimos y están expuestos a ruidos cotidianos (aspiradora, televisión, voces de niños). Esto asegura que lleguen a su nuevo hogar con una confianza plena y sin miedos.',
    },
    {
      title: 'Nutrición Holística Super Premium',
      icon: Sparkles,
      desc: 'Alimentamos a nuestras madres y cachorros con dietas libres de cereales de alto contenido cárnico, suplementación con ácidos grasos Omega-3 y taurina pura, logrando mantos de seda y un sistema inmunitario de hierro.',
    },
    {
      title: 'Acompañamiento Ético de por Vida',
      icon: Award,
      desc: 'Nuestra relación no concluye el día de la entrega. Ofrecemos a cada familia adoptante un canal directo de WhatsApp para consultas veterinarias de comportamiento, nutrición y evolución durante toda la vida del felino.',
    },
  ];

  const galleryImages = [
    { src: '/photos/IMG_4511.jpeg', caption: 'Hamacas ergonómicas y torres de escalada en nuestro salón' },
    { src: '/photos/IMG_4504.jpeg', caption: 'Reconocimiento en exposiciones felinas de morfología' },
    { src: '/photos/IMG_4615.jpeg', caption: 'Momentos de relax y mimos en familia los domingos' },
    { src: '/photos/IMG_4465.jpeg', caption: 'Crecimiento saludable en un entorno higiénico y luminoso' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16 pb-16 bg-white">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-[#b91c1c]">
          Manifiesto de Bienestar Animal
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#111827]">
          Criar con el Corazón: La Filosofía Libre de Jaulas
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
          Creemos con firmeza que la nobleza morfológica y la salud genética carecen de valor si el animal no se cría con amor, dignidad y en estrecha convivencia con el ser humano.
        </p>
      </div>

      {/* Hero Quote Card in Red & White */}
      <div className="bg-[#b91c1c] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-lg border border-red-800">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <Heart className="w-8 h-8 text-white mx-auto fill-white/20" />
          <blockquote className="font-serif text-xl sm:text-2xl italic leading-relaxed text-balance">
            "Un gatito que nace acariciado en la palma de una mano humana nunca temerá a su nueva familia. La crianza ética no es un negocio; es un compromiso de devoción hacia seres vivos sintientes."
          </blockquote>
          <p className="text-xs uppercase tracking-widest font-semibold text-red-200">
            Equipo Fundador · Criadero Gracia Divina
          </p>
        </div>
      </div>

      {/* The 4 Core Principles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {principles.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-2xl border border-red-100 p-6 sm:p-8 flex items-start gap-5 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-[#b91c1c] shrink-0 border border-red-100">
                <Icon className="w-6 h-6 text-[#b91c1c]" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-xl font-bold text-[#111827]">{item.title}</h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Environmental Gallery */}
      <div className="space-y-6">
        <div className="text-center max-w-xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-[#b91c1c]">
            Galería del Criadero
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#111827] mt-1">
            Espacios Diseñados para la Felicidad Felina
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((item, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl border border-red-100 overflow-hidden shadow-xs hover:shadow-md transition-all"
            >
              <div className="aspect-[4/5] overflow-hidden bg-red-50">
                <img
                  src={item.src}
                  alt={item.caption}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-3 bg-white">
                <p className="text-xs text-neutral-600 leading-snug">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-red-50/50 rounded-3xl border border-red-100 p-8 sm:p-10 text-center space-y-4">
        <h3 className="font-serif text-2xl font-bold text-[#111827]">
          ¿Desea dar la bienvenida a un nuevo miembro en su hogar?
        </h3>
        <p className="text-xs sm:text-sm text-neutral-600 max-w-lg mx-auto">
          Conozca nuestras camadas actuales o concierte una visita para experimentar personalmente la serenidad y cariño de nuestros gatos.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={onExploreKittens}
            className="px-6 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#b91c1c] hover:bg-[#991b1b] rounded-lg shadow-sm cursor-pointer"
          >
            Explorar Camadas Disponibles
          </button>
          <button
            onClick={onOpenAdoptionModal}
            className="px-6 py-2.5 text-xs sm:text-sm font-semibold text-[#b91c1c] bg-white hover:bg-red-50 border border-red-200 rounded-lg cursor-pointer"
          >
            Completar Cuestionario de Adopción
          </button>
        </div>
      </div>
    </div>
  );
};
