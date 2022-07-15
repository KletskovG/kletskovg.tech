import React, { FunctionComponent } from 'react';

import './AnimatedTitle.scss';

type AnimatedTitleProps = {
  titles: string[]
}

const AnimatedTitle: FunctionComponent<AnimatedTitleProps> = ({ titles }) => {
  return (
    <div className={"welcome-title"}>
      {
        titles.map((title: string, index: number) => {
          const timeOfAnimations: number = index === 0 ? 0.5 : index;

          return (
            <h2
              className={`welcome-title-text`}
              style={{
                animationDuration: `${timeOfAnimations}s`,
              }}
            >
              {title}
            </h2>
          )
        })
      }
    </div>
  )
}

export default AnimatedTitle;
