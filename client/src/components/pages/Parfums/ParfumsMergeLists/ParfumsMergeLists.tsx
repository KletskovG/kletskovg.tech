import React from 'react';
import Page from "../../../layout/Page";

export const ParfumsMergeLists = () => {
    return (
        <Page>
            <div>
                <h4> Upload first list </h4>
                <input type="file" name="file_first" />
            </div>
            <div>
                <h4> Upload second list </h4>
            </div>
        </Page>
    )
}
