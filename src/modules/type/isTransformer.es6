import {isFunction} from './isFunction';

export const isTransformer =
  x => isFunction(x['@@transducer/step']);
