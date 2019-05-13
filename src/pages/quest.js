import React, { PureComponent } from "react";
import withQuests from "../enhancers/quests";
import QuestList from "../components/quest-list";

class Page extends PureComponent {
  render() {
    let { activeQuests } = this.props;

    return (
      <div className="quests u-padding-top">
        <QuestList
          title="Riddles for"
          quests={[activeQuests[0]]}
          withRiddles={true}
        />
      </div>
    );
  }
}

export default withQuests(Page);
