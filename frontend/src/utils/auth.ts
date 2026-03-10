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
