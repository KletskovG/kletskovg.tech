import * as types from './types'
import {inferStringLiteral} from '../typeFunctions';

export const changeTheme = () => ({
  type: inferStringLiteral(types.CHANGE_THEME),
  payload: null,
});


