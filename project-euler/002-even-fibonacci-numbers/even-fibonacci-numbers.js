const getNextFiboNum = (numArray) =>
  numArray[numArray.length - 1] + numArray[numArray.length - 2]

const buildFiboRange = (limit) => {
  const fiboRange = [0, 1]
  let nextFiboNum = getNextFiboNum(fiboRange)

  while (nextFiboNum <= limit) {
    fiboRange.push(nextFiboNum)
    nextFiboNum = getNextFiboNum(fiboRange)
  }

  return fiboRange
}

const fiboEvenSum = (limit = 0) =>
  buildFiboRange(limit)
    .filter(num => num % 2 === 0)
    .reduce((sum, num) => sum + num)

module.exports = fiboEvenSum
