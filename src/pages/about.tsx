import { Layout } from '@/components/molecules';
import { CURRICULUM_FILES } from '@/data/curriculum';
import { CertificationsCard } from '@/features/about/components/CertificationsCard';
import { HomelabCard } from '@/features/about/components/HomelabCard';
import { ProfileCard } from '@/features/about/components/ProfileCard';
import { LabCard } from '@/features/about/components/LabCard';
import { TechStackCard } from '@/features/about/components/TechStackCard';

export function AboutPage() {
  return (
    <Layout classContent="min-h-[calc(100vh-160px)] px-4 lg:px-0">
      <h1 className="sr-only">Chi sono</h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
        <ProfileCard className="md:col-span-8" />
        <CertificationsCard className="md:col-span-4" />
        <TechStackCard className="md:col-span-4" />
        <HomelabCard className="md:col-span-4" />

        <div className="flex flex-col gap-4 md:col-span-4">
          <LabCard className="flex-1" />

          <div className="grid gap-3 sm:grid-cols-2">
            {CURRICULUM_FILES.map(file => (
              <a
                key={file.href}
                href={file.href}
                download={file.fileName}
                aria-label={file.ariaLabel}
                className="btn btn-outline btn-primary w-full rounded-md"
              >
                {file.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
