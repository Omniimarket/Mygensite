import '../styles/globals.css'; // This line is crucial!
import Head from 'next/head'; // Import Head for global meta tags

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
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
