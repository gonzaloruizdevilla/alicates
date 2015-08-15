export class Identity {
  constructor(value) {
    this.value = value;
  }
  map(f) {
    return new Identity(f(this.value));
  }
}
