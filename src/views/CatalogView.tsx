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

  // The 4 active breeds that actually have kittens
  const breedsList = [
    'Todas',
    'Maine Coon',
    'British Shorthair',
    'Ragdoll',
    'Sphynx',
  ];

  // The 4 Signature Breeds with authentic photos and counts
  const signatureBreeds = [
    {
      name: 'Maine Coon',
      tagline: 'El gigante dócil del reino felino',
      desc: 'Imponente, noble y de carácter paciente y sociable. Con penachos de lince y manto majestuoso.',
      avail: '19 gatitos disponibles · 700 € →',
      image: '/photos/mc-spartacus-18.jpg',
      count: 19,
    },
    {
      name: 'British Shorthair',
      tagline: 'El osito de terciopelo sereno',
      desc: 'Carita redonda, mofletes tiernos y pelaje crisp sumamente denso. Temperamento dulce y tranquilo.',
      avail: '20 gatitos disponibles · 650 € →',
      image: '/photos/bsh-milo-09.jpg',
      count: 20,
    },
    {
      name: 'Ragdoll',
      tagline: 'Ojos azules zafiro y entrega total',
      desc: 'El gato peluche por excelencia: se relaja por completo en brazos y busca cariño constante.',
      avail: '9 gatitos disponibles · 600 € →',
      image: '/photos/rag-jason-24.jpg',
      count: 9,
    },
    {
      name: 'Sphynx',
      tagline: 'Piel de terciopelo y amor infinito',
      desc: 'Sin pelo, de tacto cálido como melocotón. Extraordinariamente cariñoso, vivaz y apegado a la familia.',
      avail: '7 gatitos disponibles · 600 € →',
      image: '/photos/sph-desmond-32.png',
      count: 7,
    },
  ];

  // Helper to normalize strings for robust accent-insensitive comparison
  const normalizeStr = (str: string) =>
    str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();

  // Filtered kittens for the catalog section
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
    const text = contactKitten
      ? `¡Hola! Me interesa la adopción del gatito ${contactKitten}.`
      : '¡Hola! Me gustaría información para la adopción de un gatito.';

    const cleanNumber = (settings.whatsappNumber || '34632968208').replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`, '_blank');
    setFormSentMessage('¡Abriendo WhatsApp para enviar tu consulta directamente al criador!');
  };

  const handleContactEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const fullName = `${contactName} ${contactSurname}`.trim() || 'Familia interesada';
    const subject = `Consulta de Adopción - criaderograciadivina - ${contactBreed || 'Gatito de Raza'} - ${fullName}`;
    const body =
      `Hola criaderograciadivina,\n\n` +
      `Mi nombre es ${fullName}.\n` +
      `Estoy interesado/a en la adopción de un gatito:\n\n` +
      `• Raza: ${contactBreed || 'No especificada'}\n` +
      `• Gatito de interés: ${contactKitten || 'Sin preferencia'}\n` +
      `• Ciudad de residencia: ${contactCity || '-'}\n` +
      `• Teléfono de contacto: ${contactPhone || '-'}\n\n` +
      `Mensaje:\n${contactMessage || 'Agradecería información sobre disponibilidad, reserva y entrega.'}\n\n` +
      `Atentamente,\n${fullName}`;

    const emailTo = settings.contactEmail || 'Criaderograciadivina@gmail.com';
    window.open(`mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
    setFormSentMessage('¡Abriendo tu cliente de correo para enviar la solicitud oficial a ' + emailTo + '!');
  };

  return (
    <div id="inicio">
      {/* 
        ========================================================================
        1. MODERN LUXURY HERO SECTION (MOBILE-FIRST OPTIMIZED)
        ========================================================================
      */}
      <section
        className="lux-hero"
        style={{ '--hero': `url('/photos/mc-spartacus-18.jpg')` } as React.CSSProperties}
      >
        <div className="container">
          <div className="lux-hero-content">
            <div className="lux-badge">
              <svg viewBox="0 0 24 24" style={{ width: '16px', height: '16px', fill: 'currentColor' }}>
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span>CRIADERO ÉTICO DE ÉLITE EN ESPAÑA · WCF & FIFe</span>
            </div>

            <h1>
              Nobleza, Pureza y Crianza Familiar
              <em>55 Gatitos de Pura Raza Listos para Enamorarte</em>
            </h1>

            <p>
              Criadero familiar especializado en 4 selectas razas: <strong>Maine Coon</strong> (700 €),{' '}
              <strong>British Shorthair</strong> (650 €), <strong>Ragdoll</strong> (600 €) y <strong>Sphynx</strong> (600 €).
              Criados dentro del hogar, con 2 años de garantía sanitaria por escrito y entrega personalizada en toda España.
            </p>

            <div className="lux-hero-actions">
              <a
                href="#camadas-disponibles"
                className="btn btn-gold"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('camadas-disponibles')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Ver los 55 Gatitos Disponibles (Desde 600 €) ↓
              </a>
              <a
                href={`https://wa.me/${(settings.whatsappNumber || '34632968208').replace(/[^0-9]/g, '')}?text=${encodeURIComponent('¡Hola! Me gustaría información para la adopción de un gatito.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-wa"
              >
                <svg viewBox="0 0 24 24" style={{ width: '20px', height: '20px' }}>
                  <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8zm8.4-18.2A11.8 11.8 0 0 0 1.8 17.9L.1 24l6.3-1.6A11.8 11.8 0 0 0 23.8 12c0-3.2-1.2-6.1-3.4-8.4z" />
                </svg>
                <span>WhatsApp Directo ({settings.whatsappNumber || '+34 632 96 82 08'})</span>
              </a>
            </div>

            {/* Quick Touch-Optimized Breed Selector Rail */}
            <div className="breed-carousel-wrap">
              <div className="breed-carousel-title">
                <span>Nuestras 4 Razas Exclusivas · Toca para filtrar</span>
              </div>
              <div className="breed-carousel">
                {signatureBreeds.map((breed) => (
                  <div
                    key={breed.name}
                    className="breed-card"
                    onClick={() => handleBreedTileClick(breed.name)}
                  >
                    <img src={breed.image} alt={breed.name} loading="lazy" />
                    <div className="breed-card-info">
                      <h4>{breed.name}</h4>
                      <span>{breed.avail}</span>
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
        2. TRUST & HEALTH GUARANTEE STRIP (CLEAN 2x2 ON MOBILE, 4-COL DESKTOP)
        ========================================================================
      */}
      <section className="trust-strip">
        <div className="container">
          <div className="trust-grid">
            <div className="trust-item">
              <div className="trust-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3zm-1.2 14.2-3.5-3.5 1.4-1.4 2.1 2.1 4.9-4.9 1.4 1.4-6.3 6.3z" />
                </svg>
              </div>
              <div className="trust-text">
                <h4>Garantía 2 Años</h4>
                <p>Cobertura vírica y genética total por escrito en contrato oficial.</p>
              </div>
            </div>

            <div className="trust-item">
              <div className="trust-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 4.5 6.7 4.5c2.1 0 3.6 1.2 4.3 2.4.7-1.2 2.2-2.4 4.3-2.4 3.7 0 5.8 3.9 4.3 7.3C19.5 16.4 12 21 12 21z" />
                </svg>
              </div>
              <div className="trust-text">
                <h4>100% en Familia</h4>
                <p>Criados libres dentro de casa, sociables y habituados a niños.</p>
              </div>
            </div>

            <div className="trust-item">
              <div className="trust-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                </svg>
              </div>
              <div className="trust-text">
                <h4>Pedigrí Oficial</h4>
                <p>Líneas de campeones libres de HCM, PKD y FIV/FeLV por ADN.</p>
              </div>
            </div>

            <div className="trust-item">
              <div className="trust-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9 1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                </svg>
              </div>
              <div className="trust-text">
                <h4>Entrega en España</h4>
                <p>Transporte especializado climatizado directo a tu domicilio.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        3. KITTENS CATALOG SECTION (TOUCH-OPTIMIZED GRID)
        ========================================================================
      */}
      <section className="section section-green" id="camadas-disponibles">
        <div className="container">
          <div className="section-head light">
            <span className="badge" style={{ background: 'var(--gold)', color: '#450a0a', fontWeight: 'bold' }}>
              Camadas 2026 Abiertas
            </span>
            <h2>Nuestros 55 Gatitos Disponibles 🐾</h2>
            <p>
              Tarifas transparentes: <strong>Sphynx y Ragdoll (600 €)</strong> · <strong>British Shorthair (650 €)</strong> · <strong>Maine Coon (700 €)</strong> con microchip, vacunas y garantías incluidas
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="filter-bar-wrap">
            <div className="filter-pills-row">
              {breedsList.map((breed) => {
                const countForBreed = breed === 'Todas' 
                  ? kittens.length 
                  : kittens.filter((k) => normalizeStr(k.breed) === normalizeStr(breed)).length;

                const isActive = activeBreed === breed;

                return (
                  <button
                    key={breed}
                    onClick={() => handleBreedChange(breed)}
                    className={`filter-pill ${isActive ? 'active' : 'inactive'}`}
                  >
                    {breed} ({countForBreed})
                  </button>
                );
              })}
            </div>

            {/* Sex Filter Row */}
            <div className="filter-pills-row" style={{ marginTop: '4px' }}>
              {['Todos', 'Macho', 'Hembra'].map((sex) => (
                <button
                  key={sex}
                  onClick={() => setSelectedSex(sex)}
                  className={`filter-pill ${selectedSex === sex ? 'active' : 'inactive'}`}
                  style={{ padding: '6px 14px', fontSize: '0.8rem' }}
                >
                  {sex === 'Todos' ? 'Todos los sexos' : sex === 'Macho' ? '♂ Machos' : '♀ Hembras'}
                </button>
              ))}
            </div>

            {/* Active Category Status Banner */}
            {(activeBreed !== 'Todas' || selectedSex !== 'Todos') && (
              <div className="filter-active-indicator">
                <span>
                  Filtro activo: <strong>{activeBreed}</strong> {selectedSex !== 'Todos' ? `· ${selectedSex}s` : ''} ({displayedKittens.length} gatitos)
                </span>
                <button
                  onClick={() => {
                    handleBreedChange('Todas');
                    setSelectedSex('Todos');
                  }}
                  style={{
                    background: 'rgba(255, 255, 255, 0.25)',
                    border: 'none',
                    color: '#fff',
                    borderRadius: '99px',
                    padding: '2px 10px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    marginLeft: '8px'
                  }}
                >
                  Ver todos los 55 ✕
                </button>
              </div>
            )}
          </div>

          {/* Kitten Mini Cards Grid */}
          <div className="kgrid">
            {displayedKittens.map((kitten) => {
              const mainPhoto = kitten.images && kitten.images.length > 0 ? kitten.images[0] : '/photos/mc-spartacus-18.jpg';
              const waText = encodeURIComponent(
                `¡Hola! Me interesa la adopción del gatito ${kitten.name}.`
              );
              const waLink = `https://wa.me/${(settings.whatsappNumber || '34632968208').replace(/[^0-9]/g, '')}?text=${waText}`;

              return (
                <article key={kitten.id} className="kmini" data-breed={kitten.breed.toLowerCase()} data-sex={kitten.gender === 'Hembra' ? 'F' : 'M'}>
                  <div className="kmini-img" onClick={() => onSelectKitten(kitten)}>
                    <img src={mainPhoto} alt={`Gatito ${kitten.breed} ${kitten.name}`} loading="lazy" />
                    <span className="tag">{kitten.breed}</span>
                    <span className="tag tag-gold">{kitten.status}</span>
                  </div>
                  <div className="kmini-body">
                    <div className="kmini-top">
                      <h3>{kitten.name}</h3>
                      <span className="price">{kitten.price}</span>
                    </div>
                    <div className="kmini-meta">
                      <span className={`sex sex-${kitten.gender === 'Hembra' ? 'F' : 'M'}`}>
                        {kitten.gender === 'Hembra' ? '♀ Hembra' : '♂ Macho'}
                      </span>
                      <span className="avail">● Todo Incluido</span>
                    </div>
                    <div className="kmini-btns">
                      <button
                        type="button"
                        className="btn btn-green btn-sm"
                        onClick={() => onSelectKitten(kitten)}
                      >
                        Ver Ficha
                      </button>
                      <a
                        className="btn btn-wa btn-sm btn-icon"
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`WhatsApp sobre ${kitten.name}`}
                        title="Preguntar por WhatsApp"
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
        4. THE 4 SIGNATURE BREEDS SHOWCASE (ONLY ACTIVE BREEDS)
        ========================================================================
      */}
      <section className="section" id="razas">
        <div className="container">
          <div className="section-head">
            <span className="badge">Nuestras 4 Razas</span>
            <h2>Especialistas en 4 Razas de Alta Cuna</h2>
            <p>Criamos exclusivamente 4 razas para garantizar la máxima tipicidad morfológica y carácter sociable.</p>
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
        5. SINGLE UNIFIED CATTERY PHILOSOPHY SECTION (CLEAN & AUTHENTIC)
        ========================================================================
      */}
      <section className="section section-cream" id="sobre-nosotros">
        <div className="container about">
          <div className="about-imgs">
            <img src="/photos/mc-spartacus-18.jpg" alt="Gatito Maine Coon en el hogar" loading="lazy" />
            <img src="/photos/bsh-astrid-01.jpg" alt="Gatita British Shorthair en brazos" loading="lazy" />
          </div>
          <div>
            <span className="badge">Nuestra Filosofía</span>
            <h2>Crianza Familiar con Alma y Transparencia</h2>
            <p>
              En <strong>criaderograciadivina</strong> entendemos la crianza como una vocación de vida. Cada cachorro nace y crece en el corazón de nuestro hogar, rodeado del cariño de nuestra familia, ruidos cotidianos y atención veterinaria individualizada.
            </p>
            <p>
              Nos enfocamos exclusivamente en <strong>Maine Coon, British Shorthair, Ragdoll y Sphynx</strong>, garantizando que cada ejemplar represente la cúspide de belleza, salud y temperamento dócil de su estándar oficial.
            </p>

            <ul className="checks two">
              <li>
                <svg viewBox="0 0 24 24">
                  <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
                </svg>
                <span>Sin jaulas: 100% en familia</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24">
                  <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
                </svg>
                <span>Test genéticos HCM, PKD y FIV/FeLV</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24">
                  <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
                </svg>
                <span>Garantía de salud de 2 años</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24">
                  <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
                </svg>
                <span>Asesoramiento continuo de por vida</span>
              </li>
            </ul>

            <div className="promise" style={{ marginTop: '24px', background: '#fff' }}>
              <div className="stats" style={{ gridTemplateColumns: 'repeat(3, 1fr)', width: '100%' }}>
                <div>
                  <b>55</b>
                  <span>Gatitos en Casa</span>
                </div>
                <div>
                  <b>4</b>
                  <span>Razas Selectas</span>
                </div>
                <div>
                  <b>100%</b>
                  <span>Garantía de Salud</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        6. ADOPTION IN 3 SIMPLE STEPS (HIGH-CONVERSION MOBILE GUIDE)
        ========================================================================
      */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="badge">Proceso Simple</span>
            <h2>Cómo Adoptar a tu Gatito</h2>
            <p>Un proceso transparente, cercano y seguro en solo 3 sencillos pasos.</p>
          </div>

          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Elige tu Compañero</h3>
              <p>Explora nuestras 55 fichas con fotos reales, sexo, pedigrí y temperamento. Elige el que conecte contigo.</p>
            </div>

            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Contacto y Videollamada</h3>
              <p>Escríbenos por WhatsApp o email. Te enviaremos vídeos en directo o concertaremos una videollamada personalizada.</p>
            </div>

            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Bienvenida a Casa</h3>
              <p>Formalizamos el contrato y garantía de 2 años. Te lo entregamos directamente con transporte climatizado en tu ciudad.</p>
            </div>
          </div>

          <div className="center">
            <a
              href="#contacto"
              className="btn btn-green"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Comenzar Consulta de Adopción →
            </a>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        7. VERIFIED TESTIMONIALS SECTION (AUTHENTIC KITTEN PHOTOS - NO AI PEOPLE)
        ========================================================================
      */}
      <section className="section section-green" id="testimonios">
        <div className="container">
          <div className="section-head light">
            <span className="badge" style={{ background: 'var(--gold)', color: '#450a0a' }}>
              Testimonios Reales
            </span>
            <h2>Opiniones de Nuestras Familias</h2>
            <p>Más de 280 adopciones felices avalan nuestra dedicación y cuidado en criaderograciadivina.</p>
          </div>

          <div className="tgrid">
            {testimonials.slice(0, 6).map((t) => (
              <article key={t.id} className="tcard">
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
                    «{t.text}»
                  </blockquote>
                  <figcaption>
                    <span className="avatar">{t.avatar || 'FA'}</span>
                    <div className="who">
                      <strong>{t.adopterName || t.author}</strong>
                      <small>{t.city || t.location}</small>
                    </div>
                  </figcaption>
                  <div className="tcard-kitten">
                    <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: '16px', height: '16px', color: 'var(--gold)', fill: 'currentColor' }}>
                      <path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 4.5 6.7 4.5c2.1 0 3.6 1.2 4.3 2.4.7-1.2 2.2-2.4 4.3-2.4 3.7 0 5.8 3.9 4.3 7.3C19.5 16.4 12 21 12 21z" />
                    </svg>
                    <span>
                      Gatito adoptado: <strong>{t.catName || t.kittenName} · {t.breed}</strong>
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="center" style={{ marginTop: '38px' }}>
            <button
              onClick={() => onNavigateToTestimonials && onNavigateToTestimonials()}
              className="btn btn-gold"
            >
              Ver Todas las Opiniones ({testimonials.length > 0 ? testimonials.length : '12'}) →
            </button>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        8. VIP RESERVATION & CONTACT SECTION (MOBILE-FIRST FORM - NO ADDRESS)
        ========================================================================
      */}
      <section className="section section-cream" id="contacto">
        <div className="container">
          <div className="section-head">
            <span className="badge">Contacto Directo</span>
            <h2>Reserva o Consulta de Gatitos</h2>
            <p>
              ¿Tienes preguntas sobre un cachorro o deseas iniciar la reserva? Escríbenos y te responderemos en breve.
            </p>
          </div>

          <div className="contact-grid">
            <form className="form" onSubmit={handleContactWhatsApp}>
              <h3>Formulario de Adopción</h3>

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
                  Ciudad de Residencia
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
                    <option value="Maine Coon">Maine Coon (19 disponibles · 700 €)</option>
                    <option value="British Shorthair">British Shorthair (20 disponibles · 650 €)</option>
                    <option value="Ragdoll">Ragdoll (9 disponibles · 600 €)</option>
                    <option value="Sphynx">Sphynx (7 disponibles · 600 €)</option>
                    <option value="No estoy seguro">No estoy seguro / Cualquier raza</option>
                  </select>
                </label>
              </div>

              <label>
                Gatito en específico (opcional)
                <input
                  name="gatito"
                  placeholder="Ej.: Spartacus (Maine Coon) o Milo (British Shorthair)"
                  value={contactKitten}
                  onChange={(e) => setContactKitten(e.target.value)}
                />
              </label>

              <label>
                Mensaje o Dudas
                <textarea
                  name="mensaje"
                  rows={4}
                  placeholder="Cuéntanos sobre tu hogar, dudas sobre fechas de entrega o cuidados..."
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
              <h3>criaderograciadivina</h3>

              <div className="ci">
                <svg viewBox="0 0 24 24">
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <div>
                  <strong>Email Directo</strong>
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
                  <strong>WhatsApp Oficial</strong>
                  <a
                    href={`https://wa.me/${(settings.whatsappNumber || '34632968208').replace(/[^0-9]/g, '')}?text=${encodeURIComponent('¡Hola! Me gustaría información para la adopción de un gatito.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {settings.whatsappNumber || '+34 632 96 82 08'}
                  </a>
                </div>
              </div>

              <div className="ci">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 11h-5v-2h3V6h2v7z" />
                </svg>
                <div>
                  <strong>Atención Personalizada</strong>
                  <span>De Lunes a Domingo: 09:00 - 21:00</span>
                </div>
              </div>

              <div className="ci">
                <svg viewBox="0 0 24 24">
                  <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9 1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                </svg>
                <div>
                  <strong>Entregas y Envíos</strong>
                  <span>Envíos seguros a domicilio en toda España o videollamadas en directo</span>
                </div>
              </div>

              <div className="note">
                <strong>Garantía de Bienestar y Privacidad</strong>
                <p>
                  Para preservar la tranquilidad y el bienestar sanitario de nuestras camadas y madres reproductoras, priorizamos la atención personalizada por WhatsApp, videollamadas en directo y entrega segura a domicilio con seguimiento permanente.
                </p>
              </div>

              <div className="note">
                <strong>Razas Disponibles (55 Gatitos)</strong>
                <div className="pills">
                  {signatureBreeds.map((breed) => (
                    <span
                      key={breed.name}
                      onClick={() => handleBreedTileClick(breed.name)}
                    >
                      {breed.name} ({breed.count})
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
