import React, { Component } from "react";
import { find, remove } from "lodash-es";
import Layout from "../components/layout";
import { insights } from "../config/constants";
import quests from "../config/quests";

export default function withQuests(WrappedComponent, simpleHeader) {
  return class extends Component {
    state = {
      activeQuests: [],
      completedQuests: [],
      isLoading: true
    };

    componentDidMount() {
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

      const renderLoader = () => {
        return <div className="loading">Loading...</div>;
      };
      return (
        <Layout
          title="CoinQuest"
          theme="dark"
          isLoading={isLoading}
          simpleHeader={simpleHeader}
        >
          <div className="wrapper">
            {isLoading ? (
              renderLoader()
            ) : (
              <WrappedComponent
                activeQuests={activeQuests}
                completedQuests={completedQuests}
                isLoading={isLoading}
              />
            )}
          </div>
        </Layout>
      );
    }
  };
}
