import React, { useState, useEffect } from 'react';
import { css } from '@emotion/core';
import { useLocation } from 'wouter';
import Page from '../../layout/Page';
import Rightside from './Rightside';
import Leftside from './Leftside';
import { getCookie } from '../../../utils/cookies';
import AnimatedTitle from '../../layout/AnimatedTitle';
import { ProvideBackground } from '../../layout/ProvideBackground';
import {Title} from "../../layout/Title";

const HomePage = () => {
  const [location] = useLocation();
  const [isTitle, setisTitle] = useState(true);

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
        {/* <ImprovedTitle title={"Hello world"}/> */}
        {
          isTitle && !!getCookie(location) === false ?
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
