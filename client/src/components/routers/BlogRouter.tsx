import React from 'react';
import { Route } from 'wouter';
import { DeployReactWithDocker } from "../pages/Blog/Articles/DeployReactWithDocker";
import { Blog } from "../pages/Blog/Blog";

export const BlogRouter = () => {
    return (
        <>
            <Route
                path="/blog"
                component={() => <Blog />}
            />
            <Route
                path="/blog/deploy-react-with-docker"
                component={() => <DeployReactWithDocker />}
            />
        </>
    )
}
