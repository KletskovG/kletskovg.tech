import { css} from '@emotion/core'

export const baseInput = css`
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
`