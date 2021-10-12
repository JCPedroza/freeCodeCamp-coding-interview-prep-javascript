const fiboEvenSum = require('./even-fibonacci-numbers')

test('returns 0 when called with no arguments', () => {
  expect(fiboEvenSum()).toBe(0)
})

test('returns 0 when called with negative number', () => {
  expect(fiboEvenSum(-10)).toBe(0)
})

const [arg1, out1] = [10, 10]
test(`f(${arg1}) = ${out1}`, () => {
  expect(fiboEvenSum(arg1)).toBe(out1)
})

const [arg2, out2] = [1_000, 798]
test(`f(${arg2}) = ${out2}`, () => {
  expect(fiboEvenSum(arg2)).toBe(out2)
})

const [arg3, out3] = [100_000, 60_696]
test(`f(${arg3}) = ${out3}`, () => {
  expect(fiboEvenSum(arg3)).toBe(out3)
})
