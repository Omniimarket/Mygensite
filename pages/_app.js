import '../styles/globals.css';
import Head from 'next/head';
import Script from 'next/script';
import { CategoryProvider } from '../context/CategoryContext'; // Import the new provider

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Global Head content for SEO and AdSense Auto Ads */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Google Analytics (gtag.js) - External Script */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-QV5VXW300T"
      />
      {/* Google Analytics (gtag.js) - Inline Configuration Script */}
      <Script
        id="google-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments); console.log('Google Analytics event:', arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QV5VXW300T', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      {/* AdSense Auto Ads Script - Commented out to disable ads */}
      {/*
      <Script
        id="adsense-auto-ads"
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3309373852024886"
        crossOrigin="anonymous"
      />
      */}

      {/* Wrap your entire app with the CategoryProvider */}
      <CategoryProvider>
        <Component {...pageProps} />
      </CategoryProvider>
    </>
  );
}

export default MyApp;
