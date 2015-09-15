import {chain} from '../list/chain';
import {identity} from './identity';
import {map} from '../list/map';
import {pipe} from './pipe';

export const pipeK =
  (...fns) =>
    fns.length === 0 ? identity
                     : pipe(...map(chain, fns));
