import { useState } from 'react';
import { Container } from './Container';
import QuestionsAndAnswers from './QuestionsAndAnswers';

export default function AskQuestionDemo() {
  const [question, setQuestion] = useState('');
  return (
    <section
      id='ask-question'
      aria-label='Features for investing all your money'
      className='bg-gray-900 py-20 sm:py-32 overflow-hidden'
    >
      <Container>
        <div className='mx-auto lg:mx-0 flex flex-col gap-14'>
          <div>
            <h2 className='text-3xl font-medium tracking-tight text-white'>
              Your policy questions answered.
            </h2>
            <p className='mt-2 text-lg text-gray-400'>
              Try our demo below using Suncorp Bank's Home Contents insurance.{' '}
              <br />
              Simply ask a question and we will provide you with a clear and
              straight-forward answer in simple terms:
            </p>
          </div>
          <QuestionsAndAnswers
            document='suncorp-insurance-home-contents-insurance-product-disclosure-statement'
            question={question}
            setQuestion={setQuestion}
          />
        </div>
      </Container>
    </section>
  );
}
