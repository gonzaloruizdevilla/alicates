import {reduce} from '../list/reduce';
import {tail} from '../list/tail';
import {head} from '../list/head';

export const maxBy =
  (fn, ...xs) => {
    let x = head(xs);
    return reduce(
      (acc, x) => {
        let v = fn(x);
        return v > acc.v ? {v:v, o:x} : acc;
      },
      {v: fn(x), o: x},
      tail(xs)
    ).o;
  };
