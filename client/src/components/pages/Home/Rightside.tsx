import React from 'react';
import avatar from '../../../assets/images/avatar.jpeg';
import { css } from '@emotion/core';
import { useLocation } from 'wouter';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/index';
import reactIcon from '../../../assets/icons/react.svg';
import angularIcon from '../../../assets/icons/angular.svg';
import jsIcon from '../../../assets/icons/js-square.svg';
import dockerIcon from '../../../assets/icons/docker.svg';
import digitalOceanIcon from '../../../assets/icons/digital-ocean.svg';
import ubuntuIcon from '../../../assets/icons/ubuntu.svg';
import gravIcon from '../../../assets/icons/grav.svg';
import radIcon from '../../../assets/icons/radiation-alt.svg';
import ninjaIcon from '../../../assets/icons/user-ninja.svg';

export default function Rightside() {
  const theme = useSelector((state: RootState) => state.theme);
  const [, setLocation] = useLocation();

  const frontEndImages = [
    reactIcon,
    angularIcon,
    jsIcon
  ];

  const devOpsImages = [
    dockerIcon,
    digitalOceanIcon,
    ubuntuIcon,
  ];

  const ravesImages = [
    gravIcon,
    radIcon,
    ninjaIcon
  ];

  const rightStyles = css`
    width: 50%;
    align-self: flex-start;

    @media (max-width: 400px) {
      width: 100%;
    }

    .rightside-info {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }

    .avatar {
      border-radius: 50%;
      width: 10vw;
      height: 10vw;
    }

    .rightside-interests {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding-left: 8vw;

      &__item {
        font-size: 1.5rem;
        transition: ${theme.common.transition};
        display: flex;
        align-items: center;
        position: relative;
        margin-top: 2rem;
        z-index: 2;
        cursor: pointer;

        .link {
          margin-right: 25px;
        }

        .element {
          img {
            width: 25px;
            height: 25px;
            margin-left: 15px;
          }
        }

        a {
          text-decoration: none;
          color: ${theme.colors.black};
          cursor: pointer;
        }

        &:before {
          position: absolute;
          top: 0;
          right: -.25rem;
          bottom: 0;
          left: -.25rem;
          z-index: 1;
          content: "";
          background: rgba(0, 0, 0, 0.5);
          border-radius: .3em;
          opacity: .2;
          transition: all .2s;
          transform: scaleY(.06);
          transform-origin: 0 100% 0;
        }


        &:hover {
          color: ${theme.colors.white};
          
          img {
            filter: invert(1);
          }

          &:before {
            transform: none;
          }

          a {
            color: ${theme.colors.white};
          }
      }
    }
  }`;
  
  return (
    <div 
      className={'rightside'}
      css={rightStyles}
    >
      <div className="rightside-info">
        <img className={'avatar'} src={avatar} alt="My avatar"/>
        <h1> Gleb Kletskov </h1>
      </div>

      <div className="rightside-interests">
        <div className="rightside-interests__item" onClick={() => setLocation('/frontend')}>
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

        <div>
          <h2 style={{
            marginBottom: 0,
          }}> Recent Activity </h2>

          <div 
            className="link rightside-interests__item"
            onClick={() => window.open('https://www.youtube.com/watch?v=u52QUw8ON04')}
            style={{
              margin: 0,
            }}
          >
            Rambler Group IT-school speech
          </div>

          <div 
            className="link rightside-interests__item"
            onClick={() => window.open('https://soundcloud.com/rz3vzum40rwr/sets/coding_times')}
            style={{
              margin: 0,
              marginTop: '15px',
            }}
          >
            Playlist for coding on Soundcloud 
          </div>

          <div 
            className="link rightside-interests__item"
            onClick={() => window.open('https://gfgfddgleb.medium.com/how-to-scale-your-web-platform-with-traefik-and-docker-swarm-688ab0387b94')}
            style={{
              margin: 0,
              marginTop: '15px',
            }}
          >
            How to scale your platform with Docker Swarm and Traefik 
          </div>
        </div>
      </div>
    </div>
  )
}
