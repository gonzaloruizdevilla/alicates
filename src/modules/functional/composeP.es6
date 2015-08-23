import {curryN} from '../functional/curryN';
import {init} from '../list/init';
import {last} from '../list/last';
import {reduceRight} from '../list/reduceRight';

const throwError =
 () => {
   throw new Error('composeP requires at least one argument');
 };

export const composeP =
  (...ps) =>
    ps.length === 0 ? throwError()
                    : curryN(
                        last(ps).length,
                        (...args) => reduceRight(
                          (p, acc) => acc.then(p),
                          last(ps)(...args),
                          init(ps)
                        )
                      );
