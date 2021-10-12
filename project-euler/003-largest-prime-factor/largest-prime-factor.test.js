const largestPrimeFactor = require('./largest-prime-factor')

test('returns undefined for numbers smaller than 2', () => {
  expect(largestPrimeFactor(-1)).toBe(undefined)
  expect(largestPrimeFactor(0)).toBe(undefined)
  expect(largestPrimeFactor(1)).toBe(undefined)
})

const [arg1, out1] = [5, 5]
test(`f(${arg1}) = ${out1}`, () => {
  expect(largestPrimeFactor(arg1)).toBe(out1)
})

const [arg2, out2] = [8, 2]
test(`f(${arg2}) = ${out2}`, () => {
  expect(largestPrimeFactor(arg2)).toBe(out2)
})

const [arg3, out3] = [13_195, 29]
test(`f(${arg3}) = ${out3}`, () => {
  expect(largestPrimeFactor(arg3)).toBe(out3)
})
