import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/index';
import { css, keyframes } from '@emotion/core';
import { useLocation } from 'wouter';
import Page from '../../layout/Page';
import Rightside from './Rightside';
import Leftside from './Leftside';
import { getCookie } from '../../../utils/cookies';
import AnimatedTitle from '../../layout/AnimatedTitle';

const HomePage = () => {
  const theme = useSelector((state: RootState) => state.theme);
  const [location] = useLocation();
  const [isTitle, setisTitle] = useState(true);

  const home = keyframes`
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

  const homeStyles = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    position: relative;
    padding-top: 3%;

    @media (max-width: 560px) {
      flex-direction: column;
    }

    .job-title {
      width: 50%;
      align-self: flex-start;
    }
  `;

  useEffect(() => {
    setTimeout(() => {
      setisTitle(false);
    }, 1700);
  }, []);

  return (
    <Page>
        {
          isTitle && !!getCookie(location) === false?
          <AnimatedTitle titles={['WEL', 'COME']} />
          :
          <div className="home-page" css={homeStyles}>
            <Rightside />
            <Leftside />
          </div>
        }
      
    </Page>
  )
}

export default HomePage;
