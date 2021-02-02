import * as types from './types';
import { TradingAction } from './tradingActionTypes';
import { TradingSettings } from '../../interfaces/trading/ITradingSettings';

export type TradingState = {
  loading: boolean;
  error: Error | null;
  settings: TradingSettings;
}

const initialState: TradingState = {
  loading: false,
  error: null,
  settings: null
}

export const TradingReducer = (
  state = initialState,
  action: TradingAction,
) => {
  switch (action.type) {
    case types.SETTINGS_PENDING:
      return {
        ...state,
        loading: true,
        error: null
      }
      break;
    case types.SETTINGS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      break;
  }
}