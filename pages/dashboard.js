import { useState } from 'react';
import { Container } from '../components/Container';
import DocumentsList from '../components/DocumentsList';
import Layout from '../components/Layout';
import QuestionsAndAnswers from '../components/QuestionsAndAnswers';
import { siteName } from '../lib/constants';

function Dashboard() {
  const pageTitle = `Dashboard - ${siteName}`;
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [question, setQuestion] = useState('');

  return (
    <Layout pageTitle={pageTitle}>
      <Container className='pt-10 pb-32 flex flex-col gap-10'>
        <div>
          <h1 className='text-3xl font-bold mb-4'>Dashboard</h1>
          <hr />
        </div>

        <div className='flex flex-col gap-4 text-md border border-gray-200 rounded-md shadow p-8'>
          <h2 className='text-xl font-bold '>
            Select from available documents:
          </h2>
          <DocumentsList
            selectedDocument={selectedDocument}
            setSelectedDocument={setSelectedDocument}
          />
        </div>

        <div className='flex flex-col gap-10 text-md rounded-md shadow p-8 bg-black text-white'>
          <h2 className='text-xl font-bold '>Ask a question:</h2>
          <QuestionsAndAnswers
            document={selectedDocument}
            question={question}
            setQuestion={setQuestion}
          />
        </div>
      </Container>
    </Layout>
  );
}
export default Dashboard;
