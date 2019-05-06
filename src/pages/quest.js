import React, { PureComponent } from "react";
import withQuests from "../enhancers/quests";
import Quest from "../components/quest";

class Page extends PureComponent {
  render() {
    let { activeQuests } = this.props;

    return <Quest quest={activeQuests[0]} />;
  }
}

export default withQuests(Page);
