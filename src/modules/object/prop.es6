import {isNil} from '../type/isNil';
//TODO:  check Content Security Policy to use new Function when allowed.
const _prop =
  (p, x) =>
    isNil(x) ? undefined : x[p];

export const prop =
  (p, ...args) =>
    args.length > 0 ? _prop(p, args[0])
                    : (x => _prop(p, x));
