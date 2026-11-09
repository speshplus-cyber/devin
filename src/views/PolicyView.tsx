import React from 'react';
import { ShieldCheck, FileText, Heart, Mail, Lock, CheckCircle2, AlertCircle } from 'lucide-react';

interface PolicyViewProps {
  onOpenAdoptionModal: () => void;
}

export const PolicyView: React.FC<PolicyViewProps> = ({ onOpenAdoptionModal }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 pb-20 bg-white">
      {/* Header */}
      <div className="border-b border-red-100 pb-8 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-xs font-semibold text-[#b91c1c] border border-red-200">
          <ShieldCheck className="w-4 h-4 text-[#b91c1c]" />
          <span>Marco Jurídico, Sanitario y Ético Oficial</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#111827]">
          Políticas de Adopción, Garantías y Privacidad
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
          En Criadero Gracia Divina creemos en la máxima claridad y honestidad. Todas las adopciones se formalizan mediante contrato legal vinculante para proteger el bienestar del felino y dar total seguridad jurídica a las familias.
        </p>
      </div>

      {/* Section 1: Ethical Adoption Policy */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-red-50 text-[#b91c1c] flex items-center justify-center border border-red-100">
            <Heart className="w-5 h-5 text-[#b91c1c]" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-[#111827]">
            1. Política de Adopción Ética y Responsable
          </h2>
        </div>

        <div className="bg-red-50/30 rounded-2xl border border-red-100 p-6 sm:p-8 space-y-4 text-xs sm:text-sm text-neutral-700 leading-relaxed">
          <p>
            Criadero Gracia Divina entrega cachorros exclusivamente a hogares definitivos que compartan nuestra visión de respeto y cuidado. Para formalizar cualquier entrega, la parte adoptante se compromete a:
          </p>
          <ul className="space-y-2.5">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#b91c1c] shrink-0 mt-0.5" />
              <span><strong>Protección en ventanas y terrazas:</strong> Contar con redes de seguridad o mosquiteras reforzadas para evitar caídas (síndrome del gato paracaidista).</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#b91c1c] shrink-0 mt-0.5" />
              <span><strong>Prohibición absoluta de desungulación (onychectomy):</strong> La extirpación quirúrgica de garras está estrictamente prohibida por ley y por contrato, considerándose maltrato mutilante.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#b91c1c] shrink-0 mt-0.5" />
              <span><strong>Vida en interior (Indoor Cat):</strong> Los ejemplares vivirán como miembros de pleno derecho de la familia dentro del domicilio, con acceso a patios o jardines solo si están completamente vallados.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#b91c1c] shrink-0 mt-0.5" />
              <span><strong>Derecho de rescate y no abandono:</strong> Si por cualquier circunstancia de fuerza mayor la familia no pudiera continuar cuidando del gato, el criadero tiene derecho de tanteo prioritario para acogerlo o reubicarlo. Jamás podrá ser cedido a protectoras o terceros sin autorización.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Section 2: 2-Year Health Warranty Contract */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-red-50 text-[#b91c1c] flex items-center justify-center border border-red-100">
            <ShieldCheck className="w-5 h-5 text-[#b91c1c]" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-[#111827]">
            2. Garantía Sanitaria y Cobertura de 2 Años
          </h2>
        </div>

        <div className="bg-white rounded-2xl border border-red-100 p-6 sm:p-8 space-y-4 text-xs sm:text-sm text-neutral-700 leading-relaxed shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-red-50/40 rounded-xl border border-red-100">
              <h3 className="font-bold text-[#b91c1c] text-sm">Garantía Vírica de 15 Días</h3>
              <p className="mt-1 text-neutral-600 text-xs leading-relaxed">
                Cubre patologías infectocontagiosas (panleucopenia felina, calicivirus, herpesvirus felino) manifestadas dentro de los primeros 15 días naturales posteriores a la entrega.
              </p>
            </div>
            <div className="p-4 bg-red-50/40 rounded-xl border border-red-100">
              <h3 className="font-bold text-[#b91c1c] text-sm">Garantía Genética de 2 Años</h3>
              <p className="mt-1 text-neutral-600 text-xs leading-relaxed">
                Cobertura legal de 24 meses frente a enfermedades congénitas hereditarias graves diagnosticadas fehacientemente (HCM, PKD, SMA y displasias graves).
              </p>
            </div>
          </div>

          <p>
            En el hipotético caso de diagnóstico de una patología genética cubierta con dictamen pericial veterinario colegiado, la familia tendrá derecho a la cobertura veterinaria o a la reposición por un ejemplar de idénticas características de una camada sucesiva, según lo estipulado en el contrato.
          </p>
          <div className="flex items-center gap-2 p-3 bg-red-50 rounded-lg text-xs text-[#b91c1c]">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>Todos los informes clínicos y consultas de garantía se remiten directamente a <strong>Criaderograciadivina@gmail.com</strong>.</span>
          </div>
        </div>
      </section>

      {/* Section 3: Reservation & Price Policy */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-red-50 text-[#b91c1c] flex items-center justify-center border border-red-100">
            <FileText className="w-5 h-5 text-[#b91c1c]" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-[#111827]">
            3. Política de Reservas, Precios y Entregas
          </h2>
        </div>

        <div className="bg-white rounded-2xl border border-red-100 p-6 sm:p-8 space-y-4 text-xs sm:text-sm text-neutral-700 leading-relaxed shadow-xs">
          <p>
            El precio de adopción fijado para todos nuestros cachorros es de <strong>600 €</strong>, el cual incluye la totalidad de las vacunas, microchip oficial ISO, pasaporte europeo, pedigrí oficial emitido por federación, desparasitaciones y Welcome Pack de adaptación.
          </p>
          <div className="space-y-2">
            <h4 className="font-bold text-neutral-900 text-xs uppercase tracking-wider">Pasos para la Reserva:</h4>
            <ol className="list-decimal pl-5 space-y-1.5 text-xs text-neutral-600">
              <li>Aprobación previa del cuestionario de adopción responsable.</li>
              <li>Abono del depósito de reserva (normalmente 180 €, correspondiente al 30% del importe total de 600 €).</li>
              <li>Envío semanal de reportes fotográficos y en vídeo del desarrollo del cachorro.</li>
              <li>Abono de la cantidad restante en el momento de la entrega personal o previa al transporte en cabina.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Section 4: Privacy & RGPD */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-red-50 text-[#b91c1c] flex items-center justify-center border border-red-100">
            <Lock className="w-5 h-5 text-[#b91c1c]" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-[#111827]">
            4. Política de Privacidad y Protección de Datos (RGPD)
          </h2>
        </div>

        <div className="bg-red-50/20 rounded-2xl border border-red-100 p-6 sm:p-8 space-y-3 text-xs sm:text-sm text-neutral-700 leading-relaxed">
          <p>
            De conformidad con el Reglamento General de Protección de Datos (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD), le informamos de que los datos personales facilitados en las solicitudes de adopción serán tratados bajo la responsabilidad de:
          </p>
          <div className="p-3 bg-white rounded-xl border border-red-100 text-xs space-y-1">
            <p><strong>Responsable:</strong> Criadero Gracia Divina</p>
            <p><strong>Finalidad:</strong> Gestión y tramitación de solicitudes de adopción, elaboración del contrato de cesión y registro oficial del microchip.</p>
            <p><strong>Legitimación:</strong> Consentimiento del interesado y ejecución de la relación contractual pre-adoptiva.</p>
            <p><strong>Correo para ejercer derechos ARCO:</strong> <a href="mailto:Criaderograciadivina@gmail.com" className="text-[#b91c1c] underline font-semibold">Criaderograciadivina@gmail.com</a></p>
          </div>
          <p className="text-xs text-neutral-500">
            Sus datos no serán cedidos a terceros salvo obligación legal o cesión indispensable al Registro Oficial de Identificación de Animales de Compañía y al club felino emisor del pedigrí (WCF / ASFE / FIFe).
          </p>
        </div>
      </section>

      {/* Action Strip */}
      <div className="pt-6 border-t border-red-100 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs text-neutral-600">
          <Mail className="w-4 h-4 text-[#b91c1c]" />
          <span>Para cualquier consulta legal o contractual: <strong>Criaderograciadivina@gmail.com</strong></span>
        </div>
        <button
          onClick={onOpenAdoptionModal}
          className="px-6 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#b91c1c] hover:bg-[#991b1b] rounded-lg transition-colors shadow-sm cursor-pointer"
        >
          Iniciar Solicitud de Adopción (600 €)
        </button>
      </div>
    </div>
  );
};
