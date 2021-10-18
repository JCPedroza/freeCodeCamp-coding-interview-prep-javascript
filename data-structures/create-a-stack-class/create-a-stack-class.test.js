const Stack = require('./create-a-stack-class')

test('pushes, pops, peeks, and clears', () => {
  const stack = new Stack()
  expect(stack.length).toBe(0)
  expect(stack.isEmpty()).toBe(true)
  expect(stack.peek()).toBeUndefined()
  expect(stack.pop()).toBeUndefined()

  const pushNum = 10
  stack.push(pushNum)
  expect(stack.isEmpty()).toBe(false)
  expect(stack.length).toBe(1)
  expect(stack.peek()).toBe(pushNum)
  expect(stack.pop()).toBe(pushNum)

  const array = [7, -9, 0.4, 23, -10]
  const lastNum = array[array.length - 1]
  stack.array = array
  expect(stack.length).toBe(array.length)
  expect(stack.isEmpty()).toBe(false)
  expect(stack.peek()).toBe(lastNum)
  expect(stack.pop()).toBe(lastNum)
  expect(stack.length).toBe(array.length)
  expect(stack.array).toEqual(array)
  stack.clear()
  expect(stack.length).toBe(0)
  expect(stack.isEmpty()).toBe(true)
})
