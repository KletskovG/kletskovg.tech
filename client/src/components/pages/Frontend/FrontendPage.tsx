import { css, keyframes } from '@emotion/core';
import React, { useState, useEffect } from 'react';
import Page from '../../layout/Page';
import FrontTitleLoader from './FrontTitleLoader';

export default function FrontendPage() {
  const [isTitle, setIsTitle] = useState(true);

  const projects = [
    {
      name: 'Telegram Coding Contest',
      
    }
  ];

  const front = keyframes`
    0% {
      opacity: 0;
    }

    80% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  `;
  const frontStyles = css`
    
  `;

  useEffect(() => {
    setTimeout(() => {
      setIsTitle(false);
    }, 1700);
  }, [])
  return (
    <Page>
      {
        isTitle ?
        <FrontTitleLoader />
        :
        <div className="front-page">
          <div className={'link'}>
            Telegram Coding Contest
          </div>
        </div>
      }
    </Page>
  )
}
