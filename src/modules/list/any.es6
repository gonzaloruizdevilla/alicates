import {curry} from '../functional/curry';
import {reduce} from './reduce';
import {reduced} from './reduced';

export
  const any = curry(
    (fn, xs) => reduce(
      (acc, x) => fn(x) ? reduced(true) : false,
      false,
      xs)
  );
