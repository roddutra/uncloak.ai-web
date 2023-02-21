import AskQuestionDemo from '../components/AskQuestionDemo';
import Faqs from '../components/Faqs';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import { siteName } from '../lib/constants';

export default function Index() {
  const pageTitle = siteName;
  return (
    <>
      <Layout pageTitle={pageTitle}>
        <Hero />
        <AskQuestionDemo />
        <Faqs />
      </Layout>
    </>
  );
}
