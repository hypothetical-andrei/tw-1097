function getList (input) {
  const results = []
  for (const item of input.split(' ')) {
    results.push(parseInt(item))
  }
  return results
}

console.log(getList('1 2 3 4 5 6'))
