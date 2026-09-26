const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL || "https://playground.nileslabs.com/api/v1"
).replace(/\/+$/, "");
const PLAYGROUND_IDENTITY = import.meta.env.VITE_PLAYGROUND_IDENTITY;

export function apiRequest(path, options = {}) {
  const headers = new Headers(options.headers);
  const token = localStorage.getItem("token");

  if (PLAYGROUND_IDENTITY) {
    headers.set("X-Playground-Identity", PLAYGROUND_IDENTITY);
  }
  if (options.body && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }
  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  const endpoint = `${API_BASE_URL}/${path.replace(/^\/+/, "")}`;
  return fetch(endpoint, { ...options, headers });
}
