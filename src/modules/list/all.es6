import {curry} from '../functional/curry';
import {reduce} from './reduce';
import {reduced} from './reduced';

export
  const all = curry(
    (fn, xs) => reduce(
      (acc, x) => fn(x) ? true: reduced(false),
      true,
      xs)
  );
