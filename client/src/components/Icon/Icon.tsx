import React from 'react';
import type { IIconProps } from './Icon.typings';
import { Icons } from './Icon.const';

import './Icon.scss';

export const Icon: React.FC<IIconProps> = (props) => {
    const { type } = props;

    return (
        <div className="Icon">
            <img className="Icon__Image" src={Icons[type]} alt={`Icon ${type}`} />
        </div>
    )
}