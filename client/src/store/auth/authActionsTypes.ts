import * as actions from './actions';
import { InferValueTypes } from '../typeFunctions';

export type AuthAction = ReturnType<InferValueTypes<typeof actions>>;
