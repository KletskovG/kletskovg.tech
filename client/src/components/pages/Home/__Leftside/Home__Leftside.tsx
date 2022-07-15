import React from 'react';
import mail from '../../../../assets/icons/mail.svg';
import mediumIcon from '../../../../assets/icons/medium.svg';
import githubIcon from '../../../../assets/icons/github.svg';
import yandex from '../../../../assets/icons/yandex.svg';
import soundIcon from '../../../../assets/icons/soundcloud.svg';
import linkedIcon from '../../../../assets/icons/linkedin.svg';
import { ILeftsideItem } from './Home__Leftside.types';

import './Home__Leftside.scss';

export default function HomeLeftside() {
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
    link: 'https://yandex.com/company/',
    text: 'Yandex',
    description: 'I am working in Yandex as Frontend software engineer',
    iconSrc: yandex,
  }

  // const soundcloud: ILeftsideItem = {
  //   link: 'https://soundcloud.com/rz3vzum40rwr',
  //   text: 'Soundcloud',
  //   description: 'Check out my soundcloud account',
  //   iconSrc: soundIcon,
  // }

  const linkedIn: ILeftsideItem = {
    link: 'https://www.linkedin.com/in/gleb-kletskov-798445194/',
    text: 'LinkedIn',
    description: 'Find me in Linkedin',
    iconSrc: linkedIcon,
  }

  return (
    <div
      className={'leftside'}
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
        <span className={'leftside-item__link leftside-item__link--disabled'}>
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
