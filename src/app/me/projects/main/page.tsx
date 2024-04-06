import { projectData } from '@/lib/constants/project-data';

import MainProjectTimeline from '../main-project-timeline';

function page() {
  return (
    <main>
      <MainProjectTimeline projectData={projectData} />
    </main>
  );
}

export default page;
