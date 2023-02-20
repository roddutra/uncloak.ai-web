import { FileUploader } from '@aws-amplify/ui-react';
import { Storage } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { IoCopyOutline, IoTrashBinOutline } from 'react-icons/io5';

function FileUploads() {
  const [uploads, setUploads] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      const results = await Storage.list('', { level: 'protected' }).then(
        (data) => {
          return data.results;
        }
      );

      results.map(async (item) => {
        const signedUrl = await Storage.get(item.key, { level: 'protected' });
        setUploads((currUploads) => [
          ...currUploads,
          { ...item, signedUrl: signedUrl },
        ]);
      });
    };
    fetchFiles();
  }, []);

  return (
    <div className='flex gap-10 justify-between'>
      <div className='flex flex-col flex-1 gap-4'>
        <h3>Uploaded policies</h3>
        <div className='font-normal text-sm flex flex-col gap-2'>
          {uploads.length > 0 ? (
            uploads.map((file) => (
              <div className='flex gap-3 items-baseline justify-between'>
                <a
                  href={file.signedUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {file.key}
                </a>

                <div className='flex gap-3 text-base'>
                  <IoCopyOutline className='cursor-pointer' />
                  <IoTrashBinOutline className='cursor-pointer' />
                </div>
              </div>
            ))
          ) : (
            <div className='italic text-sm text-gray-500'>
              You don't have any policies uploaded.
            </div>
          )}
        </div>
      </div>
      <div id='new-upload' className='flex flex-col flex-1 gap-4 max-w-lg'>
        <h3>Upload a new policy</h3>
        <FileUploader
          isPreviewerVisible={true}
          acceptedFileTypes={['application/pdf', 'application/msword']}
          accessLevel='protected'
        />
      </div>
    </div>
  );
}
export default FileUploads;
