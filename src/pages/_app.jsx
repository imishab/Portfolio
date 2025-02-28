import Navbar from "@/components/Layouts/Navbar";
import "@/styles/globals.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // This will set the zoom level to 88% once the component has mounted
    document.body.style.zoom = "88%";
  }, []);
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
