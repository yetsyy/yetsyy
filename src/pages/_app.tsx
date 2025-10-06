import '../styles/globals.css';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/Layout';

const nextI18NextConfig = require('../../next-i18next.config.js');

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Li Carvallo Escudero - Data Scientist</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default appWithTranslation(MyApp, nextI18NextConfig);