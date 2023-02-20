export async function fetchAnswer(payload) {
  console.log('Payload:', JSON.stringify(payload));

  try {
    const response = await fetch(
      'https://uncloak-apitest2.mlee94.repl.co/query/',
      {
        method: 'POST',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    );
    if (!response.ok) {
      throw new Error('Network response was not OK');
    }
    console.log('Response', response);
    const responseBlob = await response.json();
    return responseBlob;
  } catch (error) {
    console.error('There has been a problem with the fetch operation:', error);
  }
}
