import { sideProjectData } from '@/lib/constants/project-data';

import MainProjectTimeline from '../main-project-timeline';

function page() {
  return (
    <main>
      <MainProjectTimeline projectData={sideProjectData} />
    </main>
  );
}

export default page;
