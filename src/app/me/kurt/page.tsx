import AvatarProfile from '@/app/me/kurt/avatar-profile';
import Banner from '@/app/me/kurt/banner';
import ButtonLinks from '@/app/me/kurt/button-links';

function Home() {
  return (
    <main className='flex flex-col place-items-center'>
      {/* Banner */}
      <Banner />

      {/* Avatar */}
      <AvatarProfile />

      {/* Socials */}
      <ButtonLinks />
    </main>
  );
}

export default Home;
