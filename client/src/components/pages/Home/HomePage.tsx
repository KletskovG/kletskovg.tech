import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/index';
import { css } from '@emotion/core';
import {  flexColumnCenter, page } from '../../../styles';
import { useLocation } from 'wouter';
import Page from '../../layout/Page';

export interface HomePageProps {
  isCreateModal?: boolean
}

const HomePage = ({
  isCreateModal
}: HomePageProps) => {
  const [, setLocation] = useLocation();
  const theme = useSelector((state: RootState) => state.theme);
  const homePageStyles = css`
    padding-top: 20px;
    ${flexColumnCenter};
    ${page};
  `;

  const listStyles = css`
    display: flex;
    width: 100%;
    justify-content: space-around;
    margin-bottom: 20px;
    flex-wrap: wrap;
  `;

  return (
    <Page>
      <div className="home-page" css={homePageStyles}>
        Home page
      </div>
    </Page>
  )
}

export default HomePage;
