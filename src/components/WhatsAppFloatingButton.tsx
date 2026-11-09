import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppFloatingButtonProps {
  onClick?: () => void;
  selectedKittenName?: string;
  phoneNumber?: string;
}

export const WhatsAppFloatingButton: React.FC<WhatsAppFloatingButtonProps> = ({
  onClick,
  selectedKittenName,
  phoneNumber = '34692881430',
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
      return;
    }
    const msg = selectedKittenName
      ? `Hola, estoy interesado/a en la adopción del cachorro ${selectedKittenName} (600 €). ¿Podrían facilitarme más detalles, fotos o vídeos?`
      : 'Hola, he visitado su página web y me gustaría recibir información sobre los cachorros disponibles (precio 600 €) y próximas camadas.';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <aside aria-label="Contacto directo por WhatsApp" className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40">
      <button
        onClick={handleClick}
        className="group flex items-center gap-2.5 px-4 sm:px-5 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-[0_8px_24px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_28px_rgba(37,211,102,0.55)] transition-all transform hover:-translate-y-1 active:translate-y-0 cursor-pointer border border-white/30"
        aria-label="Contactar por WhatsApp"
        title="Chatear por WhatsApp con el criador"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
        </span>
        <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
        <span className="font-semibold text-xs sm:text-sm tracking-wide whitespace-nowrap">
          {selectedKittenName ? `WhatsApp: ${selectedKittenName}` : 'WhatsApp'}
        </span>
      </button>
    </aside>
  );
};
