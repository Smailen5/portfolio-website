export type CertificationStatus = 'conseguita' | 'in preparazione';
export interface ImageAsset {
  src: string;
  alt: string;
}

export interface Certification {
  name: string;
  issuer: string;
  status: CertificationStatus;
  topics: string[];
  badge?: ImageAsset;
  credentialUrl?: string;
}

export interface TechGroup {
  title: string;
  items: readonly string[];
}

export interface TechIcon {
  src: string;
  /**
   * Tono della piastrina su cui poggia l'icona: `light` per i brand scuri che
   * non raggiungono 3:1 sul fondo del tema, `dark` per tutti gli altri.
   */
  chip: 'light' | 'dark';
}

export interface HomelabFact {
  label: string;
  value: string;
}

export interface HomelabSystem {
  id: string;
  title: string;
  image?: ImageAsset;
  facts: HomelabFact[];
}

export interface LabItem {
  title: string;
  description: string;
  href?: string;
}

export interface Profile {
  name: string;
  paragraphs: string[];
  photo: ImageAsset;
}
