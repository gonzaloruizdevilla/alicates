import {arity} from './arity';
import {reduce} from '../list/reduce';
import {curry} from '../functional/curry';
import {tail} from '../list/tail';

const throwError = () => {throw new Error('pipeP requires at least one argument');};

export const pipeP =
  (...fns) =>
    fns.length === 0 ? throwError() :
        arity(
          fns[0].length,
          curry(
            (...args) => reduce((acc, fn) => acc.then(fn), fns[0](...args), tail(fns)),
            fns[0].length
          )
        );
