import {curry} from '../functional/curry';
import {equals} from '../logic/equals';
import {mapObj} from './mapObj';
import {where} from './where';


export const whereEq =
  curry(
    (spec, obj) =>
      where(mapObj(equals, spec), obj)
  );
