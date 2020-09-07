import React from 'react';
import mail from '../../../assets/icons/mail.svg';
import mediumIcon from '../../../assets/icons/medium.svg';
import githubIcon from '../../../assets/icons/github.svg';
import ramblerIcon from '../../../assets/images/rambler.png';
import instaIcon from '../../../assets/icons/instagram.svg';
import telegramIcon from '../../../assets/icons/telegram.svg';
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

  const rambler: ILeftsideItem = {
    link: 'https://rambler-co.ru',
    text: 'Rambler Group',
    description: 'I am working in Rambler group as Frontend engineer',
    iconSrc: ramblerIcon,
  }

  const instagram: ILeftsideItem = {
    link: 'https://www.instagram.com/mb_42/',
    text: 'Instagram',
    description: 'In my instagram you can see reports from Raves',
    iconSrc: instaIcon,
  }
  
  const telegram: ILeftsideItem = {
    link: 'https://t.me/GlebKletskov',
    text: 'Telegram',
    description: 'Feel free to text me',
    iconSrc: telegramIcon,
  }

  const leftsideStyles = css`
    width: 50%;

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
        href={rambler.link}>
        <span className={'leftside-item__link'}>
          <img src={rambler.iconSrc} alt="rambler icon" />
          <span className={'leftside-item__text'}> {rambler.text} </span>
        </span>
        <p className={'leftside-item__description'}>
          {rambler.description}
        </p>
      </a>

      <a
        className={'leftside-item'}
        target={'__blank'}
        href={instagram.link}>
        <span className={'leftside-item__link'}>
          <img src={instagram.iconSrc} alt="instagram icon" />
          <span className={'leftside-item__text'}> {instagram.text} </span>
        </span>
        <p className={'leftside-item__description'}>
          {instagram.description}
        </p>
      </a>

      <a
        className={'leftside-item'}
        target={'__blank'}
        href={telegram.link}>
        <span className={'leftside-item__link'}>
          <img src={telegram.iconSrc} alt="telegram icon" />
          <span className={'leftside-item__text'}> {telegram.text} </span>
        </span>
        <p className={'leftside-item__description'}>
          {telegram.description}
        </p>
      </a>
    </div>
  )
}
