import {reduce} from '../list/reduce';
import {map} from '../list/map';
import {curry} from './curry';
import {ap} from './ap';

export const liftN =
  curry(
    (arity, fn) =>
      curry((x, ...args) =>
        reduce(ap, map(curry(fn, arity), x), args), arity)
  );
