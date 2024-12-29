/*import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import type {AppProps} from 'next/app';
import Head from 'next/head';
import {memo} from 'react';

const MyApp = memo(({Component, pageProps}: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <link href="/favicon-light-blue.png?v=1" rel="icon" sizes="64x64" type="image/png"/>
      </Head>
      <Component {...pageProps} />
    </>
  );
});

export default MyApp;
*/

import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import type {AppProps} from 'next/app';
import Head from 'next/head';
import {useEffect} from 'react';

// eslint-disable-next-line react-memo/require-memo
const MyApp = ({Component, pageProps}: AppProps): JSX.Element => {
  useEffect(() => {
    const setFavicon = (theme: string) => {
      const favicon = document.querySelector("link[rel='icon']");
      if (favicon) {
        favicon.setAttribute(
          "href",
          theme === "dark" ? "/favicon-white.png" : "/favicon-dark-blue.png"
        );
      }
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setFavicon(mediaQuery.matches ? "dark" : "light");

    const listener = (e: MediaQueryListEvent) => {
      setFavicon(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", listener);

    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  return (
    <>
      <Head>
        <link
          href="/favicon-white.png"
          rel="icon"
          sizes="192x192"
          type="image/png"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;