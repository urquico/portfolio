import { redirect } from 'next/navigation';

function Home() {
  return redirect('/me/kurt');
}

export default Home;
