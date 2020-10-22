import React, { FC, useEffect } from 'react';
import { css, keyframes } from '@emotion/core';
import useLocation from 'wouter/use-location';
import { getCookie } from '../../utils/cookies';

type AnimatedTitleProps = {
  titles: string[]
}

const AnimatedTitle: FC<AnimatedTitleProps> = ({ titles })=> {
  const [location] = useLocation();
  
  useEffect(() => {
    const cookie = getCookie(location);
    console.log(cookie)
  }, [])
  
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
  `;

  return (
    <>
      <div css={titleStyles}>
        {
          titles.map((title: string, index: number) => {
            let timeOfAnimations: number;
            if (index === 0) {
              timeOfAnimations = 0.5;
            } else {
              timeOfAnimations = index;
            }

            const anim = css`
              animation: ${bigTitle} ${timeOfAnimations}s ease 1 forwards;
            `;
            
            return (
              <h2 
                className={`big-title first`}
                css={anim}
              >
                {title}
              </h2>
            )
          })
        }
      </div>
    </>
  )
}

export default AnimatedTitle;