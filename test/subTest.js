import {sub} from '../src/math'
import {expect} from 'chai'
describe('减法函数的测试', function () {
  it('1 减 1 应该等于 0', function () {
    expect(sub(1, 1)).to.be.equal(0);
  });
});
