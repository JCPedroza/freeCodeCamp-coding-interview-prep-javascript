const wordFrequency = require('./word-frequency')

test('returs empty array if called with no arguments', () => {
  expect(wordFrequency()).toEqual([])
})

test('empty string returns an empty array', () => {
  expect(wordFrequency('')).toEqual([])
})

test('out of bounds index returns the entire list', () => {
  expect(wordFrequency('To be to', 20)).toEqual([['to', 2], ['be', 1]])
})

test('counts with punctuation and apostrophe', () => {
  expect(wordFrequency("Ana didn't ana. Sang; ana DIDN'T", 2))
    .toEqual([['ana', 3], ["didn't", 2]])
})
