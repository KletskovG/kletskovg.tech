import React from 'react';
// import { useLocation } from 'wouter';
import Page from '../../shared/Page/Page';
import HomeRightside from './__Rightside/Home__Rightside';
import HomeLeftside from './__Leftside/Home__Leftside';
// import { getCookie } from '../../../utils/cookies';
// import AnimatedTitle from '../../shared/AnimatedTitle/AnimatedTitle';

import './Home.scss';

const HomePage = () => {
  // const [location] = useLocation();
  // const [isTitle, setisTitle] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setisTitle(false);
  //   }, 1700);
  // }, []);

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
