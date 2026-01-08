const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export function getApiUrl(path: string): string {
  return `${API_URL}${path}`;
}

export { API_URL };