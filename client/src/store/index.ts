import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { ThemeReducer, Theme } from './theme/theme_reducer';
import { AuthState } from "./trading/auth/authReducer";
import { TradingAuthReducer } from "./trading/auth/authReducer"

export type RootState = {
  theme: Theme,
  tradingAuth: AuthState | null,
}

const rootReducer = combineReducers({
  theme: ThemeReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));