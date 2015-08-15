import {curry} from '../functional/curry';

let Const = function(x) {
  return {value: x, map: function() { return this; }};
};

export const view =
  curry(
    (lens, x) =>
      lens(Const)(x).value
  );
