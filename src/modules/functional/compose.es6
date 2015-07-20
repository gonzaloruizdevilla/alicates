import {sequence} from './sequence';
import {reverse} from '../list/reverse';

export const compose = (...fns) => sequence(...reverse(fns));
