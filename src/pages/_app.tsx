import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import type {AppProps} from 'next/app';
import Head from 'next/head';
import {useEffect} from 'react';

// eslint-disable-next-line react-memo/require-memo
const MyApp = ({Component, pageProps}: AppProps): JSX.Element => {
  useEffect(() => {
    // Function to set the favicon based on the theme
    const setFavicon = (theme: string) => {
      // print system theme to console
      console.log(`Current system theme: ${theme}`);
      const favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement;
      if (favicon) {
        favicon.setAttribute(
          "href",
          theme === "dark" ? "/favicon-white.png" : "/favicon-dark-blue.png"
        );
      }
    };

    // On first load, determine the theme
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const initialTheme = mediaQuery.matches ? "dark" : "light";
    setFavicon(initialTheme);

    // Listen for changes in the system theme
    const listener = (e: MediaQueryListEvent) => {
      setFavicon(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", listener);

    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  return (
    <>
      <Head>
        {/* Default favicon */}
        <link href="/favicon-dark-blue.png" rel="icon" sizes="192x192" type="image/png" />
        <link href="/site.webmanifest" rel="manifest" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;