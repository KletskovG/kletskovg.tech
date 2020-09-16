import { css, keyframes } from '@emotion/core';
import React, { useState, useEffect } from 'react';
import Page from '../../layout/Page';
import DevOpsTitleLoader from './DevOpsTitleLoader';
import { useLocation } from 'wouter';
import arrowLeft from '../../../assets/icons/arrow-left.svg';

export default function FrontendPage() {
  const [isTitle, setIsTitle] = useState(true);
  const [, setLocation] = useLocation();
  const projects = [
    {
      name: 'Telegram Coding Contest',
      
    }
  ];

  const front = keyframes`
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
    const frontStyles = css`
    padding: 10vh;

    @media (max-width: 400px) {
      padding: 5vh;
      
      .navigation {
        font-size: 1rem;
      }

      .projects-list {
        margin: 0;
        padding: 0;
      }
    }

    .link {
      margin-left: 25px;
    }

    .projects {

      &-list {

        .navigation {
          display: inline-flex !important;

          img {
            margin: 0;
          }
        }

        &__item {
        }
      }
    }
  `;

  useEffect(() => {
    setTimeout(() => {
      setIsTitle(false);
    }, 1700);
  }, [])
  return (
    <Page>
      {
        isTitle ?
        <DevOpsTitleLoader />
        :
        <div 
        css={frontStyles}
        className="front-page">
        <div 
          onClick={() => setLocation('/')}
          className={'navigation'}
          style={{
            display: 'inline-flex',}}
        >
            <span 
              className={'element'}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex'
              }}
            >
              <img src={arrowLeft} alt="Back to Home page"/>
            </span>
            <span className={'link'}> Back to HomePage </span>  
        </div>

        <div className="projects">
          <h1> My DevOps activity </h1>

          <ul className="projects-list">
            <li 
              className="projects-list__item navigation"
              onClick={() => {
                window.open('https://github.com/kletskovg/authservice')
              }}                
            >
              AuthService (2020)
            </li>
          </ul>
        </div>
      </div>
    
      }
    </Page>
  )
}
