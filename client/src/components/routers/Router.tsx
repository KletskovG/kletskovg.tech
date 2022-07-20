import React from 'react';
import { Switch, Route, Redirect } from 'wouter';
import HomePage from '../pages/Home/HomePage';
import Frontend from '../pages/Frontend/FrontendPage';
import Talks from '../pages/Talks/Talks';
import DevOpsPage from '../pages/DevOps/DevOpsPage';
import { BlogRouter } from './BlogRouter';


export const Router = () => {
  return (
    <Switch>
      <Route path="/" component={() => <HomePage />} >  </Route>
        <Route path="/frontend" component={() => <Frontend />}></Route>
        <Route path="/devops" component={() => <DevOpsPage />}></Route>
        <Route path="/talks" component={() => <Talks />}></Route>
      <BlogRouter />
      <Route path="/:rest*">
        <Redirect to={'/'} />
      </Route>
    </Switch>
  )
}
