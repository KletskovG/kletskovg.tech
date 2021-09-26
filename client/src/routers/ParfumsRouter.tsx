import React from 'react';
import { Switch, Route, Redirect } from 'wouter';
import {Parfums} from "../components/pages/Parfums/ParfumsHome/Parfums";
import {ParfumsMergeLists} from "../components/pages/Parfums/ParfumsMergeLists/ParfumsMergeLists";

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
