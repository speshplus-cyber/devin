import React from 'react';
import { BreedType } from '../types';
import { BREED_TO_SLUG } from '../services/router';

interface FooterProps {
  onNavigate: (view: string) => void;
  onSelectBreed?: (breed: BreedType) => void;
  onOpenAdoptionModal: () => void;
  onOpenEmail: (message?: string) => void;
  onOpenAdmin?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onSelectBreed,
  onOpenAdoptionModal,
  onOpenAdmin,
}) => {
  const handleScrollTo = (viewIdOrPath: string, anchorId?: string) => {
    onNavigate(viewIdOrPath);
    if (anchorId) {
      setTimeout(() => {
        const elem = document.getElementById(anchorId);
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
        else window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBreedClick = (breedName: BreedType) => {
    if (onSelectBreed) {
      onSelectBreed(breedName);
    } else {
      const slug = BREED_TO_SLUG[breedName] || 'maine-coon';
      handleScrollTo(`/${slug}`);
    }
  };

  return (
    <footer className="footer">
      <div className="container footer-grid">
        {/* Col 1: Marca & Bio */}
        <div className="footer-brand">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo('/');
            }}
            className="logo"
          >
            <svg className="logo-mark" viewBox="0 0 48 48" aria-hidden="true">
              <circle cx="24" cy="24" r="23" fill="var(--crimson-2)" stroke="var(--gold)" strokeWidth="2" />
              <path
                d="M14 18l2-8 6 5h4l6-5 2 8c1.5 2.5 2 4.5 2 7 0 7-6 11-10 11s-10-4-10-11c0-2.5.5-4.5 2-7z"
                fill="var(--gold)"
              />
              <circle cx="20" cy="24" r="1.6" fill="var(--crimson-2)" />
              <circle cx="28" cy="24" r="1.6" fill="var(--crimson-2)" />
              <path d="M22.5 28h3l-1.5 1.6z" fill="var(--crimson-2)" />
              <path
                d="M17 8l3.5 3.5L24 7l3.5 4.5L31 8"
                fill="none"
                stroke="var(--gold)"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
            </svg>
            <span>
              criadero<b>graciadivina</b>
            </span>
          </a>
          <p>
            Criadero ético familiar de gatitos de raza en España. Cachorros sanos, criados con amor y socializados en libertad, listos para formar parte de tu familia.
          </p>
          <a
            className="btn btn-wa btn-sm"
            href={`https://wa.me/34632968208?text=${encodeURIComponent('¡Hola! Me gustaría información para la adopción de un gatito.')}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24">
              <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8zm8.4-18.2A11.8 11.8 0 0 0 1.8 17.9L.1 24l6.3-1.6A11.8 11.8 0 0 0 23.8 12c0-3.2-1.2-6.1-3.4-8.4z" />
            </svg>
            <span>WhatsApp (+34 632 96 82 08)</span>
          </a>
        </div>

        {/* Col 2: Enlaces */}
        <div>
          <h4>Páginas Web</h4>
          <ul>
            <li>
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo('/');
                }}
              >
                Inicio / Catálogo
              </a>
            </li>
            <li>
              <a
                href="/razas"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo('/razas');
                }}
              >
                Todas las Razas
              </a>
            </li>
            <li>
              <a
                href="/filosofia"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo('/filosofia');
                }}
              >
                Sobre Nosotros / Filosofía
              </a>
            </li>
            <li>
              <a
                href="/opiniones"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo('/opiniones');
                }}
              >
                Opiniones y Reseñas
              </a>
            </li>
            <li>
              <a
                href="/garantia-salud"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo('/garantia-salud');
                }}
              >
                Garantía Sanitaria y Pedigrí
              </a>
            </li>
            <li>
              <a
                href="/politica-adopcion"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo('/politica-adopcion');
                }}
              >
                Envío Climatizado a Domicilio
              </a>
            </li>
            <li>
              <a
                href="/contacto"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo('/contacto');
                }}
              >
                Contacto y Citas
              </a>
            </li>
            <li>
              <button
                onClick={onOpenAdmin}
                className="text-[#fca5a5] hover:text-[var(--gold)] text-xs underline cursor-pointer text-left py-1"
              >
                🔒 Panel Admin
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Nuestras Razas (Separate Google Ads Landing Pages) */}
        <div>
          <h4>Páginas de Razas</h4>
          <ul>
            <li>
              <a
                href="/maine-coon"
                onClick={(e) => {
                  e.preventDefault();
                  handleBreedClick('Maine Coon');
                }}
              >
                Maine Coon (19) · 700 €
              </a>
            </li>
            <li>
              <a
                href="/british-shorthair"
                onClick={(e) => {
                  e.preventDefault();
                  handleBreedClick('British Shorthair');
                }}
              >
                British Shorthair (20) · 650 €
              </a>
            </li>
            <li>
              <a
                href="/ragdoll"
                onClick={(e) => {
                  e.preventDefault();
                  handleBreedClick('Ragdoll');
                }}
              >
                Ragdoll (9) · 600 €
              </a>
            </li>
            <li>
              <a
                href="/sphynx"
                onClick={(e) => {
                  e.preventDefault();
                  handleBreedClick('Sphynx');
                }}
              >
                Sphynx (7) · 600 €
              </a>
            </li>
          </ul>
        </div>

        {/* Col 4: Información & Contacto */}
        <div>
          <h4>Garantías Oficiales</h4>
          <ul>
            <li>
              <a
                href="/garantia-salud"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo('/garantia-salud');
                }}
              >
                Garantía Genética de 2 Años
              </a>
            </li>
            <li>
              <a
                href="/garantia-salud"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo('/garantia-salud');
                }}
              >
                Vacunación y Microchip Oficial
              </a>
            </li>
            <li>
              <a
                href="/politica-adopcion"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo('/politica-adopcion');
                }}
              >
                Transporte Especializado Mascotas
              </a>
            </li>
            <li>
              <a
                href="/politica-adopcion"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo('/politica-adopcion');
                }}
              >
                Contrato de Adopción Legal
              </a>
            </li>
          </ul>

          <h4 className="mt">Contacto Directo</h4>
          <ul className="contact-list">
            <li>
              <svg viewBox="0 0 24 24">
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <a href="mailto:Criaderograciadivina@gmail.com">Criaderograciadivina@gmail.com</a>
            </li>
            <li>
              <svg viewBox="0 0 24 24">
                <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8zm8.4-18.2A11.8 11.8 0 0 0 1.8 17.9L.1 24l6.3-1.6A11.8 11.8 0 0 0 23.8 12c0-3.2-1.2-6.1-3.4-8.4z" />
              </svg>
              <a href="https://wa.me/34632968208" target="_blank" rel="noopener noreferrer">
                +34 632 96 82 08
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom container">
        © 2026 criaderograciadivina. Todos los derechos reservados. Criadero ético de gatos de raza en España.
      </div>
    </footer>
  );
};
