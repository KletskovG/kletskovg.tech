import React from 'react';
import mail from '../../../assets/icons/mail.svg';
import mediumIcon from '../../../assets/icons/medium.svg';
import githubIcon from '../../../assets/icons/github.svg';
import mailRu from '../../../assets/icons/main-ru.svg';
import soundIcon from '../../../assets/icons/soundcloud.svg';
import linkedIcon from '../../../assets/icons/linkedin.svg';
import { css } from '@emotion/core';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/index';

interface ILeftsideItem {
  text: string;
  iconSrc: string;
  link: string;
  description?: string;
}

export default function Leftside() {
  const theme = useSelector((state: RootState) => state.theme);
  const email: ILeftsideItem = {
    text: 'gfgfddgleb@gmail.com',
    iconSrc: mail,
    link: 'mailto:gfgfddgleb@gmail.com',
  };

  const medium: ILeftsideItem = {
    link: 'https://medium.com/@gfgfddgleb',
    text: 'Medium',
    description: 'My small blog on Medium about DevOps and Frontend development',
    iconSrc: mediumIcon,
  }

  const github: ILeftsideItem = {
    description: 'I participated in Telegram Coding Contest and created some projects for University',
    iconSrc: githubIcon,
    text: 'GitHub',
    link: 'https://github.com/kletskovg',
  }

  const work: ILeftsideItem = {
    link: 'https://corp.mail.ru/',
    text: 'Mail.ru Group',
    description: 'I am working in Mail.ru group as Frontend engineer',
    iconSrc: mailRu,
  }

  const soundcloud: ILeftsideItem = {
    link: 'https://soundcloud.com/rz3vzum40rwr',
    text: 'Soundcloud',
    description: 'Check out my soundcloud account',
    iconSrc: soundIcon,
  }

  const linkedIn: ILeftsideItem = {
    link: 'https://www.linkedin.com/in/gleb-kletskov-798445194/',
    text: 'LinkedIn',
    description: 'Find me in Linkedin',
    iconSrc: linkedIcon,
  }

  const leftsideStyles = css`
    width: 50%;

    @media (max-width: 400px) {
      width: 80%;
    }

    .leftside-item {

      a {
        text-decoration: none;
      }

      &__text {
        color: ${theme.colors.black};
      }

      &__link {
        font-size: 1.5rem;
        color: ${theme.colors.black};
        transition: ${theme.common.transition};
        display: inline-flex;
        align-items: center;
        position: relative;
        margin-top: 2rem;
        z-index: 2;

        img {
          transition: ${theme.common.transition};
        }

        &:hover {
          color: ${theme.colors.white};
          
          img {
            filter: invert(1);
          }

          .leftside-item__text {
            color: ${theme.colors.white};
          }

          &:before {
            transform: none;
          }
        }

        img {
          display: block;
          width: 25px;
          height: 25px;
          margin-right: 10px;
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
      }

      &__description {
        font-size: 1rem;
        color: black;
      }
    }
  `;
  
  return (
    <div 
      className={'leftside'}
      css={leftsideStyles}
    >
      
      <a 
        className={'leftside-item'}
        target={'__blank'}
        href={email.link}>
        <span className={'leftside-item__link'}>
          <img src={email.iconSrc} alt="Email icon"/>
          <span className={'leftside-item__text'}> {email.text} </span>
        </span>
        <p className={'leftside-item__description'}>
          { email.description }
        </p>
      </a>

      <a
        className={'leftside-item'}
        target={'__blank'}
        href={medium.link}>
        <span className={'leftside-item__link'}>
          <img src={medium.iconSrc} alt="medium icon" />
          <span className={'leftside-item__text'}> {medium.text} </span>
        </span>
        <p className={'leftside-item__description'}>
          {medium.description}
        </p>
      </a>

      <a
        className={'leftside-item'}
        target={'__blank'}
        href={github.link}>
        <span className={'leftside-item__link'}>
          <img src={github.iconSrc} alt="github icon" />
          <span className={'leftside-item__text'}> {github.text} </span>
        </span>
        <p className={'leftside-item__description'}>
          {github.description}
        </p>
      </a>

      <a
        className={'leftside-item'}
        target={'__blank'}
        href={work.link}>
        <span className={'leftside-item__link'}>
          <img src={work.iconSrc} alt="work icon" />
          <span className={'leftside-item__text'}> {work.text} </span>
        </span>
        <p className={'leftside-item__description'}>
          {work.description}
        </p>
      </a>

      <a
        className={'leftside-item'}
        target={'__blank'}
        href={linkedIn.link}>
        <span className={'leftside-item__link'}>
          <img src={linkedIn.iconSrc} alt="telegram icon" />
          <span className={'leftside-item__text'}> {linkedIn.text} </span>
        </span>
        <p className={'leftside-item__description'}>
          {linkedIn.description}
        </p>
      </a>
    </div>
  )
}
