import {lens} from './lens';
import {update} from '../list/update';

export const lensIndex =
  k =>
    lens(
      xs => xs[k],
      update(k)
    );
