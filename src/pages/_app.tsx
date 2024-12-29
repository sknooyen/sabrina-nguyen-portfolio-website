import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import type {AppProps} from 'next/app';
import Head from 'next/head';
import {memo} from 'react';

const MyApp = memo(({Component, pageProps}: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <link href="/favicon-white.png?v=1" rel="icon" sizes="64x64" type="image/png"/>
      </Head>
      <Component {...pageProps} />
    </>
  );
});

export default MyApp;
