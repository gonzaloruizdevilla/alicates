import {equals} from '../logic/equals';
import {uniqWith} from './uniqWith';

export
  const uniq = uniqWith(equals);
