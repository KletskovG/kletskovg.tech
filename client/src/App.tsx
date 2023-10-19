import { Router, Switch, Route } from 'wouter';
import { MainPage } from '@pages/Main/MainPage';
import { PercentagePage } from '@pages/Percentage/PercentagePage';

import './App.scss';

export function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/percentage">
            <PercentagePage />
          </Route>
          <Route>
            <MainPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
