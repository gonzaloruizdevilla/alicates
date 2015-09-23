import {toString} from '../string/toString';

export class Identity {
  constructor(value) {
    this.value = value;
  }
  map(f) {
    return new Identity(f(this.value));
  }
  bind(transform) {
    return transform(this.value);
  }
  toString() {
    return 'Identity(' + toString(this.value) + ')';
  }
}
