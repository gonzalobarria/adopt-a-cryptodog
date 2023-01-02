import '../styles/globals.css';

import { Toaster } from 'react-hot-toast';
import { AppProvider } from 'components/AppContext';
import { ContractProvider } from 'components/ContractContext';
import Layout from 'components/Layout';

export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <ContractProvider>
        <Layout>
          <Component {...pageProps} />
          <Toaster />
        </Layout>
      </ContractProvider>
    </AppProvider>
  );
}
