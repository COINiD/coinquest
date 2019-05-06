import React, { PureComponent } from "react";
import withQuests from "../enhancers/quests";
import QuestList from "../components/quest-list";

class Page extends PureComponent {
  render() {
    let { activeQuests } = this.props;
    return (
      <div className="quests u-padding-top" id="quests">
        <QuestList title="Active quest" quests={activeQuests} />
      </div>
    );
  }
}

export default withQuests(Page);
