import type { Metadata } from "next";
import Navbar from "@/components/Layouts/Navbar";
import ClientZoom from "@/components/ClientZoom";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Mishab - MERN Stack Developer",
  description:
    "A Passionate Full-Stack Developer with 4+ years of experience in building scalable web and mobile applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="icon" href="/images/icons/M.png" type="image/svg+xml" />
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
          crossOrigin="anonymous"
        />
      </head>
      <body className="relative h-screen overflow-y-auto overflow-x-hidden bg-light text-dark dark:bg-dark-2 dark:text-light">
        <ClientZoom>
          <div className="mx-auto flex max-w-screen-2xl flex-col justify-between gap-4 pt-4 px-3 pb-10 lg:gap-6 lg:px-4">
            <Navbar />
            {children}
          </div>
        </ClientZoom>
      </body>
    </html>
  );
}
