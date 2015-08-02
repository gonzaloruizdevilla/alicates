import {curry} from '../functional/curry';
export const is =
  curry(
    (type, obj) => obj != null && obj.constructor === type || obj instanceof type
  );
