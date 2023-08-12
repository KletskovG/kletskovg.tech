import type { PropsWithChildren } from 'react';
import { IconTypes } from 'typings/IconTypes';

export interface ILinkProps extends PropsWithChildren {
    url: string;
    iconLeft?: typeof IconTypes[number];
}