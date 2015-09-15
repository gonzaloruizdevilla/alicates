import {reverse} from '../list/reverse';
import {sequence} from './sequence';

export const compose =
  (...fns) =>
    sequence(...reverse(fns));
