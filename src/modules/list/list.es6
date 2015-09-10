import {curry} from '../functional/curry';

export const Nil = {
  isEmpty: true,
  get head() {
    throw new Error('Accessing head on empty list.');
  },
  get tail() {
    throw new Error('Accessing tail on empty list.');
  }
};

export class Cons {
  constructor(head, tail) {
    this.head = head;
    this.tail = tail;
  }
  get isEmpty() {return false;}
}

export const cons =
  (head, tail) =>
    new Cons(head, tail);

const _reverse =
  (acc, list) =>
    list === Nil ? acc
                 : _reverse(cons(list.head, acc), list.tail);

export const reverseList =
  list =>
    _reverse(Nil, list);


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
