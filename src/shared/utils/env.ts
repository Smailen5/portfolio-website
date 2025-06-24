export const env = {
  // Configurazione server in locale
VITE_API_URL: import.meta.env.VITE_API_URL,
VITE_API_PORT: import.meta.env.VITE_API_PORT,

// ! Questa e da cambiare urgente perche e esposta
FORM_SPREE_ACTION_URL: import.meta.env.VITE_APP_FORM_SPREE_ACTION_URL,
GITHUB_TOKEN: import.meta.env.VITE_GITHUB_TOKEN,

// Altre configurazioni
VITE_APP_ENV: import.meta.env.VITE_APP_ENV,

// GitHub API endpoints
GITHUB_API_BASE: import.meta.env.VITE_GITHUB_API_BASE,
GITHUB_USERNAME: import.meta.env.VITE_GITHUB_USERNAME,
GITHUB_REPO: import.meta.env.VITE_GITHUB_REPO,
}
