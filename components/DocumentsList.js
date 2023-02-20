import { FaCheckCircle, FaRegCircle } from 'react-icons/fa';
import { useListFiles } from './hooks/useListFiles';

function DocumentsList({ selectedDocument, setSelectedDocument }) {
  const { data, isLoading, isError } = useListFiles();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Something went wrong!</div>;

  return (
    <>
      {data.Filelist.map((file) => (
        <div
          onClick={() => setSelectedDocument(file)}
          className={`flex gap-3 cursor-pointer items-center ${
            file === selectedDocument && 'text-green-600 font-bold'
          }`}
          key={file}
        >
          {file === selectedDocument ? <FaCheckCircle /> : <FaRegCircle />}
          {file}
        </div>
      ))}
    </>
  );
}
export default DocumentsList;
