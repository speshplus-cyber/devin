import React, { useState } from 'react';
import { Kitten, BreedType } from '../types';
import { X, CheckCircle2, ShieldCheck, Heart, MessageCircle, Mail } from 'lucide-react';
import { addStoredLead } from '../services/siteStore';

interface AdoptionFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedKitten?: Kitten | null;
  onSuccess: (data: any) => void;
}

export const AdoptionFormModal: React.FC<AdoptionFormModalProps> = ({
  isOpen,
  onClose,
  selectedKitten,
  onSuccess,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    breed: (selectedKitten?.breed || 'Maine Coon') as BreedType,
    housingType: 'Piso con protecciones en ventanas / balcones',
    experience: 'He convivido con gatos anteriormente',
    otherPets: 'Tengo otro gato',
    notes: selectedKitten ? `Interesado en el cachorro ${selectedKitten.name} (${selectedKitten.breed})` : '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Por favor indique su nombre completo';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Indique un correo electrónico válido';
    if (!formData.phone.trim() || formData.phone.length < 9) errs.phone = 'Indique un teléfono móvil / WhatsApp válido';
    if (!formData.city.trim()) errs.city = 'Indique su ciudad o provincia';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Store lead for Admin Panel view
      addStoredLead({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        city: formData.city,
        breed: formData.breed,
        kittenName: selectedKitten?.name,
        housingType: formData.housingType,
        experience: formData.experience,
        otherPets: formData.otherPets,
        notes: formData.notes,
      });

      onSuccess(formData);
      setSubmitted(true);
    }
  };

  const handleSendEmailToCattery = () => {
    const subject = encodeURIComponent(
      `Solicitud de Adopción - ${formData.fullName} - Raza ${formData.breed}${
        selectedKitten ? ` (${selectedKitten.name})` : ''
      }`
    );
    const body = encodeURIComponent(
      `Hola criaderograciadivina,\n\n` +
      `He completado el cuestionario de adopción responsable:\n\n` +
      `• Nombre del Solicitante: ${formData.fullName}\n` +
      `• Correo de Contacto: ${formData.email}\n` +
      `• Teléfono / WhatsApp: ${formData.phone}\n` +
      `• Ciudad / Provincia: ${formData.city}\n` +
      `• Raza solicitada: ${formData.breed}\n` +
      `${selectedKitten ? `• Cachorro de interés: ${selectedKitten.name} (${selectedKitten.price})\n` : ''}` +
      `• Tipo de Vivienda: ${formData.housingType}\n` +
      `• Experiencia con Gatos: ${formData.experience}\n` +
      `• Otras Mascotas: ${formData.otherPets}\n` +
      `• Notas adicionales: ${formData.notes || 'Ninguna'}\n\n` +
      `Quedo a la espera de sus indicaciones para la reserva.\n\n` +
      `Atentamente,\n${formData.fullName}`
    );
    window.open(`mailto:Criaderograciadivina@gmail.com?subject=${subject}&body=${body}`, '_blank');
  };

  const handleWhatsAppFollowUp = () => {
    const text = encodeURIComponent(
      selectedKitten
        ? `¡Hola! Me interesa la adopción del gatito ${selectedKitten.name}.`
        : '¡Hola! Me gustaría información para la adopción de un gatito.'
    );
    window.open(`https://wa.me/34632968208?text=${text}`, '_blank');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="adoption-form-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/65 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-red-100 overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-white hover:bg-red-50 rounded-full text-neutral-800 border border-red-100 transition-all hover:scale-105 cursor-pointer"
          aria-label="Cerrar formulario"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
            {/* Header */}
            <div className="border-b border-red-100 pb-4 mb-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#b91c1c] uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#b91c1c]" />
                <span>Compromiso de Cría Ética & Adopción Responsable</span>
              </div>
              <h2 id="adoption-form-title" className="font-serif text-2xl sm:text-3xl font-bold text-[#111827] mt-1">
                Solicitud de Adopción & Reserva
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                {selectedKitten
                  ? `Está solicitando información para la adopción de ${selectedKitten.name} (${selectedKitten.breed}).`
                  : 'Complete el cuestionario de idoneidad para iniciar el proceso de adopción o reserva de camada.'}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-800 mb-1">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Ej. Sofía Morales de la Vega"
                    className={`w-full px-3.5 py-2.5 text-sm bg-white rounded-lg border focus:outline-none transition-all ${
                      errors.fullName ? 'border-red-600 ring-1 ring-red-600' : 'border-red-100 focus:border-[#b91c1c] focus:ring-1 focus:ring-[#b91c1c]'
                    }`}
                  />
                  {errors.fullName && <p className="text-[11px] text-red-600 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-800 mb-1">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sofia@ejemplo.com"
                    className={`w-full px-3.5 py-2.5 text-sm bg-white rounded-lg border focus:outline-none transition-all ${
                      errors.email ? 'border-red-600 ring-1 ring-red-600' : 'border-red-100 focus:border-[#b91c1c] focus:ring-1 focus:ring-[#b91c1c]'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-800 mb-1">
                    Teléfono Móvil / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+34 600 000 000"
                    className={`w-full px-3.5 py-2.5 text-sm bg-white rounded-lg border focus:outline-none transition-all ${
                      errors.phone ? 'border-red-600 ring-1 ring-red-600' : 'border-red-100 focus:border-[#b91c1c] focus:ring-1 focus:ring-[#b91c1c]'
                    }`}
                  />
                  {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-800 mb-1">
                    Ciudad / Provincia de Residencia *
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="Ej. Madrid, Barcelona, Valencia..."
                    className={`w-full px-3.5 py-2.5 text-sm bg-white rounded-lg border focus:outline-none transition-all ${
                      errors.city ? 'border-red-600 ring-1 ring-red-600' : 'border-red-100 focus:border-[#b91c1c] focus:ring-1 focus:ring-[#b91c1c]'
                    }`}
                  />
                  {errors.city && <p className="text-[11px] text-red-600 mt-1">{errors.city}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-800 mb-1">
                    Raza de Preferencia
                  </label>
                  <select
                    value={formData.breed}
                    onChange={(e) => setFormData({ ...formData, breed: e.target.value as BreedType })}
                    className="w-full px-3.5 py-2.5 text-sm bg-white rounded-lg border border-red-100 focus:outline-none focus:border-[#b91c1c]"
                  >
                    <option value="Maine Coon">Maine Coon</option>
                    <option value="British Shorthair">British Shorthair</option>
                    <option value="Ragdoll">Ragdoll</option>
                    <option value="Sphynx">Sphynx & Razas Especiales</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-800 mb-1">
                    Tipo de Vivienda
                  </label>
                  <select
                    value={formData.housingType}
                    onChange={(e) => setFormData({ ...formData, housingType: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-white rounded-lg border border-red-100 focus:outline-none focus:border-[#b91c1c]"
                  >
                    <option value="Piso con protecciones en ventanas / balcones">Piso (con redes/protección en ventanas)</option>
                    <option value="Casa con jardín cerrado / Catio">Casa unifamiliar con jardín vallado / Catio</option>
                    <option value="Piso sin protecciones actualmente">Piso (instalaré protecciones antes de la llegada)</option>
                    <option value="Ático / Dúplex">Ático / Dúplex con terraza asegurada</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-800 mb-1">
                    Experiencia con Felinos
                  </label>
                  <select
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-white rounded-lg border border-red-100 focus:outline-none focus:border-[#b91c1c]"
                  >
                    <option value="He convivido con gatos anteriormente">He convivido con gatos durante años</option>
                    <option value="Tengo gatos actualmente">Tengo gatos en el hogar actualmente</option>
                    <option value="Será mi primer gato">Será mi primer gato (deseo asesoramiento)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-800 mb-1">
                    Otras Mascotas en Casa
                  </label>
                  <select
                    value={formData.otherPets}
                    onChange={(e) => setFormData({ ...formData, otherPets: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-white rounded-lg border border-red-100 focus:outline-none focus:border-[#b91c1c]"
                  >
                    <option value="Tengo otro gato">Gatos</option>
                    <option value="Tengo perro sociable">Perro sociable y acostumbrado a gatos</option>
                    <option value="No tengo otras mascotas actualmente">Ninguna mascota actualmente</option>
                    <option value="Varios animales">Perro y gato conviviendo</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-800 mb-1">
                  Mensaje o Dudas para el Criador
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Cuéntenos sobre su rutina, si hay niños en casa o cualquier pregunta sobre la camada..."
                  className="w-full px-3.5 py-2 text-sm bg-white rounded-lg border border-red-100 focus:outline-none focus:border-[#b91c1c]"
                />
              </div>

              <div className="pt-4 border-t border-red-100 flex items-center justify-between">
                <p className="text-[11px] text-neutral-500 max-w-xs">
                  Respondemos en un plazo máximo de 24 horas laborables.
                </p>
                <button
                  type="submit"
                  className="px-6 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#b91c1c] hover:bg-[#991b1b] rounded-lg transition-all shadow-sm cursor-pointer"
                >
                  Enviar Solicitud Ética
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="p-8 sm:p-12 text-center space-y-5 animate-in fade-in duration-300">
            <div className="w-16 h-16 bg-red-50 text-[#b91c1c] rounded-full flex items-center justify-center mx-auto border border-red-100">
              <CheckCircle2 className="w-10 h-10 text-[#b91c1c]" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#b91c1c]">
                Solicitud Recibida Correctamente
              </span>
              <h3 className="font-serif text-3xl font-bold text-[#111827] mt-1">
                ¡Gracias por su Confianza, {formData.fullName.split(' ')[0]}!
              </h3>
              <p className="text-sm text-neutral-600 max-w-md mx-auto mt-2 leading-relaxed">
                Hemos registrado su solicitud de adopción para la raza <strong className="text-[#b91c1c]">{formData.breed}</strong>. Revisaremos sus datos y nos pondremos en contacto vía WhatsApp o correo electrónico para coordinar los siguientes pasos.
              </p>
            </div>

            <div className="p-4 bg-red-50/40 rounded-xl border border-red-100 max-w-md mx-auto text-left text-xs space-y-1.5 text-neutral-600">
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#b91c1c] shrink-0" />
                <span>Cachorros socializados en familia y libres de jaulas</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#b91c1c] shrink-0" />
                <span>Garantía genética de 2 años por escrito</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3">
              <button
                onClick={handleSendEmailToCattery}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#b91c1c] hover:bg-[#991b1b] rounded-lg shadow-sm cursor-pointer"
              >
                <Mail className="w-4 h-4 text-white" />
                <span>Enviar Email a Criaderograciadivina@gmail.com</span>
              </button>

              <button
                onClick={handleWhatsAppFollowUp}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba5a] rounded-lg shadow-sm cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Confirmar por WhatsApp</span>
              </button>

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2.5 text-sm font-semibold text-[#b91c1c] bg-red-50 hover:bg-red-100 border border-red-100 rounded-lg cursor-pointer"
              >
                Cerrar Ventana
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
