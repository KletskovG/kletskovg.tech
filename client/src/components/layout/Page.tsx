import React from 'react';
import { css } from '@emotion/core';
import { useSelector } from 'react-redux';
import { Theme } from '../../store/theme/theme_reducer';
import { RootState } from '../../store/index';

export default function Page({
  children
}: any) {
  const theme = useSelector((state: RootState) => state.theme);


  const pageStyles = css`
    background: ${theme.colors.brand};
    width: 100vw;
    color: ${theme.colors.black};
  `;
  
  return (
    <div 
      className={'page'}
      css={pageStyles}
    >      
      { children }
    </div>
  )
}
