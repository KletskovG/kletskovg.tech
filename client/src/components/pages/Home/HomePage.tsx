import React from 'react';
import Page from '../../shared/Page/Page';
import HomeRightside from './__Rightside/Home__Rightside';
import HomeLeftside from './__Leftside/Home__Leftside';

import './Home.scss';

const HomePage = () => {
  return (
    <Page titles={['WEL', 'COME']}>
      <div className="home-page">
        <HomeRightside />
        <HomeLeftside />
      </div>
    </Page>
  )
}

export default HomePage;
