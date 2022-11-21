const someFunction = (someArray, someNumber) => {
  if (!Array.isArray(someArray)) {
    throw new Error('invalid params -> array, number')
  }
  if (!(typeof someNumber === 'number' || someNumber instanceof Number)) {
    throw new Error('invalid params -> array, number')
  }
  console.log('doing stuff')
}

console.log(someFunction([1, 2, 3], 5))
console.log(someFunction([1, 2, 3], new Number(5)))
// console.log(someFunction([1,2,3], 'boo'))
console.log(someFunction('boo', 5))