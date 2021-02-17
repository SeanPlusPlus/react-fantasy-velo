import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Main from './Main';
import Editions from './Editions';

function Routes() {
  return (
    <Router>
      <div className="App container">
        <Switch>
          <Route path="/editions/2020">
            <Main />
          </Route>
          <Route path="/">
            <Editions />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Routes;
