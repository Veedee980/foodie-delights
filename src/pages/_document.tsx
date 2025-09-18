import { Html, Head, Main, NextScript } from "next/document";
import Navbar from "./navbar";
import Footer from "./footer"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Navbar/>
      <body className=" bg-black antialiased">
        <Main />
        <NextScript />
        <Footer/>
      </body>
    </Html>
  );
}
