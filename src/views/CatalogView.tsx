import React, { useState, useMemo } from 'react';
import { Kitten, SiteSettings, Litter, Testimonial } from '../types';

interface CatalogViewProps {
  kittens: Kitten[];
  litters: Litter[];
  testimonials: Testimonial[];
  settings: SiteSettings;
  selectedBreed?: string;
  onSelectBreed?: (breed: string) => void;
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
  selectedBreed: selectedBreedProp,
  onSelectBreed,
  onSelectKitten,
  onEmailInquiry,
  onOpenAdoptionModal,
  onNavigateToBreeds,
  onNavigateToPolicy,
  onNavigateToContact,
  onNavigateToTestimonials,
}) => {
  const [internalBreed, setInternalBreed] = useState<string>(selectedBreedProp || 'Todas');
  const [selectedSex, setSelectedSex] = useState<string>('Todos');

  // Synchronize internal state with incoming selectedBreed prop
  React.useEffect(() => {
    if (selectedBreedProp !== undefined) {
      setInternalBreed(selectedBreedProp);
    }
  }, [selectedBreedProp]);

  const activeBreed = selectedBreedProp !== undefined ? selectedBreedProp : internalBreed;

  const handleBreedChange = (breed: string) => {
    setInternalBreed(breed);
    if (onSelectBreed) {
      onSelectBreed(breed);
    }
  };

  // Contact Form state
  const [contactName, setContactName] = useState('');
  const [contactSurname, setContactSurname] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactCity, setContactCity] = useState('');
  const [contactBreed, setContactBreed] = useState('');
  const [contactKitten, setContactKitten] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [formSentMessage, setFormSentMessage] = useState<string | null>(null);

  const breedsList = [
    'Todas',
    'Maine Coon',
    'Bengalí',
    'Siberiano',
    'Ragdoll',
    'British Shorthair',
    'Persa',
    'Sphynx',
    'Azul Ruso',
    'Siamés',
  ];

  // 6 Hero Tiles matching authentic cattery kittens
  const heroTiles = [
    { name: 'Maine Coon', image: '/photos/mc-spartacus-18.jpg', breedKey: 'Maine Coon' },
    { name: 'British Shorthair', image: '/photos/bsh-milo-09.jpg', breedKey: 'British Shorthair' },
    { name: 'Ragdoll', image: '/photos/rag-jason-24.jpg', breedKey: 'Ragdoll' },
    { name: 'Sphynx', image: '/photos/sph-desmond-32.png', breedKey: 'Sphynx' },
    { name: 'Maine Coon Smoke', image: '/photos/mc-louie-09.jpg', breedKey: 'Maine Coon' },
    { name: 'British Bicolor', image: '/photos/bsh-maggie-06.png', breedKey: 'British Shorthair' },
  ];

  // Signature Breeds matching available and upcoming litters
  const signatureBreeds = [
    {
      name: 'Maine Coon',
      desc: 'El gigante gentil del mundo felino: grande, sociable y muy leal.',
      avail: '19 disponibles · 600 € →',
      image: '/photos/mc-spartacus-18.jpg',
    },
    {
      name: 'British Shorthair',
      desc: 'Un osito de peluche: pelaje denso, carita redonda y carácter sereno.',
      avail: '20 disponibles · 600 € →',
      image: '/photos/bsh-milo-09.jpg',
    },
    {
      name: 'Ragdoll',
      desc: 'El "gato peluche": dócil, tranquilo y de impresionantes ojos azules.',
      avail: '9 disponibles · 600 € →',
      image: '/photos/rag-jason-24.jpg',
    },
    {
      name: 'Sphynx',
      desc: 'Sin pelo y con un corazón enorme: extrovertido, cálido y muy sociable.',
      avail: '7 disponibles · 600 € →',
      image: '/photos/sph-desmond-32.png',
    },
    {
      name: 'Bengalí',
      desc: 'Un leopardo en miniatura: atlético, inteligente y lleno de energía.',
      avail: 'Próximas camadas · 600 € →',
      image: '/photos/bsh-marmalade-07.jpg',
    },
    {
      name: 'Siberiano',
      desc: 'Robusto, cariñoso y con pelaje de triple capa. Apto para algunos alérgicos.',
      avail: 'Próximas camadas · 600 € →',
      image: '/photos/rag-lola-25.jpg',
    },
    {
      name: 'Persa',
      desc: 'Elegancia clásica: pelaje largo y exuberante y un carácter muy dulce.',
      avail: 'Próximas camadas · 600 € →',
      image: '/photos/rag-cleo-23.jpg',
    },
    {
      name: 'Azul Ruso',
      desc: 'Elegancia plateada y ojos verde esmeralda. Tranquilo, limpio y leal.',
      avail: 'Próximas camadas · 600 € →',
      image: '/photos/bsh-smokey-19.png',
    },
    {
      name: 'Siamés',
      desc: 'Ojos azules intensos, cuerpo elegante y una personalidad muy comunicativa.',
      avail: 'Próximas camadas · 600 € →',
      image: '/photos/rag-alulu-21.jpg',
    },
  ];

  // Helper to normalize strings for robust accent-insensitive comparison
  const normalizeStr = (str: string) =>
    str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();

  // Filtered kittens for the featured section
  const displayedKittens = useMemo(() => {
    return kittens.filter((k) => {
      if (activeBreed !== 'Todas' && normalizeStr(k.breed) !== normalizeStr(activeBreed)) return false;
      if (selectedSex !== 'Todos' && k.gender !== selectedSex) return false;
      return true;
    });
  }, [kittens, activeBreed, selectedSex]);

  const handleBreedTileClick = (breedName: string) => {
    handleBreedChange(breedName);
    const elem = document.getElementById('camadas-disponibles');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const fullName = `${contactName} ${contactSurname}`.trim() || 'Interesado';
    const text =
      `¡Hola Criadero Gracia Divina! Mi nombre es ${fullName}.\n` +
      `Me gustaría solicitar información sobre la adopción de un gatito de raza.\n` +
      `• Raza: ${contactBreed || 'Cualquiera'}\n` +
      `• Gatito de interés: ${contactKitten || 'General'}\n` +
      `• Ciudad: ${contactCity || 'España'}\n` +
      `• Teléfono: ${contactPhone || '-'}\n` +
      `• Email: ${contactEmail || '-'}\n` +
      `• Mensaje: ${contactMessage || 'Quisiera conocer disponibilidad y próximos pasos.'}`;

    const cleanNumber = (settings.whatsappNumber || '34692881430').replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`, '_blank');
    setFormSentMessage('¡Abriendo WhatsApp para enviar tu consulta directamente al criadero!');
  };

  const handleContactEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const fullName = `${contactName} ${contactSurname}`.trim() || 'Familia interesada';
    const subject = `Consulta de Adopción - ${contactBreed || 'Gatito de Raza'} - ${fullName}`;
    const body =
      `Hola Criadero Gracia Divina,\n\n` +
      `Mi nombre es ${fullName}.\n` +
      `Estoy interesado/a en la adopción de un gatito:\n\n` +
      `• Raza: ${contactBreed || 'No especificada'}\n` +
      `• Gatito de interés: ${contactKitten || 'Sin preferencia'}\n` +
      `• Ciudad de residencia: ${contactCity || '-'}\n` +
      `• Teléfono de contacto: ${contactPhone || '-'}\n\n` +
      `Mensaje:\n${contactMessage || 'Agradecería información sobre disponibilidad, reserva y visita concertada.'}\n\n` +
      `Atentamente,\n${fullName}`;

    const emailTo = settings.contactEmail || 'Criaderograciadivina@gmail.com';
    window.open(`mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
    setFormSentMessage('¡Abriendo tu cliente de correo para enviar la solicitud oficial a ' + emailTo + '!');
  };

  return (
    <div id="inicio">
      {/* 
        ========================================================================
        1. HERO SECTION (MATCHING GATITOSELITES.ES EXACTLY)
        ========================================================================
      */}
      <section
        className="hero"
        style={{ '--hero': `url('/photos/IMG_4505.jpeg')` } as React.CSSProperties}
      >
        <div className="container hero-inner">
          <div className="hero-text">
            <span className="eyebrow">GRACIA DIVINA — 55 GATITOS DISPONIBLES</span>
            <h1>
              Gatitos de Raza <em>Premium</em>
            </h1>
            <p>
              Criados con amor en un entorno familiar en España. Con garantía de salud, vacunados y listos para robarte el corazón.
            </p>
            <div className="hero-btns">
              <a
                href="#razas"
                className="btn btn-light"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('razas')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Ver Razas
              </a>
              <a
                href="#contacto"
                className="btn btn-ghost"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contactar
              </a>
            </div>
          </div>

          <div className="hero-tiles">
            {heroTiles.map((tile) => (
              <a
                key={tile.name}
                href="#camadas-disponibles"
                className="tile"
                onClick={(e) => {
                  e.preventDefault();
                  handleBreedTileClick(tile.breedKey);
                }}
              >
                <img src={tile.image} alt={tile.name} loading="lazy" />
                <span>{tile.name}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="hero-bar">
          <div className="container">
            <span>
              <svg viewBox="0 0 24 24">
                <path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 4.5 6.7 4.5c2.1 0 3.6 1.2 4.3 2.4.7-1.2 2.2-2.4 4.3-2.4 3.7 0 5.8 3.9 4.3 7.3C19.5 16.4 12 21 12 21z" />
              </svg>
              <span>Criados en Familia</span>
            </span>
            <span>
              <svg viewBox="0 0 24 24">
                <path d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3zm-1.2 14.2-3.5-3.5 1.4-1.4 2.1 2.1 4.9-4.9 1.4 1.4-6.3 6.3z" />
              </svg>
              <span>Garantía de Salud</span>
            </span>
            <span>
              <svg viewBox="0 0 24 24">
                <path d="M19 8h-3V5a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3H5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3h3a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1z" />
              </svg>
              <span>Revisados por Veterinario</span>
            </span>
            <span>
              <svg viewBox="0 0 24 24">
                <path d="M12 2a9 9 0 0 0-9 9v5a3 3 0 0 0 3 3h2v-7H5v-1a7 7 0 0 1 14 0v1h-3v7h3v1h-6v2h6a2 2 0 0 0 2-2v-8a9 9 0 0 0-9-9z" />
              </svg>
              <span>Soporte de por Vida</span>
            </span>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        2. SOBRE NOSOTROS SECTION
        ========================================================================
      */}
      <section className="section" id="sobre-nosotros">
        <div className="container about">
          <div className="about-imgs">
            <img src="/photos/mc-spartacus-18.jpg" alt="Gatito Maine Coon majestuoso" loading="lazy" />
            <img src="/photos/bsh-astrid-01.jpg" alt="Gatita British Shorthair dulce" loading="lazy" />
          </div>
          <div>
            <span className="badge">Sobre Nosotros</span>
            <h2>Sobre Criadero Gracia Divina</h2>
            <p>
              Bienvenido a <strong>Criadero Gracia Divina</strong>, un criadero familiar especializado en gatitos de raza sanos, felices y bien socializados. Cada uno de nuestros gatitos crece dentro de casa, recibe atención individual desde el primer día y sale hacia su nuevo hogar preparado para convertirse en un miembro más de la familia.
            </p>
            <p>
              Trabajamos con 9 razas: desde el majestuoso Maine Coon y el salvaje Bengalí hasta el dulce Ragdoll y el elegante Azul Ruso. Todos nuestros gatitos tienen un precio único de <strong>600 €</strong> con documentación y kit de bienvenida incluidos.
            </p>
            <ul className="checks two">
              <li>
                <svg viewBox="0 0 24 24">
                  <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
                </svg>
                <span>Gatitos criados en casa</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24">
                  <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
                </svg>
                <span>Revisados y vacunados</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24">
                  <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
                </svg>
                <span>Garantía de salud incluida</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24">
                  <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
                </svg>
                <span>Soporte del criador de por vida</span>
              </li>
            </ul>
            <a
              className="btn btn-green"
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Conócenos
            </a>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        3. CONOCE NUESTROS GATITOS SECTION
        ========================================================================
      */}
      <section className="section section-green" id="camadas-disponibles">
        <div className="container">
          <div className="section-head light">
            <h2>Conoce Nuestros Gatitos 🐱</h2>
            <p>Adorables gatitos de raza buscando su hogar para siempre</p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            {breedsList.map((breed) => {
              const countForBreed = breed === 'Todas' 
                ? kittens.length 
                : kittens.filter((k) => normalizeStr(k.breed) === normalizeStr(breed)).length;

              return (
                <button
                  key={breed}
                  onClick={() => handleBreedChange(breed)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                    activeBreed === breed
                      ? 'bg-[var(--gold)] text-[#450a0a] shadow-md font-bold scale-105'
                      : 'bg-white/15 text-white hover:bg-white/25 border border-white/20'
                  }`}
                >
                  {breed} ({countForBreed})
                </button>
              );
            })}
          </div>

          {/* Active Category Status Banner */}
          {activeBreed !== 'Todas' && (
            <div className="max-w-2xl mx-auto mb-6 p-3 rounded-xl bg-white/15 border border-white/25 text-white flex items-center justify-between text-xs sm:text-sm">
              <div>
                <span>Categoría seleccionada: </span>
                <strong className="text-[var(--gold)] font-bold text-sm sm:text-base">{activeBreed}</strong>
                <span className="text-white/80 ml-2">({displayedKittens.length} gatitos)</span>
              </div>
              <button
                onClick={() => {
                  handleBreedChange('Todas');
                  setSelectedSex('Todos');
                }}
                className="px-3 py-1 bg-white/20 hover:bg-white/30 rounded-lg text-xs font-bold text-white transition-all cursor-pointer underline"
              >
                Ver todos los 55 gatitos ✕
              </button>
            </div>
          )}

          {/* Kitten Mini Cards Grid */}
          <div className="kgrid">
            {displayedKittens.map((kitten) => {
              const mainPhoto = kitten.images && kitten.images.length > 0 ? kitten.images[0] : '/photos/IMG_4505.jpeg';
              const waText = encodeURIComponent(
                `¡Hola! Me interesa ${kitten.name} (${kitten.breed}, ${kitten.price || '600 €'}). ¿Sigue disponible?`
              );
              const waLink = `https://wa.me/${(settings.whatsappNumber || '34692881430').replace(/[^0-9]/g, '')}?text=${waText}`;

              return (
                <article key={kitten.id} className="kmini" data-breed={kitten.breed.toLowerCase()} data-sex={kitten.gender === 'Hembra' ? 'F' : 'M'}>
                  <div className="kmini-img" onClick={() => onSelectKitten(kitten)}>
                    <img src={mainPhoto} alt={`Gatito ${kitten.breed} ${kitten.name}`} loading="lazy" />
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
                        onClick={() => onSelectKitten(kitten)}
                      >
                        Ver detalles
                      </button>
                      <a
                        className="btn btn-wa btn-sm btn-icon"
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`WhatsApp sobre ${kitten.name}`}
                      >
                        <svg viewBox="0 0 24 24">
                          <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8zm8.4-18.2A11.8 11.8 0 0 0 1.8 17.9L.1 24l6.3-1.6A11.8 11.8 0 0 0 23.8 12c0-3.2-1.2-6.1-3.4-8.4z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="center">
            <button
              onClick={() => {
                handleBreedChange('Todas');
                setSelectedSex('Todos');
              }}
              className="btn btn-gold cursor-pointer"
            >
              Ver los 55 gatitos disponibles
            </button>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        4. ELIGE TU RAZA FAVORITA SECTION
        ========================================================================
      */}
      <section className="section" id="razas">
        <div className="container">
          <div className="section-head">
            <span className="badge">Nuestras Razas</span>
            <h2>Elige tu Raza Favorita</h2>
            <p>Cada raza tiene su propia personalidad. Descubre cuál encaja mejor contigo.</p>
          </div>

          <div className="breed-tiles">
            {signatureBreeds.map((breed) => (
              <div
                key={breed.name}
                onClick={() => handleBreedTileClick(breed.name)}
                className="btile"
              >
                <img src={breed.image} alt={breed.name} loading="lazy" />
                <div>
                  <h3>{breed.name}</h3>
                  <p>{breed.desc}</p>
                  <span>{breed.avail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        5. POR QUÉ NOSOTROS SECTION
        ========================================================================
      */}
      <section className="section section-cream">
        <div className="container">
          <div className="section-head">
            <span className="badge">Por Qué Nosotros</span>
            <h2>¿Por Qué Elegir Criadero Gracia Divina?</h2>
            <p>Nos dedicamos a unir familias con gatitos de raza sanos, felices y llenos de amor.</p>
          </div>

          <div className="features">
            <div className="feature">
              <div className="ficon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 4.5 6.7 4.5c2.1 0 3.6 1.2 4.3 2.4.7-1.2 2.2-2.4 4.3-2.4 3.7 0 5.8 3.9 4.3 7.3C19.5 16.4 12 21 12 21z" />
                </svg>
              </div>
              <h3>Gatitos Sanos</h3>
              <p>
                Todos nuestros gatitos son revisados por el veterinario, están vacunados y cuentan con garantía de salud por escrito.
              </p>
            </div>

            <div className="feature">
              <div className="ficon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 13c-2.8 0-6 2.9-6 5.5 0 1.6 1.3 2.5 3 2.5 1.2 0 2-.6 3-.6s1.8.6 3 .6c1.7 0 3-.9 3-2.5 0-2.6-3.2-5.5-6-5.5zM6.2 11.5c1.1-.3 1.6-1.8 1.2-3.3S5.7 5.7 4.6 6s-1.6 1.8-1.2 3.3 1.7 2.5 2.8 2.2zm11.6 0c1.1.3 2.4-.7 2.8-2.2s-.1-3-1.2-3.3-2.4.7-2.8 2.2.1 3 1.2 3.3zM9.5 7.8c1.2 0 2.1-1.4 2.1-3.1S10.7 1.6 9.5 1.6 7.4 3 7.4 4.7s.9 3.1 2.1 3.1zm5 0c1.2 0 2.1-1.4 2.1-3.1s-.9-3.1-2.1-3.1-2.1 1.4-2.1 3.1.9 3.1 2.1 3.1z" />
                </svg>
              </div>
              <h3>Criados en Familia</h3>
              <p>
                Crecen dentro de nuestro hogar, rodeados de personas y de la rutina diaria, por eso llegan seguros, sociables y equilibrados.
              </p>
            </div>

            <div className="feature">
              <div className="ficon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2a9 9 0 0 0-9 9v5a3 3 0 0 0 3 3h2v-7H5v-1a7 7 0 0 1 14 0v1h-3v7h3v1h-6v2h6a2 2 0 0 0 2-2v-8a9 9 0 0 0-9-9z" />
                </svg>
              </div>
              <h3>Soporte de por Vida</h3>
              <p>
                Te acompañamos antes, durante y después de la adopción. Siempre podrás escribirnos con cualquier duda.
              </p>
            </div>

            <div className="feature">
              <div className="ficon">
                <svg viewBox="0 0 24 24">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 7V3.5L18.5 9H13zM8 13h8v2H8v-2zm0 4h8v2H8v-2z" />
                </svg>
              </div>
              <h3>Documentación Completa</h3>
              <p>
                Cada gatito se entrega con cartilla sanitaria, microchip, registro de vacunas y desparasitaciones y contrato de venta.
              </p>
            </div>
          </div>

          <div className="promise">
            <div>
              <h3>Nuestra Promesa</h3>
              <p>
                Cada gatito sale de nuestro hogar con amor, los cuidados adecuados y las bases para una vida maravillosa. Lo tratamos como parte de nuestra familia hasta el día en que pasa a formar parte de la tuya.
              </p>
            </div>
            <div className="stats">
              <div>
                <b>55</b>
                <span>Gatitos Disponibles</span>
              </div>
              <div>
                <b>9</b>
                <span>Razas</span>
              </div>
              <div>
                <b>100%</b>
                <span>Garantía de Salud</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        6. DESCUBRE LA DIFERENCIA SECTION
        ========================================================================
      */}
      <section className="section">
        <div className="container about reverse">
          <div>
            <span className="badge">La Diferencia</span>
            <h2>Descubre la Diferencia Criadero Gracia Divina</h2>
            <p>
              Lo que nos distingue es nuestro compromiso con criar gatitos sanos y equilibrados en un auténtico ambiente familiar. Cada gatito recibe atención individual, juego diario y mucho cariño desde que nace.
            </p>
            <ul className="checks">
              <li>
                <svg viewBox="0 0 24 24">
                  <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
                </svg>
                <span>Criados con amor en nuestro hogar</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24">
                  <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
                </svg>
                <span>Documentación sanitaria completa</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24">
                  <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
                </svg>
                <span>Soporte continuo del criador</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24">
                  <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
                </svg>
                <span>Listos para su familia para siempre</span>
              </li>
            </ul>
            <a
              className="btn btn-gold"
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contáctanos Hoy
            </a>
          </div>
          <div className="about-imgs">
            <img src="/photos/mc-luna-10.jpg" alt="Gatita Maine Coon dulce" loading="lazy" />
            <img src="/photos/rag-jason-24.jpg" alt="Gatito Ragdoll de ojos azules" loading="lazy" />
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        7. TESTIMONIOS SECTION
        ========================================================================
      */}
      <section className="section section-green" id="testimonios">
        <div className="container">
          <div className="section-head light">
            <span className="badge" style={{ background: 'var(--gold)', color: '#450a0a' }}>
              Testimonios
            </span>
            <h2>Lo Que Dicen Nuestras Familias</h2>
            <p>Más de 280 adopciones felices en toda España avalan nuestra dedicación y cuidado.</p>
          </div>

          <div className="tgrid">
            <article className="tcard">
              <div className="tcard-body">
                <div className="tcard-rating-row">
                  <div className="stars" aria-label="5 de 5 estrellas">
                    ★★★★★
                  </div>
                  <span className="badge-verified">
                    <svg viewBox="0 0 24 24">
                      <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
                    </svg>
                    <span>Verificada</span>
                  </span>
                </div>
                <blockquote>
                  «Desde el primer mensaje por WhatsApp el trato fue cercano y transparente. Nos mandaron vídeos semanales y cuando llegó a casa se adaptó en cuestión de horas. Es súper cariñosa y equilibrada, se nota muchísimo que se crían en familia.»
                </blockquote>
                <figcaption>
                  <span className="avatar">LP</span>
                  <div className="who">
                    <strong>Laura P.</strong>
                    <small>Madrid</small>
                  </div>
                </figcaption>
                <div className="tcard-kitten">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 4.5 6.7 4.5c2.1 0 3.6 1.2 4.3 2.4.7-1.2 2.2-2.4 4.3-2.4 3.7 0 5.8 3.9 4.3 7.3C19.5 16.4 12 21 12 21z"
                    />
                  </svg>
                  <span>
                    Gatita adoptada: <strong>Mia · Maine Coon</strong>
                  </span>
                </div>
              </div>
            </article>

            <article className="tcard">
              <div className="tcard-body">
                <div className="tcard-rating-row">
                  <div className="stars" aria-label="5 de 5 estrellas">
                    ★★★★★
                  </div>
                  <span className="badge-verified">
                    <svg viewBox="0 0 24 24">
                      <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
                    </svg>
                    <span>Verificada</span>
                  </span>
                </div>
                <blockquote>
                  «Buscábamos un Ragdoll tranquilo para convivir con nuestros dos hijos pequeños y no podríamos estar más felices. Vino con su cartilla al día, microchip, revisión veterinaria perfecta y un carácter dulce que enamora a todo el que viene a casa.»
                </blockquote>
                <figcaption>
                  <span className="avatar">CM</span>
                  <div className="who">
                    <strong>Carlos y Marta G.</strong>
                    <small>Barcelona</small>
                  </div>
                </figcaption>
                <div className="tcard-kitten">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 4.5 6.7 4.5c2.1 0 3.6 1.2 4.3 2.4.7-1.2 2.2-2.4 4.3-2.4 3.7 0 5.8 3.9 4.3 7.3C19.5 16.4 12 21 12 21z"
                    />
                  </svg>
                  <span>
                    Gatito adoptado: <strong>Nube · Ragdoll</strong>
                  </span>
                </div>
              </div>
            </article>

            <article className="tcard">
              <div className="tcard-body">
                <div className="tcard-rating-row">
                  <div className="stars" aria-label="5 de 5 estrellas">
                    ★★★★★
                  </div>
                  <span className="badge-verified">
                    <svg viewBox="0 0 24 24">
                      <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
                    </svg>
                    <span>Verificada</span>
                  </span>
                </div>
                <blockquote>
                  «Nuestro Británico de Pelo Corto llegó a Valencia mediante transporte especializado en perfecto estado. Nuestro veterinario nos felicitó por lo bien cuidado y socializado que venía. Además, siguen pendientes de cualquier duda que tenemos.»
                </blockquote>
                <figcaption>
                  <span className="avatar">ER</span>
                  <div className="who">
                    <strong>Elena R.</strong>
                    <small>Valencia</small>
                  </div>
                </figcaption>
                <div className="tcard-kitten">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 4.5 6.7 4.5c2.1 0 3.6 1.2 4.3 2.4.7-1.2 2.2-2.4 4.3-2.4 3.7 0 5.8 3.9 4.3 7.3C19.5 16.4 12 21 12 21z"
                    />
                  </svg>
                  <span>
                    Gatito adoptado: <strong>Oliver · Británico de Pelo Corto</strong>
                  </span>
                </div>
              </div>
            </article>
          </div>

          <div className="center" style={{ marginTop: '38px' }}>
            <button
              onClick={() => onNavigateToTestimonials && onNavigateToTestimonials()}
              className="btn btn-gold"
            >
              Ver Todas las Opiniones (+280) →
            </button>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        8. CONTACT SECTION
        ========================================================================
      */}
      <section className="section section-cream" id="contacto">
        <div className="container">
          <div className="section-head">
            <span className="badge">Contacto</span>
            <h2>¿Listo para Adoptar un Gatito?</h2>
            <p>
              ¿Tienes preguntas sobre nuestros gatitos o quieres llevarte uno a casa? ¡Nos encantará saber de ti!
            </p>
          </div>

          <div className="contact-grid">
            <form className="form" onSubmit={handleContactWhatsApp}>
              <h3>Formulario de Consulta</h3>

              {formSentMessage && (
                <div className="mb-4 p-3 bg-red-100 border border-red-300 text-red-900 rounded-lg text-xs font-semibold">
                  {formSentMessage}
                </div>
              )}

              <div className="row2">
                <label>
                  Nombre *
                  <input
                    name="nombre"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Tu nombre"
                  />
                </label>
                <label>
                  Apellidos *
                  <input
                    name="apellidos"
                    required
                    value={contactSurname}
                    onChange={(e) => setContactSurname(e.target.value)}
                    placeholder="Tus apellidos"
                  />
                </label>
              </div>

              <div className="row2">
                <label>
                  Correo Electrónico *
                  <input
                    name="email"
                    type="email"
                    required
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="ejemplo@correo.com"
                  />
                </label>
                <label>
                  Teléfono *
                  <input
                    name="telefono"
                    type="tel"
                    required
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    placeholder="+34 600 00 00 00"
                  />
                </label>
              </div>

              <div className="row2">
                <label>
                  Ciudad
                  <input
                    name="ciudad"
                    value={contactCity}
                    onChange={(e) => setContactCity(e.target.value)}
                    placeholder="Ej. Madrid, Barcelona..."
                  />
                </label>
                <label>
                  Raza de Interés
                  <select
                    name="raza"
                    value={contactBreed}
                    onChange={(e) => setContactBreed(e.target.value)}
                  >
                    <option value="">Seleccionar raza...</option>
                    <option value="Maine Coon">Maine Coon</option>
                    <option value="Bengalí">Bengalí</option>
                    <option value="Siberiano">Siberiano</option>
                    <option value="Ragdoll">Ragdoll</option>
                    <option value="British Shorthair">British Shorthair</option>
                    <option value="Persa">Persa</option>
                    <option value="Sphynx">Sphynx</option>
                    <option value="Azul Ruso">Azul Ruso</option>
                    <option value="Siamés">Siamés</option>
                    <option value="No estoy seguro">No estoy seguro</option>
                  </select>
                </label>
              </div>

              <label>
                Gatito de interés
                <input
                  name="gatito"
                  placeholder="Ej.: Norman (Ragdoll)"
                  value={contactKitten}
                  onChange={(e) => setContactKitten(e.target.value)}
                />
              </label>

              <label>
                Mensaje
                <textarea
                  name="mensaje"
                  rows={4}
                  placeholder="Cuéntanos qué buscas, dudas sobre cuidados o fechas estimadas..."
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                />
              </label>

              <div className="form-btns">
                <button
                  type="submit"
                  className="btn btn-wa"
                  onClick={handleContactWhatsApp}
                >
                  <svg viewBox="0 0 24 24">
                    <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8zm8.4-18.2A11.8 11.8 0 0 0 1.8 17.9L.1 24l6.3-1.6A11.8 11.8 0 0 0 23.8 12c0-3.2-1.2-6.1-3.4-8.4z" />
                  </svg>
                  <span>Enviar por WhatsApp</span>
                </button>

                <button
                  type="button"
                  className="btn btn-green"
                  onClick={handleContactEmail}
                >
                  <svg viewBox="0 0 24 24">
                    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  <span>Enviar por Email</span>
                </button>
              </div>
            </form>

            <aside className="contact-info">
              <h3>Información de Contacto</h3>

              <div className="ci">
                <svg viewBox="0 0 24 24">
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <div>
                  <strong>Correo Electrónico</strong>
                  <a href={`mailto:${settings.contactEmail || 'Criaderograciadivina@gmail.com'}`}>
                    {settings.contactEmail || 'Criaderograciadivina@gmail.com'}
                  </a>
                </div>
              </div>

              <div className="ci">
                <svg viewBox="0 0 24 24">
                  <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8zm8.4-18.2A11.8 11.8 0 0 0 1.8 17.9L.1 24l6.3-1.6A11.8 11.8 0 0 0 23.8 12c0-3.2-1.2-6.1-3.4-8.4z" />
                </svg>
                <div>
                  <strong>WhatsApp</strong>
                  <a
                    href={`https://wa.me/${(settings.whatsappNumber || '34692881430').replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +34 692 88 14 30
                  </a>
                </div>
              </div>

              <div className="ci">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 11h-5v-2h3V6h2v7z" />
                </svg>
                <div>
                  <strong>Tiempo de Respuesta</strong>
                  <span>Respondemos normalmente en menos de 24 horas</span>
                </div>
              </div>

              <div className="ci">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
                </svg>
                <div>
                  <strong>Ubicación</strong>
                  <span>España</span>
                </div>
              </div>

              <div className="note">
                <strong>Nuestra Ubicación</strong>
                <p>
                  Somos un criadero familiar. Por la seguridad y privacidad de nuestra familia y de nuestros gatitos, no publicamos nuestra dirección. Cuando nos contactes, te la facilitaremos encantados y organizaremos una visita o una entrega cómoda para ti.
                </p>
              </div>

              <div className="note">
                <strong>Razas Disponibles</strong>
                <div className="pills">
                  {breedsList.slice(1).map((breed) => (
                    <span
                      key={breed}
                      onClick={() => handleBreedTileClick(breed)}
                    >
                      {breed}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};
