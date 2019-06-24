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
        No active quests at the moment.<br />Keep your out on channels for the
        next one!
      </div>
    );
  }

  render() {
    let { activeQuests } = this.props;
    if (activeQuests) {
      return (
        <div className="quests u-padding-top" id="quests">
          {activeQuests.length > 0
            ? this.renderList(activeQuests)
            : this.renderEmpty()}
        </div>
      );
    } else {
      return (
        <div className="quests quests--empty">
          No available quests at the moment. Keep your eye out for one!
        </div>
      );
    }
  }
}

export default withQuests(Page);
