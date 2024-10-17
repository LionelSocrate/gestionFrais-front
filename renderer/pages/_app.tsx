// import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import ReduxProvider from '../redux/ReduxProvider';
import UidContextProvider from '../context/UidContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider>
      <UidContextProvider>
        <Component {...pageProps} />
      </UidContextProvider>
    </ReduxProvider>
  );
}

export default MyApp;
