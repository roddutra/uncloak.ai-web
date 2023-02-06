import { AskQuestions } from '../components/AskQuestions';
import { Faqs } from '../components/Faqs';
import { Hero } from '../components/Hero';
import Layout from '../components/layout';

export default function Index() {
  return (
    <>
      <Layout pageTitle='Insurochat'>
        <Hero />
        <AskQuestions />
        <Faqs />
      </Layout>
    </>
  );
}
