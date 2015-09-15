import {ap} from './ap';
import {curryN} from './curryN';
import {map} from '../list/map';
import {reduce} from '../list/reduce';

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
