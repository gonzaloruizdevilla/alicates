import {isFunction} from './isFunction';

export const isTransducer =
  x => isFunction(x['@@transducer/step']);
