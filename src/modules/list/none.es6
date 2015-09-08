import {curry} from '../functional/curry';
import {reduce} from './reduce';
import {reduced} from './reduced';

export
  const none = curry(
    (fn, xs) => reduce(
      (acc, x) => fn(x) ? reduced(false) : true,
      true,
      xs)
  );
