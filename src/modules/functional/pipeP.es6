import {arity} from './arity';
import {curryN} from '../functional/curryN';
import {reduce} from '../list/reduce';
import {tail} from '../list/tail';

const throwError = () => {throw new Error('pipeP requires at least one argument');};

export const pipeP =
  (...fns) =>
    fns.length === 0 ? throwError() :
        arity(
          fns[0].length,
          curryN(
            fns[0].length,
            (...args) => reduce((acc, fn) => acc.then(fn), fns[0](...args), tail(fns))
          )
        );
