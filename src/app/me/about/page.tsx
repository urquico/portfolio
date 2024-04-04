import { redirect } from 'next/navigation';

function page() {
  return redirect('/me/about/general-info');
}

export default page;
