import React from 'react';
import avatar from '../../../assets/images/avatar.jpeg';
import { css } from '@emotion/core';

export default function Rightside() {
  
  const rightStyles = css`
    width: 50%;
    align-self: flex-start;

    .rightside-info {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }

    .avatar {
      border-radius: 50%;
      width: 10vw;
      height: 10vw;
    }
  `;
  
  return (
    <div 
      className={'rightside'}
      css={rightStyles}
    >
      <div className="rightside-info">
        <img className={'avatar'} src={avatar} alt="My photo"/>
        <h1> Gleb Kletskov </h1>
      </div>

      <div className="rightside-interests">
        <div className="rightside-interests__item">
          Frontend
        </div>
        <div className="rightside-interests__item">
          DevOps
        </div>
        <div className="rightside-interests__item">
          Raves
        </div>
      </div>
    </div>
  )
}
