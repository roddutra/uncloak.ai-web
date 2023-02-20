import { ThemeProvider } from '@aws-amplify/ui-react';
import { Authenticator } from '@aws-amplify/ui-react';
import '../lib/amplifyConfig';
import '../styles/globals.css';
import '@aws-amplify/ui-react/styles.css';
import { customTheme } from '../lib/theme';

function App({ Component, pageProps }) {
  return (
    <Authenticator.Provider>
      <ThemeProvider theme={customTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Authenticator.Provider>
  );
}

export default App;
