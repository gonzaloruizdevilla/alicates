import {uniqWith} from './uniqWith';
import {equals} from '../logic/equals';

export
  const uniq = uniqWith(equals);
