import { Router, Switch, Route } from 'wouter';
import { MainPage } from '@pages/Main/MainPage';

import './App.scss';

export function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route>
            <MainPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
