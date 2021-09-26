import React from 'react';
import { Link } from 'wouter';
import Page from '../../layout/Page';

export const Blog = () => {
    return (
        <Page>
            <h1> Blog </h1>

            <Link to="/blog/deploy-react-with-docker">
                <p> Deploy React with docker </p>
            </Link>
        </Page>
    )
}
