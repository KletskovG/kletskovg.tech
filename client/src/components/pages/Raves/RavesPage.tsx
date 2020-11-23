import React, { useState, useEffect } from 'react';
import Page from '../../layout/Page';
import RavesTitleLoader from './RavesTitleLoader';

export default function FrontendPage() {
  const [isTitle, setIsTitle] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsTitle(false);
    }, 1700);
  }, [])
  return (
    <Page>
      {
        isTitle ?
        <RavesTitleLoader />
        :
        <div className="front-page">
          <div className={'link'}>
            Telegram Coding Contest
          </div>
        </div>
      }
    </Page>
  )
}
