import {chain} from '../list/chain';
import {pipe} from './pipe';
import {map} from '../list/map';
import {identity} from './identity';

export const pipeK =
  (...fns) =>
    fns.length === 0 ? identity
                     : pipe(...map(chain, fns));
