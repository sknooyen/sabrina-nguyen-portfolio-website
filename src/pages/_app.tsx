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
        {/* Inline script to set favicon before React mounts */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                const favicon = document.querySelector("link[rel='icon']");
                if (favicon) {
                  favicon.href = theme === 'dark' ? '/favicon-white.png' : '/favicon-dark-blue.png';
                }
              })();
            `,
          }}
        />
        {/* Default favicon for initial load */}
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