import React, { useState } from 'react';
import { Kitten, Litter, Testimonial, SiteSettings, BreedType, KittenStatus } from '../types';
import { AdoptionLead } from '../services/siteStore';
import {
  LayoutDashboard,
  Cat,
  Layers,
  MessageSquareQuote,
  Settings,
  Inbox,
  Plus,
  Trash2,
  Edit3,
  CheckCircle,
  AlertCircle,
  Save,
  RotateCcw,
  Star,
  ExternalLink,
  Mail,
  Phone,
  Eye,
  ShieldCheck,
  Search,
  X,
  Image as ImageIcon,
  LogOut,
  Key,
  Lock,
  UserCheck,
  UserPlus,
  ShieldAlert
} from 'lucide-react';
import {
  AdminSession,
  getAuthorizedUsers,
  updatePassword,
  addAuthorizedUser,
  removeAuthorizedUser,
  AuthorizedUser
} from '../services/authService';

interface AdminPanelViewProps {
  kittens: Kitten[];
  litters: Litter[];
  testimonials: Testimonial[];
  settings: SiteSettings;
  leads: AdoptionLead[];
  currentUser?: AdminSession | null;
  onUpdateKittens: (kittens: Kitten[]) => void;
  onUpdateLitters: (litters: Litter[]) => void;
  onUpdateTestimonials: (testimonials: Testimonial[]) => void;
  onUpdateSettings: (settings: SiteSettings) => void;
  onUpdateLeadStatus: (leadId: string, status: AdoptionLead['status']) => void;
  onDeleteLead: (leadId: string) => void;
  onResetDefaults: () => void;
  onExitAdmin: () => void;
  onLogout: () => void;
}

const LOCAL_AVAILABLE_PHOTOS = [
  '/photos/IMG_4465.jpeg',
  '/photos/IMG_4473.jpeg',
  '/photos/IMG_4480.jpeg',
  '/photos/IMG_4491.jpeg',
  '/photos/IMG_4496.jpeg',
  '/photos/IMG_4498.jpeg',
  '/photos/IMG_4500.jpeg',
  '/photos/IMG_4504.jpeg',
  '/photos/IMG_4505.jpeg',
  '/photos/IMG_4508.jpeg',
  '/photos/IMG_4510.jpeg',
  '/photos/IMG_4511.jpeg',
  '/photos/IMG_4512.jpeg',
  '/photos/IMG_4513.jpeg',
  '/photos/IMG_4515.jpeg',
  '/photos/IMG_4516.jpeg',
  '/photos/IMG_4518.jpeg',
  '/photos/IMG_4519.jpeg',
  '/photos/IMG_4521.jpeg',
  '/photos/IMG_4530.jpeg',
  '/photos/IMG_4547.jpeg',
  '/photos/IMG_4587.jpeg',
  '/photos/IMG_4589.jpeg',
  '/photos/IMG_4591.jpeg',
  '/photos/IMG_4595.jpeg',
  '/photos/IMG_4601.jpeg',
  '/photos/IMG_4608.jpeg',
  '/photos/IMG_4611.jpeg',
  '/photos/IMG_4615.jpeg',
  '/photos/IMG_4620.jpeg',
  '/photos/IMG_4624.jpeg',
  '/photos/IMG_4625.jpeg',
  '/photos/IMG_4630.jpeg',
  '/photos/IMG_4637.png',
  '/photos/IMG_4653.jpeg',
  '/photos/IMG_4656.jpeg',
  '/photos/IMG_4672.jpeg',
  '/photos/IMG_4684.jpeg',
  '/photos/IMG_4685.jpeg',
  '/photos/IMG_4686.jpeg',
  '/photos/IMG_4687.jpeg',
];

