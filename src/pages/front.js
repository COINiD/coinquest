import React, { PureComponent } from "react";
import withQuests from "../enhancers/quests";
import QuestList from "../components/quest-list";

class Page extends PureComponent {
  renderList(quests) {
    return <QuestList quests={quests} />;
  }

  renderEmpty() {
    return (
      <div className="empty-state">
        No active quests at the moment.
        <br />
        Keep your eye out on our channels for the next quest!
      </div>
    );
  }

  render() {
    let { activeQuests } = this.props;

    return (
      <div className="quests u-padding-top" id="quests">
        {activeQuests.length > 0
          ? this.renderList(activeQuests)
          : this.renderEmpty()}
      </div>
    );
  }
}

export default withQuests(Page);
