import {reduce} from '../list/reduce';
import {map} from '../list/map';
import {curryN} from './curryN';
import {ap} from './ap';

export const liftN =
  curryN(
    2,
    (arity, fn) =>
      curryN(
        arity,
        (x, ...args) =>
          reduce(
            ap,
            map(curryN(arity, fn), x),
            args
          )
      )
  );
