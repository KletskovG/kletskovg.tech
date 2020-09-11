import React from 'react';
import avatar from '../../../assets/images/avatar.jpeg';
import { css } from '@emotion/core';
import { Link, useLocation } from 'wouter';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/index';
import reactLogo from '../../../assets/images/react.png';
import reduxLogo from '../../../assets/images/redux.svg';
import angularLogo from '../../../assets/images/angular.svg';
import nginxLogo from '../../../assets/images/nginx.png';

export default function Rightside() {
  const theme = useSelector((state: RootState) => state.theme);
  const [, setLocation] = useLocation();

  const frontEndImages = [
    reactLogo,
    reduxLogo,
    angularLogo,
  ];

  const devOpsImages = [
    nginxLogo
  ];

  const ravesImages = [];

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

    .rightside-interests {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      &__item {
        font-size: 1.5rem;
        transition: ${theme.common.transition};
        display: inline-flex;
        align-items: center;
        position: relative;
        margin-top: 2rem;
        z-index: 2;

        a {
          text-decoration: none;
          color: ${theme.colors.black};
          cursor: pointer;
        }

        &:before {
          position: absolute;
          top: 0;
          right: -.25rem;
          bottom: 0;
          left: -.25rem;
          z-index: 1;
          content: "";
          background: rgba(0, 0, 0, 0.5);
          border-radius: .3em;
          opacity: .2;
          transition: all .2s;
          transform: scaleY(.06);
          transform-origin: 0 100% 0;
        }


        &:hover {
          color: ${theme.colors.white};
          
          img {
            filter: invert(1);
          }

          &:before {
            transform: none;
          }

          a {
            color: ${theme.colors.white};
          }
      }
    }
  }`;
  
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
        <div className="rightside-interests__item" >
          <div className="link" onClick={() => setLocation('/frontend')}>
            FrontEnd
          </div>
          {
            frontEndImages.map(element => (
              <div>
                <img src={element} alt={'frontend skill logo'}></img>
              </div>
            ))
          }
        </div>
        <div className="rightside-interests__item" >
          <div className="link" onClick={() => setLocation('/devops')}>
             DevOps
           </div>
        </div>
        {
          devOpsImages.map(element => (
            <div>
              <img src={element} alt="DevOps skill logo"/>  
            </div>
          ))
        }
        <div className="rightside-interests__item" onClick={() => setLocation('/raves')}>
            Raves
        </div>
      </div>
    </div>
  )
}
