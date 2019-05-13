import React, { PureComponent } from "react";
import { Redirect } from "react-router";
import { find } from "lodash-es";
import withQuests from "../enhancers/quests";
import QuestList from "../components/quest-list";

class Page extends PureComponent {
  render() {
    let { activeQuests, completedQuests, questId } = this.props;

    let active = find(activeQuests, { address: questId });
    let completed = find(completedQuests, { address: questId });

    let quest = active || completed;
    if (!quest) {
      return <Redirect to="/404" />;
    }

    return (
      <div className="quests u-padding-top">
        <QuestList
          title="Riddles for"
          quests={[quest]}
          withRiddles={true}
          completed={completed}
        />
      </div>
    );
  }
}

export default withQuests(Page, true);
