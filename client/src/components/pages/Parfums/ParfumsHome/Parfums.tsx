import React from 'react';
import Page from "../../../layout/Page";
import {useLocation} from "wouter";

export const Parfums = () => {
    const [, setLocation] = useLocation();
    const linksConfig = [
        {
            name: 'Merge lists from two accounts',
            path: '/merge',
        },
    ];

    const renderLinks = () => {
        return linksConfig.map(link => (
            <div className="link" key={link.path} onClick={() => setLocation(link.path)}>
                {link.name}
            </div>
        ))
    }
    
    return (
        <Page>
            <h4> List of Parfum useful things </h4>
            {renderLinks()}
        </Page>
    )
}