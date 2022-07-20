import React, { useState, useEffect } from 'react';
import Page from '../../shared/Page/Page';
import { useLocation } from 'wouter';
import arrowLeft from '../../../assets/icons/arrow-left.svg';
import AnimatedTitle from '../../shared/AnimatedTitle/AnimatedTitle';
import { getCookie } from '../../../utils/cookies';

import './Frontend.scss';

export default function FrontendPage() {
  const [isTitle, setIsTitle] = useState(true);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    setTimeout(() => {
      setIsTitle(false);
    }, 1700);
  }, [])
  return (
    <Page>
      {
        isTitle && !!getCookie(location) === false ?
          <AnimatedTitle titles={['FRONT', 'END']} />
          :
          <div
            className="front-page">
            {/* TODO: Fix this markup problem */}
            <div
              onClick={() => setLocation('/')}
              className={'navigation'}
              style={{
                display: 'inline-flex',
              }}
            >
              <span
                className={'element'}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex'
                }}
              >
                <img src={arrowLeft} alt="Back to Home page" />
              </span>
              <span className={'link'}> Back to HomePage </span>
            </div>

            <div className="projects">
              <h1> My FrontEnd activity </h1>

              <ul className="projects-list">
                <li
                  className="projects-list__item navigation"
                  onClick={() => {
                    window.open('https://github.com/kletskovg/telegramcontest')
                  }}
                >
                  Telegram Coding Contest (2019)
              </li>
                <li
                  className="projects-list__item navigation"
                  onClick={() => {
                    window.open('https://ramblergroup.com')
                  }}
                >
                  Currenly I am working as frontend software engineer in Rambler Group (Present time)
              </li>
                <li
                  className="projects-list__item navigation"
                  onClick={() => {
                    window.open('https://www.youtube.com/watch?v=u52QUw8ON04')
                  }}
                >
                  Rambler Group IT-school speech
              </li>
              </ul>
            </div>
          </div>

      }
    </Page>
  )
}
