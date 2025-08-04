import '../styles/globals.css'; // This line is crucial!
import Head from 'next/head'; // Import Head for global meta tags
import Script from 'next/script'; // Import Script for external scripts

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Global Head content for SEO and AdSense Auto Ads */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Favicon link removed from here. It should be in _document.js */}
        {/* AdSense Auto Ads Script - Place this here for global inclusion */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_ADSENSE_ID" crossorigin="anonymous"></script>
      </Head>

      {/* Google Analytics (gtag.js) - External Script */}
      <Script
        strategy="afterInteractive" // Loads after the page is interactive
        src="https://www.googletagmanager.com/gtag/js?id=G-QV5VXW300T"
      />
      {/* Google Analytics (gtag.js) - Inline Configuration Script */}
      <Script
        id="google-analytics-init" // Unique ID for this inline script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QV5VXW300T');
          `,
        }}
      />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
