import {reduce} from '../list/reduce';

export const reverse = arr => reduce((acc, x)=> [x,...acc], [] ,arr);
