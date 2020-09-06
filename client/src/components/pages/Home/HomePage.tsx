import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/index';
import { css } from '@emotion/core';
import {  flexColumnCenter, page } from '../../../styles';
import Button from '../../../UI/Button/Button'
import { useLocation } from 'wouter';

// TODO: Create component isVisible 

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
    background: ${theme.colors.bg};
    color: ${theme.colors.black};
  `;

  const listStyles = css`
    display: flex;
    width: 100%;
    justify-content: space-around;
    margin-bottom: 20px;
    flex-wrap: wrap;
  `;

  return (
    <div className="home-page" css={homePageStyles}>
        Home page
    </div>
  )
}

export default HomePage;
