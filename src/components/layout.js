import React from "react";
import Helmet from "react-helmet";
import Header from "../components/header";
import Footer from "../components/footer";
import "../stylesheets/master.scss";

const Layout = ({ children, title, theme, isLoading, simpleHeader }) => {
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
        <meta
          property="og:title"
          content="CoinQuest by COINiD - Follow the quests in search for cryptocurrency."
        />
        <meta
          property="og:description"
          content="Follow the clues, solve riddles and earn cryptocurrency. Only one
        can be first, will it be you?"
        />
        <meta property="og:image" content="https://coinid.org/logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link
          rel="preload"
          href="https://rsms.me/inter/inter-ui.css"
          as="style"
        />
      </Helmet>
      <Header isLoading={isLoading} simple={simpleHeader} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
