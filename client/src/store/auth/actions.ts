import * as types from './types'
import { inferStringLiteral } from '../typeFunctions';

export const authPending = () => ({
  type: inferStringLiteral(types.AUTH_PENDING),
  payload: null
});

export const authError= (error: Error) => ({
  type: inferStringLiteral(types.AUTH_ERROR),
  payload: error
});

export const authSuccess = (token: string) => ({
  type: inferStringLiteral(types.AUTH_SUCCESS),
  payload: token,
});
