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
      let favicon = document.querySelector("link[rel='icon']");
      if (!favicon) {
        // Create the favicon link element if it doesn't exist
        favicon = document.createElement("link");
        favicon.setAttribute("rel", "icon");
        document.head.appendChild(favicon);
      }
      
      favicon.setAttribute(
        "href",
        theme === "dark" ? "/favicon-white.png" : "/favicon-dark-blue.png"
      );
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
        {/* No favicon initially here to avoid flicker */}
        <link href="/site.webmanifest" rel="manifest" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;