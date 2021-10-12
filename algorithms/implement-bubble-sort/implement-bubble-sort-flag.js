const bubbleSort = (array) => {
  for (let round = 0; round < array.length - 1; round++) {
    let isSorted = true

    for (let index = 0; index < array.length - round - 1; index++) {
      if (array[index] > array[index + 1]) {
        [array[index], array[index + 1]] = [array[index + 1], array[index]]
        isSorted = false
      }
    }

    if (isSorted) {
      return array
    }
  }

  return array
}

module.exports = bubbleSort
