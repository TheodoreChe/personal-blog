import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import '../styles/globals.css';
import { AppProvider } from 'components/AppProvider';

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => (
    <AppProvider>
        <>
            <Head>
                <title>Theodore Che</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>
            <Component {...pageProps} />
        </>
    </AppProvider>
);

export default App;
