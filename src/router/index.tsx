import React, {Component, lazy, Suspense} from 'react';
import {HashRouter as Router, Route, Switch, Redirect} from "react-router-dom";

const Home = lazy(() => import('../pages/Home'));

export default class BasicRouter extends Component<any, any> {
  render() {
    return (
      <Router>
        <Suspense fallback={<div></div>}>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Redirect from="/*" to="/"/>
          </Switch>
        </Suspense>
      </Router>
    );
  }
};
