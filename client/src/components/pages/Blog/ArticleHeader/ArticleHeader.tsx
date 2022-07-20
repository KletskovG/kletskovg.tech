import React from 'react';
import { ArticleHeaderProps } from './ArticleHeader.types';

import './ArticleHeader.scss';

export const ArticleHeader: React.FunctionComponent<ArticleHeaderProps> = ({title}) => {
    return (
        <div className={'article-header'}>
            <h2> { title } </h2>
        </div>
    )
}
