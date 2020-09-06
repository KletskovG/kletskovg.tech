import React from 'react'
import styled from '@emotion/styled';
import { Theme } from '../../store/theme/theme_reducer';
interface IInput {
  field?: any;
  form?: any;
  theme: Theme;
  placeholder?: string;
}
const StyledInput = styled.input<IInput>`
  height: 48px;
  max-width: 100%;
  margin-top: 20px;
  padding: 0 16px;
  transition: all cubic-bezier(0.645, 0.045, 0.355, 1) .25s;
  width: 100%;
  position: relative;

  &:focus {
    outline: 0;
    z-index: 1;
  }

  &::placeholder {
    font-size: 14px;
  }
  border: ${({ theme }: IInput) => theme.borders.base};
  border-radius: ${({ theme }: IInput) => theme.borders.radius};

  border: ${({theme}: IInput) => (theme.borders.base)};
  border-radius: ${({ theme }: IInput) => (theme.borders.radius)};
  background: ${({ theme }: IInput) => ( theme.colors.white )};

  &:focus {
    border-color: ${({ theme }: IInput) => ( theme.colors.brand )};
    background: ${({ theme }: IInput) => ( theme.colors.white )};
    background: ${({ theme }: IInput) => theme.colors.white};
    box-shadow: ${({ theme }: IInput) => theme.shadows.base };
    color: ${({ theme }: IInput) => theme.colors.black};
  }
`

const Input = ({
  field,
  form: {touched, errors},
  theme,
  ...props
}: IInput) => {

return (
    <>
      <div>
        <StyledInput 
          {...field}
          theme={theme}
          {...props}
          
        />
        {
        touched[field.name] &&
        errors[field.name] && 
        <div className="error">{errors[field.name]}</div>
        }
      </div>
    </>
  )
}

export const DefaultInput = ({
  theme,
  ...props
}: IInput) => {
  return (
    <>
      <div>
        <StyledInput 
          theme={theme}
          {...props}
        />
      </div>
    </>
  )
}

export default Input;
