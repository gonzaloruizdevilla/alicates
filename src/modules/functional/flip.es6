import {curry} from '../functional/curry';

export const flip =
  fn =>
    curry((x, y, ...args) => fn(x,y,...args));
