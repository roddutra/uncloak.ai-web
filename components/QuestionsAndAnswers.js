import { Button } from './Button';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { useState } from 'react';
import { IoWarning } from 'react-icons/io5';
import { fetchAnswer } from '../lib/fetchAnswer';

function QuestionsAndAnswers({ document, question, setQuestion }) {
  const [isLoading, setIsLoading] = useState(false);
  const [answer, setAnswer] = useState('Your answer will appear here...');
  const [error, setError] = useState(null);
  const [documentCount, setDocumentCount] = useState(4);

  function handleChange(event) {
    setQuestion(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    console.log('Document:', document);
    console.log('Question:', question);

    if (!document) {
      return setError(
        'Please select a document from the available documents above!'
      );
    }

    if (!question || question.length < 10) {
      return setError('Please provide a question with at least 10 characters!');
    }

    const requestData = {
      url_endpoint: document,
      query: question,
      k: documentCount,
    };

    setError(null);
    setIsLoading(true);

    const response = await fetchAnswer(requestData);
    console.log('Response:', response);

    setIsLoading(false);
    setAnswer(response.result);
  }

  return (
    <div className='flex flex-col gap-10'>
      <div className='flex flex-row justify-between items-start gap-10'>
        <div className='flex-1'>
          <form onSubmit={handleSubmit}>
            <div className='flex flex-col gap-6'>
              <textarea
                name='question'
                id='question'
                rows='3'
                className='rounded-md resize-none w-full focus:outline-cyan-500 focus:ring-0 text-black'
                placeholder='Enter your question...'
                value={question}
                onChange={handleChange}
              ></textarea>
              <Button type='submit' variant='solid' color='cyan'>
                Submit
              </Button>
            </div>
          </form>
        </div>

        <div className='md:mt-8 text-white text-4xl animate-pulse'>
          <HiArrowNarrowRight />
        </div>

        <div className='flex-1 text-white flex flex-col justify-start items-center'>
          <div
            className={`bg-gray-800 rounded-md p-8 w-full text-lg ${
              isLoading && 'animate-pulse'
            }`}
          >
            {isLoading ? 'Loading...' : answer}
          </div>
        </div>
      </div>
      {error && (
        <div className='text-red-500 self-center flex gap-2 items-center'>
          <IoWarning className='text-2xl' /> {error}
        </div>
      )}
    </div>
  );
}
export default QuestionsAndAnswers;
