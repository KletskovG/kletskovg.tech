import React from 'react';
import { ArticleTitleProps } from './ArticleTitle.types';

import './ArticleTitle.scss';

export const ArticleTitle: React.FunctionComponent<ArticleTitleProps> = ({ title }) => {
    return (
        <div className={'article-title'}>
            <h1>{title}</h1>
        </div>
    )
}
