import Link from 'next/link';
import { siteName } from '../lib/constants';
import { Container } from './Container';

export default function Footer() {
  return (
    <footer className='border-t border-gray-200'>
      <Container>
        <div className='flex flex-col items-start justify-between gap-y-12 pt-16 pb-6 lg:flex-row lg:items-center lg:py-16'>
          <div>
            <div className='flex items-center text-gray-900'>
              <div>
                <p className='text-base font-semibold'>{siteName}</p>
                <p className='mt-1 text-sm'>
                  Understand your insurance policy in simple english.
                </p>
              </div>
            </div>
            <nav className='mt-11 flex gap-8 text-sm text-gray-700 hover:text-gray-900'>
              <Link href='/'>Home</Link>
              <Link href='/#faqs'>FAQs</Link>
            </nav>
          </div>
        </div>
        <div className='flex flex-col items-start border-t border-gray-200 pt-8 pb-12 md:justify-between md:pt-6'>
          <p className='mt-6 text-sm text-gray-500 md:mt-0'>
            &copy; Copyright {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
