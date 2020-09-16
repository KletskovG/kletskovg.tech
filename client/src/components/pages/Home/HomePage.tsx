import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/index';
import { css, keyframes } from '@emotion/core';
import { useLocation } from 'wouter';
import Page from '../../layout/Page';
import Rightside from './Rightside';
import Leftside from './Leftside';
import TitleLoader from './TitleLoader';

const HomePage = () => {
  const theme = useSelector((state: RootState) => state.theme);

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
    animation: ${home} 1.7s ease 1 forwards;

    @media (max-width: 400px) {
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
          isTitle ?
          <TitleLoader />
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
