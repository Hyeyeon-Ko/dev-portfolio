import { describe, it, expect, beforeEach } from "vitest";
import { isAdmin, setAdminKey, getAdminKey, clearAdminKey } from "./auth";

describe("auth utilities", () => {
  beforeEach(() => {
    sessionStorage.clear();
  });

  it("isAdmin returns false when no key is set", () => {
    expect(isAdmin()).toBe(false);
  });

  it("isAdmin returns true after setting a key", () => {
    setAdminKey("secret-key");
    expect(isAdmin()).toBe(true);
  });

  it("getAdminKey returns the stored key", () => {
    setAdminKey("my-key");
    expect(getAdminKey()).toBe("my-key");
  });

  it("getAdminKey returns null when no key is set", () => {
    expect(getAdminKey()).toBeNull();
  });

  it("clearAdminKey removes the stored key", () => {
    setAdminKey("to-be-cleared");
    clearAdminKey();
    expect(isAdmin()).toBe(false);
    expect(getAdminKey()).toBeNull();
  });
});
