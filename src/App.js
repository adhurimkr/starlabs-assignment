import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Teams from "./pages/Teams";
import TeamDetails from "./pages/TeamDetails";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/teams" exact>
          <Teams />
        </Route>
        <Route path="/teams/:teamId">
          <TeamDetails />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
