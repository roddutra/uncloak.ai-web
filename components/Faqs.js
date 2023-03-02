import { Container } from './Container';

const faqs = [
  [
    {
      question: 'What is Uncloak.ai?',
      answer:
        'Uncloak.ai is a platform that uses AI to simplify complex insurance policies into easy-to-understand language. By selecting a policy from a database, users can ask questions and receive summaries of relevant sections in plain English.',
    },
    {
      question: 'How does it work?',
      answer:
        "Uncloak.ai first extracts relevant answers from insurance policy documents, and then utilizes OpenAI's GPT-3 to provide simplified explanations of those answers in plain English. Users can select a policy, ask questions, and receive clear and easy-to-understand summaries of the relevant sections of their insurance policy.",
    },
    {
      question: 'What kinds of documents does it support?',
      answer:
        'Uncloak.ai currently supports Home and Contents insurance policies, but the technology can be applied to any type of complex document. We plan to expand our support to other types of insurance policies in the future.',
    },
  ],
  [
    {
      question: 'Is it free to use?',
      answer:
        'Yes, our platform is currently free to use while we are in beta.',
    },
    {
      question: 'Can I upload my own document for Uncloak.ai to analyze?',
      answer:
        'Currently, you cannot upload custom documents for analysis, but this will be available as a premium feature in the future. If you would like to use this feature, please get in touch with us.',
    },
    {
      question: 'How accurate are the answers provided?',
      answer:
        'As Uncloak.ai is currently in beta, we are continuously training the model to provide more accurate answers. While it is very accurate in most cases, it may still provide inaccurate answers in some cases. Please do not rely on the current answers as being a true fact.',
    },
  ],
  [
    {
      question: 'Can I ask follow-up questions?',
      answer:
        'Currently, follow-up questions are not available on Uncloak.ai. Each question is treated as a separate inquiry. However, we are actively working on bringing this functionality to the platform so that users can ask follow-up questions and hold context for better understanding.',
    },
    {
      question: 'How can I provide feedback or report an issue?',
      answer:
        'We would love to hear any feedback on how we can make it better or concerns you may have. Please feel free to reach out to us via email at hello@uncloak.ai.',
    },
  ],
];

export default function Faqs() {
  return (
    <section
      id='faqs'
      aria-labelledby='faqs-title'
      className='border-t border-gray-200 py-20 sm:py-32'
    >
      <Container>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h2
            id='faqs-title'
            className='text-3xl font-medium tracking-tight text-gray-900'
          >
            Frequently asked questions
          </h2>
          <p className='mt-2 text-lg text-gray-600'>
            If you have any other questions or feedback, please get in touch!
          </p>
        </div>
        <ul
          role='list'
          className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3'
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role='list' className='space-y-10'>
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className='text-lg font-semibold leading-6 text-gray-900'>
                      {faq.question}
                    </h3>
                    <p className='mt-4 text-sm text-gray-700'>{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
