import Maintenance from '@/components/maintenance';
import { projectsMaintenance } from '@/lib/constants/maintenance-message';

function page() {
  return (
    <main>
      <Maintenance
        emoji={projectsMaintenance.emoji}
        title={projectsMaintenance.title}
        subtitle={projectsMaintenance.subtitle}
        description={projectsMaintenance.description}
      />
    </main>
  );
}

export default page;
