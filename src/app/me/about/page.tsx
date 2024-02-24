import AboutSection from './about-section';
import NameDisplay from './name-display';
import SkillFocus from './skill-focus';
import Testimonials from './testimonials';

function page() {
  return (
    <main className='flex flex-col items-center'>
      {/* Name */}
      <NameDisplay />

      {/* About Me */}
      <AboutSection />

      {/* Skills & Focus */}
      <SkillFocus />

      {/* Testimonials */}
      <Testimonials />
    </main>
  );
}

export default page;
