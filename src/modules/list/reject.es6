import {not} from '../logic/not';
import {filter} from './filter';
import {curry} from '../functional/curry';

export const reject =
  curry(
    (fn, xs) => filter(x => not(fn(x)), xs)
  );
