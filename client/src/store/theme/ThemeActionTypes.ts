
import * as actions from './actions';
import {InferValueTypes} from '../typeFunctions';

export type ThemeAction = ReturnType<InferValueTypes<typeof actions>>;