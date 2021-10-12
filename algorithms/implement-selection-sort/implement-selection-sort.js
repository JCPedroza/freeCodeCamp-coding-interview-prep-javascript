const selectionSort = (array) => {
  for (let round = 0; round < array.length - 1; round++) {
    let [minNum, minNumIndex] = [Infinity, -1]

    for (let index = round; index < array.length; index++) {
      if (array[index] < minNum) {
        [minNum, minNumIndex] = [array[index], index]
      }
    }

    [array[round], array[minNumIndex]] = [array[minNumIndex], array[round]]
  }

  return array
}

module.exports = selectionSort
