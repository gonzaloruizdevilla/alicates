import {curry}    from '../functional/curry';
import {equals}   from '../logic/equals';
import {into}     from '../list/into';
import {map}      from '../list/map';
import {toString} from '../string/toString';

let reverse ;

class NilClz {
  constructor(){
    this.isEmpty = true;
  }
  get head() {
    throw new Error('Accessing head on empty list.');
  }
  get tail() {
    throw new Error('Accessing tail on empty list.');
  }
  equals(x) {
    return x.isEmpty;
  }
  map() {
    return this;
  }
  toString() {
    return 'Nil';
  }
}

export const Nil = new NilClz();

export class Cons {
  constructor(head, tail) {
    this.head = head;
    this.tail = tail;
  }
  get isEmpty() {return false;}
  toString() {
    return 'Cons(' + toString(this.head) + ', ' + toString(this.tail) + ')';
  }
  equals(x) {
    return equals(this.head, x.head) ? this.tail.equals(x.tail)
                                     : false;
  }
  map(fn) {
    return into(Nil, map(fn), reverse(this));
  }
  [Symbol.iterator]() {
    let pos = this;
    return {
        next: () => {
          let result = (pos === Nil) ? {done: true}
                                     : {done: false, value: pos.head}
          pos = result.done ? pos : pos.tail;
          return result;
        }
    };
  }
}

export const cons =
  (head, tail) =>
    new Cons(head, tail);

const _reverse =
  (acc, list) =>
    list === Nil ? acc
                 : _reverse(cons(list.head, acc), list.tail);

reverse =
  list =>
    _reverse(Nil, list);

export const reverseList = reverse;

const _length =
  (acc, list) =>
    list.isEmpty ? acc
                 : _length(acc + 1, list.tail);

export const listLength =
  list =>
    _length(0, list);

const _toArray =
  (acc, pos, list) =>
    list.isEmpty ? acc
                 : (acc[pos] = list.head, _toArray(acc, pos - 1, list.tail));

export const toArray =
  curry(
    (start, list) =>(
      _toArray(start, start.length + listLength(list) - 1, list)
    )
  );

export const isList =
  obj =>
    obj.constructor.name === 'Cons' || obj.isEmpty;
