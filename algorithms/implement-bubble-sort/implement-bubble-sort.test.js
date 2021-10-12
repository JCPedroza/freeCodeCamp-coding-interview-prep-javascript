const bubbleSort = require('./implement-bubble-sort')

test('sorts []', () => {
  expect(bubbleSort([])).toEqual([])
})

test('sorts [5, 4, 3, 2, 1]', () => {
  expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5])
})
