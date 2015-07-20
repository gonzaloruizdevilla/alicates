import {reduce} from '../list/reduce';
import {map} from '../list/map';
import {curry} from './curry';
import {apply} from './apply';

export const lift =
  (fn, arity) =>
    curry((x, ...args) =>
      reduce(apply, map(curry(fn, arity), x), args), arity);
