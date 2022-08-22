import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Footer from "./Utils/Footer/Footer";
import styled from "styled-components";


const Body = styled.main`
position:relative;
top: 8rem;
`

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

      <Body>{children}</Body>

      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default Layout;
