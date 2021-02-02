import React from 'react';
import { Link, useLocation } from 'wouter';
import arrowLeft from '../../../assets/icons/arrow-left.svg';
import Page from '../../layout/Page';


export const TradingPage = () => {
  const [location, setLocation] = useLocation();
  return (
    <Page>
      <div className={"page-menu"}>
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

        <div
          onClick={() => setLocation('/trading/settings')}
          className={'navigation'}
          style={{
            display: 'inline-flex',
          }}
        >
          <span className={'link'}> Trading Settings </span>
        </div>
      </div>
    </Page>
  )
}
