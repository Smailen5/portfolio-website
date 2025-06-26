export const env = {
  // Configurazione server in locale
  VITE_API_URL: import.meta.env.VITE_API_URL,
  VITE_API_PORT: import.meta.env.VITE_API_PORT,

  // Altre configurazioni
  VITE_APP_ENV: import.meta.env.VITE_APP_ENV,

  FORM_SPREE_ACTION_URL: import.meta.env.VITE_APP_FORM_SPREE_ACTION_URL, // ! Sarebbe meglio non esporlo, in futuro cambiera l'invio di mail per non usare servizi esterni
  GITHUB_TOKEN: import.meta.env.VITE_GITHUB_TOKEN, // ! Fa niente che il token e' esposto, e' in sola lettura e ha una scadenza
};
