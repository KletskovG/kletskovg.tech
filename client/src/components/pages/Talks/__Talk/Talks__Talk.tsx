import React from 'react';
import { TalkProps } from './Talks__Talk.types';
import YoutubeLogo from '../../../../assets/images/youtube.png';
import ExternalLink from '../../../../assets/images/external-link.png';


import './Talks__Talk.styles.scss';

export default function Talk(props: TalkProps) {
  const {
    title,
    description,
    video,
    slidesLink,
  } = props;

  const Slides = () => (
    <a
      href={slidesLink}
      target={"_blank"}
      rel="noopener noreferrer"
    >
      Slides <img src={ExternalLink} className="talks__talk-icon" />
    </a>
  )

  return (
    <div className={'talks__talk'}>
      <h2>{title}</h2>
      {description}
      <div className={'talks__talk-links'}>
        <a href={video} target={"_blank"} rel="noopener noreferrer">
          YouTube <img className={'talks__talk-icon'} src={YoutubeLogo}/>
        </a>
        {slidesLink ?  <Slides /> : null}
      </div>
    </div>
  )
}
