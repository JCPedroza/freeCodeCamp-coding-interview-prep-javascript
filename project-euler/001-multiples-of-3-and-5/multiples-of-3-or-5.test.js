const multiplesOf3and5 = require('./multiples-of-3-or-5')
const multiplesOf3and5Clike = require('./multiples-of-3-or-5-clike')
const multiplesOf3and5Lambda = require('./multiples-of-3-or-5-lambda')

const [arg1, out1] = [49, 543]
test(`f(${arg1}) = ${out1}`, () => {
  expect(multiplesOf3and5(arg1)).toBe(out1)
  expect(multiplesOf3and5Clike(arg1)).toBe(out1)
  expect(multiplesOf3and5Lambda(arg1)).toBe(out1)
})

const [arg2, out2] = [1_000, 233_168]
test(`f(${arg2}) = ${out2}`, () => {
  expect(multiplesOf3and5(arg2)).toBe(out2)
  expect(multiplesOf3and5Clike(arg2)).toBe(out2)
  expect(multiplesOf3and5Lambda(arg2)).toBe(out2)
})

const [arg3, out3] = [8_456, 16_687_353]
test(`f(${arg3}) = ${out3}`, () => {
  expect(multiplesOf3and5(arg3)).toBe(out3)
  expect(multiplesOf3and5Clike(arg3)).toBe(out3)
  expect(multiplesOf3and5Lambda(arg3)).toBe(out3)
})

const [arg4, out4] = [19_564, 89_301_183]
test(`f(${arg4}) = ${out4}`, () => {
  expect(multiplesOf3and5(arg4)).toBe(out4)
  expect(multiplesOf3and5Clike(arg4)).toBe(out4)
  expect(multiplesOf3and5Lambda(arg4)).toBe(out4)
})
