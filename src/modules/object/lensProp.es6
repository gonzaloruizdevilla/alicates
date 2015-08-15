import {assoc} from './assoc';
import {lens} from './lens';
import {prop} from './prop';

export const lensProp =
  k =>
    lens(prop(k), assoc(k));
