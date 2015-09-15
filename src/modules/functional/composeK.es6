import {chain} from '../list/chain';
import {compose} from './compose';
import {identity} from './identity';
import {map} from '../list/map';

export const composeK =
  (...fns) =>
    fns.length === 0 ? identity
                     : compose(...map(chain, fns));
