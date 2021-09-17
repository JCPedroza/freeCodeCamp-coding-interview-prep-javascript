const multipleRange = (limit) =>
  [...Array(limit).keys()]
    .slice(1)
    .filter(num => num % 3 === 0 || num % 5 === 0)

const multiplesOf3and5 = (limit) =>
  multipleRange(limit).reduce((acc, num) => acc + num)

module.exports = multiplesOf3and5
