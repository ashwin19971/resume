import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import { BASE_ROUTE, RESUME_ROUTE } from '../models/routes';
import HomePage from '../modules/HomePage/pages/HomePage';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path={BASE_ROUTE} exact component={HomePage} />
        <Route path={RESUME_ROUTE} exact component={HomePage} />
        <Route component={() => console.log("Page not found")} />
        <Redirect from="//*" to="/*" />
      </Switch>
    )
  }
}

export default Routes;