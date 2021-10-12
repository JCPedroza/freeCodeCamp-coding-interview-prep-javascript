const { random } = Math

const selectionSort = require('./implement-selection-sort')

test('sorts empty array', () => {
  expect(selectionSort([])).toEqual([])
})

test('sorts [5, 4, 3, 2, 1]', () => {
  expect(selectionSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5])
})

test('sorts [-37.3, 5.123, 0, 7]', () => {
  expect(selectionSort([0, -37.3, 7, 5.123])).toEqual([-37.3, 0, 5.123, 7])
})

test('sorts random float array of length 50', () => {
  const rngNums = [...Array(50)].map(_ => random() * 10)
  const rngNumsCopy = [...rngNums]
  expect(selectionSort(rngNums)).toEqual(rngNumsCopy.sort())
})
