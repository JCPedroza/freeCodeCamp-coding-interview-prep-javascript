class Stack {
  constructor (array = []) {
    this.array = array
  }

  push (item) {
    this.array.push(item)
  }

  pop () {
    return this.array.pop()
  }

  isEmpty () {
    return this.array.length === 0
  }

  peek () {
    if (!this.isEmpty()) {
      return this.array[this.array.length - 1]
    }
  }

  clear () {
    this.array = []
  }

  print () {
    console.log(this.array)
  }

  get length () {
    return this.array.length
  }
}

module.exports = Stack
