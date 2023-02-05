'use client';

import { Button } from './Button';
// import { CircleBackground } from './CircleBackground';
import { Container } from './Container';
import { HiArrowNarrowRight } from 'react-icons/hi';

export function AskQuestions() {
  return (
    <section
      id='ask-question'
      aria-label='Features for investing all your money'
      className='bg-gray-900 py-20 sm:py-32 overflow-hidden'
    >
      <Container>
        <div className='mx-auto lg:mx-0 flex flex-col gap-20'>
          <div>
            <h2 className='text-3xl font-medium tracking-tight text-white'>
              Your policy questions answered.
            </h2>
            <p className='mt-2 text-lg text-gray-400'>
              Simply ask your questions below and we will provide you with a
              clear and straight-forward answer in simple terms:
            </p>
          </div>
          <div className='flex flex-row justify-between items-start gap-10'>
            <div className='flex-1'>
              <form>
                <div className='flex flex-col gap-6'>
                  <textarea
                    name='question'
                    id='question'
                    rows='5'
                    className='rounded-md resize-none w-full focus:outline-cyan-500 focus:ring-0'
                    placeholder='Enter your question...'
                  ></textarea>
                  <Button
                    type='submit'
                    variant='solid'
                    color='cyan'
                    className='px-8 py-4'
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </div>
            <div className='md:mt-8 text-white text-4xl animate-pulse'>
              <HiArrowNarrowRight />
            </div>
            <div className='flex-1 text-white flex flex-col justify-start items-center'>
              <div className='bg-gray-800 rounded-md p-8 w-full'>
                Answer here...
              </div>
            </div>
          </div>
        </div>
      </Container>
      {/* <div className='relative col-span-6'>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <CircleBackground color='#13B5C8' className='animate-spin-slower' />
        </div>
      </div> */}
    </section>
  );
}
