import { IconTypes } from 'typings/IconTypes';

export const Icons: Record<typeof IconTypes[number], string> = {
    'github': 'https://storage.yandexcloud.net/site-frontend/site-assets/icons/github.svg',
    'linkedin': 'https://storage.yandexcloud.net/site-frontend/site-assets/icons/linkedin.svg',
    'mail': 'https://storage.yandexcloud.net/site-frontend/site-assets/icons/mail.svg',
} as const;