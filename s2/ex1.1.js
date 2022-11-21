const sampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const sumDivisible = (list, divisor) => list.filter(e => e % divisor === 0).reduce((a, e) => a + e, 0)

console.log(sumDivisible(sampleArray, 3))