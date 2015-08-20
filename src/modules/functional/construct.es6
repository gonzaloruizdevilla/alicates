import {constructN} from './constructN';

export const construct =
  Fn =>
    constructN(Fn.length, Fn);
