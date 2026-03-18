const KEY = "admin_key";

export function getAdminKey(): string | null {
  return sessionStorage.getItem(KEY);
}

export function setAdminKey(key: string): void {
  sessionStorage.setItem(KEY, key);
}

export function clearAdminKey(): void {
  sessionStorage.removeItem(KEY);
}

export function isAdmin(): boolean {
  return !!getAdminKey();
}

export async function verifyAdminKey(): Promise<boolean> {
  const key = getAdminKey();
  if (!key) return false;
  try {
    const res = await fetch("/api/admin/verify", {
      headers: { "X-ADMIN-KEY": key },
    });
    if (!res.ok) clearAdminKey();
    return res.ok;
  } catch {
    return false;
  }
}
