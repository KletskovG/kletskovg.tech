import * as types from './types';
import { AuthAction } from './authActionsTypes';
import { setCookie } from '../../utils/cookies';
export type AuthState = {
  loading: boolean;
  error: Error | null;
  token: string;
}

const initialState: AuthState = {
  loading: false,
  error: null,
  token: '',
}

export const TradingAuthReducer = (
  state = initialState,
  action: AuthAction,
) => {
  switch (action.type) {
    case types.AUTH_PENDING:
      return {
        ...state,
        loading: true,
        error: null
      }
      break;
    case types.AUTH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case types.AUTH_SUCCESS:
      setCookie('token', action.payload);
      return {
        ...state,
        loading:false,
        error: null,
        token: action.payload,
      }
    default:
      break;
  }
}