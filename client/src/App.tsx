import React, { useEffect } from 'react';
import { Switch, Route } from 'wouter';
import HomePage from './components/pages/Home/HomePage';

function App() {
  useEffect(() => {
    console.log(`${process.env.REACT_APP_API}`)
  }, [])
  
  return (
    <>
      <Switch>
        <Route path="/" component={() => <HomePage />} >  </Route>
        <Route path=":rest/*all"></Route>
      </Switch>
    </>
  );
}

export default App;
