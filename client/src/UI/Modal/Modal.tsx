import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import styled from '@emotion/styled';
import {
  flexColumnCenter, wholeScreen
} from '../../styles'

const Modal = ({
  children,
  ...props
}: any) => {
  const theme = useSelector((state: RootState) => state.theme);
  const StyledModal = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    ${flexColumnCenter}
    ${wholeScreen}
    justify-content: center;

    .parent {
      background: rgba(0,0,0,.2);
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }

    div.children {
      z-index:10;
      width: 50%;
      height: 50%;
      background: ${theme.colors.white};
      border-radius: ${theme.borders.radius};
      box-shadow: ${theme.shadows.base};
      ${flexColumnCenter};
      justify-content: center;
    }
  `

  return (
    <>
      <StyledModal
        {...props}
        className={'modal-parent'}
      >
        <div 
          onClick={() => console.log('Close modal')}
          className="parent">
        </div>
        <div className="children">
          { children }
        </div>
      </StyledModal>
    </>
  )
}

export default Modal;
