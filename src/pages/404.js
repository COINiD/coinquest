import React, { PureComponent } from "react";
import Layout from "../components/layout";

export default class Page extends PureComponent {
  render() {
    return (
      <Layout title="CoinQuest" theme="dark" simpleHeader={true}>
        <div className="wrapper">
          <h2>Page not found</h2>
          <h3 className="u-margin-bottom">
            The page you were looking for does not exist. Visit{" "}
            <a href="https://coinid.org">COINiD</a> or go to the{" "}
            <a href="/">startpage</a>.
          </h3>
        </div>
      </Layout>
    );
  }
}
