import CustomTimeline from '@/components/custom-timeline';
import { ProjectData } from '@/lib/constants/project-data';

function MainProjectTimeline({ projectData }: { projectData: ProjectData[] }) {
  return <CustomTimeline projectData={projectData} />;
}

export default MainProjectTimeline;
