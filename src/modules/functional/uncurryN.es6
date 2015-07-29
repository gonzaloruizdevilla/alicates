import {arity} from './arity';
import {unfold} from '../list/unfold';
import {last} from '../list/last';

const continues =
  ({count, n}) =>
    count < n;

const lastRun =
  ({count, fn, n}) =>
    count + fn.length >= n;


const applyFn =
  ({fn, args, count}, rest) =>
    fn(...args.slice(
      count,
      rest ? undefined : count + (fn.length || 1)
    ));

const nextSeed =
  seed => (
    {
      count: seed.count + seed.fn.length,
      fn:  !lastRun(seed) && applyFn(seed),
      n: seed.n,
      args: seed.args
     }
  );

const nextValue =
  seed =>
    lastRun(seed) && applyFn(seed, true);

export const uncurryN =
  (n, fn) => arity(
    n,
    (...args) => last(
      unfold(
        seed => (
          continues(seed) ? [nextValue(seed), nextSeed(seed) ]
                          : false

        ),
        { args: args, n: n,  fn: fn,  count:0 }
      )
    )
  );
