import React, { PureComponent } from "react";
import Layout from "../components/layout";

export default class Page extends PureComponent {
  render() {
    return (
      <Layout title="CoinQuest" theme="dark" simpleHeader={true}>
        <div className="wrapper">404</div>
      </Layout>
    );
  }
}
