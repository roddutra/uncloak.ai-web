import Head from 'next/head';

export default function Meta({ pageTitle }) {
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta
        name='description'
        content='Understand your insurance policy with ease using AI. Get clear
              explanations of coverage and exclusions to make informed
              decisions. Say goodbye to confusing language and hidden clauses.'
      />

      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link
        rel='icon'
        href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🤖</text></svg>'
      />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon-16x16.png'
      />
      <link rel='manifest' href='/site.webmanifest' />
    </Head>
  );
}
