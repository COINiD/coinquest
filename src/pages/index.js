import React, { PureComponent } from "react";
import { find, remove } from "lodash-es";
import Layout from "../components/layout";
import QuestList from "../components/quest-list";
import { insights } from "../config/constants";
import quests from "../config/quests";

export default class Page extends PureComponent {
  state = {
    activeQuests: [],
    completedQuests: [],
    isLoading: true
  };

  constructor(props) {
    super(props);
    this.fetchBalances(quests);
  }

  fetchBalances = activeQuests => {
    const requests = activeQuests.map(quest => {
      const { address, ticker } = quest;
      return fetch(`${insights[ticker]}/api/address/${address}`);
    });

    Promise.all(requests)
      .then(responses => Promise.all(responses.map(res => res.json())))
      .then(addressStatuses => {
        const completedQuests = remove(activeQuests, quest => {
          const addressStatus = find(addressStatuses, address => {
            return address.addrStr === quest.address;
          });

          return Number(addressStatus.balance) <= 0;
        });

        this.setState({
          activeQuests,
          completedQuests,
          isLoading: false
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    const { isLoading, activeQuests, completedQuests } = this.state;

    const renderQuests = (activeQuests, completedQuests) => {
      return (
        <div className="quests" id="quests">
          <QuestList title="Active quests" quests={activeQuests} />{" "}
          <QuestList
            title="Solved quests"
            quests={completedQuests}
            completed={true}
          />
        </div>
      );
    };

    const renderLoader = () => {
      return <div className="loading">Loading...</div>;
    };
    return (
      <Layout title="Coinquest" theme="dark" isLoading={isLoading}>
        <div className="wrapper">
          {isLoading
            ? renderLoader()
            : renderQuests(activeQuests, completedQuests)}
        </div>
      </Layout>
    );
  }
}
