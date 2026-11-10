import React, { useState } from 'react';

interface HeaderProps {
  currentView: string;
  announcementText?: string;
  onNavigate: (view: string) => void;
  onSelectBreed?: (breed: string) => void;
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

  const handleBreedClick = (breedName: string) => {
    setMobileMenuOpen(false);
    if (onSelectBreed) {
      onSelectBreed(breedName);
    } else {
      handleNavClick('catalog', 'camadas-disponibles');
    }
  };

  const handleNavClick = (viewId: string, anchorId?: string) => {
    onNavigate(viewId);
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
        Bienvenido a Criadero Gracia Divina — Tu familia felina comienza aquí
        <a
          href="#contacto"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('catalog', 'contacto');
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
              handleNavClick('catalog');
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
              Gracia<b>Divina</b>
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
                  href="#inicio"
                  className={currentView === 'catalog' ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('catalog');
                  }}
                >
                  Inicio
                </a>
              </li>

              <li className="has-drop">
                <a
                  href="#razas"
                  className={currentView === 'breeds' ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('catalog', 'razas');
                  }}
                >
                  Razas <span className="caret">▾</span>
                </a>
                <ul className="drop">
                  <li>
                    <a
                      href="#camadas-disponibles"
                      onClick={(e) => {
                        e.preventDefault();
                        handleBreedClick('Maine Coon');
                      }}
                    >
                      Maine Coon (10)
                    </a>
                  </li>
                  <li>
                    <a
                      href="#camadas-disponibles"
                      onClick={(e) => {
                        e.preventDefault();
                        handleBreedClick('Bengalí');
                      }}
                    >
                      Bengalí (6)
                    </a>
                  </li>
                  <li>
                    <a
                      href="#camadas-disponibles"
                      onClick={(e) => {
                        e.preventDefault();
                        handleBreedClick('Siberiano');
                      }}
                    >
                      Siberiano (6)
                    </a>
                  </li>
                  <li>
                    <a
                      href="#camadas-disponibles"
                      onClick={(e) => {
                        e.preventDefault();
                        handleBreedClick('Ragdoll');
                      }}
                    >
                      Ragdoll (5)
                    </a>
                  </li>
                  <li>
                    <a
                      href="#camadas-disponibles"
                      onClick={(e) => {
                        e.preventDefault();
                        handleBreedClick('British Shorthair');
                      }}
                    >
                      British Shorthair (8)
                    </a>
                  </li>
                  <li>
                    <a
                      href="#camadas-disponibles"
                      onClick={(e) => {
                        e.preventDefault();
                        handleBreedClick('Persa');
                      }}
                    >
                      Persa (5)
                    </a>
                  </li>
                  <li>
                    <a
                      href="#camadas-disponibles"
                      onClick={(e) => {
                        e.preventDefault();
                        handleBreedClick('Sphynx');
                      }}
                    >
                      Sphynx (5)
                    </a>
                  </li>
                  <li>
                    <a
                      href="#camadas-disponibles"
                      onClick={(e) => {
                        e.preventDefault();
                        handleBreedClick('Azul Ruso');
                      }}
                    >
                      Azul Ruso (5)
                    </a>
                  </li>
                  <li>
                    <a
                      href="#camadas-disponibles"
                      onClick={(e) => {
                        e.preventDefault();
                        handleBreedClick('Siamés');
                      }}
                    >
                      Siamés (5)
                    </a>
                  </li>
                  <li>
                    <a
                      href="#razas"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick('breeds');
                      }}
                    >
                      <strong>Ver monografías de razas →</strong>
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a
                  href="#gatitos"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('catalog', 'camadas-disponibles');
                  }}
                >
                  Gatitos
                </a>
              </li>

              <li>
                <a
                  href="#sobre-nosotros"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('catalog', 'sobre-nosotros');
                  }}
                >
                  Sobre Nosotros
                </a>
              </li>

              <li>
                <a
                  href="#testimonios"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('catalog', 'testimonios');
                  }}
                >
                  Testimonios
                </a>
              </li>

              <li>
                <a
                  href="#faq"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('catalog', 'faq');
                  }}
                >
                  FAQ
                </a>
              </li>

              <li>
                <a
                  href="#garantia-de-salud"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('health');
                  }}
                >
                  Garantía de Salud
                </a>
              </li>

              <li>
                <a
                  href="#vacunaciones"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('health');
                  }}
                >
                  Vacunaciones
                </a>
              </li>

              <li>
                <a
                  href="#envio-y-entrega"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('policy');
                  }}
                >
                  Envío y Entrega
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
