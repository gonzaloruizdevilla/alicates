import {indexOf} from './indexOf';
import {tail} from './tail';
import {head} from './head';

export const isSet =
  xs =>
    (xss => (
      xss = tail(xs),
      xs.length === 0             ? true :
      indexOf(head(xs), xss) > -1 ? false
                                  : isSet(xss)
    ))();
