import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'wouter';
import HomePage from '../components/pages/Home/HomePage';
import Frontend from '../components/pages/Frontend/FrontendPage';
import DevOpsPage from '../components/pages/DevOps/DevOpsPage';
import RavesPage from '../components/pages/Raves/RavesPage';


export const Router = () => {
  let TradingRouter;

  if (process.env.NODE_ENV === "development") {
    // try {
    //   TradingRouter = React.lazy(() => import("./TradingRouter"))?? undefined;
    // } catch(error) {
    //   TradingRouter = undefined
    // }
  }
  
  return (
    <Switch>
      <Route path="/" component={() => <HomePage />} >  </Route>
      <Route path="/frontend" component={() => <Frontend />}></Route>
      <Route path="/devops" component={() => <DevOpsPage />}></Route>
      <Route path="/raves" component={() => <RavesPage />}></Route>
      {/* {
        TradingRouter ?
          <Suspense fallback={<div> Loading... </div>}>
            <TradingRouter />
          </Suspense>
        : <></>
      } */}
      <Route path="/:rest*">
        <Redirect to={'/'} />
      </Route>
    </Switch>
  )
}