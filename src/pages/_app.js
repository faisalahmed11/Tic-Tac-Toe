import "@/styles/globals.scss";
import Head from "next/head";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tic Tac Toe </title>
        <meta
          name="description"
          content="This is a project for my portfolio link is given in the footer of the page"
        />
        

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
                <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      {/* <Footer/> */}
    </>
  );
}
