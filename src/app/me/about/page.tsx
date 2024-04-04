import TabsDefault from '@/components/tabs-default';

import AboutSection from './about-section';
import ExperienceTimeline from './experience-timeline';
import NameDisplay from './name-display';
import SkillFocus from './skill-focus';

function page() {
  const tabList = [
    {
      value: 'general',
      label: 'General Info',
      icon: '👨‍💻',
      content: (
        <>
          {/* About Me */}
          <AboutSection />

          {/* Skills & Focus */}
          <SkillFocus />
        </>
      ),
    },
    {
      value: 'experience',
      label: 'Experience',
      icon: '🏢',
      content: (
        <>
          <ExperienceTimeline />
        </>
      ),
    },
  ];

  return (
    <main className='flex flex-col items-center'>
      {/* Name */}
      <NameDisplay />

      <section className='flex justify-center w-full'>
        <TabsDefault tabList={tabList} className='mt-8' />
      </section>
    </main>
  );
}

export default page;
