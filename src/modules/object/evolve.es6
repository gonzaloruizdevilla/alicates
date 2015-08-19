import {curry} from '../functional/curry';
import {isFunction} from '../type/isFunction';
import {keys} from './keys';
import {reduce} from '../list/reduce';
import {shallowClone} from './shallowClone';

export const evolve =
  curry(
    (tx, x) =>
      reduce(
        (acc, x) => acc[x] === undefined ? acc :
                    isFunction(tx[x])    ? (acc[x] = tx[x](acc[x]), acc)
                                         : (acc[x] = evolve(tx[x], acc[x]), acc),
        shallowClone(x),
        keys(tx)
      )
  );
