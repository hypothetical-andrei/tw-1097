function genCalcSum () {
  const cache = {}
  return function (...args) {
    const key = JSON.stringify(args)
    if (key in cache) {
      console.log('found in cache')
      return cache[key]
    } else {
      cache[key] = args.reduce((a, e) => a + e, 0)
      return cache[key]
    }
  }
}

const calcSum = genCalcSum()

console.log(calcSum(1,2,3,4,5,6))
console.log(calcSum(1,2,3,4,5,6))
console.log(calcSum(1,2,3,4,5,6,7))