const Queue = require('./create-a-queue-class')

const testState = (queue, expectedArray) => {
  expect(queue.array).toEqual(expectedArray)
  expect(queue.length).toBe(expectedArray.length)
  expect(queue.size()).toBe(expectedArray.length)
  expect(queue.isEmpty()).toBe(expectedArray.length === 0)
  expect(queue.front()).toBe(expectedArray[0])
}

const testEmptyness = (queue) => testState(queue, [])

const testSingletonZero = (queue) => testState(queue, [0])

test('performs basic queue operations', () => {
  const queue = new Queue()
  testEmptyness(queue)

  queue.enqueue(0)
  testSingletonZero(queue)

  queue.enqueue(1).enqueue(2).enqueue(3)
  testState(queue, [0, 1, 2, 3])

  expect(queue.dequeue()).toBe(0)
  expect(queue.dequeue()).toBe(1)
  testState(queue, [2, 3])

  queue.clear()
  testEmptyness(queue)
})
