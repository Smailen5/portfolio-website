/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_FORM_SPREE_ACTION_URL: string;
  // aggiungi qui altre variabili d'ambiente se necessario
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
