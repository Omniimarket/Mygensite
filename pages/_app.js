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
        {/*
          OLD AdSense Auto Ads Script (Removed for next/script usage):
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_ADSENSE_ID" crossorigin="anonymous"></script>
        */}
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
            function gtag(){dataLayer.push(arguments); console.log('Google Analytics event:', arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QV5VXW300T', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      {/* AdSense Auto Ads Script - Using next/script for better hydration */}
      <Script
        id="adsense-auto-ads" // Unique ID for this script
        strategy="afterInteractive" // Crucial for preventing hydration errors
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3309373852024886" // Replace with your actual AdSense ID
        crossOrigin="anonymous"
      />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
