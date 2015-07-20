import {curry} from '../functional/curry';
import {all} from './all';
import {contains} from './contains';
import {filter} from './filter';

export
  const intersection = curry((...args) => filter(
    el => (all(contains(el), args)),
    [...(new Set(...args))]
  ), 2);
