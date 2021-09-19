const { floor, sqrt } = Math

const isFactor = (num, div) => num % div === 0

const isPivotFactor = (num, div) =>
  isFactor(num, div) || isFactor(num, div + 2)

const hasEarlyFactor = (num) => isFactor(num, 2) || isFactor(num, 3)

const isEarlyPrime = (num) => [2, 3].includes(num)

const isPrime = (num) => {
  if (num < 4) return isEarlyPrime(num)
  if (hasEarlyFactor(num)) return false

  const limit = floor(sqrt(num)) + 1
  for (let div = 5; div < limit; div += 6) {
    if (isPivotFactor(num, div)) return false
  }

  return true
}

const appendFactors = (factors, facta, factb) => {
  const mid = factors.length / 2 // Append in mid to preserve order
  if (facta === factb) factors.splice(mid, 0, facta)
  else factors.splice(mid, 0, facta, factb)
}

const generateFactors = (num) => {
  const factors = []

  for (let facta = 1; facta <= num; facta++) {
    for (let factb = facta; factb <= num; factb++) {
      if (facta * factb === num) {
        appendFactors(factors, facta, factb)
      }
    }
  }

  return factors
}

const largestPrimeFactor = (num) => {
  const factors = generateFactors(num)
  console.log(factors)
  for (let index = factors.length - 1; index >= 0; index--) {
    if (isPrime(factors[index])) {
      return factors[index]
    }
  }
}
