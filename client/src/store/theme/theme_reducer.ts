import * as types from './types';
import { ThemeAction } from './ThemeActionTypes';
export type Theme = {
  colors: {
    brand: string,
    brandDark: string,
    green: string,
    greenDark: string,
    red: string,
    shadow: string,
    white: string,
    black: string,
    bg: string,
  }
  common: {
    transition: string;
  }
  borders: {
    radius: string;
    base: string;
  }
  shadows: {
    base: string;
  },
  button: {
    [key: string]: string
  }
}

const themeBaseBorders: Theme["borders"] = {
  radius: '5px',
  base: '1px solid #dfdfdf',
}

const initialState: Theme = {
  colors: {
    brand: '#FCEA00',
    brandDark: '#1633ff',
    green: '#14CD73',
    greenDark: '#0CB863',
    red: '#F55466',
    shadow: '#F1F1F1',
    white: '#ffffff',
    black: '#000000',
    bg: '#F3F4F5',
  },
  common: {
    transition: '.2s all ease'
  },
  borders: themeBaseBorders,
  shadows: {
    base: '1px 2px 4px rgba(0,0,0,.03)'
  },
  button: {
    marginTop: '20px',
    background: 'black',
    color: 'white',
    cursor: 'pointer',
    fontSize: '20px',
    padding: '10px 20px',
    borderRadius: themeBaseBorders.radius,
    border: themeBaseBorders.base,
  }
}

export const ThemeReducer = (
  state = initialState,
  action: ThemeAction,
) => {
  switch (action.type) {
    case (types.CHANGE_THEME): {
      return state;
    }
    default: {
      return state;
    }
  }
}

//     margin- top: 20px;
//   background: black;
//   color: white;
//   border: 2px solid;
//   cursor: pointer;
//   font- size: 10p;
// font - size: 20px;
// padding: 10px 20px;
// }