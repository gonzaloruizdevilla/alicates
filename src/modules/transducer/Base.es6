export class Base {
  '@@transducer/init'() {
    return this.xf['@@transducer/init']();
  }
  '@@transducer/result'(result) {
    return this.xf['@@transducer/result'](result);
  }
}
