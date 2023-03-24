import { ReactNode } from "react";
import Head from 'next/head'
import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Perqara Assessment</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main-wrapper">
        <Header/>
        {children}
        <Footer/>
      </main>
    </>
  );
};

export default Layout;