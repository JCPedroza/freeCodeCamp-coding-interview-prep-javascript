const isMultiple = (num, div) => num % div === 0

const isValid = (num) => isMultiple(num, 3) || isMultiple(num, 5)

const sumReducer = (acc, item) => acc + item

const sumArray = (array) => array.reduce(sumReducer)

const naturalRange = (limit) => [...Array(limit).keys()].slice(1)

const multipleRange = (limit) => naturalRange(limit).filter(isValid)

const multiplesOf3and5 = (limit) => sumArray(multipleRange(limit))

module.exports = multiplesOf3and5
