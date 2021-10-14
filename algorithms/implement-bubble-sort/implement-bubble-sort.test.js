const bubbleSort = require('./implement-bubble-sort')

test('sorts []', () => {
  expect(bubbleSort([])).toEqual([])
})

test('sorts [0]', () => {
  expect(bubbleSort([0])).toEqual([0])
})

test('sorts [5, 4, 3, 2, 1]', () => {
  expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5])
})

test('sorts [-37.3, 5.123, 0, 7]', () => {
  expect(bubbleSort([0, -37.3, 7, 5.123])).toEqual([-37.3, 0, 5.123, 7])
})
