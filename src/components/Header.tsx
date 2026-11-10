import React, { useState } from 'react';
import { BreedType } from '../types';
import { BREED_TO_SLUG } from '../services/router';

interface HeaderProps {
  currentView: string;
  announcementText?: string;
  onNavigate: (view: string) => void;
  onSelectBreed?: (breed: BreedType) => void;
  onOpenAdoptionModal: () => void;
  onOpenEmail?: (message?: string) => void;
  onOpenAdmin?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  onSelectBreed,
  onOpenAdoptionModal,
  onOpenAdmin,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleBreedClick = (breedName: BreedType) => {
    setMobileMenuOpen(false);
    if (onSelectBreed) {
      onSelectBreed(breedName);
    } else {
      const slug = BREED_TO_SLUG[breedName] || 'maine-coon';
      handleNavClick(`/${slug}`);
    }
  };

  const handleNavClick = (viewIdOrPath: string, anchorId?: string) => {
    onNavigate(viewIdOrPath);
    setMobileMenuOpen(false);

    if (anchorId) {
      setTimeout(() => {
        const elem = document.getElementById(anchorId);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="topbar">
        Bienvenido a criaderograciadivina — Tu familia felina comienza aquí
        <a
          href="/contacto"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('/contacto');
          }}
        >
          Contáctanos
        </a>
      </div>

      {/* Main Header */}
      <header className="header">
        <div className="container header-inner">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('/');
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

          {/* Mobile Hamburger Burger */}
          <button
            className="burger"
            aria-label="Abrir menú"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span style={mobileMenuOpen ? { transform: 'translateY(7px) rotate(45deg)' } : {}} />
            <span style={mobileMenuOpen ? { opacity: 0 } : {}} />
            <span style={mobileMenuOpen ? { transform: 'translateY(-7px) rotate(-45deg)' } : {}} />
          </button>

          {/* Desktop & Mobile Navigation Menu */}
          <nav className={`nav ${mobileMenuOpen ? 'open' : ''}`}>
            <ul>
              <li>
                <a
                  href="/"
                  className={currentView === 'home' || currentView === 'catalog' ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('/');
                  }}
                >
                  Inicio
                </a>
              </li>

              <li className="has-drop">
                <a
                  href="/razas"
                  className={currentView === 'breeds' || currentView === 'breeds-index' || currentView.startsWith('breed') ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('/razas');
                  }}
                >
                  Razas <span className="caret">▾</span>
                </a>
                <ul className="drop">
                  <li>
                    <a
                      href="/maine-coon"
                      className={currentView === 'breed-maine-coon' ? 'font-bold text-[#b91c1c]' : ''}
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
                      className={currentView === 'breed-british-shorthair' ? 'font-bold text-[#b91c1c]' : ''}
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
                      className={currentView === 'breed-ragdoll' ? 'font-bold text-[#b91c1c]' : ''}
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
                      className={currentView === 'breed-sphynx' ? 'font-bold text-[#b91c1c]' : ''}
                      onClick={(e) => {
                        e.preventDefault();
                        handleBreedClick('Sphynx');
                      }}
                    >
                      Sphynx (7) · 600 €
                    </a>
                  </li>
                  <li className="border-t border-neutral-100 mt-1 pt-1">
                    <a
                      href="/razas"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick('/razas');
                      }}
                    >
                      <strong>Ver monografías de razas →</strong>
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a
                  href="/#camadas-disponibles"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('/', 'camadas-disponibles');
                  }}
                >
                  Gatitos
                </a>
              </li>

              <li>
                <a
                  href="/filosofia"
                  className={currentView === 'philosophy' ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('/filosofia');
                  }}
                >
                  Sobre Nosotros
                </a>
              </li>

              <li>
                <a
                  href="/opiniones"
                  className={currentView === 'testimonials' ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('/opiniones');
                  }}
                >
                  Testimonios
                </a>
              </li>

              <li>
                <a
                  href="/#faq"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('/', 'faq');
                  }}
                >
                  FAQ
                </a>
              </li>

              <li>
                <a
                  href="/garantia-salud"
                  className={currentView === 'health' ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('/garantia-salud');
                  }}
                >
                  Garantía de Salud
                </a>
              </li>

              <li>
                <a
                  href="/politica-adopcion"
                  className={currentView === 'policy' ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('/politica-adopcion');
                  }}
                >
                  Envío y Entrega
                </a>
              </li>

              <li>
                <a
                  href="/contacto"
                  className={currentView === 'contact' ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('/contacto');
                  }}
                >
                  Contacto
                </a>
              </li>
            </ul>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdoptionModal();
              }}
              className="btn btn-gold btn-sm"
            >
              Adoptar Gatito
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};
