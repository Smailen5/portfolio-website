import { Layout } from '@/components/molecules';
import { CertificationsCard } from '@/features/about/components/CertificationsCard';
import { HomelabCard } from '@/features/about/components/HomelabCard';
import { ProfileCard } from '@/features/about/components/ProfileCard';
import { StudyCard } from '@/features/about/components/StudyCard';
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
        <StudyCard className="md:col-span-4" />
      </div>
    </Layout>
  );
}
