import React from 'react';
import { css } from '@emotion/core';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/index';
import { setCookie } from '../../utils/cookies';
import { ANIMATED_PATHS } from '../../consts';
import useLocation from 'wouter/use-location';
import Header from "./Header";

export default function Page({
  children
}: any) {
  const theme = useSelector((state: RootState) => state.theme);
  const [location] = useLocation();
  ANIMATED_PATHS.forEach(route => {
    if (location.includes(route)) {
      setCookie(route, 'true');
    }
  })


  const pageStyles = css`
    background: ${theme.colors.brand};
    width: 100vw;
  color: ${theme.colors.black};

  .page-menu {
    padding-left: 10%;
    display: flex;
    flex-direction: column;
  }

    .navigation {
        font-size: 1.5rem;
        transition: ${theme.common.transition};
        display: flex;
        align-items: center;
        position: relative;
        margin-top: 2rem;
        z-index: 2;
        cursor: pointer;
        width: fit-content;

        .link {
          margin-right: 25px;
        }

        .element {
          img {
            width: 25px;
            height: 25px;
            margin-left: 15px;
          }
        }

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
  `;

  return (
    <div
      className={'page'}
      css={pageStyles}
    >
      {location !== "/" ? <Header /> : null}
      { children}
    </div>
  )
}
