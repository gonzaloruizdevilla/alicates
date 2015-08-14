import {liftN} from './liftN';

export const lift =
  fn => liftN(fn.length, fn);
