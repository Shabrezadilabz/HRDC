// API Configuration
// In development, uses relative paths (same origin)
// In production with separate deployments, use VITE_API_URL environment variable
export const API_BASE_URL = import.meta.env.VITE_API_URL || '';

// Helper to build full API URL
export function getApiUrl(path: string): string {
  if (API_BASE_URL) {
    // Remove trailing slash from base URL and leading slash from path
    const base = API_BASE_URL.replace(/\/$/, '');
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${base}${cleanPath}`;
  }
  // Relative path for same-origin requests
  return path;
}




