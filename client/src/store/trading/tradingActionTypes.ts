import * as actions from './actions';
import { InferValueTypes } from '../typeFunctions';

export type TradingAction = ReturnType<InferValueTypes<typeof actions>>;
