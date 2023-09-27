import React from 'react';
import { Icon } from '@components/Icon/Icon';
import type { ILinkProps } from './Link.typings';

import './Link.scss';

export const Link: React.FC<ILinkProps> = (props) => {
    const { url, iconLeft, children } = props;

    return (
        <a
            className="Link"
            href={url}
            target="_blank"
            rel="noreferrer"
        >
            {iconLeft && <Icon type={iconLeft} />}
            <span
                className="Link__Text"
            >
                {children}
            </span>
        </a>
    )
}