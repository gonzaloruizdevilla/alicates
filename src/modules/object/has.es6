import {curry} from '../functional/curry';

export const has =
  curry(
    (property, obj) =>
      obj.hasOwnProperty(property)
  );
