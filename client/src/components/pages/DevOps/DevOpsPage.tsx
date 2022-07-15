import React, { useState, useEffect } from 'react';
import Page from '../../shared/Page/Page';
import { useLocation } from 'wouter';
import arrowLeft from '../../../assets/icons/arrow-left.svg';
import AnimatedTitle from '../../shared/AnimatedTitle/AnimatedTitle';
import { getCookie } from '../../../utils/cookies';

import './DevOps.scss';

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
        <AnimatedTitle titles={['DEV', 'OPS']} />
        :
        <div
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
