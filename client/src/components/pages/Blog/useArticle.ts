import { css } from '@emotion/core';

export const useArticle = () => {
    return {
        articleStyles: css`
            .article {
                background: #FFF;
                width: 100vw;
                position:absolute;
                display: flex;
                flex-direction: column;
                align-items: center;

                &__text {

                }

                &__text-bold {
                    font-weight: bold;
                }

                &__text-code {
                    padding: 15px;
                    background: grey;
                    text-align: center;
                }
            }
        `,
    }
}