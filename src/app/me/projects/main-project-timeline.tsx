import CustomTimeline from '@/components/custom-timeline';
import { ProjectData } from '@/lib/types';

function MainProjectTimeline({ projectData }: { projectData: ProjectData[] }) {
  return <CustomTimeline projectData={projectData} />;
}

export default MainProjectTimeline;
