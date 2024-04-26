import CustomTimeline from '@/components/custom-timeline';
import { ProjectData } from '@/lib/types';

function MainProjectTimeline({ projectData }: { projectData: ProjectData[] }) {
  // Ensure each project object includes reactFlowData
  const updatedProjectData = projectData.map(project => ({
    ...project,
    reactFlowData: project.reactFlowData || [],
  }));

  return <CustomTimeline projectData={updatedProjectData} />;  
}

export default MainProjectTimeline;
