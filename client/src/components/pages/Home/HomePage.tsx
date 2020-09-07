import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/index';
import { css } from '@emotion/core';
import { useLocation } from 'wouter';
import Page from '../../layout/Page';
import Rightside from './Rightside';
import Leftside from './Leftside';

const HomePage = () => {
  const [, setLocation] = useLocation();
  const theme = useSelector((state: RootState) => state.theme);
  const homeStyles = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    position: relative;
    padding-top: 3%;

    .job-title {
      width: 50%;
      align-self: flex-start;
    }
  `;

  return (
    <Page>
      <div className="home-page" css={homeStyles}>
        <Rightside />
        <Leftside />
      </div>
    </Page>
  )
}

export default HomePage;
