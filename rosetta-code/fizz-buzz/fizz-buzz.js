const numToFizzBuzz = (num) => {
  let fizzBuzz = ''
  if (num % 3 === 0) fizzBuzz += 'Fizz'
  if (num % 5 === 0) fizzBuzz += 'Buzz'
  return fizzBuzz || num.toString()
}

const fizzBuzz = () =>
  [...Array(100).keys()].map(num => numToFizzBuzz(num + 1))

module.exports = fizzBuzz
