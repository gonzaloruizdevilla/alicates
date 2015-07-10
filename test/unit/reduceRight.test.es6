'use strict';
let assert = require('chai').assert;

import {reduceRight} from '../../src/index.es6';


describe('reduceRight', () => {
  const add =  (value, acc) => acc + value;

  it('should reduce arrays', () =>{
    const result = reduceRight(add, '', ['0','1','2']);
    assert.equal(result,'210');
  });

  it('should be curried', () =>{
    let result = reduceRight(add)('')(['0','1','2']);
    assert.equal(result,'210')
    result = reduceRight(add, '')(['0','1','2']);
    assert.equal(result,'210')
    result = reduceRight(add)('', ['0','1','2']);
    assert.equal(result,'210')
  });
});
