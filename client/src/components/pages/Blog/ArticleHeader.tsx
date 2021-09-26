import React from 'react';
import { css } from '@emotion/core';

export const ArticleHeader = ({title}: {title: string}) => {
    
    const styles = css`
        h2 {
            font-weight: bold;
            font-size: 1.2rem;
            color: black;
        }
    `;
    
    return (
        <div css={styles}>
            <h2> { title } </h2>
        </div>
    )
}
