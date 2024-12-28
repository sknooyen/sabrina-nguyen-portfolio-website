import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import type {AppProps} from 'next/app';
import Head from 'next/head';
import {memo} from 'react';

const MyApp = memo(({Component, pageProps}: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <link href="/favicon.png" rel="icon" sizes="192x208" type="image/png"/>
        {/* <link href="/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
        <link href="/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" /> */}
      </Head>
      <Component {...pageProps} />
    </>
  );
});

export default MyApp;
