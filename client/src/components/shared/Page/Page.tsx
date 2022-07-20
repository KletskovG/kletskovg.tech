import React, { useState, useEffect } from 'react';
import { setCookie, getCookie } from '../../../utils/cookies';
import { ANIMATED_PATHS, TitleAnimationTime } from '../../../consts';
import useLocation from 'wouter/use-location';
import Header from "../Header/Header";
import AnimatedTitle from '../../shared/AnimatedTitle/AnimatedTitle';
import { PageProps } from './Page.types';

import './Page.scss'

export default function Page({
  children,
  titles,
}: PageProps) {
  const [location] = useLocation();
  const [isTitleAnimating, setIsTitleAnimating] = useState<boolean | null>(null);

  useEffect(() => {
    const isPageAlreadyAnimated = getCookie(location);

    if (titles?.length && Boolean(isPageAlreadyAnimated) === false) {
      setIsTitleAnimating(true);

      setTimeout(() => {
        setIsTitleAnimating(false);
        ANIMATED_PATHS.forEach(route => {
          console.log(route)
          console.log(location.includes(route));
          if (location.includes(route)) {
            setCookie(route, 'true');
          }
        });
      }, TitleAnimationTime.DEFAULT + (titles.length - 1) * TitleAnimationTime.WORD);
    }
  }, [titles, location])

  return (
    <div className={'page'}>
      {location !== "/" && Boolean(isTitleAnimating) === false ? <Header /> : null}
      {isTitleAnimating && titles ? <AnimatedTitle titles={titles} /> : children}
    </div>
  )
}
