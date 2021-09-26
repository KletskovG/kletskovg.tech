import React from 'react';
import { css } from '@emotion/core';


export const ArticleTitle = ({ title }: {title: string}) => {

    const titleStyle = css`
        h1 {
            color: black;
            font-weight: bold;
            font-size: 2rem;
        }
    `;

    return (
        <div css={titleStyle}>
            <h1> { title } </h1>
        </div>
    )
}
