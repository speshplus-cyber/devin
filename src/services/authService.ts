/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface AuthorizedUser {
  email: string;
  password: string;
  name: string;
  role: 'superadmin' | 'admin' | 'editor';
  createdAt: string;
}

export interface AdminSession {
  email: string;
  name: string;
  role: string;
  token: string;
  loginTime: string;
  expiresAt: number;
}

const STORAGE_KEY_USERS = 'gd_admin_users_v1';
const STORAGE_KEY_SESSION = 'gd_admin_session_v1';

// Default authorized administrative accounts
const DEFAULT_AUTHORIZED_USERS: AuthorizedUser[] = [
  {
    email: 'admin@criaderograciadivina.com',
    password: 'GraciaDivina2026!',
    name: 'Administrador Principal',
    role: 'superadmin',
    createdAt: '2026-01-01T00:00:00Z',
  },
  {
    email: 'Criaderograciadivina@gmail.com',
    password: 'GraciaDivina2026!',
    name: 'Dirección Criadero Gracia Divina',
    role: 'superadmin',
    createdAt: '2026-01-01T00:00:00Z',
  },
];

/**
 * Get all authorized users from local storage
 */
export function getAuthorizedUsers(): AuthorizedUser[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_USERS);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY_USERS, JSON.stringify(DEFAULT_AUTHORIZED_USERS));
      return DEFAULT_AUTHORIZED_USERS;
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
  } catch (e) {
    console.error('Error reading authorized admin users:', e);
  }
  return DEFAULT_AUTHORIZED_USERS;
}

/**
 * Save authorized users to local storage
 */
export function saveAuthorizedUsers(users: AuthorizedUser[]): void {
  try {
    localStorage.setItem(STORAGE_KEY_USERS, JSON.stringify(users));
  } catch (e) {
    console.error('Error saving authorized admin users:', e);
  }
}

/**
 * Check if the current user session is active and valid
 */
export function isAuthenticated(): boolean {
  try {
    const sessionRaw =
      sessionStorage.getItem(STORAGE_KEY_SESSION) || localStorage.getItem(STORAGE_KEY_SESSION);
    if (!sessionRaw) return false;

    const session: AdminSession = JSON.parse(sessionRaw);
    if (!session || !session.token || !session.email) return false;

    // Check expiration (24 hours)
    if (Date.now() > session.expiresAt) {
      logout();
      return false;
    }

    // Verify user still exists in authorized users
    const users = getAuthorizedUsers();
    return users.some((u) => u.email.toLowerCase() === session.email.toLowerCase());
  } catch (e) {
    return false;
  }
}

/**
 * Get current active session profile
 */
export function getCurrentUser(): AdminSession | null {
  try {
    const sessionRaw =
      sessionStorage.getItem(STORAGE_KEY_SESSION) || localStorage.getItem(STORAGE_KEY_SESSION);
    if (!sessionRaw) return null;
    const session: AdminSession = JSON.parse(sessionRaw);
    if (Date.now() > session.expiresAt) {
      logout();
      return null;
    }
    return session;
  } catch (e) {
    return null;
  }
}

/**
 * Log in with email and password
 */
export function login(
  emailInput: string,
  passwordInput: string,
  rememberMe: boolean = true
): { success: boolean; error?: string; session?: AdminSession } {
  const cleanEmail = emailInput.trim().toLowerCase();
  const cleanPassword = passwordInput.trim();

  if (!cleanEmail || !cleanPassword) {
    return { success: false, error: 'Por favor ingresa tanto el correo como la contraseña.' };
  }

  const users = getAuthorizedUsers();
  const matchedUser = users.find(
    (u) => u.email.toLowerCase() === cleanEmail && u.password === cleanPassword
  );

  if (!matchedUser) {
    return {
      success: false,
      error: 'Credenciales inválidas. Correo electrónico o contraseña incorrectos.',
    };
  }

  // 24 hours expiration
  const session: AdminSession = {
    email: matchedUser.email,
    name: matchedUser.name,
    role: matchedUser.role,
    token: `token_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
    loginTime: new Date().toISOString(),
    expiresAt: Date.now() + 24 * 60 * 60 * 1000,
  };

  try {
    const serialized = JSON.stringify(session);
    if (rememberMe) {
      localStorage.setItem(STORAGE_KEY_SESSION, serialized);
    } else {
      sessionStorage.setItem(STORAGE_KEY_SESSION, serialized);
    }
  } catch (e) {
    console.error('Error saving session:', e);
  }

  return { success: true, session };
}

/**
 * End the current admin session
 */
export function logout(): void {
  try {
    localStorage.removeItem(STORAGE_KEY_SESSION);
    sessionStorage.removeItem(STORAGE_KEY_SESSION);
  } catch (e) {
    console.error('Error during logout:', e);
  }
}

/**
 * Update password for an authorized admin
 */
export function updatePassword(
  email: string,
  currentPassword: string,
  newPassword: string
): { success: boolean; error?: string } {
  if (!newPassword || newPassword.length < 6) {
    return { success: false, error: 'La nueva contraseña debe tener al menos 6 caracteres.' };
  }

  const users = getAuthorizedUsers();
  const index = users.findIndex(
    (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === currentPassword
  );

  if (index === -1) {
    return { success: false, error: 'La contraseña actual no es correcta.' };
  }

  users[index].password = newPassword;
  saveAuthorizedUsers(users);
  return { success: true };
}

/**
 * Add a new authorized admin user
 */
export function addAuthorizedUser(
  email: string,
  password: string,
  name: string,
  role: 'superadmin' | 'admin' | 'editor' = 'admin'
): { success: boolean; error?: string } {
  const cleanEmail = email.trim().toLowerCase();
  if (!cleanEmail || !cleanEmail.includes('@')) {
    return { success: false, error: 'Correo electrónico inválido.' };
  }
  if (!password || password.length < 6) {
    return { success: false, error: 'La contraseña debe contener al menos 6 caracteres.' };
  }

  const users = getAuthorizedUsers();
  if (users.some((u) => u.email.toLowerCase() === cleanEmail)) {
    return { success: false, error: 'Este correo ya tiene permisos de administrador registrados.' };
  }

  users.push({
    email: cleanEmail,
    password,
    name: name.trim() || 'Administrador',
    role,
    createdAt: new Date().toISOString(),
  });

  saveAuthorizedUsers(users);
  return { success: true };
}

/**
 * Remove an authorized admin user
 */
export function removeAuthorizedUser(email: string): { success: boolean; error?: string } {
  const users = getAuthorizedUsers();
  if (users.length <= 1) {
    return { success: false, error: 'Debe existir al menos un administrador en el sistema.' };
  }

  const filtered = users.filter((u) => u.email.toLowerCase() !== email.toLowerCase());
  saveAuthorizedUsers(filtered);
  return { success: true };
}
