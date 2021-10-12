const fizzBuzz = require('./fizz-buzz')

test('FizzBuzz from 1 to 15', () => {
  const fizzBuzzRange = ['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz',
    'Buzz', '11', 'Fizz', '13', '14', 'FizzBuzz']
  expect(fizzBuzz().slice(0, 15)).toEqual(fizzBuzzRange)
})
