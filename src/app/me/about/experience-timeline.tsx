import CustomTimeline from '@/components/custom-timeline';
import { experienceData } from '@/lib/constants/experience-data';

function ExperienceTimeline() {
  return <CustomTimeline experienceData={experienceData} />;
}

export default ExperienceTimeline;
