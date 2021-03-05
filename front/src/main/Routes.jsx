import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import MainPage from "../pages/MainPage";

export default () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};
