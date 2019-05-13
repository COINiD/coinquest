import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Front from "./pages/front";
import Quest from "./pages/quest";
import FourOhFour from "./pages/404";

const rootElement = document.getElementById("root");

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Front} />
          <Route exact path="/quests/:questId" component={QuestRoute} />
          <Route exact path="*" component={FourOhFour} />
        </Switch>
      </div>
    </Router>
  );
}

function QuestRoute({ match }) {
  return <Quest questId={match.params.questId} />;
}

render(<App />, rootElement);
