import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Footer from "./Utils/Footer/Footer";



const Navbar = dynamic(() => import("./Utils/Navbar/Navbar"), { ssr: false });

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Peculiar</title>
      </Head>

      <header>
        <Navbar />
      </header>

      <main>{children}</main>

      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default Layout;
