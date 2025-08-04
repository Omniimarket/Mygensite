// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon - CORRECTED LINK */}
        {/* Your favicon.ico file should be located directly in the /public directory */}
        <link rel="icon" href="/favicon.png" type="image/png" />
          {/* Your AdMaven meta tag goes here */}
        <meta name='admaven-placement' content='BqdU4rjaG' />
        {/* Other meta tags, favicons, or external scripts can go here */}
     {/* If you have other favicon sizes/types for broader compatibility, you can add them here, e.g.: */}
        {/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" /> */}
        {/* <link rel="manifest" href="/site.webmanifest" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
