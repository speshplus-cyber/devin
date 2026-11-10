import React, { useState } from 'react';
import { FAQ_DATA } from '../data/catsData';
import { Mail, MapPin, Clock, ChevronDown, CheckCircle2 } from 'lucide-react';

interface ContactViewProps {
  onOpenEmail: (message?: string) => void;
  onOpenAdoptionModal: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({
  onOpenEmail,
  onOpenAdoptionModal,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [visitRequested, setVisitRequested] = useState(false);
  const [visitForm, setVisitForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    breed: 'Maine Coon',
    timeSlot: 'Mañanas (11:00 - 13:30)',
  });

  const handleVisitSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (visitForm.name && visitForm.email) {
      setVisitRequested(true);
    }
  };

  const handleSendVisitEmail = () => {
    const subject = encodeURIComponent(`Solicitud de Cita / Visita - ${visitForm.name} - ${visitForm.breed}`);
    const body = encodeURIComponent(
      `Hola criaderograciadivina,\n\n` +
      `Deseo concertar una visita presencial para conocer a los cachorros de ${visitForm.breed}:\n\n` +
      `• Nombre: ${visitForm.name}\n` +
      `• Correo: ${visitForm.email}\n` +
      `• Teléfono: ${visitForm.phone}\n` +
      `• Raza de interés: ${visitForm.breed}\n` +
      `• Franja horaria preferida: ${visitForm.timeSlot}\n` +
      `• Fecha sugerida: ${visitForm.date || 'A coordinar'}\n\n` +
      `Quedo a la espera de su confirmación.\n\n` +
      `Un saludo cordial,\n${visitForm.name}`
    );
    window.open(`mailto:Criaderograciadivina@gmail.com?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16 pb-16 bg-white">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-[#b91c1c]">
          Atención al Adoptante por Correo Electrónico
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#111827]">
          Visitas Concertadas & Contacto Oficial
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
          Canalizamos todas las solicitudes y reservas a través de nuestro correo oficial <strong className="text-[#b91c1c]">Criaderograciadivina@gmail.com</strong> para asegurar total trazabilidad y formalidad en cada adopción.
        </p>
      </div>

      {/* Grid: Contact Details & Schedule Visit Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Info Cards (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-2xl border border-red-100 p-6 sm:p-8 space-y-6 shadow-sm">
            <h3 className="font-serif text-2xl font-bold text-[#111827]">
              Canales de Contacto Oficial
            </h3>

            <div className="space-y-5">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-[#b91c1c] shrink-0 border border-red-100">
                  <Mail className="w-5 h-5 text-[#b91c1c]" />
                </div>
                <div>
                  <span className="text-[11px] uppercase font-bold text-[#b91c1c] block">
                    Correo Electrónico Oficial de Adopciones
                  </span>
                  <a
                    href="mailto:Criaderograciadivina@gmail.com"
                    className="font-bold text-base text-[#111827] hover:text-[#b91c1c] hover:underline transition-colors block mt-0.5"
                  >
                    Criaderograciadivina@gmail.com
                  </a>
                  <p className="text-xs text-neutral-500 mt-1">
                    Atención personalizada para reservas, contratos de garantía genética, dudas de linaje y envío de fotos/vídeos.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-[#b91c1c] shrink-0 border border-red-100">
                  <CheckCircle2 className="w-5 h-5 text-[#b91c1c]" />
                </div>
                <div>
                  <span className="text-[11px] uppercase font-bold text-[#b91c1c] block">
                    Entregas y Envíos
                  </span>
                  <p className="font-semibold text-sm text-[#111827]">
                    Envíos Seguros a Domicilio en Toda España
                  </p>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    Transporte climatizado de alta seguridad o videollamadas en directo para conocer a los cachorros.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-[#b91c1c] shrink-0 border border-red-100">
                  <Clock className="w-5 h-5 text-[#b91c1c]" />
                </div>
                <div>
                  <span className="text-[11px] uppercase font-bold text-[#b91c1c] block">
                    Horario de Atención por Correo
                  </span>
                  <p className="font-semibold text-sm text-[#111827]">
                    Lunes a Domingo · Respuesta en menos de 24h
                  </p>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    Atendemos las solicitudes por riguroso orden de llegada.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-red-100 space-y-2">
              <button
                onClick={() => onOpenEmail()}
                className="w-full py-2.5 px-4 bg-[#b91c1c] hover:bg-[#991b1b] text-white text-xs font-semibold rounded-lg shadow-sm transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 text-white" />
                <span>Escribir a Criaderograciadivina@gmail.com</span>
              </button>
              <button
                onClick={onOpenAdoptionModal}
                className="w-full py-2.5 px-4 bg-white hover:bg-red-50 text-[#b91c1c] text-xs font-semibold rounded-lg border border-red-200 transition-colors cursor-pointer"
              >
                Completar Cuestionario de Adopción (600 €)
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Visit Booking Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-2xl border border-red-100 p-6 sm:p-8 shadow-sm">
            {!visitRequested ? (
              <form onSubmit={handleVisitSubmit} className="space-y-4">
                <div className="border-b border-red-100 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#b91c1c]">
                    Cita Previa por Correo
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#111827] mt-1">
                    Solicitar Visita Presencial al Criadero
                  </h3>
                  <p className="text-xs text-neutral-500 mt-1">
                    Venga a interactuar con los cachorros y conocer a sus madres en nuestro salón familiar.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-800 mb-1">
                      Su Nombre *
                    </label>
                    <input
                      type="text"
                      required
                      value={visitForm.name}
                      onChange={(e) => setVisitForm({ ...visitForm, name: e.target.value })}
                      placeholder="Ej. Carlos Ramos"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-red-50/30 rounded-lg border border-red-100 focus:outline-none focus:border-[#b91c1c]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-800 mb-1">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      required
                      value={visitForm.email}
                      onChange={(e) => setVisitForm({ ...visitForm, email: e.target.value })}
                      placeholder="carlos@ejemplo.com"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-red-50/30 rounded-lg border border-red-100 focus:outline-none focus:border-[#b91c1c]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-800 mb-1">
                      Teléfono Móvil
                    </label>
                    <input
                      type="tel"
                      value={visitForm.phone}
                      onChange={(e) => setVisitForm({ ...visitForm, phone: e.target.value })}
                      placeholder="+34 600 000 000"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-red-50/30 rounded-lg border border-red-100 focus:outline-none focus:border-[#b91c1c]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-800 mb-1">
                      Raza de Interés Principal
                    </label>
                    <select
                      value={visitForm.breed}
                      onChange={(e) => setVisitForm({ ...visitForm, breed: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-red-50/30 rounded-lg border border-red-100 focus:outline-none focus:border-[#b91c1c]"
                    >
                      <option value="Maine Coon">Maine Coon</option>
                      <option value="British Shorthair">British Shorthair</option>
                      <option value="Ragdoll">Ragdoll</option>
                      <option value="Sphynx">Sphynx</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-800 mb-1">
                    Franja Horaria Preferida
                  </label>
                  <select
                    value={visitForm.timeSlot}
                    onChange={(e) => setVisitForm({ ...visitForm, timeSlot: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-red-50/30 rounded-lg border border-red-100 focus:outline-none focus:border-[#b91c1c]"
                  >
                    <option value="Mañanas (11:00 - 13:30)">Mañanas (11:00 - 13:30)</option>
                    <option value="Tardes (16:30 - 19:30)">Tardes (16:30 - 19:30)</option>
                    <option value="Fin de Semana">Sábado / Domingo</option>
                    <option value="Videollamada en directo">Videollamada previa en directo</option>
                  </select>
                </div>

                <div className="pt-4 border-t border-red-100 flex items-center justify-between">
                  <span className="text-[11px] text-neutral-500">
                    Confirmación por correo en menos de 24 horas.
                  </span>
                  <button
                    type="submit"
                    className="px-6 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#b91c1c] hover:bg-[#991b1b] rounded-lg shadow-sm cursor-pointer"
                  >
                    Registrar Solicitud de Cita
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-8 text-center space-y-4 animate-in fade-in">
                <CheckCircle2 className="w-12 h-12 text-[#b91c1c] mx-auto" />
                <h3 className="font-serif text-2xl font-bold text-[#111827]">
                  ¡Petición de Cita Registrada!
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto">
                  Gracias {visitForm.name}. Le enviaremos un correo a <strong className="text-[#b91c1c]">{visitForm.email}</strong> con las fechas disponibles y la ruta de acceso al criadero.
                </p>
                <div className="pt-2">
                  <button
                    onClick={handleSendVisitEmail}
                    className="flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#b91c1c] hover:bg-[#991b1b] rounded-lg mx-auto shadow-sm cursor-pointer"
                  >
                    <Mail className="w-4 h-4 text-white" />
                    <span>Enviar Detalles por Email a Criaderograciadivina@gmail.com</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions (FAQ) Accordion */}
      <div className="space-y-6 pt-8 border-t border-red-100">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-[#b91c1c]">
            Dudas Frecuentes
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#111827] mt-1">
            Preguntas Habituales sobre Adopción y Salud
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-red-100 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-semibold text-[#111827] hover:text-[#b91c1c] transition-colors cursor-pointer"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#b91c1c] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-5 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-red-50 pt-3">
                    <p>{item.answer}</p>
                    <div className="mt-2 text-[11px] font-medium text-[#b91c1c]">
                      Categoría: {item.category}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
