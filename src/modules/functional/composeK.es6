import {chain} from '../list/chain';
import {compose} from './compose';
import {map} from '../list/map';
import {identity} from './identity';

export const composeK =
  (...fns) =>
    fns.length === 0 ? identity
                     : compose(...map(chain, fns));
