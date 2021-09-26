import React from 'react'
import { useState, useEffect } from 'react';
import { css } from '@emotion/core';

export const ArticleImage = ({
    src
}: { src: string}) => {
    
    const [imageSrc, setimageSrc] = useState(null);

    useEffect(() => {
        import(`../../../assets/images/${src}`).then(res => {
            setimageSrc(res.default);
        })
    }, [src]);

    const imageStyles = css`
        img {
            display: block;
            width: 50vw;

        }
    `;
    
    return (
        <div css={imageStyles}>
            {
                imageSrc ? 
                <img src={`${imageSrc }`} />
                : null
            }
        </div>
    )
}
