import React from 'react';
import Page from '../../shared/Page/Page';
import Talk from './__Talk/Talks__Talk';
import MegafonLogo from '../../../assets/images/Megafon.png';
import MegafonPreview from '../../../assets/images/Megafon-Talk-preview.png';

import './Talk.styles.scss'

export default function Talks() {
  const MegafonDescription = () => (
    <div className={'Megafon'}>
      <img
        src={MegafonPreview}
        alt="video preview"
        className={'Megafon-preview'}
        onClick={() => {
          if (window) {
            window.open('https://youtu.be/zIYjIGoR6bs');
          }
        }}
      />
      <p>
        I was invited as speaker to
          <a href="https://corp.megafon.com/">
            Megafon
            <img src={MegafonLogo} alt="Megafon company logo" style={{width: '20px', height: '20px'}}/>
          </a>
        to talk about history of programming languages. <br /> In this talk you can learn about 3 different decades of programming, future of software engineering, and which parts contains modern applications.
      </p>
    </div>
  );

  return (
    <Page titles={['TALKS']}>
      <div className={'talks'}>
        <h1> Public talks </h1>
        <Talk
          title={'Brief history of Programming languages / 19.07.2022'}
          video={'https://youtu.be/zIYjIGoR6bs'}
          slidesLink={'https://disk.yandex.ru/d/_bIjwLfs_tyWRA'}
          description={MegafonDescription()}
        />
      </div>
    </Page>
  )
}
