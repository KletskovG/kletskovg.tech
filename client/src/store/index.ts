import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { ThemeReducer, Theme } from './theme/themeReducer';

export type RootState = {
  theme: Theme,
}

const rootReducer = combineReducers({
  theme: ThemeReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));