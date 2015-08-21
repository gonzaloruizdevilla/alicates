import {curry} from './curry';
import {isArray} from '../type/isArray';
import {map}    from '../list/map';
import {unnest}    from '../list/unnest';
import {__}    from './__';

export const ap =
  curry(
    (fns, arr) =>
      !isArray(arr) ? fns.ap(arr)
                    : unnest(
                        map(
                          map(__,arr),
                          fns
                        )
                      )
  );
