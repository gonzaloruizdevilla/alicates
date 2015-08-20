import {arity} from './arity';

const argsLength =
  args =>
    args.filter(x => !x || !x['@@functional/placeholder']).length;

const combine =
  (oldArgs, newArgs) =>
    oldArgs
      .map(x =>
        x && x['@@functional/placeholder'] ? (newArgs.length ? newArgs.shift() : x)
                                           : x
      )
      .concat(newArgs);



const _curryN =
  (n, fn, oldArgs) =>
    arity(
      n - argsLength(oldArgs),
      function (...newArgs) {
        let args = combine(oldArgs, newArgs);
        return argsLength(args) < n ? _curryN(n, fn, args)
                                    : fn.call(this, ...args);
      });

export const curryN =
  (n, fn) => fn === undefined ? (fn =>  _curryN(n, fn, []))
                              : _curryN(n, fn, []);
