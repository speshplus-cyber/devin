/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Lock,
  Mail,
  Eye,
  EyeOff,
  ShieldCheck,
  AlertCircle,
  ArrowLeft,
  KeyRound,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { CatteryLogo } from '../components/CatteryLogo';
import { login, AdminSession } from '../services/authService';

interface AdminLoginViewProps {
  onLoginSuccess: (session: AdminSession) => void;
  onBackToWebsite: () => void;
}

export const AdminLoginView: React.FC<AdminLoginViewProps> = ({
  onLoginSuccess,
  onBackToWebsite,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fillFeedback, setFillFeedback] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsSubmitting(true);

    setTimeout(() => {
      const result = login(email, password, rememberMe);
      setIsSubmitting(false);

      if (result.success && result.session) {
        onLoginSuccess(result.session);
      } else {
        setErrorMessage(result.error || 'Credenciales incorrectas.');
      }
    }, 250);
  };

  const handleAutofill = (demoEmail: string) => {
    setEmail(demoEmail);
    setPassword('GraciaDivina2026!');
    setErrorMessage(null);
    setFillFeedback(true);
    setTimeout(() => setFillFeedback(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#450a0a] via-[#7f1d1d] to-[#1e1e1e] flex flex-col justify-between p-4 sm:p-6 lg:p-8 text-neutral-100 selection:bg-red-500 selection:text-white">
      {/* Top Bar with Return button */}
      <div className="max-w-6xl w-full mx-auto flex items-center justify-between py-2">
        <button
          onClick={onBackToWebsite}
          className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold backdrop-blur-md transition-all cursor-pointer border border-white/15 shadow-sm"
        >
          <ArrowLeft className="w-4 h-4 text-red-300" />
          <span>Volver al Sitio Web</span>
        </button>

        <div className="flex items-center gap-2 text-xs text-red-200/80 bg-black/20 px-3 py-1.5 rounded-full border border-red-900/40">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Acceso Protegido SSL · Solo Personal Autorizado</span>
        </div>
      </div>

      {/* Main Login Card Container */}
      <div className="flex-1 flex items-center justify-center py-8">
        <div className="w-full max-w-md bg-white text-[#111827] rounded-3xl shadow-2xl overflow-hidden border border-red-100 flex flex-col">
          {/* Card Header in Crimson with Logo */}
          <div className="bg-[#b91c1c] text-white p-6 sm:p-8 text-center relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-36 h-36 bg-red-800/40 rounded-full blur-xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-red-950/40 rounded-full blur-lg pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center">
              <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-xs border border-white/20 shadow-md mb-3">
                <CatteryLogo size={52} className="w-12 h-12 sm:w-14 sm:h-14 drop-shadow-sm" />
              </div>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Gracia Divina
              </h1>
              <p className="text-red-100 text-xs tracking-wider uppercase font-semibold mt-1 flex items-center gap-1.5">
                <Lock className="w-3 h-3 text-red-200" />
                <span>Panel de Administración CMS</span>
              </p>
            </div>
          </div>

          {/* Form Content */}
          <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
            {/* Error Message Alert */}
            {errorMessage && (
              <div className="mb-5 p-3.5 bg-red-50 border border-red-200 rounded-2xl text-red-800 text-xs flex items-start gap-3 animate-in fade-in duration-200">
                <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <strong className="font-bold block">Acceso denegado</strong>
                  <span>{errorMessage}</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email Input */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                  Correo Electrónico Autorizado
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errorMessage) setErrorMessage(null);
                    }}
                    placeholder="admin@criaderograciadivina.com"
                    className="w-full pl-10 pr-3.5 py-3 bg-neutral-50 rounded-xl border border-neutral-300 focus:border-[#b91c1c] focus:bg-white focus:ring-2 focus:ring-red-100 text-sm font-medium text-neutral-900 transition-all outline-none"
                    autoComplete="email"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                  Contraseña de Seguridad
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (errorMessage) setErrorMessage(null);
                    }}
                    placeholder="••••••••••••"
                    className="w-full pl-10 pr-11 py-3 bg-neutral-50 rounded-xl border border-neutral-300 focus:border-[#b91c1c] focus:bg-white focus:ring-2 focus:ring-red-100 text-sm font-medium text-neutral-900 transition-all outline-none font-mono"
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-neutral-400 hover:text-neutral-700 cursor-pointer transition-colors"
                    tabIndex={-1}
                    aria-label={showPassword ? 'Ocultar contraseña' : 'Ver contraseña'}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Remember me & Security note */}
              <div className="flex items-center justify-between text-xs pt-1">
                <label className="flex items-center gap-2 text-neutral-600 select-none cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 text-[#b91c1c] border-neutral-300 rounded focus:ring-red-500 accent-[#b91c1c]"
                  />
                  <span>Recordar sesión (24 horas)</span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 py-3.5 px-4 bg-[#b91c1c] hover:bg-[#991b1b] active:scale-[0.99] text-white font-bold text-sm rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <KeyRound className="w-4 h-4" />
                    <span>Acceder al Panel de Control</span>
                  </>
                )}
              </button>
            </form>

            {/* Quick Demo Credentials Assistant Box */}
            <div className="mt-6 pt-5 border-t border-neutral-100">
              <div className="p-3.5 bg-neutral-50 rounded-2xl border border-neutral-200/80 text-xs text-neutral-600 space-y-2">
                <div className="flex items-center justify-between text-neutral-800 font-bold">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#b91c1c]" />
                    Credenciales autorizadas por defecto:
                  </span>
                  {fillFeedback && (
                    <span className="text-emerald-700 font-medium flex items-center gap-1 text-[11px] animate-in fade-in">
                      <CheckCircle2 className="w-3 h-3" /> ¡Rellenado!
                    </span>
                  )}
                </div>

                <div className="space-y-1 font-mono text-[11px] bg-white p-2.5 rounded-lg border border-neutral-200">
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Email:</span>
                    <strong className="text-neutral-800 select-all">admin@criaderograciadivina.com</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Alt:</span>
                    <strong className="text-neutral-800 select-all">Criaderograciadivina@gmail.com</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Clave:</span>
                    <strong className="text-[#b91c1c] select-all">GraciaDivina2026!</strong>
                  </div>
                </div>

                <div className="flex gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => handleAutofill('admin@criaderograciadivina.com')}
                    className="flex-1 py-1.5 px-2 bg-neutral-200 hover:bg-neutral-300 text-neutral-800 rounded-lg font-semibold text-[11px] transition-colors cursor-pointer text-center"
                  >
                    Rellenar como Admin
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAutofill('Criaderograciadivina@gmail.com')}
                    className="flex-1 py-1.5 px-2 bg-neutral-200 hover:bg-neutral-300 text-neutral-800 rounded-lg font-semibold text-[11px] transition-colors cursor-pointer text-center"
                  >
                    Rellenar con Gmail
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl w-full mx-auto text-center py-2 text-xs text-red-200/60">
        © 2026 criaderograciadivina · Sistema de Gestión Privado · Todos los accesos son auditados
      </div>
    </div>
  );
};
