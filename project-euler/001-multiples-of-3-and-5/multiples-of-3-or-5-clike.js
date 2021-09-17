function multiplesOf3and5 (limit) {
  let sum = 0

  for (let num = 1; num < limit; num++) {
    if (num % 3 === 0 || num % 5 === 0) {
      sum += num
    }
  }

  return sum
}

module.exports = multiplesOf3and5
