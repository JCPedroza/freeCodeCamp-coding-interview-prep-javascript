const selectionSort = require('./implement-selection-sort')

test('sorts []', () => {
  expect(selectionSort([])).toEqual([])
})

test('sorts [0]', () => {
  expect(selectionSort([0])).toEqual([0])
})

test('sorts [5, 4, 3, 2, 1]', () => {
  expect(selectionSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5])
})

test('sorts [-37.3, 5.123, 0, 7]', () => {
  expect(selectionSort([0, -37.3, 7, 5.123])).toEqual([-37.3, 0, 5.123, 7])
})
