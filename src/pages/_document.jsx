import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <>
        {/* Required meta tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        {/* Title */}
        <title>Mishab - MERN Stack Developer</title>
        {/* Favicon */}
        <link rel="icon" href="/images/icons/M.png" type="image/svg+xml" />
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,300;12..96,400;12..96,500;12..96,600;12..96,700&display=swap"
          rel="stylesheet"
        />
        {/* Styles */}
        <link
          rel="stylesheet"
          type="text/css"
          href="/assets/css/swiper-bundle.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/assets/css/venobox.min.css"
        />
        <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
          integrity="sha384-tViUnnbYAV00FLIhhi3v/dWt3Jxw4gZQcNoSCxCIFNJVCx7/D55/wXsrNIRANwdD"
          crossorigin="anonymous"
        ></link>
      </>

      <Head />
      <body className="relative h-screen overflow-y-auto overflow-x-hidden bg-light text-dark dark:bg-dark-2 dark:text-light">
        <div className="mx-auto flex max-w-screen-2xl flex-col justify-between gap-4 p-4 lg:gap-6 lg:p-6">
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  );
}
