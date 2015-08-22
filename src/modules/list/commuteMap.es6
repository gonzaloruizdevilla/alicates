import {curry} from '../functional/curry';
import {ap} from '../functional/ap';
import {reduce} from './reduce';
import {append} from './append';
import {map} from './map';


export const commuteMap =
  curry(
    (fn, of, xs) =>
      reduce(
        (acc, ftor) => ap(map(append, fn(ftor)), acc),
        of([]),
        xs
      )
  );
