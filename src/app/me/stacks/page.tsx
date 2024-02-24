import Maintenance from '@/components/maintenance';
import { stacksMaintenance } from '@/lib/constants/maintenance-message';

function page() {
  return (
    <main>
      <Maintenance
        emoji={stacksMaintenance.emoji}
        title={stacksMaintenance.title}
        subtitle={stacksMaintenance.subtitle}
        description={stacksMaintenance.description}
      />
    </main>
  );
}

export default page;
