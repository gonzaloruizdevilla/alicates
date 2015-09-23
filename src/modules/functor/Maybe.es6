import {isNil} from '../type/isNil';
import {toString} from '../string/toString';

class N {
  toString() {
    return 'Nothing()';
  }
  map() {
    return this;
  }
  bind() {
    return this;
  }
}

export const Nothing =  new N();

export class Just {
  constructor(value){
    this.value = value;
  }
  toString() {
    return 'Just(' + toString(this.value) + ')';
  }
  map(f) {
    const newValue = f(this.value);
    return isNil(newValue) ? Nothing
                           : new Just(newValue);
  }
  bind(transform) {
    return transform(this.value);
  }
}

export const toMaybe =
  value => isNil(value) ? new Just(value)
                        : Nothing;
