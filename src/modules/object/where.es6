import {all} from '../list/all';
import {curry} from '../functional/curry';
import {keys} from './keys';

export const where =
  curry(
    (spec, obj) =>
      all(key => spec[key](obj[key]), keys(spec))
  );
