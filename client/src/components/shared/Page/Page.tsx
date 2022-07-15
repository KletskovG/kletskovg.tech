import React from 'react';
import { setCookie } from '../../../utils/cookies';
import { ANIMATED_PATHS } from '../../../consts';
import useLocation from 'wouter/use-location';
import Header from "../Header/Header";

import './Page.scss'

export default function Page({
  children
}: any) {
  const [location] = useLocation();

  // TODO: Refactor
  ANIMATED_PATHS.forEach(route => {
    if (location.includes(route)) {
      setCookie(route, 'true');
    }
  });

  return (
    <div
      className={'page'}
    >
      {location !== "/" ? <Header /> : null}
      { children}
    </div>
  )
}
