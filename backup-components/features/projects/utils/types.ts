export type Project = {
  name: string;
  displayName?: string;
  folderName?: string;
  path: string;
  html_url: string;
  updated_at: string;
  image: string;
  technologies: string[];
  readme: string;
  description?: string;
  author?: string;
  createdAt?: string;
  version?: string;
};

export type PackageJson = {
  name: string;
  private: boolean;
  version: string;
  description: string;
  technologies: string[];
  author: string;
  createdAt: string;
};
