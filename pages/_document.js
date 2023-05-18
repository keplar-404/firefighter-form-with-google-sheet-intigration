import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Merriweather:wght@400;700&family=Roboto&display=swap"
          rel="stylesheet"
        />
        <title>firefoamwaning</title>   
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
