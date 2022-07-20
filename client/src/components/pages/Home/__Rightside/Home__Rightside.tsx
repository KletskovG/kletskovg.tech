import React from 'react';
import avatar from '../../../../assets/images/avatar.jpeg';
import { useLocation } from 'wouter';
import reactIcon from '../../../../assets/icons/react.svg';
import jsIcon from '../../../../assets/icons/js-square.svg';
import dockerIcon from '../../../../assets/icons/docker.svg';
import gravIcon from '../../../../assets/icons/grav.svg';
import radIcon from '../../../../assets/icons/radiation-alt.svg';
import ninjaIcon from '../../../../assets/icons/user-ninja.svg';
import mouthpieceIcon from '../../../../assets/images/mouthpiece.png'
import presentationIcon from '../../../../assets/images/presentation.png';

import './Home__Rightside.scss';

export default function HomeRightside() {
  const [, setLocation] = useLocation();

  const blogImages = [
    reactIcon,
    jsIcon,
    dockerIcon,
  ];


  const ravesImages = [
    gravIcon,
    radIcon,
    ninjaIcon,
  ];

  const talksIcons = [
    mouthpieceIcon,
  ];

  const renderIcons = (icons: string[]) => icons.map(icon => (
    <div className={'element'} key={icon}>
      <img src={icon} alt={'frontend skill logo'}></img>
    </div>
  ));

  return (
    <div
      className={'rightside'}
    >
      <div className="rightside-info">
        <img className={'avatar'} src={avatar} alt="My avatar"/>
        <h1> Gleb Kletskov </h1>
      </div>

      <div className="rightside-interests">
        <div className="rightside-interests__item" onClick={() => setLocation('/talks')}>
          <div className="link">
            Public Talks
          </div>

          {renderIcons(talksIcons)}
        </div>

        <div className="rightside-interests__item" onClick={() => setLocation('/blog')}>
          <div className="link">
            Blog
          </div>

          {renderIcons(blogImages)}
        </div>

        <div className="rightside-interests__item" onClick={() => window.open('https://instagram.com/mb_42')}>
            <div className="link" onClick={() => setLocation('/raves')}>
              Raves
            </div>
            {renderIcons(ravesImages)}
        </div>
      </div>
    </div>
  )
}
