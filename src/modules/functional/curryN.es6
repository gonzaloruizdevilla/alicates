import {arity} from './arity';

const combine =
  (oldArgs, newArgs) => {
    let values = oldArgs
      .map(x =>
        x['@@functional/placeholder'] ? (newArgs.length ? newArgs.shift() : x)
                                      : x
      )
      .concat(newArgs);
    return {
      values: values,
      length: values.filter(x => !x || !x['@@functional/placeholder']).length
    }
  }


const _curryN =
  (n, fn, oldArgs) =>
    arity(
      n - oldArgs.length,
      function (...newArgs) {
        let args = combine(oldArgs, newArgs);
        return args.length < n ? _curryN(n, fn, args.values)
                               : fn.call(this, ...args.values);
      });

export const curryN =
  (n, fn) => fn === undefined ? (fn =>  _curryN(n, fn, []))
                              : _curryN(n, fn, []);
