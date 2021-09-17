const nextFibo = (numArray) =>
  numArray[numArray.length - 1] + numArray[numArray.length - 2]

const appendNextFibo = (numArray) => numArray.push(nextFibo(numArray))

const buildFiboRange = (limit) => {
  const fiboRange = [1, 2]

  while (nextFibo(fiboRange) <= limit) {
    appendNextFibo(fiboRange)
  }

  return fiboRange
}

const fiboEvenSum = (limit) =>
  buildFiboRange(limit)
    .filter(num => num % 2 === 0)
    .reduce((acc, num) => acc + num)

module.exports = fiboEvenSum
