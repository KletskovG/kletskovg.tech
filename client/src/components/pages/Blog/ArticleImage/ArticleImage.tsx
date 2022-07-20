import React from 'react'
import { useState, useEffect } from 'react';
import { ArticleImageProps } from './ArticleImage.types';

import './ArticleImage.scss';

export const ArticleImage: React.FunctionComponent<ArticleImageProps> = ({
    src,
}) => {

    const [imageSrc, setimageSrc] = useState(null);

    // TODO: Refactor - use Suspence
    useEffect(() => {
        import(`../../../../assets/images/${src}`).then(res => {
            setimageSrc(res.default);
        })
    }, [src]);

    return (
        <div
          className={'article-image'}
        >
            {
                imageSrc && <img src={`${imageSrc }`} />
            }
        </div>
    )
}
