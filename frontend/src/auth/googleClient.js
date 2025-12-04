const API_BASE = import.meta.env.VITE_BACKEND_URL;

export async function fetchCurrentUser() {
  try {
    const res = await fetch(`${API_BASE}/api/me`, {
      credentials: "include",
    });

    if (!res.ok) return null;

    const data = await res.json();
    return data.user || null;
  } catch (e) {
    console.error("fetchCurrentUser error", e);
    return null;
  }
}

export function beginGoogleLogin() {
  window.location.href = `${API_BASE}/auth/google`;
}

export async function logoutUser() {
  try {
    await fetch(`${API_BASE}/auth/logout`, {
      method: "POST",
      credentials: "include",
    });
  } catch (e) {
    console.error("logoutUser error:", e);
  }
}
