import {curry} from '../functional/curry';
import {filter} from './filter';
import {not} from '../logic/not';

export const reject =
  curry(
    (fn, xs) => filter(x => not(fn(x)), xs)
  );