export const AdminPanelView: React.FC<AdminPanelViewProps> = ({
  kittens,
  litters,
  testimonials,
  settings,
  leads,
  onUpdateKittens,
  onUpdateLitters,
  onUpdateTestimonials,
  onUpdateSettings,
  onUpdateLeadStatus,
  onDeleteLead,
  onResetDefaults,
  onExitAdmin,
  currentUser,
  onLogout,
}) => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'kittens' | 'litters' | 'testimonials' | 'settings' | 'leads' | 'security'>('dashboard');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Security & Admin Users Management state
  const [authorizedUsers, setAuthorizedUsers] = useState<AuthorizedUser[]>(() => getAuthorizedUsers());
  const [currentPasswordInput, setCurrentPasswordInput] = useState('');
  const [newPasswordInput, setNewPasswordInput] = useState('');
  const [confirmPasswordInput, setConfirmPasswordInput] = useState('');
  const [passwordChangeError, setPasswordChangeError] = useState<string | null>(null);
  const [newAdminEmail, setNewAdminEmail] = useState('');
  const [newAdminPassword, setNewAdminPassword] = useState('');
  const [newAdminName, setNewAdminName] = useState('');
  const [newAdminRole, setNewAdminRole] = useState<'superadmin' | 'admin' | 'editor'>('admin');
  const [showAddUserModal, setShowAddUserModal] = useState(false);

  // Kitten Form Modal state
  const [isKittenModalOpen, setIsKittenModalOpen] = useState(false);
  const [editingKittenId, setEditingKittenId] = useState<string | null>(null);
  const [kittenFormData, setKittenFormData] = useState<Partial<Kitten>>({
    name: '',
    pedigreeName: '',
    breed: 'Maine Coon',
    gender: 'Macho',
    birthDate: '15/01/2026',
    ageWeeks: 12,
    colorManto: 'Black Silver Classic Tabby',
    eyeColor: 'Ámbar / Oro intenso',
    status: 'Disponible',
    price: '600 €',
    featured: true,
    images: ['/photos/IMG_4465.jpeg'],
    description: '',
    temperament: ['Afectuoso', 'Ronroneador', 'Sociable'],
  });

  // Litter Form Modal state
  const [isLitterModalOpen, setIsLitterModalOpen] = useState(false);
  const [editingLitterId, setEditingLitterId] = useState<string | null>(null);
  const [litterFormData, setLitterFormData] = useState<Partial<Litter>>({
    code: 'CAMADA-2026-X',
    litterName: 'Camada Estrellas',
    breed: 'Maine Coon',
    birthDate: '10/02/2026',
    readyDate: 'Mayo 2026',
    sire: 'Ch. Gracia Divina Lord Balthazar',
    dam: 'Gracia Divina Lady Genevieve',
    kittensCount: 5,
    availableCount: 3,
    image: '/photos/IMG_4473.jpeg',
    description: 'Excelente camada con morfología de exposición y tipicidad excelente.',
  });

  // Testimonial Form Modal state
  const [isTestimonialModalOpen, setIsTestimonialModalOpen] = useState(false);
  const [editingTestimonialId, setEditingTestimonialId] = useState<string | null>(null);
  const [testimonialFormData, setTestimonialFormData] = useState<Partial<Testimonial>>({
    adopterName: '',
    city: 'Madrid',
    catName: '',
    breed: 'Maine Coon',
    adoptionYear: '2025',
    rating: 5,
    image: '/photos/IMG_4500.jpeg',
    text: '',
  });

  // Settings form state
  const [editableSettings, setEditableSettings] = useState<SiteSettings>(settings);

  // Filter state for kittens tab
  const [kittenFilterQuery, setKittenFilterQuery] = useState('');
  const [photoPickerOpen, setPhotoPickerOpen] = useState(false);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // --- KITTEN ACTIONS ---
  const handleOpenAddKitten = () => {
    setEditingKittenId(null);
    setKittenFormData({
      name: '',
      pedigreeName: 'Gracia Divina ',
      breed: 'Maine Coon',
      gender: 'Macho',
      birthDate: '15/01/2026',
      ageWeeks: 12,
      colorManto: '',
      eyeColor: 'Ámbar cobrizo',
      status: 'Disponible',
      price: settings.defaultPrice || '600 €',
      featured: true,
      images: [LOCAL_AVAILABLE_PHOTOS[0]],
      description: '',
      temperament: ['Juguetón', 'Sociable', 'Cariñoso'],
      sire: {
        name: 'Ch. Gracia Divina Lord Balthazar',
        title: 'Gran Campeón Internacional',
        breed: 'Maine Coon',
        color: 'Black Smoke',
      },
      dam: {
        name: 'Gracia Divina Lady Genevieve',
        title: 'Campeona Nacional',
        breed: 'Maine Coon',
        color: 'Silver Torbie',
      },
      healthTests: {
        hcm: 'Negativo / Libre',
        pkd: 'Negativo / Libre',
        fivFelv: 'Negativo',
        sma: 'Libre N/N',
        microchip: true,
        vaccines: '2 dosis trivalente felina',
        dewormed: true,
        passport: true,
      },
    });
    setIsKittenModalOpen(true);
  };

  const handleOpenEditKitten = (k: Kitten) => {
    setEditingKittenId(k.id);
    setKittenFormData({ ...k });
    setIsKittenModalOpen(true);
  };

  const handleSaveKitten = (e: React.FormEvent) => {
    e.preventDefault();
    if (!kittenFormData.name?.trim()) {
      alert('Por favor ingrese el nombre del cachorro.');
      return;
    }

    if (editingKittenId) {
      // update
      const updated = kittens.map((k) =>
        k.id === editingKittenId ? ({ ...k, ...kittenFormData } as Kitten) : k
      );
      onUpdateKittens(updated);
      showToast(`Cachorro "${kittenFormData.name}" actualizado correctamente.`);
    } else {
      // create
      const newKitten: Kitten = {
        id: `cat-${Date.now()}`,
        name: kittenFormData.name || 'Nuevo Cachorro',
        pedigreeName: kittenFormData.pedigreeName || `Gracia Divina ${kittenFormData.name}`,
        breed: kittenFormData.breed as BreedType,
        gender: kittenFormData.gender as 'Macho' | 'Hembra',
        birthDate: kittenFormData.birthDate || '01/01/2026',
        ageWeeks: Number(kittenFormData.ageWeeks) || 12,
        colorManto: kittenFormData.colorManto || 'Variedad estándar',
        eyeColor: kittenFormData.eyeColor || 'Ámbar',
        status: kittenFormData.status as KittenStatus,
        price: kittenFormData.price || '600 €',
        featured: Boolean(kittenFormData.featured),
        images: kittenFormData.images?.length ? kittenFormData.images : ['/photos/IMG_4465.jpeg'],
        description: kittenFormData.description || 'Cachorro criado en ambiente familiar y libre de jaulas.',
        temperament: kittenFormData.temperament || ['Afectuoso', 'Noble'],
        sire: kittenFormData.sire || {
          name: 'Ch. Gracia Divina Lord Balthazar',
          title: 'Campeón Internacional',
          breed: kittenFormData.breed as string,
          color: 'Smoke',
        },
        dam: kittenFormData.dam || {
          name: 'Gracia Divina Lady Genevieve',
          title: 'Campeona Nacional',
          breed: kittenFormData.breed as string,
          color: 'Classic',
        },
        healthTests: kittenFormData.healthTests || {
          hcm: 'Negativo / Libre',
          pkd: 'Negativo / Libre',
          fivFelv: 'Negativo',
          sma: 'Libre N/N',
          microchip: true,
          vaccines: '2 dosis trivalente felina',
          dewormed: true,
          passport: true,
        },
      };
      onUpdateKittens([newKitten, ...kittens]);
      showToast(`Nuevo cachorro "${newKitten.name}" publicado en la web.`);
    }
    setIsKittenModalOpen(false);
  };

  const handleDeleteKitten = (id: string, name: string) => {
    if (confirm(`¿Está seguro de que desea eliminar al cachorro "${name}" de la web?`)) {
      const updated = kittens.filter((k) => k.id !== id);
      onUpdateKittens(updated);
      showToast(`Cachorro "${name}" eliminado de la web.`);
    }
  };

  const handleToggleKittenStatus = (k: Kitten) => {
    const nextStatus: Record<KittenStatus, KittenStatus> = {
      Disponible: 'Reservado',
      Reservado: 'En Adopción',
      'En Adopción': 'Disponible',
    };
    const newStatus = nextStatus[k.status];
    const updated = kittens.map((item) =>
      item.id === k.id ? { ...item, status: newStatus } : item
    );
    onUpdateKittens(updated);
    showToast(`Estado de "${k.name}" cambiado a ${newStatus}.`);
  };

  // --- LITTERS ACTIONS ---
  const handleOpenAddLitter = () => {
    setEditingLitterId(null);
    setLitterFormData({
      code: `CAMADA-2026-${String.fromCharCode(65 + litters.length)}`,
      litterName: `Camada Letra ${String.fromCharCode(65 + litters.length)}`,
      breed: 'Maine Coon',
      birthDate: '15/02/2026',
      readyDate: 'Mayo 2026',
      sire: 'Ch. Gracia Divina Lord Balthazar',
      dam: 'Gracia Divina Lady Genevieve',
      kittensCount: 5,
      availableCount: 3,
      image: LOCAL_AVAILABLE_PHOTOS[1],
      description: 'Cachorros con excelente tipicidad, estructura ósea robusta y carácter cariñoso.',
    });
    setIsLitterModalOpen(true);
  };

  const handleOpenEditLitter = (l: Litter) => {
    setEditingLitterId(l.id);
    setLitterFormData({ ...l });
    setIsLitterModalOpen(true);
  };

  const handleSaveLitter = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingLitterId) {
      const updated = litters.map((l) =>
        l.id === editingLitterId ? ({ ...l, ...litterFormData } as Litter) : l
      );
      onUpdateLitters(updated);
      showToast('Camada actualizada con éxito.');
    } else {
      const newLitter: Litter = {
        id: `litter-${Date.now()}`,
        code: litterFormData.code || 'CAMADA-NUEVA',
        litterName: litterFormData.litterName || 'Nueva Camada',
        breed: litterFormData.breed as BreedType,
        birthDate: litterFormData.birthDate || '01/02/2026',
        readyDate: litterFormData.readyDate || 'Mayo 2026',
        sire: litterFormData.sire || 'Padre de linaje',
        dam: litterFormData.dam || 'Madre de linaje',
        kittensCount: Number(litterFormData.kittensCount) || 4,
        availableCount: Number(litterFormData.availableCount) || 2,
        image: litterFormData.image || LOCAL_AVAILABLE_PHOTOS[1],
        description: litterFormData.description || 'Camada en socialización.',
      };
      onUpdateLitters([...litters, newLitter]);
      showToast('Nueva camada añadida a la web.');
    }
    setIsLitterModalOpen(false);
  };

  const handleDeleteLitter = (id: string, name: string) => {
    if (confirm(`¿Eliminar la camada "${name}"?`)) {
      onUpdateLitters(litters.filter((l) => l.id !== id));
      showToast('Camada eliminada.');
    }
  };

  // --- TESTIMONIALS ACTIONS ---
  const handleOpenAddTestimonial = () => {
    setEditingTestimonialId(null);
    setTestimonialFormData({
      adopterName: '',
      city: 'Madrid',
      catName: '',
      breed: 'Maine Coon',
      adoptionYear: '2025',
      rating: 5,
      image: LOCAL_AVAILABLE_PHOTOS[4],
      text: '',
    });
    setIsTestimonialModalOpen(true);
  };

  const handleOpenEditTestimonial = (t: Testimonial) => {
    setEditingTestimonialId(t.id);
    setTestimonialFormData({ ...t });
    setIsTestimonialModalOpen(true);
  };

  const handleSaveTestimonial = (e: React.FormEvent) => {
    e.preventDefault();
    if (!testimonialFormData.adopterName || !testimonialFormData.text) {
      alert('Por favor complete el nombre del adoptante y el testimonio.');
      return;
    }
    if (editingTestimonialId) {
      const updated = testimonials.map((t) =>
        t.id === editingTestimonialId ? ({ ...t, ...testimonialFormData } as Testimonial) : t
      );
      onUpdateTestimonials(updated);
      showToast('Testimonio actualizado.');
    } else {
      const newT: Testimonial = {
        id: `t-${Date.now()}`,
        adopterName: testimonialFormData.adopterName,
        city: testimonialFormData.city || 'España',
        catName: testimonialFormData.catName || 'Gatito Feliz',
        breed: testimonialFormData.breed as BreedType,
        adoptionYear: testimonialFormData.adoptionYear || '2025',
        rating: Number(testimonialFormData.rating) || 5,
        image: testimonialFormData.image || LOCAL_AVAILABLE_PHOTOS[4],
        text: testimonialFormData.text,
      };
      onUpdateTestimonials([newT, ...testimonials]);
      showToast('Nuevo testimonio añadido.');
    }
    setIsTestimonialModalOpen(false);
  };

  const handleDeleteTestimonial = (id: string) => {
    if (confirm('¿Eliminar este testimonio?')) {
      onUpdateTestimonials(testimonials.filter((t) => t.id !== id));
      showToast('Testimonio eliminado.');
    }
  };

  // --- SETTINGS ACTIONS ---
  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateSettings(editableSettings);
    showToast('Ajustes globales de la web guardados correctamente.');
  };

  // --- SECURITY & ADMIN USERS ACTIONS ---
  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordChangeError(null);

    if (newPasswordInput !== confirmPasswordInput) {
      setPasswordChangeError('La confirmación de la nueva contraseña no coincide.');
      return;
    }

    const targetEmail = currentUser?.email || 'admin@criaderograciadivina.com';
    const result = updatePassword(targetEmail, currentPasswordInput, newPasswordInput);

    if (result.success) {
      setCurrentPasswordInput('');
      setNewPasswordInput('');
      setConfirmPasswordInput('');
      setAuthorizedUsers(getAuthorizedUsers());
      showToast('¡Contraseña de administrador actualizada con éxito!');
    } else {
      setPasswordChangeError(result.error || 'Error al actualizar la contraseña.');
    }
  };

  const handleAddAdmin = (e: React.FormEvent) => {
    e.preventDefault();
    const result = addAuthorizedUser(newAdminEmail, newAdminPassword, newAdminName, newAdminRole);
    if (result.success) {
      setNewAdminEmail('');
      setNewAdminPassword('');
      setNewAdminName('');
      setAuthorizedUsers(getAuthorizedUsers());
      setShowAddUserModal(false);
      showToast('Nuevo usuario administrador registrado.');
    } else {
      alert(result.error || 'Error al añadir el usuario.');
    }
  };

  const handleRemoveAdmin = (targetEmail: string) => {
    if (confirm(`¿Estás seguro de revocar el acceso administrativo para "${targetEmail}"?`)) {
      const result = removeAuthorizedUser(targetEmail);
      if (result.success) {
        setAuthorizedUsers(getAuthorizedUsers());
        showToast('Acceso revocado.');
      } else {
        alert(result.error || 'No se puede eliminar este usuario.');
      }
    }
  };

  // Filtered kittens for admin view
  const filteredKittens = kittens.filter((k) => {
    const q = kittenFilterQuery.toLowerCase();
    return (
      k.name.toLowerCase().includes(q) ||
      k.breed.toLowerCase().includes(q) ||
      k.status.toLowerCase().includes(q) ||
      k.colorManto.toLowerCase().includes(q)
    );
  });

  return (
    <div className="min-h-screen bg-neutral-100 flex flex-col text-[#111827]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-5 right-5 z-50 bg-[#b91c1c] text-white px-5 py-3 rounded-xl shadow-xl flex items-center gap-3 border border-red-400 text-sm animate-in fade-in slide-in-from-top-4 duration-200">
          <CheckCircle className="w-5 h-5 text-white" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* WordPress-style Top Admin Bar */}
      <div className="bg-[#1e1e1e] text-white px-4 py-2.5 flex items-center justify-between text-xs border-b border-neutral-700 select-none">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded bg-[#b91c1c] flex items-center justify-center font-bold text-white text-xs">
              GD
            </span>
            <span className="font-semibold text-neutral-200 tracking-wide">
              Gracia Divina CMS · Panel de Control
            </span>
          </div>
          <span className="text-neutral-500 hidden sm:inline">|</span>
          <button
            onClick={onExitAdmin}
            className="flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5 text-red-400" />
            <span>Ver Sitio Web en Vivo</span>
          </button>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 bg-neutral-800/90 rounded border border-neutral-700 text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-neutral-400">Usuario:</span>
            <strong className="text-white font-mono">{currentUser?.email || 'admin@criaderograciadivina.com'}</strong>
          </div>
          <button
            onClick={onExitAdmin}
            className="px-3 py-1 bg-neutral-700 hover:bg-neutral-600 text-neutral-200 font-medium rounded transition-colors cursor-pointer"
          >
            Ver Sitio
          </button>
          <button
            onClick={onLogout}
            className="flex items-center gap-1.5 px-3 py-1 bg-[#b91c1c] hover:bg-[#991b1b] text-white font-medium rounded transition-colors cursor-pointer"
            title="Cerrar sesión administrativa"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Cerrar Sesión</span>
          </button>
        </div>
      </div>

      {/* Main Admin Body */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Sidebar Nav (WordPress Style) */}
        <aside className="w-full md:w-64 bg-[#23282d] text-neutral-300 p-3 shrink-0 flex flex-col justify-between">
          <div className="space-y-1">
            <div className="px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-neutral-400">
              Gestión de Contenidos
            </div>

            <button
              onClick={() => setActiveTab('dashboard')}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded text-xs font-medium transition-colors cursor-pointer ${
                activeTab === 'dashboard'
                  ? 'bg-[#b91c1c] text-white font-semibold'
                  : 'hover:bg-[#2c3338] text-neutral-300'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Escritorio / Resumen</span>
            </button>

            <button
              onClick={() => setActiveTab('kittens')}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded text-xs font-medium transition-colors cursor-pointer ${
                activeTab === 'kittens'
                  ? 'bg-[#b91c1c] text-white font-semibold'
                  : 'hover:bg-[#2c3338] text-neutral-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <Cat className="w-4 h-4" />
                <span>Cachorros ({kittens.length})</span>
              </div>
              <span className="px-1.5 py-0.5 rounded text-[10px] bg-red-950/80 text-red-300 font-bold">
                Live
              </span>
            </button>

            <button
              onClick={() => setActiveTab('litters')}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded text-xs font-medium transition-colors cursor-pointer ${
                activeTab === 'litters'
                  ? 'bg-[#b91c1c] text-white font-semibold'
                  : 'hover:bg-[#2c3338] text-neutral-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <Layers className="w-4 h-4" />
                <span>Camadas ({litters.length})</span>
              </div>
            </button>

            <button
              onClick={() => setActiveTab('testimonials')}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded text-xs font-medium transition-colors cursor-pointer ${
                activeTab === 'testimonials'
                  ? 'bg-[#b91c1c] text-white font-semibold'
                  : 'hover:bg-[#2c3338] text-neutral-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <MessageSquareQuote className="w-4 h-4" />
                <span>Testimonios ({testimonials.length})</span>
              </div>
            </button>

            <button
              onClick={() => setActiveTab('leads')}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded text-xs font-medium transition-colors cursor-pointer ${
                activeTab === 'leads'
                  ? 'bg-[#b91c1c] text-white font-semibold'
                  : 'hover:bg-[#2c3338] text-neutral-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <Inbox className="w-4 h-4" />
                <span>Solicitudes Adopción</span>
              </div>
              {leads.filter((l) => l.status === 'Nuevo').length > 0 && (
                <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-[#b91c1c] text-white font-bold">
                  {leads.filter((l) => l.status === 'Nuevo').length}
                </span>
              )}
            </button>

            <div className="px-3 pt-4 pb-1 text-[10px] font-bold uppercase tracking-wider text-neutral-400">
              Configuración Web
            </div>

            <button
              onClick={() => setActiveTab('settings')}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded text-xs font-medium transition-colors cursor-pointer ${
                activeTab === 'settings'
                  ? 'bg-[#b91c1c] text-white font-semibold'
                  : 'hover:bg-[#2c3338] text-neutral-300'
              }`}
            >
              <Settings className="w-4 h-4" />
              <span>Ajustes Generales Web</span>
            </button>

            <button
              onClick={() => setActiveTab('security')}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded text-xs font-medium transition-colors cursor-pointer ${
                activeTab === 'security'
                  ? 'bg-[#b91c1c] text-white font-semibold'
                  : 'hover:bg-[#2c3338] text-neutral-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Seguridad & Accesos</span>
              </div>
              <span className="px-1.5 py-0.5 rounded text-[10px] bg-emerald-950 text-emerald-300 font-bold">
                {authorizedUsers.length}
              </span>
            </button>
          </div>

          <div className="pt-4 border-t border-neutral-700/60 text-[11px] text-neutral-400 space-y-2.5">
            {/* Authenticated user session card */}
            <div className="p-2.5 bg-neutral-800/90 rounded-lg border border-neutral-700/80">
              <div className="flex items-center gap-1.5 text-neutral-200 font-bold mb-1">
                <UserCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="truncate">Sesión Autorizada</span>
              </div>
              <div className="text-[11px] text-neutral-300 font-mono truncate" title={currentUser?.email || 'admin@criaderograciadivina.com'}>
                {currentUser?.email || 'admin@criaderograciadivina.com'}
              </div>
              <div className="text-[10px] text-neutral-400 uppercase tracking-wider mt-0.5">
                Rol: <span className="text-red-300 font-bold">{currentUser?.role || 'Superadmin'}</span>
              </div>
            </div>

            <button
              onClick={onLogout}
              className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded bg-red-950/80 hover:bg-red-900 text-red-200 hover:text-white border border-red-800/60 transition-colors cursor-pointer text-xs font-bold"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Cerrar Sesión</span>
            </button>

            <button
              onClick={() => {
                if (confirm('¿Restablecer todos los datos del sitio a los valores iniciales predeterminados?')) {
                  onResetDefaults();
                  showToast('Sitio web restaurado a los valores predeterminados.');
                }
              }}
              className="w-full flex items-center justify-center gap-1.5 px-3 py-1.5 rounded bg-neutral-800/60 hover:bg-neutral-800 text-neutral-400 hover:text-neutral-300 transition-colors cursor-pointer text-[10px]"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Restaurar Fábrica</span>
            </button>
          </div>
        </aside>

        {/* Content Area */}
        <main className="flex-1 p-4 sm:p-8 bg-neutral-50 overflow-y-auto">
          {/* TAB: DASHBOARD */}
          {activeTab === 'dashboard' && (
            <div className="space-y-8 max-w-6xl">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold font-serif text-neutral-900">
                  Panel de Administración de Criadero Gracia Divina
                </h1>
                <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                  Control total sobre cachorros, camadas, reseñas y parámetros del sitio web en tiempo real.
                </p>
              </div>

              {/* KPI Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-5 rounded-xl border border-neutral-200 shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase text-neutral-500">Cachorros en Web</span>
                    <Cat className="w-5 h-5 text-[#b91c1c]" />
                  </div>
                  <div className="text-3xl font-bold font-serif text-neutral-900 mt-2">
                    {kittens.length}
                  </div>
                  <div className="text-xs text-neutral-600 mt-1 flex items-center gap-2">
                    <span className="text-[#b91c1c] font-semibold">
                      {kittens.filter((k) => k.status === 'Disponible').length} Disponibles
                    </span>
                    <span>·</span>
                    <span>{kittens.filter((k) => k.status === 'Reservado').length} Reservados</span>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-neutral-200 shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase text-neutral-500">Camadas Activas</span>
                    <Layers className="w-5 h-5 text-[#b91c1c]" />
                  </div>
                  <div className="text-3xl font-bold font-serif text-neutral-900 mt-2">
                    {litters.length}
                  </div>
                  <div className="text-xs text-neutral-600 mt-1">
                    Entrega Primavera 2026
                  </div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-neutral-200 shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase text-neutral-500">Testimonios</span>
                    <MessageSquareQuote className="w-5 h-5 text-[#b91c1c]" />
                  </div>
                  <div className="text-3xl font-bold font-serif text-neutral-900 mt-2">
                    {testimonials.length}
                  </div>
                  <div className="text-xs text-neutral-600 mt-1">
                    Calificación media 5.0 ★
                  </div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-neutral-200 shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase text-neutral-500">Solicitudes Recibidas</span>
                    <Inbox className="w-5 h-5 text-[#b91c1c]" />
                  </div>
                  <div className="text-3xl font-bold font-serif text-neutral-900 mt-2">
                    {leads.length}
                  </div>
                  <div className="text-xs text-[#b91c1c] font-semibold mt-1">
                    {leads.filter((l) => l.status === 'Nuevo').length} pendientes de contacto
                  </div>
                </div>
              </div>

              {/* Quick Actions Bar */}
              <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-xs space-y-4">
                <h3 className="font-bold text-sm text-neutral-900 uppercase tracking-wide">
                  Acciones Rápidas
                </h3>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => {
                      setActiveTab('kittens');
                      handleOpenAddKitten();
                    }}
                    className="flex items-center gap-2 px-4 py-2.5 bg-[#b91c1c] hover:bg-[#991b1b] text-white text-xs font-semibold rounded-lg shadow-xs transition-colors cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Añadir Nuevo Cachorro</span>
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab('litters');
                      handleOpenAddLitter();
                    }}
                    className="flex items-center gap-2 px-4 py-2.5 bg-neutral-800 hover:bg-neutral-900 text-white text-xs font-semibold rounded-lg shadow-xs transition-colors cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Publicar Camada</span>
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab('testimonials');
                      handleOpenAddTestimonial();
                    }}
                    className="flex items-center gap-2 px-4 py-2.5 bg-neutral-800 hover:bg-neutral-900 text-white text-xs font-semibold rounded-lg shadow-xs transition-colors cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Añadir Testimonio</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('settings')}
                    className="flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-neutral-50 text-neutral-800 text-xs font-semibold rounded-lg border border-neutral-300 transition-colors cursor-pointer"
                  >
                    <Settings className="w-4 h-4 text-[#b91c1c]" />
                    <span>Editar Textos & Precios</span>
                  </button>
                  <button
                    onClick={onExitAdmin}
                    className="flex items-center gap-2 px-4 py-2.5 bg-red-50 hover:bg-red-100 text-[#b91c1c] text-xs font-semibold rounded-lg border border-red-200 transition-colors cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Ver Cambios en la Web</span>
                  </button>
                </div>
              </div>

              {/* Recent Leads Preview */}
              <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-sm text-neutral-900 uppercase tracking-wide">
                    Últimas Solicitudes de Adopción
                  </h3>
                  <button
                    onClick={() => setActiveTab('leads')}
                    className="text-xs text-[#b91c1c] hover:underline font-semibold cursor-pointer"
                  >
                    Ver todas ({leads.length})
                  </button>
                </div>

                {leads.length === 0 ? (
                  <p className="text-xs text-neutral-500 italic py-4">
                    Aún no hay solicitudes enviadas a través del cuestionario web.
                  </p>
                ) : (
                  <div className="divide-y divide-neutral-100">
                    {leads.slice(0, 3).map((lead) => (
                      <div key={lead.id} className="py-3 flex items-center justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-xs text-neutral-900">
                              {lead.fullName}
                            </span>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-50 text-[#b91c1c] font-medium border border-red-100">
                              {lead.breed}
                            </span>
                          </div>
                          <p className="text-[11px] text-neutral-500 mt-0.5">
                            {lead.city} · {lead.email} · {lead.phone}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-[11px] px-2.5 py-1 rounded font-medium ${
                              lead.status === 'Nuevo'
                                ? 'bg-red-100 text-[#b91c1c] font-bold'
                                : lead.status === 'Contactado'
                                ? 'bg-amber-100 text-amber-900'
                                : 'bg-emerald-100 text-emerald-900'
                            }`}
                          >
                            {lead.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB: KITTENS (Add, Edit, Remove, Toggle Status) */}
          {activeTab === 'kittens' && (
            <div className="space-y-6 max-w-6xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-200 pb-4">
                <div>
                  <h1 className="text-2xl font-bold font-serif text-neutral-900">
                    Gestión de Cachorros
                  </h1>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-0.5">
                    Añada, edite, cambie de estado o elimine cachorros visibles en el catálogo general.
                  </p>
                </div>
                <button
                  onClick={handleOpenAddKitten}
                  className="flex items-center gap-2 px-4 py-2 bg-[#b91c1c] hover:bg-[#991b1b] text-white text-xs font-semibold rounded-lg shadow-sm cursor-pointer self-start sm:self-auto"
                >
                  <Plus className="w-4 h-4" />
                  <span>Añadir Cachorro</span>
                </button>
              </div>

              {/* Filter & Search Bar */}
              <div className="bg-white p-3.5 rounded-xl border border-neutral-200 flex items-center justify-between gap-4">
                <div className="relative flex-1 max-w-md">
                  <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={kittenFilterQuery}
                    onChange={(e) => setKittenFilterQuery(e.target.value)}
                    placeholder="Buscar cachorro por nombre, raza o color..."
                    className="w-full pl-9 pr-3 py-1.5 text-xs bg-neutral-50 rounded-lg border border-neutral-200 focus:outline-none focus:border-[#b91c1c]"
                  />
                </div>
                <span className="text-xs text-neutral-500">
                  Total: <strong>{filteredKittens.length}</strong> cachorros
                </span>
              </div>

              {/* Table of Kittens */}
              <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs text-neutral-700">
                    <thead className="bg-neutral-100/80 text-neutral-600 uppercase font-semibold text-[10px] tracking-wider border-b border-neutral-200">
                      <tr>
                        <th className="py-3 px-4">Foto</th>
                        <th className="py-3 px-4">Nombre & Pedigrí</th>
                        <th className="py-3 px-4">Raza & Sexo</th>
                        <th className="py-3 px-4">Color Manto</th>
                        <th className="py-3 px-4">Precio</th>
                        <th className="py-3 px-4">Estado (Clic para alternar)</th>
                        <th className="py-3 px-4 text-right">Acciones</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-100">
                      {filteredKittens.map((k) => (
                        <tr key={k.id} className="hover:bg-red-50/30 transition-colors">
                          <td className="py-2.5 px-4">
                            <img
                              src={k.images[0]}
                              alt={k.name}
                              className="w-12 h-12 rounded-lg object-cover border border-neutral-200"
                            />
                          </td>
                          <td className="py-2.5 px-4">
                            <div className="font-bold text-neutral-900 text-sm">{k.name}</div>
                            <div className="text-[11px] text-neutral-500 truncate max-w-[180px]">
                              {k.pedigreeName}
                            </div>
                            {k.featured && (
                              <span className="inline-block mt-0.5 text-[9px] uppercase px-1.5 py-0.2 bg-red-100 text-[#b91c1c] font-bold rounded">
                                Destacado
                              </span>
                            )}
                          </td>
                          <td className="py-2.5 px-4">
                            <div className="font-medium text-neutral-900">{k.breed}</div>
                            <div className="text-neutral-500">{k.gender} · {k.ageWeeks} sem.</div>
                          </td>
                          <td className="py-2.5 px-4 text-neutral-600 max-w-[150px] truncate">
                            {k.colorManto}
                          </td>
                          <td className="py-2.5 px-4 font-bold text-[#b91c1c]">
                            {k.price}
                          </td>
                          <td className="py-2.5 px-4">
                            <button
                              onClick={() => handleToggleKittenStatus(k)}
                              title="Haga clic para cambiar estado"
                              className={`px-2.5 py-1 rounded-full text-[11px] font-semibold cursor-pointer border transition-all ${
                                k.status === 'Disponible'
                                  ? 'bg-emerald-50 text-emerald-800 border-emerald-300 hover:bg-emerald-100'
                                  : k.status === 'Reservado'
                                  ? 'bg-red-50 text-[#b91c1c] border-red-300 hover:bg-red-100'
                                  : 'bg-amber-50 text-amber-800 border-amber-300 hover:bg-amber-100'
                              }`}
                            >
                              ● {k.status}
                            </button>
                          </td>
                          <td className="py-2.5 px-4 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              <button
                                onClick={() => handleOpenEditKitten(k)}
                                className="p-1.5 text-neutral-600 hover:text-[#b91c1c] hover:bg-red-50 rounded transition-colors cursor-pointer"
                                title="Editar ficha"
                              >
                                <Edit3 className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleDeleteKitten(k.id, k.name)}
                                className="p-1.5 text-neutral-600 hover:text-red-700 hover:bg-red-50 rounded transition-colors cursor-pointer"
                                title="Eliminar de la web"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB: LITTERS */}
          {activeTab === 'litters' && (
            <div className="space-y-6 max-w-6xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-200 pb-4">
                <div>
                  <h1 className="text-2xl font-bold font-serif text-neutral-900">
                    Gestión de Camadas
                  </h1>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-0.5">
                    Planifique y anuncie próximas camadas para reserva anticipada.
                  </p>
                </div>
                <button
                  onClick={handleOpenAddLitter}
                  className="flex items-center gap-2 px-4 py-2 bg-[#b91c1c] hover:bg-[#991b1b] text-white text-xs font-semibold rounded-lg shadow-sm cursor-pointer self-start sm:self-auto"
                >
                  <Plus className="w-4 h-4" />
                  <span>Publicar Nueva Camada</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {litters.map((litter) => (
                  <div
                    key={litter.id}
                    className="bg-white rounded-xl border border-neutral-200 p-5 space-y-4 shadow-xs flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-neutral-100">
                        <img
                          src={litter.image}
                          alt={litter.litterName}
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute top-2 left-2 px-2 py-0.5 text-[10px] font-bold bg-[#b91c1c] text-white rounded">
                          {litter.breed}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-[#b91c1c] uppercase">
                          {litter.code}
                        </span>
                        <h3 className="text-base font-bold text-neutral-900">{litter.litterName}</h3>
                        <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                          {litter.description}
                        </p>
                      </div>
                      <div className="text-xs space-y-1 pt-2 border-t border-neutral-100 text-neutral-600">
                        <div>Nacimiento: <strong>{litter.birthDate}</strong></div>
                        <div>Entrega estimada: <strong className="text-[#b91c1c]">{litter.readyDate}</strong></div>
                        <div>Disponibles: <strong>{litter.availableCount} de {litter.kittensCount}</strong></div>
                        <div className="text-[11px] text-neutral-500">Padres: {litter.sire} × {litter.dam}</div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-neutral-100 flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleOpenEditLitter(litter)}
                        className="px-3 py-1.5 text-xs font-semibold text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded cursor-pointer flex items-center gap-1"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                        <span>Editar</span>
                      </button>
                      <button
                        onClick={() => handleDeleteLitter(litter.id, litter.litterName)}
                        className="px-3 py-1.5 text-xs font-semibold text-red-700 bg-red-50 hover:bg-red-100 rounded cursor-pointer flex items-center gap-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Eliminar</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: TESTIMONIALS */}
          {activeTab === 'testimonials' && (
            <div className="space-y-6 max-w-6xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-200 pb-4">
                <div>
                  <h1 className="text-2xl font-bold font-serif text-neutral-900">
                    Testimonios y Reseñas de Familias
                  </h1>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-0.5">
                    Gestione las reseñas visibles en la sección "Familias Felices".
                  </p>
                </div>
                <button
                  onClick={handleOpenAddTestimonial}
                  className="flex items-center gap-2 px-4 py-2 bg-[#b91c1c] hover:bg-[#991b1b] text-white text-xs font-semibold rounded-lg shadow-sm cursor-pointer self-start sm:self-auto"
                >
                  <Plus className="w-4 h-4" />
                  <span>Añadir Testimonio</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials.map((t) => (
                  <div
                    key={t.id}
                    className="bg-white rounded-xl border border-neutral-200 p-5 space-y-3 shadow-xs flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={t.image}
                          alt={t.catName}
                          className="w-14 h-14 rounded-lg object-cover border border-neutral-200"
                        />
                        <div>
                          <h4 className="font-bold text-sm text-neutral-900">{t.adopterName}</h4>
                          <p className="text-xs text-neutral-500">{t.city} · Adopción {t.adoptionYear}</p>
                          <div className="flex items-center gap-0.5 text-[#b91c1c] mt-0.5">
                            {[...Array(t.rating)].map((_, i) => (
                              <Star key={i} className="w-3.5 h-3.5 fill-[#b91c1c]" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-neutral-600 italic leading-relaxed">
                        "{t.text}"
                      </p>
                      <div className="text-[11px] text-neutral-500">
                        Gatito: <strong className="text-neutral-800">{t.catName}</strong> ({t.breed})
                      </div>
                    </div>

                    <div className="pt-3 border-t border-neutral-100 flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleOpenEditTestimonial(t)}
                        className="px-3 py-1.5 text-xs font-semibold text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded cursor-pointer flex items-center gap-1"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                        <span>Editar</span>
                      </button>
                      <button
                        onClick={() => handleDeleteTestimonial(t.id)}
                        className="px-3 py-1.5 text-xs font-semibold text-red-700 bg-red-50 hover:bg-red-100 rounded cursor-pointer flex items-center gap-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Eliminar</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: LEADS / SOLICITUDES */}
          {activeTab === 'leads' && (
            <div className="space-y-6 max-w-6xl">
              <div className="border-b border-neutral-200 pb-4">
                <h1 className="text-2xl font-bold font-serif text-neutral-900">
                  Bandeja de Solicitudes de Adopción
                </h1>
                <p className="text-xs sm:text-sm text-neutral-600 mt-0.5">
                  Respuestas enviadas por adoptantes a través del cuestionario oficial.
                </p>
              </div>

              {leads.length === 0 ? (
                <div className="bg-white rounded-xl border border-neutral-200 p-12 text-center space-y-3">
                  <Inbox className="w-10 h-10 text-neutral-400 mx-auto" />
                  <h3 className="font-bold text-base text-neutral-800">
                    No hay solicitudes pendientes
                  </h3>
                  <p className="text-xs text-neutral-500 max-w-md mx-auto">
                    Cuando una familia complete el formulario de adopción en la web, aparecerá aquí automáticamente para su seguimiento.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {leads.map((lead) => (
                    <div
                      key={lead.id}
                      className="bg-white rounded-xl border border-neutral-200 p-5 space-y-4 shadow-xs"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-100 pb-3">
                        <div>
                          <div className="flex items-center gap-3">
                            <h3 className="font-bold text-base text-neutral-900">
                              {lead.fullName}
                            </h3>
                            <span className="text-xs px-2.5 py-0.5 rounded-full bg-red-50 text-[#b91c1c] font-semibold border border-red-100">
                              Raza: {lead.breed}
                            </span>
                          </div>
                          <p className="text-xs text-neutral-500 mt-0.5">
                            Fecha de solicitud: {lead.submittedAt} · Ciudad: {lead.city}
                          </p>
                        </div>

                        {/* Status selector */}
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-neutral-500">Estado:</span>
                          <select
                            value={lead.status}
                            onChange={(e) => onUpdateLeadStatus(lead.id, e.target.value as any)}
                            className="text-xs font-semibold px-2.5 py-1.5 rounded-lg border border-neutral-300 bg-white"
                          >
                            <option value="Nuevo">Nuevo</option>
                            <option value="Contactado">Contactado</option>
                            <option value="Aprobado">Aprobado</option>
                            <option value="Archivado">Archivado</option>
                          </select>
                          <button
                            onClick={() => {
                              if (confirm('¿Eliminar esta solicitud?')) {
                                onDeleteLead(lead.id);
                                showToast('Solicitud eliminada.');
                              }
                            }}
                            className="p-1.5 text-neutral-400 hover:text-red-700 cursor-pointer"
                            title="Eliminar solicitud"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Lead Details Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                        <div className="p-3 bg-neutral-50 rounded-lg">
                          <span className="text-neutral-500 block">Tipo de vivienda:</span>
                          <strong className="text-neutral-900">{lead.housingType}</strong>
                        </div>
                        <div className="p-3 bg-neutral-50 rounded-lg">
                          <span className="text-neutral-500 block">Experiencia previa:</span>
                          <strong className="text-neutral-900">{lead.experience}</strong>
                        </div>
                        <div className="p-3 bg-neutral-50 rounded-lg">
                          <span className="text-neutral-500 block">Otras mascotas:</span>
                          <strong className="text-neutral-900">{lead.otherPets}</strong>
                        </div>
                      </div>

                      {lead.notes && (
                        <div className="p-3 bg-red-50/40 rounded-lg border border-red-100 text-xs text-neutral-700">
                          <span className="font-semibold text-[#b91c1c] block mb-0.5">Mensaje del adoptante:</span>
                          "{lead.notes}"
                        </div>
                      )}

                      {/* Action buttons */}
                      <div className="flex flex-wrap items-center gap-3 pt-2">
                        <a
                          href={`mailto:${lead.email}?cc=${settings.contactEmail}&subject=Criadero Gracia Divina - Solicitud de Adopción de Cachorro`}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-[#b91c1c] hover:bg-[#991b1b] text-white rounded transition-colors"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>Responder por Email ({lead.email})</span>
                        </a>
                        <a
                          href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}?text=Hola%20${encodeURIComponent(lead.fullName)},%20le%20escribimos%20desde%20Criadero%20Gracia%20Divina%20en%20referencia%20a%20su%20solicitud%20de%20adopci%C3%B3n.`}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-[#25D366] hover:bg-[#20ba5a] text-white rounded transition-colors"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          <span>Contactar WhatsApp ({lead.phone})</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB: SETTINGS (WordPress Customizer Style) */}
          {activeTab === 'settings' && (
            <div className="space-y-6 max-w-4xl">
              <div className="border-b border-neutral-200 pb-4">
                <h1 className="text-2xl font-bold font-serif text-neutral-900">
                  Ajustes Generales del Sitio Web
                </h1>
                <p className="text-xs sm:text-sm text-neutral-600 mt-0.5">
                  Modifique la información corporativa, correo receptor de adopciones, precios y avisos en vivo.
                </p>
              </div>

              <form onSubmit={handleSaveSettings} className="bg-white p-6 sm:p-8 rounded-xl border border-neutral-200 shadow-xs space-y-6">
                {/* Brand & Title */}
                <div className="space-y-4">
                  <h3 className="font-bold text-sm text-neutral-900 uppercase tracking-wide border-b pb-2">
                    1. Identidad del Sitio
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">
                        Nombre del Criadero
                      </label>
                      <input
                        type="text"
                        value={editableSettings.siteTitle}
                        onChange={(e) => setEditableSettings({ ...editableSettings, siteTitle: e.target.value })}
                        className="w-full px-3 py-2 text-xs bg-white rounded border border-neutral-300 focus:outline-none focus:border-[#b91c1c]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">
                        Subtítulo / Eslogan
                      </label>
                      <input
                        type="text"
                        value={editableSettings.siteSubtitle}
                        onChange={(e) => setEditableSettings({ ...editableSettings, siteSubtitle: e.target.value })}
                        className="w-full px-3 py-2 text-xs bg-white rounded border border-neutral-300 focus:outline-none focus:border-[#b91c1c]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Barra Superior de Aviso / Anuncio (Cinta Roja)
                    </label>
                    <input
                      type="text"
                      value={editableSettings.announcementText}
                      onChange={(e) => setEditableSettings({ ...editableSettings, announcementText: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-white rounded border border-neutral-300 focus:outline-none focus:border-[#b91c1c]"
                    />
                  </div>
                </div>

                {/* Hero Header texts */}
                <div className="space-y-4">
                  <h3 className="font-bold text-sm text-neutral-900 uppercase tracking-wide border-b pb-2">
                    2. Portada & Cabecera Principal
                  </h3>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Titular Principal de Portada (Hero Headline)
                    </label>
                    <input
                      type="text"
                      value={editableSettings.heroHeadline}
                      onChange={(e) => setEditableSettings({ ...editableSettings, heroHeadline: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-white rounded border border-neutral-300 focus:outline-none focus:border-[#b91c1c]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Párrafo Descriptivo de Portada
                    </label>
                    <textarea
                      rows={2}
                      value={editableSettings.heroSubtitle}
                      onChange={(e) => setEditableSettings({ ...editableSettings, heroSubtitle: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-white rounded border border-neutral-300 focus:outline-none focus:border-[#b91c1c]"
                    />
                  </div>
                </div>

                {/* Contact & Official Email */}
                <div className="space-y-4">
                  <h3 className="font-bold text-sm text-neutral-900 uppercase tracking-wide border-b pb-2">
                    3. Contacto & Envíos de Adopción
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">
                        Correo Receptor de Adopciones *
                      </label>
                      <input
                        type="email"
                        value={editableSettings.contactEmail}
                        onChange={(e) => setEditableSettings({ ...editableSettings, contactEmail: e.target.value })}
                        className="w-full px-3 py-2 text-xs bg-white rounded border border-neutral-300 focus:outline-none focus:border-[#b91c1c] font-semibold text-[#b91c1c]"
                      />
                      <p className="text-[10px] text-neutral-500 mt-1">
                        Todas las solicitudes y avisos del sitio se canalizan a esta dirección.
                      </p>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">
                        Teléfono / WhatsApp Concierge
                      </label>
                      <input
                        type="text"
                        value={editableSettings.whatsappNumber}
                        onChange={(e) => setEditableSettings({ ...editableSettings, whatsappNumber: e.target.value })}
                        className="w-full px-3 py-2 text-xs bg-white rounded border border-neutral-300 focus:outline-none focus:border-[#b91c1c]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">
                        Ubicación del Criadero
                      </label>
                      <input
                        type="text"
                        value={editableSettings.catteryLocation}
                        onChange={(e) => setEditableSettings({ ...editableSettings, catteryLocation: e.target.value })}
                        className="w-full px-3 py-2 text-xs bg-white rounded border border-neutral-300 focus:outline-none focus:border-[#b91c1c]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">
                        Precio Base de Adopción
                      </label>
                      <input
                        type="text"
                        value={editableSettings.defaultPrice}
                        onChange={(e) => setEditableSettings({ ...editableSettings, defaultPrice: e.target.value })}
                        className="w-full px-3 py-2 text-xs bg-white rounded border border-neutral-300 focus:outline-none focus:border-[#b91c1c] font-bold text-[#b91c1c]"
                      />
                    </div>
                  </div>
                </div>

                {/* Federations & Registry */}
                <div className="space-y-4">
                  <h3 className="font-bold text-sm text-neutral-900 uppercase tracking-wide border-b pb-2">
                    4. Afiliaciones & Registros Oficiales
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">
                        Afiliación WCF
                      </label>
                      <input
                        type="text"
                        value={editableSettings.wcfAffiliation}
                        onChange={(e) => setEditableSettings({ ...editableSettings, wcfAffiliation: e.target.value })}
                        className="w-full px-3 py-2 text-xs bg-white rounded border border-neutral-300 focus:outline-none focus:border-[#b91c1c]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">
                        Afiliación ASFE / FIFe
                      </label>
                      <input
                        type="text"
                        value={editableSettings.asfeAffiliation}
                        onChange={(e) => setEditableSettings({ ...editableSettings, asfeAffiliation: e.target.value })}
                        className="w-full px-3 py-2 text-xs bg-white rounded border border-neutral-300 focus:outline-none focus:border-[#b91c1c]"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => {
                      if (confirm('¿Restablecer ajustes a los valores iniciales?')) {
                        onResetDefaults();
                        showToast('Ajustes restablecidos.');
                      }
                    }}
                    className="px-4 py-2 text-xs text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded transition-colors cursor-pointer"
                  >
                    Restablecer Valores Iniciales
                  </button>

                  <button
                    type="submit"
                    className="flex items-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-[#b91c1c] hover:bg-[#991b1b] rounded-lg shadow-sm transition-colors cursor-pointer"
                  >
                    <Save className="w-4 h-4" />
                    <span>Guardar Ajustes en Vivo</span>
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* TAB: SECURITY & AUTHORIZED USERS */}
          {activeTab === 'security' && (
            <div className="space-y-6 max-w-4xl">
              <div className="border-b border-neutral-200 pb-4">
                <h1 className="text-2xl font-bold font-serif text-neutral-900 flex items-center gap-2.5">
                  <ShieldCheck className="w-6 h-6 text-[#b91c1c]" />
                  <span>Seguridad & Administradores Autorizados</span>
                </h1>
                <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                  Gestiona las credenciales de acceso, contraseñas y cuentas que tienen permiso para acceder a este panel de control.
                </p>
              </div>

              {/* Card 1: Change Password for Current Admin */}
              <div className="bg-white p-6 sm:p-8 rounded-xl border border-neutral-200 shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b pb-3">
                  <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-neutral-800">
                    <Key className="w-4 h-4 text-[#b91c1c]" />
                    <span>Cambiar Mi Contraseña de Administrador</span>
                  </div>
                  <span className="text-xs font-mono text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded">
                    {currentUser?.email || 'admin@criaderograciadivina.com'}
                  </span>
                </div>

                {passwordChangeError && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{passwordChangeError}</span>
                  </div>
                )}

                <form onSubmit={handleChangePassword} className="space-y-4 max-w-lg text-xs">
                  <div>
                    <label className="block font-semibold text-neutral-700 mb-1">
                      Contraseña Actual
                    </label>
                    <input
                      type="password"
                      required
                      value={currentPasswordInput}
                      onChange={(e) => setCurrentPasswordInput(e.target.value)}
                      placeholder="Introduce la contraseña actual"
                      className="w-full px-3 py-2 bg-white rounded border border-neutral-300 focus:border-[#b91c1c] outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold text-neutral-700 mb-1">
                        Nueva Contraseña (mín. 6 caracteres)
                      </label>
                      <input
                        type="password"
                        required
                        value={newPasswordInput}
                        onChange={(e) => setNewPasswordInput(e.target.value)}
                        placeholder="Nueva contraseña"
                        className="w-full px-3 py-2 bg-white rounded border border-neutral-300 focus:border-[#b91c1c] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-neutral-700 mb-1">
                        Confirmar Nueva Contraseña
                      </label>
                      <input
                        type="password"
                        required
                        value={confirmPasswordInput}
                        onChange={(e) => setConfirmPasswordInput(e.target.value)}
                        placeholder="Repetir nueva contraseña"
                        className="w-full px-3 py-2 bg-white rounded border border-neutral-300 focus:border-[#b91c1c] outline-none"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="flex items-center gap-2 px-5 py-2.5 font-bold text-xs text-white bg-[#b91c1c] hover:bg-[#991b1b] rounded-lg transition-colors cursor-pointer shadow-xs"
                    >
                      <Lock className="w-3.5 h-3.5" />
                      <span>Actualizar Mi Contraseña</span>
                    </button>
                  </div>
                </form>
              </div>

              {/* Card 2: Authorized Administrators List */}
              <div className="bg-white p-6 sm:p-8 rounded-xl border border-neutral-200 shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b pb-3">
                  <div>
                    <h3 className="font-bold text-sm text-neutral-900 uppercase tracking-wide">
                      Cuentas de Administrador Autorizadas ({authorizedUsers.length})
                    </h3>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      Solo los usuarios listados a continuación pueden iniciar sesión en este panel.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowAddUserModal(true)}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#1e1e1e] hover:bg-black rounded-lg transition-colors cursor-pointer shadow-xs"
                  >
                    <UserPlus className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Añadir Administrador</span>
                  </button>
                </div>

                <div className="divide-y divide-neutral-100">
                  {authorizedUsers.map((user) => (
                    <div key={user.email} className="py-3 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-9 h-9 rounded-full bg-red-100 text-[#b91c1c] font-bold text-xs flex items-center justify-center shrink-0">
                          {user.name.charAt(0).toUpperCase()}
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-neutral-900 text-xs truncate">{user.name}</span>
                            <span className="px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-neutral-100 text-neutral-600">
                              {user.role}
                            </span>
                          </div>
                          <div className="text-xs text-neutral-500 font-mono truncate">{user.email}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {authorizedUsers.length > 1 ? (
                          <button
                            type="button"
                            onClick={() => handleRemoveAdmin(user.email)}
                            className="p-1.5 text-neutral-400 hover:text-red-600 rounded transition-colors cursor-pointer"
                            title="Revocar acceso"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        ) : (
                          <span className="text-[10px] text-neutral-400 italic">Único administrador</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* MODAL: ADD / EDIT KITTEN */}
      {isKittenModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-5 my-auto max-h-[90vh] overflow-y-auto border border-neutral-300 shadow-2xl animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-serif text-xl font-bold text-neutral-900">
                {editingKittenId ? 'Editar Ficha del Cachorro' : 'Añadir Nuevo Cachorro a la Web'}
              </h3>
              <button
                onClick={() => setIsKittenModalOpen(false)}
                className="p-1 text-neutral-400 hover:text-neutral-700 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveKitten} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Nombre Familiar *
                  </label>
                  <input
                    type="text"
                    required
                    value={kittenFormData.name || ''}
                    onChange={(e) => setKittenFormData({ ...kittenFormData, name: e.target.value })}
                    placeholder="Ej. Balthazar, Luna, Apolo..."
                    className="w-full px-3 py-2 text-xs bg-white rounded border border-neutral-300 focus:outline-none focus:border-[#b91c1c]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Nombre Oficial de Pedigrí
                  </label>
                  <input
                    type="text"
                    value={kittenFormData.pedigreeName || ''}
                    onChange={(e) => setKittenFormData({ ...kittenFormData, pedigreeName: e.target.value })}
                    placeholder="Ej. Gracia Divina Balthazar Rex"
                    className="w-full px-3 py-2 text-xs bg-white rounded border border-neutral-300 focus:outline-none focus:border-[#b91c1c]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">Raza</label>
                  <select
                    value={kittenFormData.breed || 'Maine Coon'}
                    onChange={(e) => setKittenFormData({ ...kittenFormData, breed: e.target.value as BreedType })}
                    className="w-full px-3 py-2 text-xs bg-white rounded border border-neutral-300 focus:outline-none focus:border-[#b91c1c]"
                  >
                    <option value="Maine Coon">Maine Coon</option>
                    <option value="British Shorthair">British Shorthair</option>
                    <option value="Ragdoll">Ragdoll</option>
                    <option value="Sphynx">Sphynx</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">Sexo</label>
                  <select
                    value={kittenFormData.gender || 'Macho'}
                    onChange={(e) => setKittenFormData({ ...kittenFormData, gender: e.target.value as any })}
                    className="w-full px-3 py-2 text-xs bg-white rounded border border-neutral-300 focus:outline-none focus:border-[#b91c1c]"
                  >
                    <option value="Macho">Macho</option>
                    <option value="Hembra">Hembra</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">Edad (Semanas)</label>
                  <input
                    type="number"
                    min={4}
                    max={52}
                    value={kittenFormData.ageWeeks || 12}
                    onChange={(e) => setKittenFormData({ ...kittenFormData, ageWeeks: Number(e.target.value) })}
                    className="w-full px-3 py-2 text-xs bg-white rounded border border-neutral-300 focus:outline-none focus:border-[#b91c1c]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">Color del Manto</label>
                  <input
                    type="text"
                    value={kittenFormData.colorManto || ''}
                    onChange={(e) => setKittenFormData({ ...kittenFormData, colorManto: e.target.value })}
                    placeholder="Ej. Black Silver Classic Tabby"
                    className="w-full px-3 py-2 text-xs bg-white rounded border border-neutral-300 focus:outline-none focus:border-[#b91c1c]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">Estado en Web</label>
                  <select
                    value={kittenFormData.status || 'Disponible'}
                    onChange={(e) => setKittenFormData({ ...kittenFormData, status: e.target.value as KittenStatus })}
                    className="w-full px-3 py-2 text-xs bg-white rounded border border-neutral-300 focus:outline-none focus:border-[#b91c1c]"
                  >
                    <option value="Disponible">Disponible</option>
                    <option value="En Adopción">En Adopción</option>
                    <option value="Reservado">Reservado</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">Precio Adopción</label>
                  <input
                    type="text"
                    value={kittenFormData.price || '600 €'}
                    onChange={(e) => setKittenFormData({ ...kittenFormData, price: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-white rounded border border-neutral-300 focus:outline-none focus:border-[#b91c1c] font-bold text-[#b91c1c]"
                  />
                </div>
              </div>

              {/* Photo selector / input */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-semibold text-neutral-700">
                    Foto Principal del Cachorro
                  </label>
                  <button
                    type="button"
                    onClick={() => setPhotoPickerOpen(!photoPickerOpen)}
                    className="text-xs text-[#b91c1c] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    <ImageIcon className="w-3.5 h-3.5" />
                    <span>{photoPickerOpen ? 'Ocultar Galería' : 'Elegir de Galería Criadero (+40 fotos)'}</span>
                  </button>
                </div>

                <input
                  type="text"
                  value={kittenFormData.images?.[0] || ''}
                  onChange={(e) => setKittenFormData({ ...kittenFormData, images: [e.target.value] })}
                  placeholder="/photos/IMG_4465.jpeg o URL externa"
                  className="w-full px-3 py-2 text-xs bg-white rounded border border-neutral-300 focus:outline-none focus:border-[#b91c1c]"
                />

                {/* Visual Picker Grid */}
                {photoPickerOpen && (
                  <div className="p-3 bg-neutral-100 rounded-xl border border-neutral-200 max-h-48 overflow-y-auto grid grid-cols-4 sm:grid-cols-6 gap-2">
                    {LOCAL_AVAILABLE_PHOTOS.map((photo) => (
                      <button
                        type="button"
                        key={photo}
                        onClick={() => {
                          setKittenFormData({ ...kittenFormData, images: [photo] });
                          setPhotoPickerOpen(false);
                        }}
                        className={`aspect-square rounded-lg overflow-hidden border-2 cursor-pointer transition-transform hover:scale-105 ${
                          kittenFormData.images?.[0] === photo ? 'border-[#b91c1c] ring-2 ring-[#b91c1c]' : 'border-neutral-300'
                        }`}
                      >
                        <img src={photo} alt="cat option" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Descripción & Biografía
                </label>
                <textarea
                  rows={3}
                  value={kittenFormData.description || ''}
                  onChange={(e) => setKittenFormData({ ...kittenFormData, description: e.target.value })}
                  placeholder="Describa el carácter, sociabilización con niños o detalles..."
                  className="w-full px-3 py-2 text-xs bg-white rounded border border-neutral-300 focus:outline-none focus:border-[#b91c1c]"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="featuredKitten"
                  checked={Boolean(kittenFormData.featured)}
                  onChange={(e) => setKittenFormData({ ...kittenFormData, featured: e.target.checked })}
                  className="rounded border-neutral-300 text-[#b91c1c] focus:ring-[#b91c1c]"
                />
                <label htmlFor="featuredKitten" className="text-xs font-semibold text-neutral-800 cursor-pointer">
                  Destacar este cachorro en las primeras posiciones de la web
                </label>
              </div>

              <div className="pt-4 border-t flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsKittenModalOpen(false)}
                  className="px-4 py-2 text-xs text-neutral-600 hover:text-neutral-900 cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-semibold text-white bg-[#b91c1c] hover:bg-[#991b1b] rounded-lg shadow-sm cursor-pointer"
                >
                  {editingKittenId ? 'Guardar Cambios' : 'Publicar en la Web'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: ADD / EDIT LITTER */}
      {isLitterModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-4 my-auto border border-neutral-300 shadow-2xl">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-serif text-lg font-bold text-neutral-900">
                {editingLitterId ? 'Editar Camada' : 'Publicar Nueva Camada'}
              </h3>
              <button onClick={() => setIsLitterModalOpen(false)} className="text-neutral-400 hover:text-neutral-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveLitter} className="space-y-3 text-xs">
              <div>
                <label className="block font-semibold mb-1">Nombre de la Camada</label>
                <input
                  type="text"
                  required
                  value={litterFormData.litterName || ''}
                  onChange={(e) => setLitterFormData({ ...litterFormData, litterName: e.target.value })}
                  className="w-full px-3 py-2 bg-white rounded border border-neutral-300"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold mb-1">Código</label>
                  <input
                    type="text"
                    value={litterFormData.code || ''}
                    onChange={(e) => setLitterFormData({ ...litterFormData, code: e.target.value })}
                    className="w-full px-3 py-2 bg-white rounded border border-neutral-300"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Raza</label>
                  <select
                    value={litterFormData.breed || 'Maine Coon'}
                    onChange={(e) => setLitterFormData({ ...litterFormData, breed: e.target.value as BreedType })}
                    className="w-full px-3 py-2 bg-white rounded border border-neutral-300"
                  >
                    <option value="Maine Coon">Maine Coon</option>
                    <option value="British Shorthair">British Shorthair</option>
                    <option value="Ragdoll">Ragdoll</option>
                    <option value="Sphynx">Sphynx</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold mb-1">Fecha Nacimiento</label>
                  <input
                    type="text"
                    value={litterFormData.birthDate || ''}
                    onChange={(e) => setLitterFormData({ ...litterFormData, birthDate: e.target.value })}
                    className="w-full px-3 py-2 bg-white rounded border border-neutral-300"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Entrega Estimada</label>
                  <input
                    type="text"
                    value={litterFormData.readyDate || ''}
                    onChange={(e) => setLitterFormData({ ...litterFormData, readyDate: e.target.value })}
                    className="w-full px-3 py-2 bg-white rounded border border-neutral-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold mb-1">Total Cachorros</label>
                  <input
                    type="number"
                    value={litterFormData.kittensCount || 4}
                    onChange={(e) => setLitterFormData({ ...litterFormData, kittensCount: Number(e.target.value) })}
                    className="w-full px-3 py-2 bg-white rounded border border-neutral-300"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Disponibles</label>
                  <input
                    type="number"
                    value={litterFormData.availableCount || 2}
                    onChange={(e) => setLitterFormData({ ...litterFormData, availableCount: Number(e.target.value) })}
                    className="w-full px-3 py-2 bg-white rounded border border-neutral-300"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-1">Foto de la Camada</label>
                <input
                  type="text"
                  value={litterFormData.image || ''}
                  onChange={(e) => setLitterFormData({ ...litterFormData, image: e.target.value })}
                  placeholder="/photos/IMG_4473.jpeg"
                  className="w-full px-3 py-2 bg-white rounded border border-neutral-300"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Descripción</label>
                <textarea
                  rows={2}
                  value={litterFormData.description || ''}
                  onChange={(e) => setLitterFormData({ ...litterFormData, description: e.target.value })}
                  className="w-full px-3 py-2 bg-white rounded border border-neutral-300"
                />
              </div>

              <div className="pt-3 border-t flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsLitterModalOpen(false)}
                  className="px-3 py-1.5 text-neutral-600"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 font-semibold text-white bg-[#b91c1c] hover:bg-[#991b1b] rounded"
                >
                  Guardar Camada
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: ADD / EDIT TESTIMONIAL */}
      {isTestimonialModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-4 my-auto border border-neutral-300 shadow-2xl">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-serif text-lg font-bold text-neutral-900">
                {editingTestimonialId ? 'Editar Testimonio' : 'Añadir Nuevo Testimonio'}
              </h3>
              <button onClick={() => setIsTestimonialModalOpen(false)} className="text-neutral-400 hover:text-neutral-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveTestimonial} className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold mb-1">Nombre del Adoptante</label>
                  <input
                    type="text"
                    required
                    value={testimonialFormData.adopterName || ''}
                    onChange={(e) => setTestimonialFormData({ ...testimonialFormData, adopterName: e.target.value })}
                    placeholder="Ej. Carmen & David"
                    className="w-full px-3 py-2 bg-white rounded border border-neutral-300"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Ciudad</label>
                  <input
                    type="text"
                    value={testimonialFormData.city || ''}
                    onChange={(e) => setTestimonialFormData({ ...testimonialFormData, city: e.target.value })}
                    placeholder="Ej. Barcelona"
                    className="w-full px-3 py-2 bg-white rounded border border-neutral-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block font-semibold mb-1">Nombre Gatito</label>
                  <input
                    type="text"
                    value={testimonialFormData.catName || ''}
                    onChange={(e) => setTestimonialFormData({ ...testimonialFormData, catName: e.target.value })}
                    placeholder="Ej. Balthazar"
                    className="w-full px-3 py-2 bg-white rounded border border-neutral-300"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Raza</label>
                  <select
                    value={testimonialFormData.breed || 'Maine Coon'}
                    onChange={(e) => setTestimonialFormData({ ...testimonialFormData, breed: e.target.value as BreedType })}
                    className="w-full px-3 py-2 bg-white rounded border border-neutral-300"
                  >
                    <option value="Maine Coon">Maine Coon</option>
                    <option value="British Shorthair">British Shorthair</option>
                    <option value="Ragdoll">Ragdoll</option>
                    <option value="Sphynx">Sphynx</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold mb-1">Año</label>
                  <input
                    type="text"
                    value={testimonialFormData.adoptionYear || '2025'}
                    onChange={(e) => setTestimonialFormData({ ...testimonialFormData, adoptionYear: e.target.value })}
                    className="w-full px-3 py-2 bg-white rounded border border-neutral-300"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-1">Foto del Gatito</label>
                <input
                  type="text"
                  value={testimonialFormData.image || ''}
                  onChange={(e) => setTestimonialFormData({ ...testimonialFormData, image: e.target.value })}
                  placeholder="/photos/IMG_4500.jpeg"
                  className="w-full px-3 py-2 bg-white rounded border border-neutral-300"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Texto del Testimonio</label>
                <textarea
                  rows={3}
                  required
                  value={testimonialFormData.text || ''}
                  onChange={(e) => setTestimonialFormData({ ...testimonialFormData, text: e.target.value })}
                  placeholder="Relato de la experiencia de adopción y convivencia..."
                  className="w-full px-3 py-2 bg-white rounded border border-neutral-300"
                />
              </div>

              <div className="pt-3 border-t flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsTestimonialModalOpen(false)}
                  className="px-3 py-1.5 text-neutral-600"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 font-semibold text-white bg-[#b91c1c] hover:bg-[#991b1b] rounded"
                >
                  Guardar Testimonio
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: ADD AUTHORIZED ADMIN USER */}
      {showAddUserModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4 my-auto border border-neutral-300 shadow-2xl">
            <div className="flex items-center justify-between border-b pb-3">
              <div className="flex items-center gap-2">
                <UserPlus className="w-5 h-5 text-[#b91c1c]" />
                <h3 className="font-serif text-lg font-bold text-neutral-900">
                  Añadir Administrador Autorizado
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowAddUserModal(false)}
                className="text-neutral-400 hover:text-neutral-700 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddAdmin} className="space-y-3 text-xs">
              <div>
                <label className="block font-semibold text-neutral-700 mb-1">Nombre Completo</label>
                <input
                  type="text"
                  required
                  value={newAdminName}
                  onChange={(e) => setNewAdminName(e.target.value)}
                  placeholder="Ej. María Gómez"
                  className="w-full px-3 py-2 bg-white rounded border border-neutral-300 focus:border-[#b91c1c] outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-neutral-700 mb-1">Correo Electrónico (Login)</label>
                <input
                  type="email"
                  required
                  value={newAdminEmail}
                  onChange={(e) => setNewAdminEmail(e.target.value)}
                  placeholder="ejemplo@criaderograciadivina.com"
                  className="w-full px-3 py-2 bg-white rounded border border-neutral-300 focus:border-[#b91c1c] outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-neutral-700 mb-1">Contraseña Inicial</label>
                <input
                  type="password"
                  required
                  minLength={6}
                  value={newAdminPassword}
                  onChange={(e) => setNewAdminPassword(e.target.value)}
                  placeholder="Mínimo 6 caracteres"
                  className="w-full px-3 py-2 bg-white rounded border border-neutral-300 focus:border-[#b91c1c] outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-neutral-700 mb-1">Rol / Permisos</label>
                <select
                  value={newAdminRole}
                  onChange={(e) => setNewAdminRole(e.target.value as any)}
                  className="w-full px-3 py-2 bg-white rounded border border-neutral-300 focus:border-[#b91c1c] outline-none"
                >
                  <option value="admin">Administrador (Control total)</option>
                  <option value="superadmin">Superadministrador (Propietario)</option>
                  <option value="editor">Editor (Gestión de contenidos)</option>
                </select>
              </div>

              <div className="pt-3 border-t flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddUserModal(false)}
                  className="px-3 py-1.5 text-neutral-600 hover:text-neutral-900 cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 font-semibold text-white bg-[#b91c1c] hover:bg-[#991b1b] rounded transition-colors cursor-pointer"
                >
                  Crear Acceso
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
