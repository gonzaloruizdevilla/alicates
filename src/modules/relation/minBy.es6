import {head} from '../list/head';
import {reduce} from '../list/reduce';
import {tail} from '../list/tail';

export const minBy =
  (fn, ...xs) => {
    let x = head(xs);
    return reduce(
      (acc, x) => {
        let v = fn(x);
        return v < acc.v ? {v: v, o: x} : acc;
      },
      {v: fn(x), o: x},
      tail(xs)
    ).o;
  };
