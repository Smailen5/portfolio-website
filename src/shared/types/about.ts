export type CertificationStatus = 'conseguita' | 'in preparazione';
export interface ImageAsset {
  src: string;
  alt: string;
}

export interface Certification {
  name: string;
  status: CertificationStatus;
  topics: string[];
  badge?: ImageAsset;
  credentialUrl?: string;
}

export interface TechGroup {
  title: string;
  items: string[];
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

export interface StudyItem {
  title: string;
  description: string;
  href?: string;
}

export interface Profile {
  name: string;
  paragraphs: string[];
  photo: ImageAsset;
}
