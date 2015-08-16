import {curry} from '../functional/curry';

export const hasIn =
  curry(
    (property, obj) =>
      property in obj
  );
