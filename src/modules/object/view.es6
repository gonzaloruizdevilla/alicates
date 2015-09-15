import {Const} from '../functor/Const';
import {construct} from '../functional/construct';
import {curry} from '../functional/curry';

export const view =
  curry(
    (lens, x) =>
      lens(construct(Const))(x).value
  );
