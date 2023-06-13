import "@/styles/globals.scss";
import Head from "next/head";
import { Header,Footer } from "@/components";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Space Tourism </title>
        <meta
          name="description"
          content="This is a challenge based project about a coding a multipage website, given by Frontendmentor"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}
