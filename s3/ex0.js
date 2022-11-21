class Stream {
  #value
  #nextValue
  static #count = 0

  constructor (value, nextValue) {
    this.#value = value
    this.#nextValue = nextValue
    Stream.#count++
  }

  get value () {
    return this.#value
  }

  get next () {
    this.#value = this.#nextValue(this.#value)
    return this.#value
  }

  static get count () {
    return Stream.#count
  }
}

class ConstantStream extends Stream {
  constructor (seed) {
    super(seed, value => value)
  }
}

class SteppedStream extends Stream {
  constructor (seed, step) {
    super(seed, value => value + step)
  }
}

const constantStream = new ConstantStream(3)
const steppedStream = new SteppedStream(0, 2)
for (let i = 0; i < 10; i++) {
  console.log(constantStream.next)
  console.log(steppedStream.next) 
}