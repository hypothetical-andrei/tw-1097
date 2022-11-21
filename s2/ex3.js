function map(arr, f) {
  const results = []
  for (const elem of arr) {
    results.push(f(elem))
  }
  return results
}

console.log(map([1, 2, 3], e => e * 2))