import Link from 'next/link';
import { siteName } from '../lib/constants';

export const components = {
  Header() {
    return (
      <div className='flex justify-center py-20'>
        <Link href='/' aria-label='Home' className='text-4xl font-bold'>
          {siteName}
        </Link>
      </div>
    );
  },
};
