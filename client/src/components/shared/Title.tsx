import React from 'react'

type TitleProps = {
  title: string;
}

export const Title: React.FunctionComponent<TitleProps> = ({
    title
}) => {
    return (
        <h1>{title}</h1>
    );
}
