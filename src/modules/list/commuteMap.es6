import {append} from './append';
import {ap} from '../functional/ap';
import {curry} from '../functional/curry';
import {map} from './map';
import {reduce} from './reduce';


export const commuteMap =
  curry(
    (fn, of, xs) =>
      reduce(
        (acc, ftor) => ap(map(append, fn(ftor)), acc),
        of([]),
        xs
      )
  );
