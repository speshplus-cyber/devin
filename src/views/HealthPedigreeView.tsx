import React from 'react';
import { ShieldCheck, Award, FileText, Check } from 'lucide-react';

interface HealthPedigreeViewProps {
  onOpenAdoptionModal: () => void;
  onOpenEmail: (message?: string) => void;
}

export const HealthPedigreeView: React.FC<HealthPedigreeViewProps> = ({
  onOpenAdoptionModal,
  onOpenEmail,
}) => {
  const healthTests = [
    {
      code: 'HCM (Cardiomiopatía Hipertrófica)',
      status: 'Libres / Negativos por ADN y Ecocardiograma Doppler',
      desc: 'La enfermedad cardíaca más común en felinos. Todos nuestros reproductores se someten a ecocardiogramas periódicos certificados y test genéticos de mutación A31P y MYBPC3.',
    },
    {
      code: 'PKD (Poliquistosis Renal)',
      status: 'Libres / N/N por prueba de ADN',
      desc: 'Trastorno genético autosómico dominante que genera quistes en los riñones. Garantizamos 100% progenitores libres, imposibilitando la transmisión a la descendencia.',
    },
    {
      code: 'SMA (Atrofia Muscular Espinal)',
      status: 'Negativo / No Portadores',
      desc: 'Pérdida de motoneuronas que afecta a los músculos esqueléticos. Test genético certificado libre en todas nuestras líneas de Maine Coon.',
    },
    {
      code: 'FIV & FeLV (Inmunodeficiencia & Leucemia)',
      status: 'Serología Negativa Constante',
      desc: 'Enfermedades retrovirales infecciosas. Criadero cerrado y controlado con test serológicos regulares negativos en todos los ejemplares.',
    },
  ];

  const documentationIncludes = [
    'Contrato de compraventa legal y de adopción responsable por escrito.',
    'Garantía genética de 2 años con cobertura total ante anomalías hereditarias congénitas.',
    'Garantía vírica de 15 días posteriores a la fecha de entrega.',
    'Pedigrí oficial de hasta 5 generaciones avalado por club federado WCF o ASFE/FIFe.',
    'Pasaporte Europeo de Animales de Compañía con cubierta oficial.',
    'Microchip transponder ISO 11784/11785 implantado por veterinario colegiado.',
    'Cartilla de vacunación con dos dosis de trivalente felina y desparasitaciones al día.',
    'Certificado de salud expedido en las 48 horas previas a la entrega.',
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16 pb-16 bg-white">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-[#b91c1c]">
          Transparencia Clínica & Rigor Genético
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#111827]">
          Garantías Sanitarias y Certificación Oficial
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
          En criaderograciadivina la salud no es una promesa verbal: se acredita mediante documentación clínica veterinaria, pruebas de laboratorio certificadas y contratos legales con 2 años de cobertura.
        </p>
      </div>

      {/* Hero Certificate Showcase with Pedigree Seal */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-2xl border border-red-100 p-6 sm:p-10 shadow-sm">
        <div className="lg:col-span-7 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-xs font-semibold text-[#b91c1c] border border-red-200">
            <Award className="w-4 h-4 text-[#b91c1c]" />
            <span>Afiliación Oficial WCF Nº 41289 & ASFE/FIFe</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#111827]">
            ¿Qué Acredita el Pedigrí Oficial?
          </h2>

          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
            El pedigrí es el árbol genealógico legal que certifica la pureza racial, la ausencia de consanguinidad perjudicial y la trazabilidad de campeones internacionales a lo largo de 5 generaciones. Rechace animales sin registro oficial: el pedigrí es el único documento que garantiza que el cachorro no procede de granjas de cría indiscriminadas.
          </p>

          <div className="space-y-2.5 pt-2">
            <div className="flex items-start gap-2.5 text-xs text-neutral-800">
              <span className="w-4 h-4 rounded-full bg-[#b91c1c] text-white flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3 h-3" />
              </span>
              <span>Líneas de sangre libres de cruces experimentales no autorizados.</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-neutral-800">
              <span className="w-4 h-4 rounded-full bg-[#b91c1c] text-white flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3 h-3" />
              </span>
              <span>Inscripción en el Libro de Orígenes Español (LOE) o internacional WCF.</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-neutral-800">
              <span className="w-4 h-4 rounded-full bg-[#b91c1c] text-white flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3 h-3" />
              </span>
              <span>Inspección periódica del bienestar de nuestras instalaciones y reproductores.</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 bg-red-50/40 rounded-2xl p-6 border border-red-100 space-y-4">
          <div className="flex items-center gap-3">
            <img
              src="/images/pedigree_seal.jpg"
              alt="Sello de Pedigrí"
              referrerPolicy="no-referrer"
              className="w-12 h-12 rounded-full object-cover border border-red-200"
            />
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#b91c1c]">
                Documentación Entregada
              </div>
              <span className="text-[11px] text-neutral-500">Expedición oficial y fehaciente</span>
            </div>
          </div>
          <ul className="space-y-2 text-xs text-neutral-600">
            {documentationIncludes.map((doc, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#b91c1c] shrink-0 mt-1.5" />
                <span>{doc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* The 4 Genetic Tests in Detail */}
      <div className="space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#b91c1c]">
            Panel Genético
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#111827] mt-1">
            Enfermedades Testadas y Descartadas
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {healthTests.map((test, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-red-100 p-6 space-y-3 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-serif font-bold text-base sm:text-lg text-[#111827]">
                  {test.code}
                </h3>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold bg-[#b91c1c] text-white rounded-full shrink-0">
                  <ShieldCheck className="w-3 h-3 text-white" />
                  <span>Certificado</span>
                </span>
              </div>
              <p className="text-xs font-semibold text-[#b91c1c]">
                {test.status}
              </p>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {test.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Legal Contract & Warranty Action Card in Red & White */}
      <div className="bg-[#b91c1c] text-white rounded-2xl p-8 sm:p-10 border border-red-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-200">
            <ShieldCheck className="w-4 h-4 text-white" />
            <span>Máxima Tranquilidad para su Hogar</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            ¿Desea revisar un modelo de contrato o los informes veterinarios?
          </h3>
          <p className="text-xs sm:text-sm text-red-100 leading-relaxed">
            Compartimos gustosamente las copias de los certificados genéticos y ecocardiogramas de los progenitores con cualquier familia interesada en adoptar.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <button
            onClick={() => onOpenEmail('Hola criaderograciadivina, me gustaría solicitar los informes clínicos y un modelo de contrato para adopción.')}
            className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#b91c1c] bg-white hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
          >
            Solicitar Informes por Email
          </button>
          <button
            onClick={onOpenAdoptionModal}
            className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#7f1d1d] hover:bg-[#650e0e] rounded-lg transition-colors border border-red-400/40 cursor-pointer"
          >
            Iniciar Cuestionario
          </button>
        </div>
      </div>
    </div>
  );
};
