function createArray (a, ...args) {
  const results = [...a]
  for (const item of args) {
    results.push(item)
  }
  return results
}

console.log(createArray([1, 2, 3], 4, 5, 6, 7))
