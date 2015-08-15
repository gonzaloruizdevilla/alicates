import {curry} from '../functional/curry';
import {construct} from '../functional/construct';
import {Const} from '../functor/Const';

export const view =
  curry(
    (lens, x) =>
      lens(construct(Const))(x).value
  );
