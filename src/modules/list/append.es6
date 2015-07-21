import {curry} from '../functional/curry';

export const append =
  curry((el, arr) => [...arr, el]);
