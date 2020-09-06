import React from 'react'
import { useTheme } from 'emotion-theming'
import { Theme } from '../../store/theme/theme_reducer'
import styled from '@emotion/styled'

interface ButtonProps {
  text: string;
  classes: string[];
  click?(): void;
  fullWidth?: boolean;
  buttonGreen?: boolean;
  authButton?: boolean;
  buttonPrimary?: boolean;
  buttonRed?: boolean;
  theme: Theme;
}

type ButtonAttrs<T> = React.HTMLAttributes<HTMLButtonElement> & ButtonProps & T & {name: string};

const StyledButton = styled.button<ButtonProps>`
    appearance: none;
    background-color: transparent;
    border: 1px solid ${({ theme }: ButtonProps) => theme.colors.brand};
    border-radius: ${({ theme }: ButtonProps) => theme.borders.radius};
    color: ${({ theme }: ButtonProps) => theme.colors.brand};
    cursor: pointer;
    display: inline-block;
    font-size: 16px;
    font-weight: 400;
    height: 48px;
    line-height: 48px;
    padding: 0 32px;
    text-align: center;
    text-decoration: none;
    transition: background-color .25s ease,border .25s ease,color .25s ease;
    vertical-align: middle;
    white-space: nowrap;

    ${(props: ButtonProps) =>  props.fullWidth === true? 'width: 100%;': ''}
    ${( props: ButtonProps ) => props.buttonGreen? 
      `
      background-color: ${props.theme.colors.green};
      color: ${props.theme.colors.white};
      border: none;
      &:hover {
        background: ${props.theme.colors.greenDark}
      }
      `
      : ''
    }
    ${( props: ButtonProps ) => 
      props.buttonPrimary?
      `
        background-color: transparent;
        border: 1px solid ${props.theme.colors.brand};
        color: ${props.theme.colors.brand};

        &:hover {
          background-color: ${props.theme.colors.brand};
          color: ${props.theme.colors.white};
        }
      `
      :
      ''
    }
    ${(props: ButtonProps) => 
        props.authButton?
        `
          margin-top: 20px;
        `
        :
        ''
    }
    ${(props: ButtonProps) =>
      props.buttonRed?
      `
        background-color: transparent;
        border: 1px solid ${props.theme.colors.red};
        color: ${props.theme.colors.red};

        &:hover {
          background-color: ${props.theme.colors.red};
          color: ${props.theme.colors.white};
        }
      `
      : ''
    }
  `


const Button = ({classes, text, click, ...props}: ButtonAttrs<any>) => {
  const theme = useTheme<Theme>();
  return (
    <>
      <StyledButton 
        onClick={click}
        theme={theme}
        {...props}
      >
        { text }
      </StyledButton> 
    </>
  )
}

export default Button;
