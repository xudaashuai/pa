import {mult} from '../src/math'
import {expect} from 'chai'
describe('乘法函数的测试', function () {
  it('1 乘 1 应该等于 1', function () {
    expect(mult(1, 1)).to.be.equal(1);
  });
});
