import { AskQuestions } from '../components/AskQuestions';
import { Hero } from '../components/Hero';
import Layout from '../components/layout';

export default function Index() {
  return (
    <>
      <Layout pageTitle='Insurochat'>
        <Hero />
        <AskQuestions />
      </Layout>
    </>
  );
}
