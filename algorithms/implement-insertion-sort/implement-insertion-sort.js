const insertionSort = (array) => {
  for (let start = 1; start < array.length; start++) {
    let index = start

    while (array[index] < array[index - 1] && index > 0) {
      [array[index], array[index - 1]] = [array[index - 1], array[index]]
      index--
    }
  }

  return array
}

module.exports = insertionSort
