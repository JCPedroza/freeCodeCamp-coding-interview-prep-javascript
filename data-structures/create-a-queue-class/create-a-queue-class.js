class Queue {
  constructor (array = []) {
    this.array = array
  }

  enqueue (item) {
    this.array.push(item)
    return this
  }

  dequeue () {
    return this.array.shift()
  }

  isEmpty () {
    return this.array.length === 0
  }

  front () {
    return this.array[0]
  }

  clear () {
    this.array = []
    return this
  }

  size () {
    return this.array.length
  }

  print () {
    console.log(this.array)
  }

  get length () {
    return this.array.length
  }
}

module.exports = Queue
