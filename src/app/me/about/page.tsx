import AboutSection from './about-section';
import NameDisplay from './name-display';
import SkillFocus from './skill-focus';

function page() {
  return (
    <main className='flex flex-col items-center'>
      {/* Name */}
      <NameDisplay />

      {/* About Me */}
      <AboutSection />

      {/* Skills & Focus */}
      <SkillFocus />
    </main>
  );
}

export default page;
