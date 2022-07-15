import React from 'react';
import avatar from '../../../../assets/images/avatar.jpeg';
import { useLocation } from 'wouter';
import reactIcon from '../../../../assets/icons/react.svg';
import jsIcon from '../../../../assets/icons/js-square.svg';
import dockerIcon from '../../../../assets/icons/docker.svg';
import gravIcon from '../../../../assets/icons/grav.svg';
import radIcon from '../../../../assets/icons/radiation-alt.svg';
import ninjaIcon from '../../../../assets/icons/user-ninja.svg';

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
    ninjaIcon
  ];

  return (
    <div
      className={'rightside'}
    >
      <div className="rightside-info">
        <img className={'avatar'} src={avatar} alt="My avatar"/>
        <h1> Gleb Kletskov </h1>
      </div>

      <div className="rightside-interests">
        {/* <div className="rightside-interests__item" onClick={() => setLocation('/frontend')}>
          <div className="link" >
            FrontEnd
          </div>
          {
            frontEndImages.map(element => (
              <div className={'element'}>
                <img src={element} alt={'frontend skill logo'}></img>
              </div>
            ))
          }
        </div>
        <div className="rightside-interests__item" onClick={() => setLocation('/devops')}>
          <div className="link" >
             DevOps
           </div>
          {
            devOpsImages.map(element => (
              <div className={'element'}>
                <img src={element} alt="DevOps skill logo" />
              </div>
            ))
          }
        </div> */}

        <div className="rightside-interests__item" onClick={() => setLocation('/blog')}>
          <div className="link">
            Blog
          </div>

          {
            blogImages.map(element => (
              <div className={'element'}>
                <img src={element} alt={'frontend skill logo'}></img>
              </div>
            ))
          }
        </div>

        <div className="rightside-interests__item" onClick={() => window.open('https://instagram.com/mb_42')}>
            <div className="link" onClick={() => setLocation('/raves')}>
              Raves
            </div>
            {
              ravesImages.map(element => (
                <div className={'element'}>
                  <img src={element} alt="Rave logo" />
                </div>
              ))
            }
        </div>
      </div>
    </div>
  )
}
