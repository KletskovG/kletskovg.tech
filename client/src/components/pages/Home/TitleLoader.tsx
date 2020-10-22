import React from 'react';
import { css, keyframes } from '@emotion/core';

export default function TitleLoader() {
  
  const bigTitle = keyframes`
    0% {
      transform: translate(-1000vw);
    }

    100% {
      transform: translate(0);
    }
  `;

  const titleStyles = css`
    font-family: 'TTFirsNeue-BlackItalic', sans-serif;
    font-style: italic;
    font-size: 20vw;
    display: block;
    width: 100vw;
    word-break: break-all;
    margin: -3% -5%;
    letter-spacing: -13px;
    line-height: 24vw;
    z-index: 10;

    h2 {
      margin: 0;
    }

    .first {
      animation: ${bigTitle} 0.5s ease 1 forwards;
    }

    .second {
      animation: ${bigTitle} 1s ease 1 forwards;
    }
  `;

  return (
    <div css={titleStyles}>
      <h2 className={'big-title first'}>
        WEL
      </h2>
      <h2 className="big-title second">
        COME
      </h2>
    </div>
  )
}