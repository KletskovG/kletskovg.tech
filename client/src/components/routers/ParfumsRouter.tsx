import React from 'react';
import { Switch, Route, Redirect } from 'wouter';
import {Parfums} from "../pages/Parfums/ParfumsHome/Parfums";
import {ParfumsMergeLists} from "../pages/Parfums/ParfumsMergeLists/ParfumsMergeLists";

export const ParfumsRouter = () => {
    return (
        <Switch>
            <Route path="/" component={() => <Parfums />} />
            <Route path="/merge" component={() => <ParfumsMergeLists />} />
            <Route path="/:rest*">
                <Redirect to={'/'} />
            </Route>
        </Switch>
    )
}
