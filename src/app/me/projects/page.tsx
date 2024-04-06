import { redirect } from 'next/navigation';

function page() {
  return redirect('/me/projects/main');
}

export default page;
