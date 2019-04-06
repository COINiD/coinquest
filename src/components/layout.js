import React from "react";
import Helmet from "react-helmet";
import Header from "../components/header";
import Footer from "../components/footer";
import "../stylesheets/master.scss";

const Layout = ({ children, title, theme }) => {
  let bodyClass;
  if (theme) {
    bodyClass = `${theme}-theme`;
  }

  return (
    <>
      <Helmet title={`${title} by COINiD`}>
        <html lang="en" />
        <body className={bodyClass} />
        <meta property="og:url" content="https://coinquest.dev" />
        <meta property="og:title" content="Coinquest by COINiD" />
        <meta property="og:description" content="Some kind of og description" />
        <meta property="og:image" content="https://coinid.org/logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
        <link
          rel="preload"
          href="https://rsms.me/inter/inter-ui.css"
          as="style"
        />
      </Helmet>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
