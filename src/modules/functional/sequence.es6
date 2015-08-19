import {reduce} from '../list/reduce';
import {tail} from '../list/tail';
import {curry} from './curry';

const throwError = () => {throw new Error('pipe requires at least one argument');};

export const sequence =
  (...fns) =>
    fns.length === 0 ? throwError()
                     : curry(
                         function (...args) {
                           return reduce((a, fn) => fn.call(this, a), fns[0].call(this, ...args), tail(fns));
                         },
                         fns[0].length
                       );
