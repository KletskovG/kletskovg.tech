import { Dispatch } from 'react';
import { authError, authPending, authSuccess } from '../actions';
import { config } from '../../../config';


export const AuthAction = (password: string) => {
  return async (dispatch: Dispatch<any>) => {
    dispatch(authPending());
    fetch(`${config.API_URL}/auth/sign/?pass=${password}`)
      .then(res => {
        if (res.status === 200) {
          return res.json();
        } else if (res.status === 301) {
          const error = new Error("Unauthorized or pass is incorrect");
          dispatch(authError(error));
        } else {
          dispatch(authError(new Error("Server error")))
        }
      })
      .then(json => {
        dispatch(authSuccess(json.token));
      })
      .catch(err => {
        dispatch(authError(err))
      })
  }
}