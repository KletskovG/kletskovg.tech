import * as types from './types'
import { inferStringLiteral } from '../typeFunctions';

// export const changeTheme = () => ({
//   type: inferStringLiteral(types.CHANGE_THEME),
//   payload: null,
// });


export const getSettingsPending = () => ({
  type: inferStringLiteral(types.SETTINGS_PENDING),
  payload: null
});

export const getSettingsFailure = () => ({
  type: inferStringLiteral(types.SETTINGS_FAILURE),
  payload: null
})
